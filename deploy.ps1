# =======================================================
# Crypto Card Clash: Local Development Launch Script
# Path: C:\Developer\Restore_config_only\deploy.ps1
# =======================================================

Write-Host ">> Starting Crypto Card Clash Local Environment..." -ForegroundColor Cyan

$ProjectRoot = "C:\Developer\Restore_config_only"

# 1. Move to project root
try {
    Set-Location $ProjectRoot -ErrorAction Stop
    Write-Host "[OK] Working directory set to $ProjectRoot" -ForegroundColor Green
}
catch {
    Write-Host "[ERROR] Could not navigate to project root '$ProjectRoot'. Please check the path." -ForegroundColor Red
    exit 1
}

# 2. Clean old dependencies
Write-Host ">> Cleaning old dependencies (node_modules, package-lock.json)..." -ForegroundColor Yellow
if (Test-Path "node_modules") { Remove-Item -Recurse -Force "node_modules" }
if (Test-Path "package-lock.json") { Remove-Item -Force "package-lock.json" }

# 3. Install fresh dependencies
Write-Host ">> Installing dependencies with npm..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] npm install failed. Please check the logs above." -ForegroundColor Red
    exit 1
}
Write-Host "[OK] Dependencies installed successfully." -ForegroundColor Green

# 4. Start Firebase SDK watcher in a new window
Write-Host ">> Starting Firebase SDK watcher..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $ProjectRoot; Write-Host 'Firebase SDK Watcher'; firebase dataconnect:sdk:generate --watch"

# 5. Start Backend dev server in a new window
Write-Host ">> Starting Backend Dev Server (on localhost:3000)..." -ForegroundColor Yellow
$devServerCommand = "cd $ProjectRoot; `$env:NODE_OPTIONS='--max-old-space-size=4096'; Write-Host 'Backend Dev Server (from npm run dev)'; npm run dev"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $devServerCommand

# 6. Start Stripe webhook listener in a new window
Write-Host ">> Starting Stripe webhook listener..." -ForegroundColor Yellow
$stripeCommand = "cd $ProjectRoot; Write-Host 'Stripe Listener'; stripe listen --forward-to localhost:3000/api/stripe/webhook"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $stripeCommand

Write-Host "--------------------------------------------------" -ForegroundColor White
Write-Host "[SUCCESS] All services launched in separate windows." -ForegroundColor Green
Write-Host "  - Backend Server (for webhooks): http://localhost:3000" -ForegroundColor Cyan
Write-Host "  - Stripe Dashboard: https://dashboard.stripe.com/test/webhooks" -ForegroundColor Cyan
Write-Host "[NOTE] To stop all services, close each of the new PowerShell windows." -ForegroundColor White