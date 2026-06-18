// Interactive career timeline — progressive layer reveal
// Layers: 0 resume · 1 academic · 2 projects · 3 era bands · 4 historical moments
// Keys: → advance layer, ← retreat layer, click project nodes for detail
import { RESUME, ACADEMIC, PROJECTS, ERAS, MOMENTS } from "../data/timeline-data.js";

const YEAR_MIN_DEFAULT = 1980;
const YEAR_MIN_MOMENTS = 1940;  // zoom out for intellectual history
const YEAR_MAX = 2027.5;
const LAYER_COUNT = 5;
const BIRTH_YEAR = 1980;

export function createTimeline(container, { getLang }) {
  const svg = d3.select(container).append("svg").attr("class", "tl-svg");
  const detail = d3.select(container).append("div").attr("class", "tl-detail").style("display", "none");

  let stage = 0, W = 0, H = 0;
  const projNodes = PROJECTS.map(d => ({ ...d }));

  // svg layer groups — bottom to top
  const gEras = svg.append("g").attr("class", "g-eras");
  const gMoments = svg.append("g").attr("class", "g-moments");
  const gAxis = svg.append("g").attr("class", "g-axis");
  const gBirth = svg.append("g").attr("class", "g-birth");
  const gAcademic = svg.append("g").attr("class", "g-academic");
  const gResume = svg.append("g").attr("class", "g-resume");
  const gProj = svg.append("g").attr("class", "g-proj");

  function label(d) {
    return (getLang() === "ja" && d.ja) ? d.ja : d.label;
  }
  function descText(d) {
    if (!d.desc) return "";
    if (typeof d.desc === "string") return d.desc;
    return (getLang() === "ja" && d.desc.ja) ? d.desc.ja : d.desc.en;
  }

  function layout() {
    const r = container.getBoundingClientRect();
    W = r.width; H = r.height;
    if (W === 0 || H === 0) return;
    svg.attr("viewBox", `0 0 ${W} ${H}`);

    const marginLeft = 50, marginRight = 30;
    const marginTop = 50, marginBottom = 50;
    // stages 0–3 show 1980–2027; stage 4 (moments) zooms out to show intellectual prehistory
    const yearMin = stage >= 4 ? YEAR_MIN_MOMENTS : YEAR_MIN_DEFAULT;
    const x = d3.scaleLinear([yearMin, YEAR_MAX], [marginLeft, W - marginRight]);

    // resume lane layout
    const resumeTop = marginTop + 40;
    const laneH = 28;
    const laneGap = 6;
    const laneY = l => resumeTop + l * (laneH + laneGap);
    const maxResumeLane = Math.max(...RESUME.map(d => d.lane), 0);
    const resumeBottom = laneY(maxResumeLane) + laneH + 10;

    // academic sits just above resume
    const academicY = resumeTop - 36;

    // project band
    const projTop = resumeBottom + 20;
    const projBottom = H - marginBottom - 80;
    const projBandH = projBottom - projTop;
    const projBandMid = projTop + projBandH / 2;

    // era band zone — full height behind everything
    const eraTop = marginTop + 10;
    const eraBottom = H - marginBottom;

    // ── Axis: horizontal line bisecting the slide ──
    const midY = H / 2;
    gAxis.selectAll("line.axis-line").data([0]).join("line")
      .attr("class", "axis-line")
      .attr("x1", marginLeft).attr("x2", W - marginRight)
      .attr("y1", midY).attr("y2", midY)
      .attr("stroke", "#1a1a1a").attr("stroke-width", 2);

    const step = stage >= 4 ? 10 : 5;
    const years = d3.range(
      Math.ceil(yearMin / step) * step,
      YEAR_MAX,
      step
    );
    gAxis.selectAll("line.tick").data(years).join("line")
      .attr("class", "tick")
      .attr("x1", d => x(d)).attr("x2", d => x(d))
      .attr("y1", midY - 8).attr("y2", midY + 8)
      .attr("stroke", "#1a1a1a").attr("stroke-width", 1.5);
    gAxis.selectAll("text").data(years).join("text")
      .attr("x", d => x(d)).attr("y", midY + 26)
      .attr("text-anchor", "middle")
      .attr("class", "tl-year")
      .text(d => d);

    // ── Birth marker (always visible) ──
    gBirth.selectAll("line").data([BIRTH_YEAR]).join("line")
      .attr("x1", x(BIRTH_YEAR)).attr("x2", x(BIRTH_YEAR))
      .attr("y1", marginTop).attr("y2", H - marginBottom)
      .attr("stroke", "#ccc").attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "6 4");
    gBirth.selectAll("text").data([BIRTH_YEAR]).join("text")
      .attr("x", x(BIRTH_YEAR)).attr("y", marginTop - 6)
      .attr("text-anchor", "middle")
      .attr("class", "tl-birth-label")
      .text(getLang() === "ja" ? "誕生 1980" : "Born 1980");

    // ── Layer 3: Era bands ──
    // pre-1980 eras only visible at stage 4 (zoomed out)
    const visibleEras = ERAS.filter(d => stage >= 4 || !d.pre);
    const eraG = gEras.selectAll("g.era").data(visibleEras, d => d.id).join(
      enter => {
        const g = enter.append("g").attr("class", "era");
        g.append("rect");
        g.append("text");
        return g;
      },
      update => update,
      exit => exit.remove()
    );
    eraG.select("rect")
      .attr("x", d => x(Math.max(d.start, yearMin)))
      .attr("width", d => Math.max(0, x(Math.min(d.end, YEAR_MAX)) - x(Math.max(d.start, yearMin))))
      .attr("y", eraTop).attr("height", eraBottom - eraTop)
      .attr("fill", d => d.color).attr("rx", 6)
      .attr("opacity", stage >= 3 ? 0.08 : 0)
      .attr("class", "tl-era-rect");
    eraG.select("text")
      .attr("x", d => x((Math.max(d.start, yearMin) + Math.min(d.end, YEAR_MAX)) / 2))
      .attr("y", (d, i) => eraTop + 16 + (i % 2) * 14)
      .attr("text-anchor", "middle")
      .attr("class", "tl-era-label")
      .attr("fill", d => d.color)
      .attr("opacity", stage >= 3 ? 0.85 : 0)
      .text(d => label(d));

    // ── Layer 4: Historical moments ──
    // "ideas" track renders at top, "tech" track renders at bottom
    const visibleMoments = stage >= 4 ? MOMENTS : [];
    const momG = gMoments.selectAll("g.moment").data(visibleMoments, d => d.id).join(
      enter => {
        const g = enter.append("g").attr("class", "moment");
        g.append("line");
        g.append("text");
        return g;
      },
      update => update,
      exit => exit.remove()
    );
    momG.select("line")
      .attr("x1", d => x(d.year)).attr("x2", d => x(d.year))
      .attr("y1", d => d.track === "ideas" ? marginTop + 8 : H - marginBottom - 4)
      .attr("y2", d => d.track === "ideas" ? marginTop + 32 : H - marginBottom - 28)
      .attr("stroke", d => d.color).attr("stroke-width", 1.5)
      .attr("opacity", 0.6);
    momG.select("text")
      .attr("x", d => x(d.year))
      .attr("y", d => d.track === "ideas" ? marginTop + 4 : H - marginBottom - 32)
      .attr("text-anchor", "middle")
      .attr("class", "tl-moment-label")
      .attr("fill", d => d.color)
      .attr("opacity", 1)
      .text(d => label(d));
    momG.filter(d => d.note || d.img).style("cursor", "pointer")
      .on("click", (ev, d) => showMomentDetail(d));

    // ── Layer 0: Resume bars ──
    const resG = gResume.selectAll("g.res").data(RESUME, d => d.id).join(
      enter => {
        const g = enter.append("g").attr("class", "res");
        g.append("rect");
        g.append("text");
        return g;
      }
    );
    resG.attr("opacity", stage >= 0 ? 1 : 0);
    resG.select("rect")
      .attr("x", d => x(d.start))
      .attr("width", d => Math.max(12, x(d.end) - x(d.start)))
      .attr("y", d => laneY(d.lane))
      .attr("height", laneH)
      .attr("rx", laneH / 2)
      .attr("class", "tl-bar");
    resG.select("text").each(function(d) {
      const barW = x(d.end) - x(d.start);
      const text = label(d);
      const fits = barW > text.length * 6.5 + 16;
      d3.select(this)
        .attr("x", fits ? x(d.start) + 10 : x(d.end) + 6)
        .attr("y", laneY(d.lane) + laneH / 2 + 4.5)
        .attr("class", fits ? "tl-bar-label-in" : "tl-bar-label-out")
        .text(text);
    });

    // ── Layer 1: Academic bars ──
    const acaG = gAcademic.selectAll("g.aca").data(ACADEMIC, d => d.id).join(
      enter => {
        const g = enter.append("g").attr("class", "aca");
        g.append("rect");
        g.append("text");
        return g;
      }
    );
    acaG.attr("opacity", stage >= 1 ? 1 : 0);
    acaG.select("rect")
      .attr("x", d => x(d.start))
      .attr("width", d => Math.max(12, x(d.end) - x(d.start)))
      .attr("y", academicY)
      .attr("height", laneH)
      .attr("rx", laneH / 2)
      .attr("class", d => d.dropped ? "tl-bar tl-bar-academic tl-bar-dropped" : "tl-bar tl-bar-academic");
    acaG.select("text")
      .attr("x", d => x(d.end) + 6)
      .attr("y", academicY + laneH / 2 + 4.5)
      .attr("class", "tl-bar-label-out tl-academic-label")
      .text(d => label(d));

    // ── Layer 2: Project dots ──
    // position projects — x from year, y spread by band. Re-sim each layout since x-scale changes.
    for (const n of projNodes) {
      n.fx = x(n.year);
      const bandOffset = n.band === 0 ? -projBandH * 0.2 : projBandH * 0.2;
      n.y = projBandMid + bandOffset + (Math.random() - 0.5) * 30;
    }
    const sim = d3.forceSimulation(projNodes)
      .force("y", d3.forceY(d => {
        const bandOffset = d.band === 0 ? -projBandH * 0.18 : projBandH * 0.18;
        return projBandMid + bandOffset;
      }).strength(0.08))
      .force("collide", d3.forceCollide(22))
      .stop();
    for (let i = 0; i < 200; i++) sim.tick();
    for (const n of projNodes) n.y = Math.max(projTop + 10, Math.min(projBottom - 10, n.y));

    const pg = gProj.selectAll("g.proj").data(projNodes, d => d.id).join(
      enter => {
        const g = enter.append("g").attr("class", "proj");
        g.append("circle");
        g.append("text");
        g.on("click", (ev, d) => showDetail(d, x)).style("cursor", "pointer");
        return g;
      }
    );
    pg.attr("transform", d => `translate(${d.fx},${d.y})`)
      .attr("opacity", stage >= 2 ? 1 : 0);
    pg.select("circle")
      .attr("r", 7)
      .attr("class", "tl-dot");
    pg.select("text")
      .attr("y", (d, i) => i % 2 ? 20 : -14)
      .attr("text-anchor", "middle")
      .attr("class", "tl-proj-label")
      .text(d => label(d));

    // section label for projects area
    gProj.selectAll("text.proj-section-label").data(stage >= 2 ? ["projects"] : []).join("text")
      .attr("class", "proj-section-label")
      .attr("x", marginLeft - 6).attr("y", projTop + 4)
      .attr("text-anchor", "end")
      .attr("fill", "#999").attr("font-size", "11px")
      .text(getLang() === "ja" ? "プロジェクト" : "Projects");

    // section label for resume
    gResume.selectAll("text.res-section-label").data(stage >= 0 ? ["resume"] : []).join("text")
      .attr("class", "res-section-label")
      .attr("x", marginLeft - 6).attr("y", resumeTop + 4)
      .attr("text-anchor", "end")
      .attr("fill", "#999").attr("font-size", "11px")
      .text(getLang() === "ja" ? "職歴" : "Career");

    applyLang(container, getLang());
  }

  function imgHtml(d) {
    return d.img ? `<img src="${d.img}" class="tl-detail-img" alt="${label(d)}">` : "";
  }

  function showDetail(d, x) {
    const desc = descText(d);
    detail.style("display", "block").html(
      `${imgHtml(d)}
       <h4>${label(d)} <span class="tl-detail-year">${Math.floor(d.year)}</span></h4>
       <p>${desc}</p>
       <div class="tl-detail-close">${getLang() === "ja" ? "esc / クリックで閉じる" : "esc / click to close"}</div>`
    );
    detail.on("click", () => detail.style("display", "none"));
  }

  function showMomentDetail(d) {
    if (!d.note && !d.img) return;
    const noteText = d.note
      ? ((getLang() === "ja" && d.note.ja) ? d.note.ja : d.note.en)
      : "";
    detail.style("display", "block").html(
      `${imgHtml(d)}
       <h4>${label(d)} <span class="tl-detail-year">${Math.floor(d.year)}</span></h4>
       ${noteText ? `<p>${noteText}</p>` : ""}
       <div class="tl-detail-close">${getLang() === "ja" ? "esc / クリックで閉じる" : "esc / click to close"}</div>`
    );
    detail.on("click", () => detail.style("display", "none"));
  }

  window.addEventListener("resize", layout);
  return {
    stages: LAYER_COUNT,
    setStage(s) { stage = s; layout(); },
    getStage() { return stage; },
    relayout: layout,
    hideDetail() { detail.style("display", "none"); },
  };
}

export function applyLang(root, lang) {
  root.querySelectorAll("[data-en]").forEach(el => {
    const text = (lang === "ja" && el.dataset.ja) ? el.dataset.ja : el.dataset.en;
    const firstText = [...el.childNodes].find(n => n.nodeType === Node.TEXT_NODE);
    if (firstText) { firstText.textContent = text; }
    else if (!el.children.length) { el.textContent = text; }
    else { el.insertBefore(document.createTextNode(text), el.firstChild); }
  });
}
