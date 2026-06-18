// Minimal slide deck: ←/→ slides, L toggles EN/JA, number keys jump, hash routing.
// slideOrder allows the same DOM slide to appear at multiple positions in the deck.
import { applyLang } from "./timeline.js";

let lang = localStorage.getItem("deck-lang") || "en";
const slides = [...document.querySelectorAll(".slide")];

// Deck order: maps position → DOM slide index. Repeat an index to show it again.
// 0 title, 1 newspaper, 2 reality check, 3 truth&ai refs, 4 career, 5 career+edu,
// 6 projects, 7 "you can just do things", 8 arc, 9 weblog, 10 free_culture,
// 11 balanceTags, 12 shisa-v1, 13 how?, 14 shisa-v2, 15 sci-fi, 16 what happened,
// 17 realitycheck screenshot, 18 truth&ai, 19 athena/heilmeier, 20 next hour
const slideOrder = [0,1,2,3,4,5,6,7,8, 7,9, 7,11, 7,10, 7,12,13,14, 15,16,17,18,19, 20];

let pos = 0;

function show(p) {
  pos = Math.max(0, Math.min(slideOrder.length - 1, p));
  const domIdx = slideOrder[pos];
  slides.forEach((s, j) => s.classList.toggle("active", j === domIdx));
  location.hash = `#${pos}`;
}

function next() { show(pos + 1); }
function prev() { show(pos - 1); }

function setLang(l) {
  lang = l;
  localStorage.setItem("deck-lang", l);
  applyLang(document.body, lang);
  document.getElementById("lang-toggle").textContent = lang === "en" ? "EN→JA (L)" : "JA→EN (L)";
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
  else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
  else if (e.key.toLowerCase() === "l") setLang(lang === "en" ? "ja" : "en");
  else if (/^[0-9]$/.test(e.key)) show(+e.key === 0 ? 9 : +e.key - 1);
});
document.getElementById("lang-toggle").addEventListener("click", () => setLang(lang === "en" ? "ja" : "en"));

setLang(lang);
show(parseInt(location.hash.slice(1), 10) || 0);
