import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const outputDirectory = path.resolve(
  process.cwd(),
  process.argv[2] ?? '.vitepress/dist'
)

const undefinedCommandPatterns = [
  /<g\b(?=[^>]*\bdata-mml-node="mtext")(?=[^>]*\bfill="red")(?=[^>]*\bdata-latex="([^"]+)")[^>]*>/g,
  /<mtext\b(?=[^>]*\bmathcolor="red")(?=[^>]*\bdata-latex="([^"]+)")[^>]*>/g
]

function decodeHtmlAttribute(value) {
  const namedEntities = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    quot: '"'
  }

  return value.replace(
    /&(?:#(\d+)|#x([\da-f]+)|(amp|apos|gt|lt|quot));/gi,
    (entity, decimal, hexadecimal, named) => {
      if (decimal) {
        return String.fromCodePoint(Number.parseInt(decimal, 10))
      }

      if (hexadecimal) {
        return String.fromCodePoint(Number.parseInt(hexadecimal, 16))
      }

      return namedEntities[named.toLowerCase()] ?? entity
    }
  )
}

function findMathRenderingIssues(html) {
  const issues = new Set()

  for (const match of html.matchAll(/\bdata-mjx-error="([^"]+)"/g)) {
    issues.add(`MathJax error: ${decodeHtmlAttribute(match[1])}`)
  }

  for (const pattern of undefinedCommandPatterns) {
    for (const match of html.matchAll(pattern)) {
      const command = decodeHtmlAttribute(match[1])

      if (command.startsWith('\\')) {
        issues.add(`Undefined TeX command: ${command}`)
      }
    }
  }

  if (
    issues.size === 0 &&
    (
      /<(?:merror|mjx-merror)\b/.test(html) ||
      /<(?:g|mrow)\b(?=[^>]*\bdata-mml-node="merror")[^>]*>/.test(html)
    )
  ) {
    issues.add('MathJax produced an unclassified merror element')
  }

  return [...issues]
}

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...await findHtmlFiles(entryPath))
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(entryPath)
    }
  }

  return files
}

function getSourceHint(filePath) {
  const relativePath = path
    .relative(outputDirectory, filePath)
    .replaceAll(path.sep, '/')

  if (relativePath === 'index.html') {
    return 'index.md'
  }

  if (relativePath.endsWith('/index.html')) {
    return relativePath.replace(/index\.html$/, 'index.md')
  }

  return relativePath.replace(/\.html$/, '.md')
}

let htmlFiles

try {
  htmlFiles = await findHtmlFiles(outputDirectory)
} catch (error) {
  console.error(`Cannot read VitePress output at ${outputDirectory}`)
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}

const failures = []
let renderedFormulaCount = 0

for (const filePath of htmlFiles.sort()) {
  const html = await readFile(filePath, 'utf8')
  const issues = findMathRenderingIssues(html)
  renderedFormulaCount += html.match(/<mjx-container\b/g)?.length ?? 0

  if (issues.length > 0) {
    failures.push({
      generatedPath: path.relative(process.cwd(), filePath),
      issues,
      sourceHint: getSourceHint(filePath)
    })
  }
}

if (htmlFiles.length === 0) {
  console.error(`Math rendering validation found no HTML files in ${outputDirectory}`)
  process.exit(1)
}

if (renderedFormulaCount === 0) {
  console.error('Math rendering validation found no rendered MathJax formulas')
  process.exit(1)
}

if (failures.length > 0) {
  console.error('Math rendering validation failed:')

  for (const failure of failures) {
    console.error(`- ${failure.sourceHint} (${failure.generatedPath})`)

    for (const issue of failure.issues) {
      console.error(`  - ${issue}`)
    }
  }

  process.exit(1)
}

console.log(
  `Math rendering validation passed ` +
  `(${renderedFormulaCount} formulas in ${htmlFiles.length} HTML files).`
)
