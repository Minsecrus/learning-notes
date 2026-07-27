import { MathJaxTexFont } from '@mathjax/mathjax-tex-font/js/svg.js'
import { mathjax } from '@mdit/plugin-mathjax'
import { createMathjaxInstance } from '@mdit/plugin-mathjax/sync'
import type { MarkdownRenderer } from 'vitepress'

const mathjaxInstance = createMathjaxInstance({
  a11y: true,
  delimiters: 'dollars',
  mathFence: false,
  output: 'svg',
  svg: {
    fontCache: 'local',
    // Avoid NewCM fallback recursion while retaining MathJax 4 TeX coverage.
    fontData: MathJaxTexFont
  },
  transformer: (content, displayMode) => {
    if (!displayMode) {
      return content
    }

    return content.replace(
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
