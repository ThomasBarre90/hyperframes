// Builds compositions/captions.html: the client's script verbatim, timed by whisper word times (by position).
import { readFileSync, writeFileSync } from "node:fs";
const proj = process.argv[2];
const w = JSON.parse(readFileSync(proj + "/transcript.json", "utf8"));
const NB = " ";
// each word: [text, tokenIndex] or [text, start, end]
const t = (i) => [w[i].start, w[i].end];
const g70 = [w[70].start, w[70].end]; // "évographiques" = "et vos graphiques"
const split3 = (a, b) => {
  const d = (b - a) / 3;
  return [
    [a, a + d * 0.7],
    [a + d * 0.7, a + d * 1.4],
    [a + d * 1.4, b],
  ];
};
const [s1, s2, s3] = split3(...g70);
const W = (text, i) => [text, ...t(i)];
const groups = [
  [W("Aujourd’hui,", 0)],
  [W("je", 1), W("vous", 2), W("partage", 3)],
  [W("une", 4), W("astuce", 5), W("Sage", 6)],
  [W("en", 7), W("moins", 8), W("d’une", 9), W("minute.", 10)],
  [W("Saviez-vous", 11), W("qu’avec", 12)],
  [W("Sage", 13), W("BI", 14), W("reporting,", 15)],
  [W("il", 16), W("est", 17), W("possible", 18), W("de", 19), W("créer", 20)],
  [W("un", 21), W("tableau", 22), W("de", 23), W("bord", 24)],
  [W("personnalisé", 25)],
  [W("directement", 26), W("dans", 27), W("Excel,", 28)],
  [W("sans", 29), W("ressaisir", 30)],
  [W("vos", 31), W("données" + NB + "?", 32)],
  [W("Grâce", 33), W("à", 34), W("la", 35), W("connexion", 36)],
  [W("entre", 37), W("Sage", 38), W("BI", 39), W("reporting", 40)],
  [W("et", 41), W("Excel,", 42)],
  [W("vous", 43), W("accédez", 44), W("instantanément", 45)],
  [W("aux", 46), W("informations", 47)],
  [W("dont", 48), W("vous", 49), W("avez", 50), W("besoin" + NB + ":", 51)],
  [W("chiffre", 52), W("d’affaires,", 53), W("marges,", 54)],
  [W("trésorerie,", 55)],
  [["encours", w[56].start, w[57].end], W("clients.", 58)],
  [W("Il", 59), W("vous", 60), W("suffit", 61)],
  [W("de", 62), W("sélectionner", 63)],
  [W("vos", 64), W("données,", 65)],
  [W("de", 66), W("construire", 67)],
  [W("vos", 68), W("indicateurs", 69)],
  [
    ["et", ...s1],
    ["vos", ...s2],
    ["graphiques", ...s3],
  ],
  [W("dans", 71), W("Excel,", 72)],
  [W("puis", 73), W("d’actualiser", 74)],
  [W("votre", 75), W("fichier", 76)],
  [W("en", 77), W("un", 78), W("clic", 79)],
  [W("pour", 80), W("récupérer", 81)],
  [W("les", 82), W("dernières", 83), W("informations", 84)],
  [W("de", 85), W("votre", 86), W("logiciel", 87), W("Sage.", 88)],
  [W("Résultat" + NB + ":", 89)],
  [W("des", 90), W("tableaux", 91), W("de", 92), W("bord", 93)],
  [W("fiables,", 94)],
  [W("toujours", 95), W("à", 96), W("jour,", 97)],
  [W("et", 98), W("un", 99), W("gain", 100), W("de", 101), W("temps", 102)],
  [W("considérable", 103)],
  [W("sur", 104), W("vos", 105), W("reportings.", 106)],
  [W("Moins", 107), W("de", 108), W("manipulations,", 109)],
  [W("moins", 110), W("de", 111), W("risques", 112), W("d’erreurs", 113)],
  [W("et", 114), W("plus", 115), W("de", 116), W("temps", 117)],
  [W("pour", 118), W("analyser", 119)],
  [W("votre", 120), W("activité", 121)],
  [W("et", 122), W("prendre", 123)],
  [W("les", 124), W("bonnes", 125), W("décisions.", 126)],
  [W("Avec", 127), W("Sage", 128), W("BI", 129), W("reporting,", 130)],
  [W("vos", 131), W("données", 132), W("deviennent", 133)],
  // "un véritable outil de pilotage." (134-138) is the embed: the claim on screen carries it
  [W("À", 139), W("bientôt", 140), W("pour", 141), W("une", 142)],
  [W("nouvelle", 143), W("astuce", 144), W("Sage" + NB + "!", 145)],
];
const r = (n) => Math.round(n * 1000) / 1000;
let html = "";
let js = "";
groups.forEach((g, gi) => {
  const id = "cap-" + String(gi + 1).padStart(2, "0");
  const first = g[0][1];
  const last = g[g.length - 1][2];
  const next = gi + 1 < groups.length ? groups[gi + 1][0][1] : 55;
  const start = Math.max(0.12, r(first - 0.06));
  let end = Math.min(r(last + 0.4), r(next - 0.08));
  if (gi + 1 < groups.length && next - last > 0.9) end = r(last + 0.4); // a pause: let the line go
  if (gi === groups.length - 1) end = r(last + 1.2);
  const dur = r(end - start);
  const words = g
    .map((wd, wi) => `<span class="cap-w" id="${id}-w${wi + 1}">${wd[0]}</span>`)
    .join(" ");
  html += `    <div class="clip cap-g" id="${id}" data-start="${start}" data-duration="${dur}" data-track-index="0"><span class="cap-box" id="${id}-box">${words}</span></div>\n`;
  js += `      cap("${id}", ${start}, ${end}, [${g.map((wd) => `[${r(wd[1])}, ${r(wd[2])}]`).join(", ")}]);\n`;
});
const out = `<template>
  <style>
    #root {
      position: absolute;
      inset: 0;
      font-family: var(--font-display, "Lato"), sans-serif;
      pointer-events: none;
    }
    /* caption rail: inside the Shorts/Reels safe area (bottom ≤ 1248, x 48–888 → max 720 px wide, centred) */
    .cap-g {
      position: absolute;
      left: 0;
      top: 1166px;
      width: 1080px;
      height: 78px;
      text-align: center;
      overflow: visible;
    }
    .cap-box {
      display: inline-block;
      max-width: 720px;
      padding: 8px 22px 10px;
      background: #ffffff;
      border-radius: 14px;
      font-weight: 700;
      font-size: 48px;
      line-height: 58px;
      color: var(--color-navy, #05355e);
      white-space: nowrap;
    }
  </style>
  <div id="root" data-composition-id="captions" data-width="1080" data-height="1920">
${html}  </div>
  <script>
    (function () {
      const tl = gsap.timeline({ paused: true });
      const NAVY = "#05355e";
      const TEAL = "#3f8f8a";
      // one group at a time; the spoken word turns teal while it is said
      function cap(id, start, end, words) {
        tl.fromTo("#" + id + "-box", { opacity: 0 }, { opacity: 1, duration: 0.1, ease: "power2.out", immediateRender: false }, start);
        words.forEach((wd, i) => {
          const el = "#" + id + "-w" + (i + 1);
          tl.set(el, { color: TEAL }, Math.max(start, wd[0]));
          tl.set(el, { color: NAVY }, Math.min(end - 0.05, wd[1] + 0.05));
        });
        tl.to("#" + id + "-box", { opacity: 0, duration: 0.1, ease: "power2.in" }, end - 0.1);
      }
      gsap.set(".cap-box", { opacity: 0 });
${js}      tl.set({}, {}, 55);
      window.__timelines["captions"] = tl;
    })();
  </script>
</template>
`;
writeFileSync(proj + "/compositions/captions.html", out);
console.log("groups:", groups.length);
