# SPEC — AJCinfo · Astuce Sage : Sage BI Reporting × Excel (piste A « La boucle »)

GOAL: a Sage user understands, in under a minute, that Sage BI Reporting feeds an Excel dashboard
they build once and refresh in one click, and remembers AJCinfo as the one who showed them.

OUTPUT: HyperFrames, 1080 x 1920 (9:16), 30 fps.

TIME: 55.0 s x 30 = 1650 frames. Voice = the clock (ElevenLabs "Mélodie", 53.39 s, word timings
in transcript.json). Music: the client's track (assets/music/musique-fond.mp3, 121 bpm) from 1.6 s, volume 0.10 (client v4),
fade-in 0.4 s / fade-out 2 s; its main section enters ≈ 16.3 s, on the data run. Bundled SFX on actions.

## Platform frame (v3: YouTube Shorts, Instagram, Facebook, LinkedIn)

- Every word inside the Shorts ∩ Reels safe area: x 65–888, y 288–1248 (`hyperframes check`, TikTok not targeted).
- Workbook window: x 60–900 (inner 834 px), top 270; tool row buttons at 30 and 412; chip in the title bar.
- Content stage: y 288–1150. Caption rail: box 1166–1244, centred, ≤ 720 px wide, Lato 700 48 px.
- Below 1248: decoration only (grey shapes, empty cells).

## LOOK — "the world is one spreadsheet, drawn in AJCinfo's illustration style"

- Ground (client v4): minimal gradient #FFFFFF → #E9F1F4 with five soft AJCinfo glows (teal rgba(70,157,152,.34),
  navy rgba(10,71,117,.22)) drifting on seven sine.inOut legs (≈ 7.9 s each, ±120–460 px, v5: firmer cores, faster), 5 % grain against banding.
  Superseded: organic blobs #D9D9D9 at 60 % (the brand illustrations' grey shapes),
  one under each hero, scrolling with the grid. No gradients on the ground, no grain, no vignette.
- Ink: navy #05355E (titles, numbers, fills), logo navy #074272 (arcs gradient start).
- Contour: #111111 3 px on drawn objects (the brand illustrations outline everything in black),
  hard offset shadow navy #05355E 8 px x / 10 px y, 0 blur (the illustrations' offset fill), never soft shadows.
- Accent: teal #469D98. Only on: the arcs, the active Sage BI Reporting tab, the selection, refreshed
  numbers, the plus sign, "pilotage". One teal focus per frame.
