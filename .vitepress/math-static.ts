import {
  ConstantTypes,
  CREATE_STATIC,
  ElementTypes,
  NodeTypes,
  createCallExpression,
  createSimpleExpression
} from '@vue/compiler-core'
import type {
  NodeTransform,
  PlainElementNode,
  TransformContext
} from '@vue/compiler-core'

type StaticMath = {
  node: PlainElementNode
  html: string
}

// math.ts protects MathJax's whitespace-only break nodes while Vue parses the
// template. Once we retain the complete HTML, restore those real spaces.
function restoreMathjaxBreakSpaces(html: string): string {
  return html.replace(
    /(<mjx-break\b[^>]*>)\{\{\s*' '\s*\}\}(?=<\/mjx-break>)/g,
    '$1 '
  )
}

/**
 * Keep MathJax's generated SVG and assistive MathML as one static HTML value.
 * This reduces the Vue/Rollup AST retained for every formula. Markdown source,
 * MathJax rendering and VitePress's search renderer remain unchanged.
 *
 * Client createStaticVNode calls retain VitePress's lean hydration chunks. SSR
 * writes the same inner HTML directly, including SVG defs, TeX attributes,
 * assistive MathML and the spaces used for inline wrapping.
 */
export function createMathStaticTransform(): NodeTransform {
  const mathByContext = new WeakMap<TransformContext, StaticMath[]>()

  return (node, context) => {
    if (node.type === NodeTypes.ROOT) {
      const mathNodes: StaticMath[] = []
      mathByContext.set(context, mathNodes)

      // Run after element transforms have created the surrounding VNodes.
      return () => {
        for (const { node: mathNode, html } of mathNodes) {
          mathNode.codegenNode = context.cache(createCallExpression(
            context.helper(CREATE_STATIC),
            [
              createSimpleExpression(
                JSON.stringify(html),
                false,
                mathNode.loc,
                ConstantTypes.CAN_STRINGIFY
              ),
              '1'
            ]
          ))
        }
      }
    }

    if (
      node.type !== NodeTypes.ELEMENT ||
      node.tagType !== ElementTypes.ELEMENT ||
      node.tag !== 'mjx-container' ||
      // Vue's built-in style transform runs first and rewrites a literal style
      // attribute as v-bind:style. Keep genuine template directives untouched.
      node.props.some((prop) => (
        prop.type === NodeTypes.DIRECTIVE &&
        !(
          prop.name === 'bind' &&
          prop.arg?.type === NodeTypes.SIMPLE_EXPRESSION &&
          prop.arg.isStatic &&
          prop.arg.content === 'style' &&
          /^style\s*=/.test(prop.loc.source)
        )
      ))
    ) {
      return
    }

    const classes = node.props.find(
      (prop) => prop.type === NodeTypes.ATTRIBUTE && prop.name === 'class'
    )
    const jax = node.props.find(
      (prop) => prop.type === NodeTypes.ATTRIBUTE && prop.name === 'jax'
    )

    if (
      classes?.type !== NodeTypes.ATTRIBUTE ||
      !classes.value?.content.split(/\s+/).includes('MathJax') ||
      jax?.type !== NodeTypes.ATTRIBUTE ||
      jax.value?.content !== 'SVG'
    ) {
      return
    }

    const html = restoreMathjaxBreakSpaces(node.loc.source)
    const container = /^<mjx-container\b(?:[^"'>]|"[^"]*"|'[^']*')*>([\s\S]*)<\/mjx-container>$/.exec(html)

    if (!container) {
      throw new Error('Cannot preserve an unexpected MathJax SVG container')
    }

    if (context.ssr) {
      node.props.push({
        type: NodeTypes.DIRECTIVE,
        name: 'html',
        modifiers: [],
        loc: node.loc,
        exp: createSimpleExpression(
          JSON.stringify(container[1]),
          false,
          node.loc,
          ConstantTypes.CAN_STRINGIFY
        )
      })
    } else {
      mathByContext.get(context)!.push({ node, html })
    }

    node.children = []
  }
}
