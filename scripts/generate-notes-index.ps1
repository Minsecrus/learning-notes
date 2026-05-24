param(
  [string]$NotesRoot = (Join-Path $PSScriptRoot '..\notes'),
  [string]$ConfigPath = (Join-Path $PSScriptRoot '..\.vitepress\config.mts')
)

$ErrorActionPreference = 'Stop'

$notesPath = (Resolve-Path -LiteralPath $NotesRoot).ProviderPath
$indexPath = Join-Path $notesPath 'index.md'
$resolvedConfigPath = (Resolve-Path -LiteralPath $ConfigPath).ProviderPath

function Get-NoteTitle {
  param([string]$Path)

  $firstHeading = Get-Content -LiteralPath $Path -Encoding UTF8 |
    Where-Object { $_ -match '^#\s+(.+)$' } |
    Select-Object -First 1

  if ($firstHeading) {
    return ($firstHeading -replace '^#\s+', '').Trim()
  }

  return [System.IO.Path]::GetFileNameWithoutExtension($Path)
}

function ConvertTo-TsStringLiteral {
  param([string]$Value)

  return ($Value | ConvertTo-Json -Compress)
}

$noteFiles = Get-ChildItem -LiteralPath $notesPath -Recurse -File -Filter '*.md' |
  Where-Object { $_.FullName -ne $indexPath }

$items = foreach ($file in $noteFiles) {
  $relativePath = $file.FullName.Substring($notesPath.Length).TrimStart([char]92, [char]47)
  $relativePath = $relativePath.Replace([System.IO.Path]::DirectorySeparatorChar, '/')
  $date = '未归档'
  $pathParts = $relativePath.Split('/')

  if (
    $pathParts.Count -ge 4 -and
    $pathParts[0].Length -eq 4 -and
    $pathParts[1].Length -eq 2 -and
    $pathParts[2].Length -eq 2
  ) {
    $date = "$($pathParts[0])-$($pathParts[1])-$($pathParts[2])"
  }

  [PSCustomObject]@{
    Date = $date
    Title = Get-NoteTitle -Path $file.FullName
    RelativePath = $relativePath
  }
}

$items = $items | Sort-Object Date, Title

$lines = @(
  '# 笔记索引',
  '',
  '这个文件由脚本生成，用来快速查看 `notes/` 下保存过的学习笔记。笔记正文按日期放在 `YYYY/MM/DD/` 目录中。',
  '',
  '生成命令：',
  '',
  '```powershell',
  '.\scripts\generate-notes-index.ps1',
  '```'
)

foreach ($group in ($items | Group-Object Date | Sort-Object Name -Descending)) {
  $lines += ''
  $lines += "## $($group.Name)"
  $lines += ''

  foreach ($item in ($group.Group | Sort-Object Title)) {
    $lines += "- [$($item.Title)](./$($item.RelativePath))"
  }
}

Set-Content -LiteralPath $indexPath -Value $lines -Encoding UTF8

$sidebarLines = @(
  '    sidebar: [',
  '      {',
  "        text: '概览',",
  '        items: [',
  "          { text: '首页', link: '/' },",
  "          { text: '笔记索引', link: '/notes/' }",
  '        ]',
  '      }'
)

foreach ($group in ($items | Group-Object Date | Sort-Object Name -Descending)) {
  $sidebarLines += '      ,{'
  $sidebarLines += "        text: $(ConvertTo-TsStringLiteral -Value $group.Name),"
  $sidebarLines += '        items: ['

  $groupItems = @($group.Group | Sort-Object Title)

  for ($i = 0; $i -lt $groupItems.Count; $i++) {
    $item = $groupItems[$i]
    $link = "/notes/$($item.RelativePath -replace '\.md$', '')"
    $comma = if ($i -lt ($groupItems.Count - 1)) { ',' } else { '' }
    $sidebarLines += "          { text: $(ConvertTo-TsStringLiteral -Value $item.Title), link: $(ConvertTo-TsStringLiteral -Value $link) }$comma"
  }

  $sidebarLines += '        ]'
  $sidebarLines += '      }'
}

$sidebarLines += '    ],'

$config = Get-Content -Raw -LiteralPath $resolvedConfigPath -Encoding UTF8
$startMarker = '    // BEGIN GENERATED NOTES SIDEBAR'
$endMarker = '    // END GENERATED NOTES SIDEBAR'
$pattern = "(?s)$([regex]::Escape($startMarker)).*?$([regex]::Escape($endMarker))"
$replacement = "$startMarker`r`n$($sidebarLines -join "`r`n")`r`n$endMarker"
$newConfig = [regex]::Replace($config, $pattern, $replacement, 1)

if ($newConfig -eq $config) {
  throw "Could not find generated sidebar markers in $resolvedConfigPath"
}

Set-Content -LiteralPath $resolvedConfigPath -Value $newConfig -Encoding UTF8

