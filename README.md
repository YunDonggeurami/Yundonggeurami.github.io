# YunDonggeurami portfolio

The root React/Vite portfolio is published at `https://yundonggeurami.github.io/`. Its primary project is MY LITTLE GRAND PRIX, with a repository-audited technical case study and Quest 3 demo published at `https://yundonggeurami.github.io/f1/`.

The workflow builds both sites and uploads one combined Pages artifact, so the root portfolio and the F1 case study cannot overwrite one another.

## Portfolio structure

- `/`: F1-first personal portfolio, user-confirmed Quest 3/backend contribution, and selected additional work
- `/f1/`: detailed replay/data, MR spatial architecture, platform, evidence, and demo case study

## Local validation

```bash
npm ci
npm run lint
npm run build

cd f1
npm ci
npm run build
npm run verify
```
