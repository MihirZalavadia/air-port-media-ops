param(
  [string]$Config = "",

  [string]$PromptPath = "",

  [string]$OutputStem = "",

  [string]$ExportAs = "",

  [string]$TextMode = "",

  [string]$CardSplit = "",

  [int]$NumCards = 0,

  [string]$ImageSource = "",

  [string]$Dimensions = "",

  [string]$Amount = "",

  [string]$Tone = "",

  [string]$Audience = "",

  [string]$ThemeId = "",

  [string]$Instructions = ""
)

$ErrorActionPreference = "Stop"

if (-not $Config -and (-not $PromptPath -or -not $OutputStem)) {
  throw "Provide either -Config or both -PromptPath and -OutputStem."
}

$args = @("tools\gamma_generate_deck.js")

if ($Config) { $args += @("--config", $Config) }
if ($PromptPath) { $args += @("--prompt", $PromptPath) }
if ($OutputStem) { $args += @("--output", $OutputStem) }
if ($ExportAs) { $args += @("--exportAs", $ExportAs) }
if ($TextMode) { $args += @("--textMode", $TextMode) }
if ($CardSplit) { $args += @("--cardSplit", $CardSplit) }
if ($NumCards -gt 0) { $args += @("--numCards", "$NumCards") }
if ($ImageSource) { $args += @("--imageSource", $ImageSource) }
if ($Dimensions) { $args += @("--dimensions", $Dimensions) }

if ($Amount) { $args += @("--amount", $Amount) }
if ($Tone) { $args += @("--tone", $Tone) }
if ($Audience) { $args += @("--audience", $Audience) }
if ($ThemeId) { $args += @("--themeId", $ThemeId) }
if ($Instructions) { $args += @("--instructions", $Instructions) }

& node @args
exit $LASTEXITCODE
