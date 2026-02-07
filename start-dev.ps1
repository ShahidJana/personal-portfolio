# Portfolio Development Startup Script

Write-Host "`n🚀 Starting Shahid's Portfolio Application...`n" -ForegroundColor Cyan

# Check if Node.js is installed
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Node.js version: $(node --version)" -ForegroundColor Green
Write-Host "✅ npm version: $(npm --version)`n" -ForegroundColor Green

# Start Backend Server
Write-Host "📡 Starting Backend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\server'; Write-Host '🔧 Backend Server Starting...' -ForegroundColor Magenta; npm run dev"

# Wait a bit for backend to start
Start-Sleep -Seconds 3

# Start Frontend Server
Write-Host "🎨 Starting Frontend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\client'; Write-Host '⚛️  Frontend Server Starting...' -ForegroundColor Cyan; npm run dev"

Write-Host "`n✨ Both servers are starting in separate windows!" -ForegroundColor Green
Write-Host "📱 Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "🔌 Backend:  http://localhost:5000`n" -ForegroundColor Cyan
Write-Host "⚠️  Make sure to configure your .env file in the server directory!" -ForegroundColor Yellow
Write-Host "📧 Email setup required: Update EMAIL_USER and EMAIL_PASS in server/.env`n" -ForegroundColor Yellow
