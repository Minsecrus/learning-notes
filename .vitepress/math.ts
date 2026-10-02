import { MathJaxTexFont } from '@mathjax/mathjax-tex-font/js/svg.js'
import { mathjax } from '@mdit/plugin-mathjax'
import type { MathJaxTexInputOptions } from '@mdit/plugin-mathjax'
import { createMathjaxInstance } from '@mdit/plugin-mathjax/sync'
import type { MarkdownRenderer } from 'vitepress'

type MathJaxConfigMacro =
  | string
  | [replacement: string, argumentCount: number]

const texOptions: MathJaxTexInputOptions & {
  macros: Record<string, MathJaxConfigMacro>
} = {
  // bboldx overrides standard \mathbb with private font variants that are not
  // present in the SVG TeX font. Keep the remaining extensions available.
  packages: [
    // The plugin normally prepends base, but an explicit package list replaces
    // its complete default. Its public type omits this required built-in name.
    'base',
    'action',
    'ams',
    'amscd',
    'bbm',
    'bbox',
    'begingroup',
    'boldsymbol',
    'braket',
    'bussproofs',
    'cancel',
    'cases',
    'centernot',
    'color',
    'colortbl',
    'colorv2',
    'configmacros',
    'dsfont',
    'empheq',
    'enclose',
    'extpfeil',
    'gensymb',
    'html',
    'mathtools',
    'mhchem',
    'newcommand',
    'noerrors',
    'noundefined',
    'physics',
    'setoptions',
    'tagformat',
    'texhtml',
    'textcomp',
    'textmacros',
    'unicode',
    'units',
    'upgreek',
    'verb'
  ] as unknown as NonNullable<MathJaxTexInputOptions['packages']>,
  macros: {
    // Carroll's source uses the pound sign for the Lie derivative.
    pounds: '\\textsterling',
    // Preserve plain TeX's zero-width, left-overlapping equation layout.
    lefteqn: ['\\rlap{\\displaystyle #1}', 1],
    // Paragraph fill has no elastic width inside a standalone SVG formula.
    // Preserve a regular gap before proof-ending symbols used in the notes.
    hfill: '\\qquad',
    // Annotated dashed maps occur in commuting diagrams in the lectures.
    xdashrightarrow: ['\\mathrel{\\overset{#1}{\\dashrightarrow}}', 1]
  }
}

const mathjaxInstance = createMathjaxInstance({
  a11y: true,
  allowInlineWithSpace: true,
  delimiters: 'dollars',
  mathFence: false,
  output: 'svg',
  tex: texOptions,
  svg: {
    fontCache: 'local',
    // Avoid NewCM fallback recursion while retaining MathJax 4 TeX coverage.
    fontData: MathJaxTexFont
  },
  transformer: (content, displayMode) => {
    // MathJax uses an ASCII space in mjx-break to supply operator spacing and
    // permit inline wrapping. Vue removes a whitespace-only element child;
    // an explicit text interpolation keeps the original space in SSR and DOM.
    const rendered = content.replace(
      /(<mjx-break\b[^>]*>) (?=<\/mjx-break>)/g,
      "$1{{ ' ' }}"
    )

    if (!displayMode) {
      return rendered
    }

    return rendered.replace(
      /^<mjx-container /,
      '<mjx-container tabindex="0" '
    )
  }
})

if (!mathjaxInstance) {
  throw new Error('Failed to initialize MathJax')
}

export const mathjaxStyle = mathjaxInstance.outputStyle()

export function configureMathjax(md: MarkdownRenderer): void {
  const render = md.render.bind(md)

  md.render = (source, environment) => {
    // Labels and equation counters belong to one Markdown page.
    mathjaxInstance.reset()
    return render(source, environment)
  }

  md.use(mathjax, mathjaxInstance)
}
