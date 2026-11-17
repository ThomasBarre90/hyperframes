# REVIEW — AJCinfo · Astuce Sage BI Reporting × Excel (v5)

## v5 (client notes)

- Glows: firmer cores (teal .56 → 0 at 82 %, navy .30), smaller (900–1100 px), seven faster legs instead of three.
- Official Sage and Excel logos (theSVG, via `cdn.jsdelivr.net`, allowed on the environment): hook row
  Sage → Excel with a packet running between them; Excel icon in every title bar (pops when Excel is named);
  Sage logo in the add-in tab, on the database label and in the « BI Reporting » badge.
- Kept: `duplicate_media_discovery_risk` (the Sage logo is used twice in the connexion scene, images only).

## v4 (client notes)

- Music bed 0.14 → 0.10 (≈ −3 dB) under the voice.
- Grey blobs replaced by a minimal gradient ground with five AJCinfo glows (teal, navy) drifting slowly over
  the whole film, descending a quarter of each seam's travel; 5 % grain against H.264 banding.
  This is the client's call: glows and idle drift are otherwise on the BANNED list, allowed on the ground only.
- The illustration world (bénéfices) no longer has a white plate: the glows run under it; the ring fades as
  the camera pushes through it.

## v3 (client notes)

- Platforms: YouTube Shorts, Instagram, Facebook, LinkedIn → every word re-laid inside x 65–888, y 288–1248:
  narrower workbook (840 px), window top 270, rows 130 px, dashboard compressed, caption rail raised
  (1166–1244) and split to ≤ 26 characters, hook title 112 px, end logo 700 px wide.
- Music: the client's track (`assets/music/musique-fond.mp3`, provided by the client: rights on their side),
  volume 0.14 under the voice, starting at 1.6 s of the file so its main section lands on the data run (≈16.3 s).
- Kept: `outside_safe_zone` only on the first 0.1 s of the « Résultat » arrival (oversized frame of the
  inverse zoom) and TikTok-only edges (TikTok not targeted).

## v2 (client notes)

- Ground grid removed on the whole film (white page + grey shapes kept; the cells inside the Excel window stay).
- End card: the claim « Un véritable outil de pilotage » leaves at 51.25 s; the last frame is the logo alone
  with the caption under it.
- HeyGen sign-in done (hosts api.heygen.com, api2.heygen.com, static.heygen.ai allowed on the environment;
  Node needs NODE_USE_ENV_PROXY=1 here). Catalog music still blocked: it needs the `heygen` CLI, whose
  install page is not reachable from this environment.

## Creative calls

- Storyline A « La boucle » (picked by the client), stylised workbook (no real Excel/Sage screens, no Sage or
  Excel logo). B « Avant / Après » and C « Le résultat d'abord » are kept in STORYLINES.md.
- The AJCinfo arcs carry the film: stopwatch (hook) → « Actualiser » icon → refresh spin → "gain de temps"
  stopwatch → gauge → morph into the real logo PNG (never redrawn: the SVG arcs hand over to the PNG at the
  same rect).
- One continuous descent: every ordinary seam is cut-the-curve UP and the ground sheet scrolls with it.
  One match cut (rows carried, 22.4 s), one inverse zoom for « Résultat » (33.55 s).
- Captions = the client's script verbatim (not whisper's spelling), timed on whisper's word times.
  « un véritable outil de pilotage » is the embed (big claim), so the rail skips it.
- End card: logo alone (v2), held 2.25 s after it lands.
- Figures are illustrative, marked « Chiffres d'exemple ».

## Measured

- `hyperframes check`: ok, 0 errors.
- Seam gate (motion-doctrine): PASSED, 6 seams, 0 fail, 0 warn; match cut Δpos 0 px.
- Snapshot review (beats, seams, phone width 360 px): all lines readable at phone width.
- Sound: voice + 19 bundled SFX (Pixabay licence, `assets/sfx/CREDITS.md`) placed one frame after their
  picture from measured peaks. Not heard; levels to measure on the render (`hyperframes audio`).

## Warnings kept on purpose

- `outside_safe_zone` (49): the checker unions TikTok, Reels and Shorts UI (x 120–888, y 288–1248, and
  x ≤ 780 under y 840 for TikTok). The layout follows the general 9:16 band (nothing in the top 168 px,
  text in 168–1330). Which platforms the film is for decides how far to tighten → ask the client.
- `content_overlap` 28.9–30.4 s: during the push on « Actualiser » the tiles slide under the caption rail;
  the eye is on the button, the covered text is not read there.
- `contrast_aa_failure` at 39.72 s: measured mid exit-fade of the résultat scene.
- `timeline_track_too_dense`: 39 caption groups in one captions host, by design (one captions track).

## Weakest shot / next

- Question (3.7–7.3 s): after the tab click the sheet is empty for ~2 s. With real screens, this is where
  the Sage BI Reporting ribbon would be shown.
- No music bed yet: needs a HeyGen sign-in (free catalog) or a track from the client.
- If the client targets TikTok/Shorts: inset all reading text to x 120–888 and raise the caption rail to
  centre ≈ 1180 with groups ≤ 660 px wide.
