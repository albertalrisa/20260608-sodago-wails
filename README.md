# alrisa-slides

Personal presentation template built on [reveal.js](https://revealjs.com/), extended with Tailwind CSS, Shiki syntax highlighting, and Lit web components.

## What is it?

A customized starter for alrisa's presentations. It ships with:

- Tailwind CSS v4 for utility-first slide styling
- Shiki for beautiful code highlighting
- Lit web components in `js/web-components/`
- Multiple built-in themes (`css/theme/`)
- Speaker notes support

Edit `index.html` to write slides. Each `<section>` is one slide.

## Dev

```bash
pnpm install
pnpm dev
```

Opens a Vite dev server at `http://localhost:8000` with hot reload.

## Build

```bash
pnpm build
```

Compiles TypeScript, bundles the core and all plugins into `dist/`, and builds Tailwind styles.

## Export to PDF (with speaker notes)

1. Start the dev server: `pnpm dev`
2. Open `http://localhost:8000/?print-pdf` in Chrome or Chromium
3. Open the browser print dialog (`Cmd+P` / `Ctrl+P`)
4. Set **Destination** to "Save as PDF"
5. Enable **Background graphics** under More settings
6. Click **Save**

To include speaker notes in the PDF, use `?print-pdf&showNotes=true` instead:

```
http://localhost:8000/?print-pdf&showNotes=true
```

Notes will be appended below each slide page.
