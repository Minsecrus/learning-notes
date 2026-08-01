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

function Get-LevelEntries {
  param(
    [object[]]$Items,
    [string]$DirectoryPath = ''
  )

  $directItems = @(
    $Items | Where-Object { $_.DirectoryPath -eq $DirectoryPath }
  )

  $childDirectoryNames = @(
    foreach ($item in $Items) {
      $itemDirectoryPath = [string]$item.DirectoryPath

      if ([string]::IsNullOrEmpty($itemDirectoryPath)) {
        continue
      }

      if ([string]::IsNullOrEmpty($DirectoryPath)) {
        ($itemDirectoryPath -split '/', 2)[0]
        continue
      }

      $directoryPrefix = "$DirectoryPath/"

      if ($itemDirectoryPath.StartsWith(
        $directoryPrefix,
        [System.StringComparison]::OrdinalIgnoreCase
      )) {
        $remainingPath = $itemDirectoryPath.Substring($directoryPrefix.Length)

        if ($remainingPath.Length -gt 0) {
          ($remainingPath -split '/', 2)[0]
        }
      }
    }
  ) | Sort-Object -Unique

  $entries = @()

  foreach ($childDirectoryName in $childDirectoryNames) {
    $pairedNote = $directItems |
      Where-Object { $_.BaseName -eq $childDirectoryName } |
      Select-Object -First 1

    $childDirectoryPath = if ([string]::IsNullOrEmpty($DirectoryPath)) {
      $childDirectoryName
    } else {
      "$DirectoryPath/$childDirectoryName"
    }

    $entryTitle = if ($pairedNote) {
      $pairedNote.Title
    } else {
      $childDirectoryName
    }

    $entries += [PSCustomObject]@{
      Kind = 'Directory'
      Title = $entryTitle
      RelativePath = if ($pairedNote) { $pairedNote.RelativePath } else { $null }
      DirectoryPath = $childDirectoryPath
      SortKey = if ([string]::IsNullOrEmpty($DirectoryPath)) {
        $entryTitle
      } else {
        $childDirectoryName
      }
    }
  }

  foreach ($item in $directItems) {
    if ($childDirectoryNames -contains $item.BaseName) {
      continue
    }

    $entries += [PSCustomObject]@{
      Kind = 'File'
      Title = $item.Title
      RelativePath = $item.RelativePath
      DirectoryPath = $null
      SortKey = if ([string]::IsNullOrEmpty($DirectoryPath)) {
        $item.Title
      } else {
        $item.BaseName
      }
    }
  }

  return @($entries | Sort-Object SortKey, Kind)
}

