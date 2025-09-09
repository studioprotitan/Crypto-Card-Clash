# Sanity Check Launcher
# Opens 2 terminals: Stripe + Metamask mock tests

Start-Process powershell -ArgumentList "npx tsx ./src/sanity/mock-stripe.ts" -NoNewWindow:$false
Start-Process powershell -ArgumentList "npx tsx ./src/sanity/mock-metamask.ts" -NoNewWindow:$false