- Grey for secondary text: #5B6B7A (≥ 28 px only).
- Type: Lato only (the logo's face). Display Lato 900, 104–150 px, tracking -1 %. Numbers Lato 900 with
  tabular figures, 64–120 px. Labels Lato 700 36–44 px. Captions Lato 700 50 px. Minimum 28 px.
- Medium: flat vector illustration — black contour, flat navy/teal/grey fills, offset hard shadows.
  Motion of the medium: lines draw on (stroke-dashoffset), fills pour in, cells snap, numbers roll.

## OBJECTS

- **Arcs** (brand motif): three concentric broken rings of the AJCinfo mark, radii 1 : 0.713 : 0.434,
  stroke 0.2 x outer radius, butt caps, gradient #074272 → #469D98. They are the stopwatch (hook),
  the refresh icon (gestures), the "time" donut (benefits), the gauge (pilotage), then the logo.
- **Stopwatch**: arcs at outer radius 230 px + a 60 x 34 px navy crown on top + a navy hand from the centre.
- **Sage source**: a database cylinder of 3 stacked discs, 300 x 300 px, navy fill, 3 px black contour,
  teal top face, label "Sage" Lato 900 54 px white on its body. v5: carries the official Sage logo on a white label.
- **Connector**: a 22 px navy cable with black contour, rounded caps; badge "Sage BI Reporting" (white,
  3 px contour, radius 14, Lato 700 36 px navy, mini arcs icon 44 px) at its middle.
- **Workbook window** (stylised, not Excel's UI): white card, 3 px contour, radius 22, navy offset shadow.
  Navy title bar 84 px with "Tableau de bord.xlsx" Lato 700 34 px white. Ribbon 76 px: tabs "Accueil",
  "Insertion", "Sage BI Reporting" (Lato 700 30 px; active = navy + 6 px teal underline). Tool row 92 px:
  buttons "Sélection des données" and "Actualiser" (arcs icon 46 px). Column letters A–E Lato 700 26 px #8A96A3.
- **Indicator rows**: 4 rows of 140 px. Label Lato 700 42 px navy, value Lato 900 72 px navy right aligned.
  Illustrative values, marked "Chiffres d'exemple" (Lato 400 28 px #5B6B7A) at the sheet foot:
  CA 1 248 k€ → 1 263 k€ · Marges 32,4 % → 32,9 % · Trésorerie 386 k€ → 391 k€ · Encours clients 214 k€ → 208 k€.
- **Dashboard** (in the window): hero tile CA (value 112 px + sparkline), bar chart 6 months
  (Juin–Nov, bars navy, last bar teal), marge donut drawn as arcs, trésorerie and encours as compact lines,
  chip "Actualisé · 31/10" → "Actualisé · à l'instant".
- **Cursor**: oversized macOS arrow, body #1c1c1c, 3 px white stroke, 120 px, tip pivot 21 % 14 %.
- **Illustration 39** (brand file: woman with tablet inside a head of gears, target and arrow) for
  "analyser / bonnes décisions". Used as is, never redrawn.
- **Logo**: the brand PNG (logo gestion), cropped to its bbox, never redrawn; the arcs morph lands on it.

## Logos (client v5)

Official marks from theSVG (`media-use resolve --type logo`), never redrawn: `assets/logos/sage-crop.svg` (Sage,
viewBox cropped to the wordmark) and `assets/logos/excel.svg` (Microsoft Excel). Placed: hook row Sage → Excel
under the title (frame 0), Excel icon in every workbook title bar (pops on « dans Excel » 9.97 and « et Excel »
14.87), Sage logo in the « BI Reporting » tab, on the database and in the connector badge.

## MOTION

- Enter: `expo.out` 0.5–0.7 s; pops `back.out(1.6)` 0.35 s on badges and check marks only.
- Titles: per word blur 6 px → 0 and opacity 0 → 1 in 0.13 s, 0.067 s apart, no translate. Landed = dead still.
- Draw-on lines: `power2.inOut` 0.5–0.7 s. Camera (wrapper `#*-cam`): `power2.inOut` 0.8–1.6 s.
- Numbers: count 0.6–1.0 s `power2.out`; refresh = odometer roll 0.5 s `power3.inOut`, 0.08 s stagger.
- Cursor: enter from below frame 0.7 s `power3.out`; click 0.1 s down / 0.22 s up; travel `power2.inOut`.
- Exits: 0.34 s `power3.in` (stamped seams). Stillness 0.4 s before "Résultat".
- The current: **UP** (the camera descends one sheet: content leaves upward, arrives from below).
  Reserved: Z backward (inverse zoom) once, for "Résultat". Match cut once (rows carried 22.5 s).
- The glow layer descends a quarter of every UP seam's travel (−230 px `power3.in` 0.34 s, then −192 px `power4.out` 0.42 s)
  and with the connexion pan (−630 px, 17.0–18.6 s), so the sheet reads as one continuous take.

## SHOTS (voice anchors in seconds)

| #                | Frames                  | Hero move                                                                                                                                                                                                                                                                                                                                       | Reads (window)                                           | Sound                                    | Hands off               |
| ---------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------- | ----------------------- |
| 1 hook           | 0–111 (0–3.70)          | stopwatch hand sweeps 0 → 330°, teal arc fills behind it                                                                                                                                                                                                                                                                                        | "L'astuce Sage" from f0; "en moins d'une minute" at 2.44 | tick at 0.3, pop 2.44                    | cut-the-curve UP @3.70  |
| 2 question       | 111–354 (3.70–11.80)    | workbook window arrives composed; the cursor enters and its click activates the tab "Sage BI Reporting" activates 4.94; dashed dashboard frames draw 7.30; typed digits get struck 10.30–11.04                                                                                                                                                  | tab name; "Tableau de bord.xlsx"                         | click-soft 4.94, typing 10.3, swipe 11.0 | UP @11.80               |
| 3 connexion      | 354–672 (11.80–22.40)   | cable draws Sage → sheet 12.57; badge lands 13.86; plug-in recoil 14.87; packets run 16.09; camera pans down 630 px 17.0–18.6; 4 rows land 18.94 / 20.09 / 20.57 / 21.36                                                                                                                                                                        | badge; 4 labels + values                                 | pop 13.86, pops on rows                  | match cut @22.40 (rows) |
| 4 gestes         | 672–1007 (22.40–33.55)  | cursor enters 22.6; drag-select 23.25–24.1; rows morph into dashboard 24.61; bars + donut 26.21; push to "Actualiser" 28.0; CLICK 29.70 → arcs spin; pull back 30.3; packets from Sage, numbers roll teal 31.0                                                                                                                                  | each verb's object                                       | clicks 23.2 / 29.70, whoosh 30.3         | inverse zoom @33.55     |
| 5 résultat       | 1007–1196 (33.55–39.85) | finished dashboard lands from oversized; "Résultat" 33.66; stillness; labels on parts: "Fiables" 35.54, "Toujours à jour" 36.04, "Gain de temps" 37.30 (mini stopwatch fills)                                                                                                                                                                   | 1 label at a time + "Résultat"                           | whoosh-cinematic peaking 33.6, pops      | UP @39.85               |
| 6 bénéfices      | 1196–1397 (39.85–46.55) | time ring: grey "Manipulations" slice shrinks 39.98, navy "Erreurs" slice shrinks 41.27, teal "Analyse" grows 42.68; label rolls like a slot; iris from ring into illustration 43.61; label "Bonnes décisions" on the target 45.06                                                                                                              | slot label; "Bonnes décisions"                           | pop per slice                            | UP @46.55               |
| 7 pilotage + fin | 1397–1650 (46.55–55.00) | gauge from the arcs; value chips 47.55, pulled into the hub 48.65; needle climbs 49.0–50.55, ticks turn teal; "Un véritable outil de pilotage" word by word 49.08–50.53, leaves at 51.25 so the end card is the logo alone (client: v2); arcs morph into the logo mark 51.2–52.3; match to the PNG logo, wordmark wipes 52.3–52.9; hold to 55.0 | claim line; logo                                         | impact soft at 52.3                      | end                     |

## Captions (overlay, rail only)

The client's script verbatim (never the whisper spelling), timed with whisper word times by position.
Groups of 1–5 words (≤ 26 characters, v3), one at a time ("un véritable outil de pilotage" is the embed: shown as the claim, not on the rail), Lato 700 48 px navy on a white backing sized to the text
(radius 14, padding 8 × 22), active word teal #3F8F8A. Box 1166–1244, max width 720.
Generator: `node tools/make-captions.mjs .` (script text + whisper times by position).
No embeds.

## BANNED

(Client v4 asked for drifting brand-colour glows on the ground: allowed there only.)

Dark or navy void as ground; glow, bloom, particles; purple/blue gradients, glass; cream paper + serif;
pill chips; everything centred-and-fading; every element sliding up; text moving while read; titles
drifting after they land; idle wobble/breathing/floating; corner labels, frame borders, HUD decoration;
three cards in a row; the logo docked in a corner; a drawn copy of the real Excel interface; red "error" colour; click rings; bounce/elastic eases;
numbers not marked as examples; a grid on the ground (client: v2); text under the end logo besides the captions (client: v2); a cursor parked at the frame edge (it leaves and re-enters).

## QA frames

0 (thumbnail: stopwatch + title, not empty), 2.6, 3.7, 5.3, 8.0, 10.8, 13.0, 15.0, 16.6, 19.6, 22.0, 22.6,
24.0, 26.8, 29.9, 31.6, 33.4, 34.3, 36.5, 38.6, 41.0, 43.2, 44.6, 46.2, 48.2, 50.6, 52.6, 54.9.
Each: one teal focus, nothing readable outside y 168–1330, captions legible, no overlap with content.
