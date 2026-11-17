# Assets (not in the repository)

The client's media is kept out of this public repository. To render the project, put these files back
under `assets/` with exactly these names:

| Path                                                  | What it is                                                                                                | Source                                                                                         |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `assets/voice/voix-off.mp3`                           | Voice-over (ElevenLabs, 53.4 s)                                                                           | client                                                                                         |
| `assets/music/musique-fond.mp3`                       | Music bed (168.6 s, 121 bpm)                                                                              | client                                                                                         |
| `assets/brand/ajcinfo-logo.png`                       | Logo « gestion », cropped to its bounding box (1558 × 496)                                                | client Drive, « Charte graphique AJCinfo / Logos »                                             |
| `assets/brand/illu-gestion-39.png`                    | Illustration « logiciel de gestion – 39 »                                                                 | client Drive, « Éléments graphiques »                                                          |
| `assets/logos/sage.svg`, `sage-crop.svg`, `excel.svg` | Official Sage and Microsoft Excel marks (`sage-crop.svg` = `sage.svg` with `viewBox="0 5.316 24 13.368"`) | `npx hyperframes media-use resolve --type logo --entity "Sage"` / `"Microsoft Excel"` (theSVG) |
| `assets/sfx/*.mp3`                                    | click, click-soft, pop, typing, whoosh, whoosh-short, whoosh-cinematic, impact-bass-1                     | bundled with the `media-use` skill (`skills/media-use/audio/assets/sfx`, Pixabay licence)      |

Then: `npx hyperframes check`, `npx hyperframes render`. Captions are rebuilt from the script with
`node tools/make-captions.mjs .` (reads `transcript.json`).
