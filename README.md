# jonasrackl.com

Personal website. One page, one HTML file, no dependencies.

## Deploy to GitHub Pages

1. Create a new repo on GitHub called `jonasrackl.github.io`
2. Push these files to `main`:
   ```
   git init
   git add .
   git commit -m "hullo"
   git branch -M main
   git remote add origin git@github.com:JonasRackl/jonasrackl.github.io.git
   git push -u origin main
   ```
3. Go to repo Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → Save
4. Wait ~2 minutes. Site is live at `jonasrackl.github.io`

## Custom domain (jonasrackl.com)

The `CNAME` file is already in the repo. You just need to configure DNS at your domain registrar:

**Option A — Apex domain (jonasrackl.com):**
Add these A records pointing to GitHub's servers:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Option B — Also add www redirect:**
Add a CNAME record: `www` → `jonasrackl.github.io`

Then in repo Settings → Pages → Custom domain: enter `jonasrackl.com` and tick "Enforce HTTPS."

DNS propagation takes a few minutes to a few hours. That's it.
