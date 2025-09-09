# 🔍 Sanity-Check Kit

This kit ensures your environment can run local mocks for **Stripe checkout** and **Metamask wallet connect** without touching real APIs.

---

## 📂 Structure

```
src/sanity/
  mock-stripe.ts        # Fake Stripe checkout session
  mock-metamask.ts      # Fake Metamask connect/disconnect
scripts/
  sanity-check.ps1      # Launches two terminal windows (one Stripe, one Metamask)
```

---

## ▶️ Usage

1. Extract into your repo (e.g., `C:\Developer\Restore_config_only\`).
2. Run in PowerShell:

   ```powershell
   ./scripts/sanity-check.ps1
   ```

3. Two windows will open:
   - **Window 1 (Stripe Mock)** → checkout simulation.
   - **Window 2 (Metamask Mock)** → wallet simulation.

---

✅ If both windows print results, your **Local setup is confirmed good**.  
🌐 Push to remote to ensure **Local = Remote baseline**.
