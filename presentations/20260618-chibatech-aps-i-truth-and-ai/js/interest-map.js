// Force-directed interest/project map
// Shows the "perpetual dilettante" pattern — how interests connect

const NODES = [
  // Core identity
  { id: "leonard", label: "Leonard", group: "core", r: 18 },

  // Interest clusters
  { id: "web",       label: "Open Web",        group: "web",    r: 14 },
  { id: "ai",        label: "AI / ML",         group: "ai",     r: 14 },
  { id: "civic",     label: "Civic Tech",      group: "civic",  r: 12 },
  { id: "infra",     label: "Infrastructure",  group: "infra",  r: 12 },
  { id: "media",     label: "Media / Art",     group: "media",  r: 11 },
  { id: "scifi",     label: "Sci-Fi",          group: "media",  r: 10 },
  { id: "security",  label: "Security",        group: "infra",  r: 11 },
  { id: "truth",     label: "Truth / Sense",   group: "truth",  r: 13 },
  { id: "language",  label: "Language / NLP",   group: "ai",     r: 11 },
  { id: "oss",       label: "Open Source",      group: "web",    r: 12 },

  // Current projects (smaller nodes)
  { id: "realitycheck", label: "realitycheck",    group: "truth",  r: 9, project: true },
  { id: "shisa",        label: "shisa.ai",        group: "ai",     r: 9, project: true },
  { id: "shisad",       label: "shisad",           group: "infra",  r: 8, project: true },
  { id: "devstack",     label: "devstack",         group: "infra",  r: 8, project: true },
  { id: "chotto",       label: "chotto.chat",      group: "language", r: 8, project: true },
  { id: "mongolia",     label: "Mongolia AI",      group: "ai",     r: 8, project: true },
  { id: "wordpress",    label: "WordPress",        group: "web",    r: 8, project: true },
  { id: "obama",        label: "Obama '08",        group: "civic",  r: 8, project: true },
  { id: "upcoming",     label: "Upcoming",         group: "web",    r: 7, project: true },
  { id: "vllm",         label: "vLLM",             group: "ai",     r: 7, project: true },
  { id: "metabolic",    label: "Metabolic",        group: "ai",     r: 7, project: true },
];

const LINKS = [
  // Core connections
  { source: "leonard", target: "web" },
  { source: "leonard", target: "ai" },
  { source: "leonard", target: "civic" },
  { source: "leonard", target: "infra" },
  { source: "leonard", target: "media" },
  { source: "leonard", target: "truth" },
  { source: "leonard", target: "security" },

  // Cross-domain connections (the interesting part)
  { source: "web",    target: "oss" },
  { source: "ai",     target: "language" },
  { source: "ai",     target: "truth" },
  { source: "truth",  target: "civic" },
  { source: "truth",  target: "security" },
  { source: "infra",  target: "security" },
  { source: "infra",  target: "ai" },
  { source: "media",  target: "scifi" },
  { source: "scifi",  target: "ai" },
  { source: "scifi",  target: "truth" },
  { source: "web",    target: "civic" },
  { source: "language", target: "truth" },
  { source: "oss",    target: "ai" },

  // Project → interest connections
  { source: "realitycheck", target: "truth" },
  { source: "realitycheck", target: "ai" },
  { source: "realitycheck", target: "civic" },
  { source: "shisa",     target: "ai" },
  { source: "shisa",     target: "language" },
  { source: "shisa",     target: "oss" },
  { source: "shisad",    target: "security" },
  { source: "shisad",    target: "infra" },
  { source: "shisad",    target: "ai" },
  { source: "devstack",  target: "infra" },
  { source: "devstack",  target: "ai" },
  { source: "chotto",    target: "language" },
  { source: "chotto",    target: "ai" },
  { source: "mongolia",  target: "ai" },
  { source: "mongolia",  target: "language" },
  { source: "mongolia",  target: "civic" },
  { source: "wordpress", target: "web" },
  { source: "wordpress", target: "oss" },
  { source: "obama",     target: "civic" },
  { source: "obama",     target: "web" },
  { source: "upcoming",  target: "web" },
  { source: "vllm",      target: "ai" },
  { source: "vllm",      target: "oss" },
  { source: "vllm",      target: "infra" },
  { source: "metabolic", target: "ai" },
];

const GROUP_COLORS = {
  core:  "#2a2a28",
  web:   "#4a7a5a",
  ai:    "#4a5a7a",
  civic: "#9a7a3a",
  infra: "#6a5a8a",
  media: "#8a5a6a",
  truth: "#b84a3a",
};

export function createInterestMap(container) {
  const svg = d3.select(container).append("svg").attr("class", "im-svg");
  let W = 0, H = 0;

  function layout() {
    const r = container.getBoundingClientRect();
    W = r.width; H = r.height;
    if (W === 0 || H === 0) return;
    svg.attr("viewBox", `0 0 ${W} ${H}`);
  }

  layout();

  const nodes = NODES.map(d => ({ ...d }));
  const links = LINKS.map(d => ({ ...d }));

  const sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(d => {
      const s = nodes.find(n => n.id === (typeof d.source === "string" ? d.source : d.source.id));
      return s && s.id === "leonard" ? 100 : 60;
    }).strength(0.4))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(W / 2, H / 2))
    .force("collide", d3.forceCollide(d => d.r + 8));

  const gLink = svg.append("g");
  const gNode = svg.append("g");

  const link = gLink.selectAll("line").data(links).join("line")
    .attr("stroke", "#ddd").attr("stroke-width", 1).attr("opacity", 0.5);

  const node = gNode.selectAll("g").data(nodes).join("g").attr("class", "im-node");

  node.append("circle")
    .attr("r", d => d.r)
    .attr("fill", d => d.project ? GROUP_COLORS[d.group] + "44" : GROUP_COLORS[d.group] || "#999")
    .attr("stroke", d => GROUP_COLORS[d.group] || "#999")
    .attr("stroke-width", d => d.project ? 1.5 : 2);

  node.append("text")
    .text(d => d.label)
    .attr("text-anchor", "middle")
    .attr("dy", d => d.r + 14)
    .attr("class", d => d.project ? "im-label-project" : "im-label")
    .attr("fill", d => GROUP_COLORS[d.group] || "#666");

  sim.on("tick", () => {
    link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
    node.attr("transform", d => {
      d.x = Math.max(d.r, Math.min(W - d.r, d.x));
      d.y = Math.max(d.r, Math.min(H - d.r, d.y));
      return `translate(${d.x},${d.y})`;
    });
  });

  window.addEventListener("resize", () => {
    layout();
    sim.force("center", d3.forceCenter(W / 2, H / 2));
    sim.alpha(0.3).restart();
  });

  return { relayout() { layout(); sim.force("center", d3.forceCenter(W / 2, H / 2)); sim.alpha(0.5).restart(); } };
}
