# Okið Website

## Deploying to GitHub Pages

1. Create a new repository on GitHub named `okid-website` (or `engill.magnusson.github.io` for a root domain site)
2. Push this folder to the repository:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_USERNAME/okid-website.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in the repo, set source to `main` branch, root folder
4. The site will be live at `https://YOUR_USERNAME.github.io/okid-website/`

## Pointing okid.is to GitHub Pages

1. In your domain registrar (where you bought okid.is), point the DNS to GitHub:
   - Add 4 `A` records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a `CNAME` record: `www` → `YOUR_USERNAME.github.io`
2. In the GitHub repo under **Settings → Pages**, enter `okid.is` as the custom domain
3. Enable "Enforce HTTPS"

## Setting up egill@okid.is (free with Cloudflare)

1. Transfer DNS management to Cloudflare (free plan)
2. Enable **Email Routing** in Cloudflare dashboard
3. Add a routing rule: `egill@okid.is` → your personal email address
4. Emails sent to egill@okid.is will be forwarded to your inbox
