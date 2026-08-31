# MY LITTLE GRAND PRIX — portfolio case study

This directory contains an isolated, static portfolio site for the Unity project. It does not alter or package the Unity runtime.

## Local development

Requirements: Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4173/f1/`.

## Production build

```bash
npm ci
npm run build
npm run preview
```

The production output is written to `dist/` and is ignored by Git.

The personal portfolio workflow publishes this site below `https://yundonggeurami.github.io/f1/`. To test the same behavior locally:

```powershell
$env:VITE_BASE_PATH = "/f1/"
$env:VITE_SITE_URL = "https://yundonggeurami.github.io/f1/"
npm run build
```

The repository-level Pages workflow builds the root portfolio first, builds this child site second, copies this output to `dist/f1`, and uploads one combined artifact. Do not add a second Pages deployment workflow for this directory.

## Media

The published case study uses the user-supplied Quest 3 edit at `public/media/mlgp-quest3-demo.mp4` and its poster frame. The video is presented as a demo-session observation, not as a performance benchmark or a replacement for the repository-audited status labels. See [`public/assets/README.md`](public/assets/README.md) for the media record and publication cautions.
