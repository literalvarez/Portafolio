param([int]$Port = 5173)
if ($env:PORT) { $Port = [int]$env:PORT }   # follow the port the preview app assigns
$root = Split-Path -Parent $PSScriptRoot
$types = @{ '.html'='text/html; charset=utf-8'; '.css'='text/css'; '.js'='text/javascript'; '.png'='image/png'; '.jpg'='image/jpeg'; '.svg'='image/svg+xml'; '.json'='application/json'; '.mp3'='audio/mpeg'; '.webp'='image/webp'; '.gif'='image/gif'; '.ttf'='font/ttf'; '.otf'='font/otf'; '.woff'='font/woff'; '.woff2'='font/woff2'; '.webmanifest'='application/manifest+json' }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Host "Serving $root on http://localhost:$Port/"
while ($l.IsListening) {
  $ctx = $l.GetContext()
  $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
  if ($path -eq '' -or $path.EndsWith('/')) { $path += 'index.html' }
  $file = Join-Path $root $path
  $res = $ctx.Response
  if ((Test-Path $file -PathType Leaf) -and ([IO.Path]::GetFullPath($file).StartsWith($root))) {
    $bytes = [IO.File]::ReadAllBytes($file)
    $ext = [IO.Path]::GetExtension($file).ToLower()
    $res.ContentType = $(if ($types[$ext]) { $types[$ext] } else { 'application/octet-stream' })
    $res.Headers.Add('Cache-Control', 'no-store')
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
  } else { $res.StatusCode = 404 }
  $res.Close()
  Write-Host "$($ctx.Request.HttpMethod) /$path $($res.StatusCode)"
}
