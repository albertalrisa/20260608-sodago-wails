# Go-based Desktop App with Wails

Slide for SODA.go #0.2 session held on June 8, 2026.

PDF version can be accessed [here](https://github.com/albertalrisa/20260608-sodago-wails/blob/main/pdf/Go-based%20Desktop%20App%20with%20Wails.pdf)

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
