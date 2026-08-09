# Arohan Harsh Dubey — Portfolio

Personal portfolio built with React.js.

Live: https://arohan24.github.io

## Local development

```bash
cd code
npm install
npm start
```

## Publish to GitHub Pages

This repo serves the **built** site from the repository root (not `code/`).
After content changes, publish artifacts then commit and push `main`:

```bash
cd code
npm run publish:pages
cd ..
git add -A
git commit -m "Publish portfolio build"
git push origin main
```

`publish:pages` runs `npm run build` and copies `code/build/*` to the repo root.
