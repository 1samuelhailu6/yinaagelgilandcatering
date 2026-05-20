# Yina Agelgil & Catering — Static Website

Plain HTML, CSS, and a small JavaScript file. No build step required.

## Deploy to Cloudflare Pages (GitHub)

1. Push this repository to GitHub.
2. In [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Use these settings:

| Setting | Value |
|--------|--------|
| **Framework preset** | None |
| **Build command** | *(leave empty)* |
| **Build output directory** | `/` *(repository root)* |

5. Click **Save and Deploy**.

Your site will be live at `https://<project-name>.pages.dev`.

## Site structure

```
index.html          Home
about/index.html    About
menu/index.html     Menu
contact/index.html  Contact
css/styles.css      All styles
js/main.js          Mobile menu, menu tabs, contact form
assets/images/      Photos
_redirects          Clean URLs (/about → /about/)
404.html            Not found page
```

## Local preview

Open `index.html` in a browser, or run:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Note

The `yina-agelgil-elevate-main/` subfolder is the old Vite/React project and is **not used** for deployment. Cloudflare serves the HTML files at the repository root.
