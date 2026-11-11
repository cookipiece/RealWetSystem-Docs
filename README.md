# RealWetSystem Documentation

Documentation website source for **RealWetSystem**, a tool that adds a wet look (deeper colour, gloss and see-through) to clothing on VRChat PC avatars.

- Languages: Korean (default), Japanese, English
- Current product release: v1.0.4
- Theme: the shared CookiTools docs theme (see `src/css/custom.css`; the only per-site style value is `src/css/product.css`)

This repository contains documentation and website assets only. It does not contain the product package, shaders, scripts or reusable product data.

## Local review

```bash
npm ci
npm start
```

## Production check

```bash
npm run build
npm run typecheck
```

Pushing to `main` builds the site with GitHub Actions (`.github/workflows/deploy-pages.yml`) and publishes it to GitHub Pages: https://cookipiece.github.io/RealWetSystem-Docs/

Copyright © Cooki. Product data may not be redistributed, resold, or shared.