function Get-IndexLines {
  param(
    [object[]]$Items,
    [string]$DirectoryPath = '',
    [int]$Depth = 0
  )

  $indent = (('  ' * $Depth) -join '')

  foreach ($entry in @(Get-LevelEntries -Items $Items -DirectoryPath $DirectoryPath)) {
    if ($entry.RelativePath) {
      "$indent- [$($entry.Title)](./$($entry.RelativePath))"
    } else {
      "$indent- $($entry.Title)"
    }

    if ($entry.Kind -eq 'Directory') {
      Get-IndexLines `
        -Items $Items `
        -DirectoryPath $entry.DirectoryPath `
        -Depth ($Depth + 1)
    }
  }
}

function ConvertTo-TsStringLiteral {
  param([string]$Value)

  return ($Value | ConvertTo-Json -Compress)
}

function Get-SidebarEntryLines {
  param(
    [object]$Entry,
    [object[]]$Items,
    [int]$Indent = 0,
    [bool]$TrailingComma = $false
  )

  $indentText = ((' ' * $Indent) -join '')
  $comma = if ($TrailingComma) { ',' } else { '' }

  if ($Entry.Kind -eq 'File') {
    $link = "/notes/$($Entry.RelativePath -replace '\.md$', '')"
    "$indentText{ text: $(ConvertTo-TsStringLiteral -Value $Entry.Title), link: $(ConvertTo-TsStringLiteral -Value $link) }$comma"
    return
  }

  "$indentText{"
  "$indentText  text: $(ConvertTo-TsStringLiteral -Value $Entry.Title),"

  if ($Entry.RelativePath) {
    $link = "/notes/$($Entry.RelativePath -replace '\.md$', '')"
    "$indentText  link: $(ConvertTo-TsStringLiteral -Value $link),"
  }

  "$indentText  collapsed: true,"
  "$indentText  items: ["

  $childEntries = @(
    Get-LevelEntries -Items $Items -DirectoryPath $Entry.DirectoryPath
  )

  for ($i = 0; $i -lt $childEntries.Count; $i++) {
    Get-SidebarEntryLines `
      -Entry $childEntries[$i] `
      -Items $Items `
      -Indent ($Indent + 4) `
      -TrailingComma ($i -lt ($childEntries.Count - 1))
  }

  "$indentText  ]"
  "$indentText}$comma"
}

$noteFiles = Get-ChildItem -LiteralPath $notesPath -Recurse -File -Filter '*.md' |
  Where-Object { $_.FullName -ne $indexPath }

$items = foreach ($file in $noteFiles) {
  $relativePath = $file.FullName.Substring($notesPath.Length).TrimStart([char]92, [char]47)
  $relativePath = $relativePath.Replace([System.IO.Path]::DirectorySeparatorChar, '/')
  $date = '未归档'
  $groupRelativePath = $relativePath
  $pathParts = $relativePath.Split('/')

  if (
    $pathParts.Count -ge 4 -and
    $pathParts[0] -match '^\d{4}$' -and
    $pathParts[1] -match '^\d{2}$' -and
    $pathParts[2] -match '^\d{2}$'
  ) {
    $date = "$($pathParts[0])-$($pathParts[1])-$($pathParts[2])"
    $groupRelativePath = $pathParts[3..($pathParts.Count - 1)] -join '/'
  }

  $lastSlashIndex = $groupRelativePath.LastIndexOf('/')
  $directoryPath = if ($lastSlashIndex -ge 0) {
    $groupRelativePath.Substring(0, $lastSlashIndex)
  } else {
    ''
  }
  $fileName = if ($lastSlashIndex -ge 0) {
    $groupRelativePath.Substring($lastSlashIndex + 1)
  } else {
    $groupRelativePath
  }

  [PSCustomObject]@{
    Date = $date
    Title = Get-NoteTitle -Path $file.FullName
    RelativePath = $relativePath
    DirectoryPath = $directoryPath
    BaseName = [System.IO.Path]::GetFileNameWithoutExtension($fileName)
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
  $lines += @(
    Get-IndexLines -Items @($group.Group)
  )
}

Set-Content -LiteralPath $indexPath -Value $lines -Encoding UTF8

$dateGroups = @(
  $items | Group-Object Date | Sort-Object Name -Descending
)

$sidebarLines = @(
  '    sidebar: [',
  '      {',
  "        text: '概览',",
  '        items: [',
  "          { text: '首页', link: '/' },",
  "          { text: '笔记索引', link: '/notes/' }",
  '        ]'
)

$sidebarLines += if ($dateGroups.Count -gt 0) { '      },' } else { '      }' }

for ($groupIndex = 0; $groupIndex -lt $dateGroups.Count; $groupIndex++) {
  $group = $dateGroups[$groupIndex]
  $groupEntries = @(
    Get-LevelEntries -Items @($group.Group)
  )

  $sidebarLines += '      {'
  $sidebarLines += "        text: $(ConvertTo-TsStringLiteral -Value $group.Name),"
  $sidebarLines += '        items: ['

  for ($entryIndex = 0; $entryIndex -lt $groupEntries.Count; $entryIndex++) {
    $sidebarLines += @(
      Get-SidebarEntryLines `
        -Entry $groupEntries[$entryIndex] `
        -Items @($group.Group) `
        -Indent 10 `
        -TrailingComma ($entryIndex -lt ($groupEntries.Count - 1))
    )
  }

  $sidebarLines += '        ]'
  $groupComma = if ($groupIndex -lt ($dateGroups.Count - 1)) { ',' } else { '' }
  $sidebarLines += "      }$groupComma"
}

$sidebarLines += '    ],'

$config = Get-Content -Raw -LiteralPath $resolvedConfigPath -Encoding UTF8
$startMarker = '    // BEGIN GENERATED NOTES SIDEBAR'
$endMarker = '    // END GENERATED NOTES SIDEBAR'
$newline = if ($config.Contains("`r`n")) { "`r`n" } else { "`n" }
$pattern = "(?s)$([regex]::Escape($startMarker)).*?$([regex]::Escape($endMarker))"
$replacement = "$startMarker$newline$($sidebarLines -join $newline)$newline$endMarker"

if (-not [regex]::IsMatch($config, $pattern)) {
  throw "Could not find generated sidebar markers in $resolvedConfigPath"
}

$newConfig = [regex]::Replace($config, $pattern, $replacement, 1)
$newConfig = $newConfig.TrimEnd([char[]]@("`r", "`n")) + $newline

if ($newConfig -ne $config) {
  Set-Content `
    -LiteralPath $resolvedConfigPath `
    -Value $newConfig `
    -Encoding UTF8 `
    -NoNewline
}

