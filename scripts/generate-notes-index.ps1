param(
  [string]$NotesRoot = (Join-Path $PSScriptRoot '..\notes')
)

$ErrorActionPreference = 'Stop'

$notesPath = (Resolve-Path -LiteralPath $NotesRoot).ProviderPath
$indexPath = Join-Path $notesPath 'index.md'

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

$noteFiles = Get-ChildItem -LiteralPath $notesPath -Recurse -File -Filter '*.md' |
  Where-Object { $_.FullName -ne $indexPath }

$items = foreach ($file in $noteFiles) {
  $relativePath = $file.FullName.Substring($notesPath.Length).TrimStart('\', '/')
  $relativePath = $relativePath.Replace([System.IO.Path]::DirectorySeparatorChar, '/')
  $date = '未归档'

  if ($relativePath -match '^(\d{4})/(\d{2})/(\d{2})/') {
    $date = "$($Matches[1])-$($Matches[2])-$($Matches[3])"
  }

  [PSCustomObject]@{
    Date = $date
    Title = Get-NoteTitle -Path $file.FullName
    RelativePath = $relativePath
  }
}

$items = $items |
  Sort-Object @{ Expression = 'Date'; Descending = $true }, @{ Expression = 'Title'; Descending = $false }

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

foreach ($group in ($items | Group-Object Date)) {
  $lines += ''
  $lines += "## $($group.Name)"
  $lines += ''

  foreach ($item in $group.Group) {
    $lines += "- [$($item.Title)](./$($item.RelativePath))"
  }
}

Set-Content -LiteralPath $indexPath -Value $lines -Encoding UTF8


