/* Three landing-page variations for jonasrackl.com.
   All three share an "atelier" direction — luminous orb cluster,
   organic non-homogeneous grain, Bauhaus-numbered category index.
   They diverge on hero ↔ orb arrangement.
   The bridge line below the name names what writing/projects/stills
   have in common — so the index doesn't read as three silos. */

// ──────────────────────────────────────────────────────────
// shared bits
// ──────────────────────────────────────────────────────────

function Orb({ x, y, size, stops, blur = 24, grain = true, grainOpacity = 0.4, style = {} }) {
  const bg = `radial-gradient(circle at 50% 50%, ${stops.map(s => `${s.color} ${s.at}`).join(", ")})`;
  return (
    <div className="orb" style={{
      left: x, top: y, width: size, height: size,
      background: bg,
      filter: `blur(${blur}px)`,
      ...style,
    }}>
      {grain ? <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.3' numOctaves='2' stitchTiles='stitch' seed='2'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: '220px 220px',
        mixBlendMode: 'multiply',
        opacity: grainOpacity,
      }}/> : null}
    </div>
  );
}

// Five-orb luminous cluster — used as a center wash in V3.
// Lower blur values + slightly tighter cores so each orb reads as a
// discrete molecule rather than fusing into one mass (esp. when animated,
// the cluster drifts apart at peaks and you can identify single bubbles).
function OrbCluster({ top = 0, left = 0, right = 0, opacity = 1, scale = 1, grainOpacity = 0.32, animate = false }) {
  const s = (n) => Math.round(n * scale);
  return (
    <div className={animate ? 'orb-cluster-animated' : ''} style={{ position: 'absolute', top, left, right, height: s(680), opacity, pointerEvents: 'none' }}>
      <Orb x={0} y={s(80)} size={s(420)} blur={18} grainOpacity={grainOpacity}
        stops={[
          { color: '#dde7ed', at: '0%' }, { color: '#9bb6c8', at: '32%' },
          { color: '#6a8aa4', at: '55%' }, { color: 'transparent', at: '82%' },
        ]} style={{ left: '42%', transform: 'translateX(-50%)', opacity: 0.92 }} />
      <Orb x={0} y={s(20)} size={s(340)} blur={14} grainOpacity={grainOpacity}
        stops={[
          { color: '#f6dac6', at: '0%' }, { color: '#ec9572', at: '34%' },
          { color: '#cf5a3e', at: '58%' }, { color: 'transparent', at: '82%' },
        ]} style={{ left: '58%', transform: 'translateX(-50%)', opacity: 0.9 }} />
      <Orb x={0} y={s(60)} size={s(220)} blur={14} grainOpacity={grainOpacity}
        stops={[
          { color: '#e4d4e4', at: '0%' }, { color: '#a48ab8', at: '38%' },
          { color: 'transparent', at: '78%' },
        ]} style={{ left: '28%', transform: 'translateX(-50%)', opacity: 0.78 }} />
      <Orb x={0} y={s(420)} size={s(260)} blur={12} grainOpacity={grainOpacity}
        stops={[
          { color: '#f4e2b6', at: '0%' }, { color: '#e29a48', at: '36%' },
          { color: '#b86a2e', at: '58%' }, { color: 'transparent', at: '82%' },
        ]} style={{ left: '64%', transform: 'translateX(-50%)', opacity: 0.86 }} />
      <Orb x={0} y={s(460)} size={s(160)} blur={10} grainOpacity={grainOpacity}
        stops={[
          { color: '#dde2cc', at: '0%' }, { color: '#94a682', at: '40%' },
          { color: 'transparent', at: '78%' },
        ]} style={{ left: '38%', transform: 'translateX(-50%)', opacity: 0.78 }} />
    </div>
  );
}

// Off-axis cluster — bleeds off the right edge so the hero can sit left.
function OrbClusterCorner({ scale = 1, grainOpacity = 0.3, right = -160, top = 40 }) {
  const s = (n) => Math.round(n * scale);
  return (
    <div style={{ position: 'absolute', top, right, width: s(820), height: s(700), pointerEvents: 'none' }}>
      <Orb x={s(80)} y={s(60)} size={s(520)} blur={44} grainOpacity={grainOpacity}
        stops={[
          { color: '#dde7ed', at: '0%' }, { color: '#b8cad6', at: '26%' },
          { color: '#8ea7b8', at: '48%' }, { color: 'transparent', at: '78%' },
        ]} style={{ opacity: 0.9 }} />
      <Orb x={s(260)} y={s(20)} size={s(440)} blur={36} grainOpacity={grainOpacity}
        stops={[
          { color: '#f6dac6', at: '0%' }, { color: '#ec9f86', at: '30%' },
          { color: '#d9785f', at: '52%' }, { color: 'transparent', at: '78%' },
        ]} style={{ opacity: 0.86 }} />
      <Orb x={s(0)} y={s(120)} size={s(280)} blur={38} grainOpacity={grainOpacity}
        stops={[
          { color: '#e4d4e4', at: '0%' }, { color: '#b8a4c4', at: '34%' },
          { color: 'transparent', at: '76%' },
        ]} style={{ opacity: 0.7 }} />
      <Orb x={s(330)} y={s(330)} size={s(360)} blur={32} grainOpacity={grainOpacity}
        stops={[
          { color: '#f4e2b6', at: '0%' }, { color: '#e2a85a', at: '34%' },
          { color: '#c98140', at: '54%' }, { color: 'transparent', at: '78%' },
        ]} style={{ opacity: 0.82 }} />
      <Orb x={s(100)} y={s(380)} size={s(220)} blur={28} grainOpacity={grainOpacity}
        stops={[
          { color: '#dde2cc', at: '0%' }, { color: '#a8b698', at: '36%' },
          { color: 'transparent', at: '76%' },
        ]} style={{ opacity: 0.7 }} />
    </div>
  );
}

// Mono masthead — no name, the hero owns the name.
function Masthead({ kicker }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      display: 'flex', alignItems: 'center', gap: 24,
      padding: '20px 60px 16px',
      borderBottom: '1px solid var(--rule)',
      fontFamily: 'var(--f-mono)', fontSize: 11,
      letterSpacing: '0.06em', color: 'var(--ink-soft)',
      textTransform: 'lowercase',
      zIndex: 4,
    }}>
      {kicker ? <span style={{ color: 'var(--ink)' }}>{kicker}</span> : null}
      <span style={{ flex: 1 }}></span>
      <span>mmxxvi</span>
      <span>·</span>
      <span>cambridge, ma</span>
    </div>
  );
}

// Hero — just the name. No kicker.
function HeroName({ nameSize = 62, align = 'left' }) {
  return (
    <div style={{ textAlign: align }}>
      <h1 style={{
        margin: 0,
        fontFamily: 'var(--f-name)',
        fontWeight: 'var(--f-name-weight)',
        fontSize: nameSize,
        lineHeight: 0.96,
        letterSpacing: 'var(--f-name-tracking)',
        color: 'var(--ink)',
      }}>
        Jonas W. Rackl
      </h1>
    </div>
  );
}

// Description — a flat one-line factual statement. What the site is.
function BridgeLine({ maxWidth = 680, align = 'left' }) {
  return (
    <p style={{
      margin: 0,
      fontFamily: 'var(--f-sans)',
      fontSize: 19,
      lineHeight: 1.5,
      color: 'var(--ink)',
      textWrap: 'pretty',
      maxWidth,
      textAlign: align,
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0,
    }}>
      Chemist in Cambridge, MA. <span style={{ color: 'var(--ink-soft)' }}>This site collects writing, projects, and photographs.</span>
    </p>
  );
}

// Three Bauhaus-numbered categories.
function CategoryIndex() {
  const items = [
    { n: '01', k: 'Writing',  sub: 'science · essays · notes',          latest: 'On the half-life of a good question',           meta: '2026 · in build' },
    { n: '02', k: 'Projects', sub: 'instruments · ventures · builds',   latest: 'Floret — a spectrum browser for synthesis labs', meta: 'open source · v0.4' },
    { n: '03', k: 'Stills',   sub: 'photographs · short film',          latest: 'Charles river, in fog',                          meta: '2026 · 12 frames' },
  ];
  return (
    <>
      <div style={{ background: 'var(--ink)', height: 1.5, marginBottom: 22, opacity: 0.85 }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
        {items.map(({ n, k, sub, latest, meta }) => (
          <div key={n}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 10 }}>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--ink-soft)' }}>{n}</span>
              <span style={{ fontFamily: 'var(--f-sans)', fontWeight: 500, fontSize: 26, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{k}</span>
            </div>
            <div className="label" style={{ color: 'var(--ink-mute)', marginBottom: 14 }}>{sub}</div>
            <div style={{ fontSize: 16, lineHeight: 1.45, color: 'var(--ink)', marginBottom: 4 }}>{latest}</div>
            <div className="label" style={{ color: 'var(--ink-soft)' }}>{meta}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// ── Interactive category index ──────────────────────────────
// Click a category name or a sub-tag to expand a drawer of items
// in place. Other cards dim. Sub-tags become filter chips.
// Click outside / click the open category again to close.
// Used in V3; static CategoryIndex is used elsewhere.
const CAT_DATA = [
  {
    n: '01', k: 'Writing',
    subs: ['science', 'essays', 'notes'],
    items: [
      { sub: 'science', title: 'On the half-life of a good question',        meta: '2026 · in build' },
      { sub: 'science', title: 'Three pivots, in chemistry',                 meta: '2025 · 9 min' },
      { sub: 'essays',  title: 'What an instrument wants to be',             meta: '2025 · 14 min' },
      { sub: 'essays',  title: 'A short defense of slow tools',              meta: '2024 · 6 min' },
      { sub: 'notes',   title: 'Field notes from a cold lab',                meta: '2024 · 4 min' },
    ],
  },
  {
    n: '02', k: 'Projects',
    subs: ['instruments', 'ventures', 'builds'],
    items: [
      { sub: 'builds',      title: 'Free Food Finder — find free food on campus, faster', meta: 'web + mobile · launching · freefoodfinder.app' },
      { sub: 'instruments', title: 'Floret — a spectrum browser',  meta: 'open source · v0.4' },
      { sub: 'instruments', title: 'Maquette — synthesis notebook', meta: 'in build' },
      { sub: 'ventures',    title: 'Atelier No.7 — micro-brand',    meta: 'planning' },
      { sub: 'ventures',    title: 'Long table — supper-club series', meta: 'archived' },
      { sub: 'builds',      title: 'Wickerbench — column rig',      meta: '2023 · archive' },
    ],
  },
  {
    n: '03', k: 'Stills',
    subs: ['photographs', 'short film'],
    items: [
      { sub: 'photographs', title: 'Charles river, in fog',        meta: '2026 · 12 frames' },
      { sub: 'photographs', title: 'Glassware, after hours',       meta: '2025 · 8 frames' },
      { sub: 'photographs', title: 'Calla lilies',                 meta: '2024 · 6 frames' },
      { sub: 'short film',  title: 'Hands, gloves, fume hood',     meta: '2025 · 2:14' },
      { sub: 'short film',  title: 'Three pivots',                 meta: '2024 · 4:38' },
    ],
  },
];

function CategoryIndexInteractive({ onOpenChange }) {
  const [open, setOpen] = React.useState(null);  // category 'n' or null
  const [filter, setFilter] = React.useState(null); // sub-name or null
  const rootRef = React.useRef(null);

  // report open-state up so the page can fade the hero out of the way
  React.useEffect(() => {
    if (onOpenChange) onOpenChange(open !== null);
  }, [open, onOpenChange]);

  // close on outside click
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(null); setFilter(null);
      }
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  // close on Escape
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(null); setFilter(null); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openCat = (n) => {
    if (open === n) { setOpen(null); setFilter(null); return; }
    setOpen(n); setFilter(null);
  };
  const clickSub = (n, sub) => (e) => {
    e.stopPropagation();
    if (open !== n) { setOpen(n); setFilter(sub); return; }
    setFilter((cur) => cur === sub ? null : sub);
  };

  return (
    <div ref={rootRef}>
      {/* placeholder banner — makes clear the entries below are demo */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 10,
        fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--ink-mute)',
      }}>
        <span style={{ display: 'inline-block', width: 14, height: 1, background: 'var(--ink-mute)' }}/>
        <span>Placeholder entries · site in build</span>
      </div>
      <div style={{ background: 'var(--ink)', height: 1.5, marginBottom: 22, opacity: 0.85 }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, alignItems: 'start' }}>
        {CAT_DATA.map(({ n, k, subs, items }) => {
          const isOpen = open === n;
          const isDim = open !== null && !isOpen;
          const list = isOpen ? (filter ? items.filter((it) => it.sub === filter) : items) : [];
          const preview = items[0];
          return (
            <div key={n}
              className={`cat ${isOpen ? 'is-open' : ''} ${isDim ? 'is-dim' : ''}`}
              onClick={() => openCat(n)}
            >
              <div className="cat-head">
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--ink-soft)' }}>{n}</span>
                <span className="cat-name">{k}</span>
              </div>

              <div className="cat-subs">
                {subs.map((sub, i) => (
                  <React.Fragment key={sub}>
                    <span
                      className={`cat-sub ${filter === sub && isOpen ? 'is-active' : ''}`}
                      onClick={clickSub(n, sub)}
                    >{sub}</span>
                    {i < subs.length - 1 && <span className="cat-sub-sep">·</span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="cat-preview" style={{ fontStyle: 'italic', color: 'var(--ink-soft)' }}>{preview.title}</div>
              <div className="cat-preview-meta">{preview.meta}</div>

              <div className="cat-drawer">
                <div className="cat-drawer-inner">
                  {list.map((it) => (
                    <div key={it.title} className="cat-item" onClick={(e) => e.stopPropagation()}>
                      <div className="cat-item-title" style={{ fontStyle: 'italic', color: 'var(--ink-soft)' }}>{it.title}</div>
                      <div className="cat-item-sub">{it.sub} · {it.meta}</div>
                    </div>
                  ))}
                  {list.length === 0 && (
                    <div style={{ padding: '12px 0', fontSize: 13, color: 'var(--ink-mute)', fontStyle: 'italic' }}>
                      nothing yet under “{filter}”.
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FooterMinimal() {
  return (
    <div style={{
      position: 'absolute', left: 60, right: 60, bottom: 22,
      display: 'flex', justifyContent: 'space-between',
    }} className="label">
      <span>est. mmxxvi</span>
      <span>jonasrackl.com</span>
    </div>
  );
}

// Social links — sits right under the hero so they're surfaced,
// not buried in the footer. Sans, underlined, ↗ arrow.
function SocialLinks({ align = 'left', marginTop = 26 }) {
  const links = [
    ['contact', 'mailto:contact@jonasrackl.com'],
    ['google scholar', 'https://scholar.google.com/citations?user=8X8ceckAAAAJ&hl=en&oi=ao'],
    ['linkedin', 'https://www.linkedin.com/in/jonasrackl/'],
    ['github', 'https://github.com/JonasRackl'],
  ];
  return (
    <div style={{
      display: 'flex', gap: 22, marginTop, alignItems: 'baseline',
      flexWrap: 'wrap',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      fontFamily: 'var(--f-sans)', fontSize: 14,
      letterSpacing: '0.01em', color: 'var(--ink)',
    }}>
      {links.map(([label, href], i) => (
        <React.Fragment key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--ink)', textDecoration: 'underline',
            textUnderlineOffset: 4, textDecorationThickness: '1px',
            textDecorationColor: 'var(--rule)',
          }}>{label} <span style={{ color: 'var(--ink-soft)' }}>{'↗︎'}</span></a>
          {i < links.length - 1 && <span style={{ color: 'var(--ink-mute)', fontSize: 13 }}>·</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V1 — Atelier, asymmetric / corner cluster
//   hero hugs left · orb cluster bleeds off the right edge
//   compressed to ~960px so it lands in one viewport
// ──────────────────────────────────────────────────────────
function LandingEditorial() {
  return (
    <div className="art" style={{ background: 'var(--bg-paper)' }}>
      <Masthead/>
      <OrbClusterCorner scale={0.82} grainOpacity={0.28} right={-180} top={40} />

      {/* hero block — left-anchored, narrow column */}
      <div style={{ position: 'absolute', top: 92, left: 60, right: 60, zIndex: 3 }}>
        <div style={{ maxWidth: 720 }}>
          <HeroName nameSize={62}/>
          <div style={{ height: 22 }}/>
          <BridgeLine maxWidth={560}/>
          <SocialLinks/>
        </div>
      </div>

      {/* index — sits in the lower third */}
      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 76 }}>
        <CategoryIndex/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V2 — Atelier, asymmetric / cluster wraps the name
//   orbs occupy upper-right · name punches through across columns
//   stacked vertical hero (name top, bridge below) for editorial weight
// ──────────────────────────────────────────────────────────
function LandingPoster() {
  return (
    <div className="art" style={{ background: 'var(--bg-paper)' }}>
      <Masthead/>

      {/* orb cluster — upper-right, larger, bleeds further off */}
      <OrbClusterCorner scale={1.05} grainOpacity={0.26} right={-260} top={20} />

      {/* paper wash beneath the name, only on the left half */}
      <div style={{
        position: 'absolute', top: 130, left: 0, width: '70%', height: 280,
        background: 'radial-gradient(ellipse 70% 70% at 35% 50%, rgba(251,247,239,0.7) 0%, rgba(251,247,239,0) 75%)',
        zIndex: 2, pointerEvents: 'none',
      }}/>

      {/* hero — name very large, hangs over the orbs */}
      <div style={{ position: 'absolute', top: 130, left: 60, right: 60, zIndex: 3 }}>
        <h1 style={{
          margin: 0,
          fontFamily: 'var(--f-name)',
          fontWeight: 'var(--f-name-weight)',
          fontSize: 92,
          lineHeight: 0.94,
          letterSpacing: 'var(--f-name-tracking)',
          color: 'var(--ink)',
          maxWidth: 900,
        }}>
          Jonas W. Rackl
        </h1>
      </div>

      {/* bridge line + socials — sits below name, left column only */}
      <div style={{ position: 'absolute', top: 320, left: 60, width: 640, zIndex: 3 }}>
        <BridgeLine maxWidth={560}/>
        <SocialLinks/>
      </div>

      {/* index — sits in the lower third */}
      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 76 }}>
        <CategoryIndex/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V3 — Atelier, original (center wash, compressed)
//   orb cluster at top · hero below · bridge · index
//   kept as user favourite — same layout, compressed and with bridge line
// ──────────────────────────────────────────────────────────
function LandingGallery() {
  return (
    <div className="art" style={{ background: 'var(--bg-paper)' }}>
      <Masthead/>

      <OrbCluster top={50} left={60} right={60} scale={0.62} grainOpacity={0.3} animate />

      {/* hero — sits closer to top, cluster compressed above */}
      <div style={{ position: 'absolute', top: 470, left: 60, right: 60, zIndex: 3 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'end' }}>
          <HeroName nameSize={60}/>
          <BridgeLine maxWidth={480}/>
        </div>
        <SocialLinks marginTop={28}/>
      </div>

      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 76 }}>
        <CategoryIndexInteractive/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V4 — Bauhaus / 16mm · single disc
//   one warm Bauhaus circle, vignette + halation, asymmetric grid.
//   Reads like a still frame from a 1960s lab film: warm leader colour,
//   weight on the left, type clean on the right.
// ──────────────────────────────────────────────────────────
function LandingBauhausDisc() {
  return (
    <div className="art" style={{ background: 'var(--bg-paper)' }}>
      <Masthead/>

      {/* the disc — Bauhaus terracotta, halation-haloed, bleeds left */}
      <div style={{ position: 'absolute', left: -120, top: 130, width: 720, height: 720, pointerEvents: 'none', zIndex: 1 }}>
        {/* halation glow ring */}
        <div style={{
          position: 'absolute', inset: -120, borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(232,148,98,0.32) 0%, rgba(232,148,98,0.12) 30%, transparent 60%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
        }}/>
        {/* the solid disc */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 36%, #d36a3e 0%, #b85630 55%, #8a3a1f 95%)',
        }}>
          {/* film grain inside the disc */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2' stitchTiles='stitch' seed='4'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: '280px 280px', mixBlendMode: 'multiply', opacity: 0.6,
          }}/>
        </div>
      </div>

      {/* vignette — corner darkening (16mm fall-off) */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 49,
        background: 'radial-gradient(ellipse 78% 78% at 50% 50%, transparent 55%, rgba(120,80,40,0.10) 80%, rgba(80,50,28,0.20) 100%)',
      }}/>

      {/* hero — right column, aligned right; geometric heavy grotesque */}
      <div style={{ position: 'absolute', top: 130, right: 60, width: 640, zIndex: 3, textAlign: 'right' }}>
        <h1 style={{
          margin: 0,
          fontFamily: '"Bricolage Grotesque", "Schibsted Grotesk", sans-serif',
          fontWeight: 600,
          fontSize: 68,
          lineHeight: 0.94,
          letterSpacing: '-0.032em',
          color: 'var(--ink)',
        }}>
          Jonas W.<br/>Rackl
        </h1>
        <p style={{
          margin: '32px 0 0', marginLeft: 'auto',
          fontFamily: 'var(--f-sans)', fontSize: 17, lineHeight: 1.5,
          color: 'var(--ink)', textWrap: 'pretty', maxWidth: 460,
        }}>
          Chemist in Cambridge, MA. <span style={{ color: 'var(--ink-soft)' }}>This site collects writing, projects, and photographs.</span>
        </p>
        <div style={{ display: 'flex', gap: 22, marginTop: 24, justifyContent: 'flex-end', fontFamily: 'var(--f-sans)', fontSize: 14, color: 'var(--ink)' }}>
          {['contact','google scholar','linkedin','github'].map((l, i, a) => (
            <React.Fragment key={l}>
              <a style={{ color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--rule)', textUnderlineOffset: 4 }}>{l} <span style={{ color: 'var(--ink-soft)' }}>{'↗︎'}</span></a>
              {i < a.length - 1 && <span style={{ color: 'var(--ink-mute)' }}>·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* index — Bauhaus geometric markers next to each numeral */}
      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 80, zIndex: 3 }}>
        <div style={{ background: 'var(--ink)', height: 1.5, marginBottom: 22, opacity: 0.85 }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {[
            { n: '01', shape: 'square',   color: '#d8a23e', k: 'Writing',  sub: 'science · essays · notes',          latest: 'On the half-life of a good question',           meta: '2026 · in build' },
            { n: '02', shape: 'circle',   color: '#b85630', k: 'Projects', sub: 'instruments · ventures · builds',   latest: 'Floret — a spectrum browser for synthesis labs', meta: 'open source · v0.4' },
            { n: '03', shape: 'triangle', color: '#3d5a78', k: 'Stills',   sub: 'photographs · short film',          latest: 'Charles river, in fog',                          meta: '2026 · 12 frames' },
          ].map(({ n, shape, color, k, sub, latest, meta }) => (
            <div key={n}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                {/* Bauhaus geometric token */}
                {shape === 'square' && <div style={{ width: 14, height: 14, background: color }}/>}
                {shape === 'circle' && <div style={{ width: 14, height: 14, background: color, borderRadius: '50%' }}/>}
                {shape === 'triangle' && (
                  <div style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: `14px solid ${color}` }}/>
                )}
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--ink-soft)' }}>{n}</span>
                <span style={{ fontFamily: 'var(--f-sans)', fontWeight: 500, fontSize: 26, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{k}</span>
              </div>
              <div className="label" style={{ color: 'var(--ink-mute)', marginBottom: 14 }}>{sub}</div>
              <div style={{ fontSize: 15, lineHeight: 1.45, color: 'var(--ink)', marginBottom: 4 }}>{latest}</div>
              <div className="label" style={{ color: 'var(--ink-soft)' }}>{meta}</div>
            </div>
          ))}
        </div>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V5 — Bauhaus / 16mm · primaries triptych
//   three Bauhaus shapes BECOME the three categories. Each shape sits
//   above its category label below — visual + verbal carry the same
//   classification. Vignette + halation give it the 16mm warmth.
// ──────────────────────────────────────────────────────────
function LandingBauhausTriptych() {
  const tri = [
    { n: '01', k: 'Writing',  shape: 'square',   color: '#d8a23e', sub: 'science · essays · notes',          latest: 'On the half-life of a good question',           meta: '2026 · in build' },
    { n: '02', k: 'Projects', shape: 'circle',   color: '#b85630', sub: 'instruments · ventures · builds',   latest: 'Floret — a spectrum browser for synthesis labs', meta: 'open source · v0.4' },
    { n: '03', k: 'Stills',   shape: 'triangle', color: '#3d5a78', sub: 'photographs · short film',          latest: 'Charles river, in fog',                          meta: '2026 · 12 frames' },
  ];
  return (
    <div className="art" style={{ background: 'var(--bg-paper)' }}>
      <Masthead/>

      {/* three large geometric shapes — Bauhaus title-page composition */}
      <div style={{ position: 'absolute', top: 110, left: 60, right: 60, height: 320, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, zIndex: 1 }}>
        {tri.map(({ shape, color, n }) => (
          <div key={n} style={{ position: 'relative', height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* halation pad behind each shape */}
            <div style={{
              position: 'absolute', inset: -20, borderRadius: '50%',
              background: `radial-gradient(circle, ${color}22 0%, transparent 60%)`,
              filter: 'blur(24px)', mixBlendMode: 'multiply',
            }}/>
            {shape === 'square' && (
              <div style={{
                width: 220, height: 220, background: color,
                boxShadow: `inset 0 0 0 0 ${color}`,
                position: 'relative',
              }}>
                <ShapeGrain color={color} />
              </div>
            )}
            {shape === 'circle' && (
              <div style={{
                width: 240, height: 240, borderRadius: '50%',
                background: `radial-gradient(circle at 38% 36%, ${lighten(color, 10)} 0%, ${color} 55%, ${darken(color, 18)} 100%)`,
                position: 'relative',
              }}>
                <ShapeGrain color={color} round />
              </div>
            )}
            {shape === 'triangle' && (
              <div style={{ position: 'relative', width: 260, height: 240 }}>
                <svg viewBox="0 0 260 240" width="260" height="240" style={{ display: 'block' }}>
                  <defs>
                    <filter id={`g-${n}`}>
                      <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" stitchTiles="stitch" seed="6"/>
                      <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0"/>
                      <feComposite in2="SourceGraphic" operator="in"/>
                    </filter>
                  </defs>
                  <polygon points="130,12 248,228 12,228" fill={color}/>
                  <polygon points="130,12 248,228 12,228" fill="black" filter={`url(#g-${n})`} opacity="0.5" style={{ mixBlendMode: 'multiply' }}/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 49,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 58%, rgba(120,80,40,0.08) 80%, rgba(80,50,28,0.18) 100%)',
      }}/>

      {/* name + bridge — sits below the triptych */}
      <div style={{ position: 'absolute', top: 470, left: 60, right: 60, zIndex: 3 }}>
        <h1 style={{
          margin: 0,
          fontFamily: '"Bricolage Grotesque", "Schibsted Grotesk", sans-serif',
          fontWeight: 600,
          fontSize: 66,
          lineHeight: 0.94,
          letterSpacing: '-0.030em',
          color: 'var(--ink)',
        }}>
          Jonas W. Rackl
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, marginTop: 28, alignItems: 'start' }}>
          <div>
            <p style={{
              margin: 0, fontFamily: 'var(--f-sans)', fontSize: 17, lineHeight: 1.5,
              color: 'var(--ink)', textWrap: 'pretty', maxWidth: 480,
            }}>
              Chemist in Cambridge, MA. <span style={{ color: 'var(--ink-soft)' }}>This site collects writing, projects, and photographs.</span>
            </p>
            <SocialLinks marginTop={22}/>
          </div>
        </div>
      </div>

      {/* index — references the same geometric markers above */}
      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 80, zIndex: 3 }}>
        <div style={{ background: 'var(--ink)', height: 1.5, marginBottom: 18, opacity: 0.85 }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {tri.map(({ n, shape, color, k, sub, latest, meta }) => (
            <div key={n}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                {shape === 'square' && <div style={{ width: 10, height: 10, background: color }}/>}
                {shape === 'circle' && <div style={{ width: 10, height: 10, background: color, borderRadius: '50%' }}/>}
                {shape === 'triangle' && <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `10px solid ${color}` }}/>}
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--ink-soft)' }}>{n}</span>
                <span style={{ fontFamily: 'var(--f-sans)', fontWeight: 500, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{k}</span>
              </div>
              <div className="label" style={{ color: 'var(--ink-mute)', marginBottom: 10 }}>{sub}</div>
              <div style={{ fontSize: 14, lineHeight: 1.4, color: 'var(--ink)', marginBottom: 3 }}>{latest}</div>
              <div className="label" style={{ color: 'var(--ink-soft)' }}>{meta}</div>
            </div>
          ))}
        </div>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ── helpers for V5 — color math + film-grain mask on a shape ──
function lighten(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, ((n >> 16) & 255) + Math.round(255 * pct / 100));
  const g = Math.min(255, ((n >> 8) & 255) + Math.round(255 * pct / 100));
  const b = Math.min(255, (n & 255) + Math.round(255 * pct / 100));
  return `rgb(${r},${g},${b})`;
}
function darken(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((n >> 16) & 255) - Math.round(255 * pct / 100));
  const g = Math.max(0, ((n >> 8) & 255) - Math.round(255 * pct / 100));
  const b = Math.max(0, (n & 255) - Math.round(255 * pct / 100));
  return `rgb(${r},${g},${b})`;
}
function ShapeGrain({ color, round = false }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, borderRadius: round ? '50%' : 0,
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2' stitchTiles='stitch' seed='8'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      backgroundSize: '240px 240px', mixBlendMode: 'multiply', opacity: 0.6,
    }}/>
  );
}

// ──────────────────────────────────────────────────────────
// V6 — Gradient field
//   Full-bleed grainy gradient — color washes at the edges that bleed
//   inward, paper-white center where type sits. No discrete orb cluster.
//   Heavy uniform grain across everything. Reference: "Gradient #40".
// ──────────────────────────────────────────────────────────
function LandingGradientField() {
  return (
    <div className="art" style={{
      background: `
        radial-gradient(ellipse 55% 60% at 100% 35%, rgba(214,196,98,0.62) 0%, transparent 68%),
        radial-gradient(ellipse 38% 32% at 95% 96%, rgba(208,98,68,0.58) 0%, transparent 70%),
        radial-gradient(ellipse 32% 28% at 4% 82%, rgba(110,170,196,0.46) 0%, transparent 72%),
        radial-gradient(ellipse 28% 22% at 50% 4%, rgba(178,172,212,0.30) 0%, transparent 75%),
        radial-gradient(ellipse 16% 14% at 14% 18%, rgba(192,178,150,0.22) 0%, transparent 72%),
        #f6f3eb`,
    }}>
      {/* HEAVY uniform grain — the reference is almost noise-first */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 49, pointerEvents: 'none',
        mixBlendMode: 'multiply',
        opacity: 0.85,
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2' stitchTiles='stitch' seed='14'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: '320px 320px',
      }}/>

      {/* meta corners — like "gradient background #40 / preview" in the ref */}
      <div style={{
        position: 'absolute', top: 32, left: 60, zIndex: 5,
        fontFamily: 'var(--f-mono)', fontSize: 11,
        letterSpacing: '0.06em', color: 'var(--ink-soft)',
        textTransform: 'lowercase',
      }}>
        <div style={{ marginBottom: 4, color: 'var(--ink)' }}>jonasrackl · com</div>
        <div>field № 06 · mmxxvi</div>
      </div>
      <div style={{
        position: 'absolute', top: 32, right: 60, zIndex: 5,
        fontFamily: 'var(--f-mono)', fontSize: 11,
        letterSpacing: '0.06em', color: 'var(--ink)',
        textTransform: 'lowercase', textAlign: 'right',
        lineHeight: 1.5,
      }}>
        <div>chemist</div>
        <div>cambridge, ma</div>
        <div style={{ marginTop: 16, color: 'var(--ink-soft)' }}>preview</div>
      </div>

      {/* hero — sits in the negative space of the gradient (upper-left third) */}
      <div style={{ position: 'absolute', top: 180, left: 60, right: 60, zIndex: 5 }}>
        <h1 style={{
          margin: 0,
          fontFamily: '"Bricolage Grotesque", "Schibsted Grotesk", sans-serif',
          fontWeight: 700,
          fontSize: 132,
          lineHeight: 0.88,
          letterSpacing: '-0.045em',
          color: 'var(--ink)',
          maxWidth: 1000,
        }}>
          Jonas W.<br/>Rackl
        </h1>
        <p style={{
          margin: '40px 0 0',
          fontFamily: 'var(--f-sans)', fontSize: 19, lineHeight: 1.5,
          color: 'var(--ink)', maxWidth: 520, textWrap: 'pretty',
        }}>
          Chemist in Cambridge, MA. <span style={{ color: 'var(--ink-soft)' }}>This site collects writing, projects, and photographs.</span>
        </p>
        <SocialLinks marginTop={26}/>
      </div>

      {/* index — heavy white wash strip below the gradient where type can land */}
      <div style={{
        position: 'absolute', left: 60, right: 60, bottom: 84, zIndex: 5,
        padding: '24px 24px 0',
        background: 'linear-gradient(to bottom, rgba(246,243,235,0) 0%, rgba(246,243,235,0.85) 24%, rgba(246,243,235,0.95) 100%)',
        marginLeft: 0, marginRight: 0,
      }}>
        <div style={{ background: 'var(--ink)', height: 1.5, marginBottom: 22, opacity: 0.85, margin: '0 -24px 22px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          {[
            { n: '01', k: 'Writing',  sub: 'science · essays · notes',        latest: 'On the half-life of a good question',           meta: '2026 · in build' },
            { n: '02', k: 'Projects', sub: 'instruments · ventures · builds', latest: 'Floret — a spectrum browser for synthesis labs', meta: 'open source · v0.4' },
            { n: '03', k: 'Stills',   sub: 'photographs · short film',        latest: 'Charles river, in fog',                          meta: '2026 · 12 frames' },
          ].map(({ n, k, sub, latest, meta }) => (
            <div key={n}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-soft)' }}>{n}</span>
                <span style={{ fontFamily: 'var(--f-sans)', fontWeight: 500, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{k}</span>
              </div>
              <div className="label" style={{ color: 'var(--ink-mute)', marginBottom: 10 }}>{sub}</div>
              <div style={{ fontSize: 14, lineHeight: 1.4, color: 'var(--ink)', marginBottom: 3 }}>{latest}</div>
              <div className="label" style={{ color: 'var(--ink-soft)' }}>{meta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* footer corners */}
      <div style={{
        position: 'absolute', left: 60, bottom: 22, zIndex: 5,
        fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.06em',
        color: 'var(--ink-soft)', textTransform: 'lowercase',
      }}>est. mmxxvi</div>
      <div style={{
        position: 'absolute', right: 60, bottom: 22, zIndex: 5,
        fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.06em',
        color: 'var(--ink-soft)', textTransform: 'lowercase',
      }}>jonasrackl.com</div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V7 — Massive word
//   Pure paper. The name spans the full page width as a monolithic
//   headline. Everything else is tiny meta around the edges.
//   Reference: "Portfolio" portfolio cover.
// ──────────────────────────────────────────────────────────
function LandingMassiveWord() {
  return (
    <div className="art" style={{ background: '#f7f4ec' }}>
      {/* top-left meta block — small globe + date + title */}
      <div style={{
        position: 'absolute', top: 56, left: 60, zIndex: 5,
        fontFamily: 'var(--f-sans)', fontSize: 13, color: 'var(--ink)',
        lineHeight: 1.5,
      }}>
        {/* small wireframe globe glyph */}
        <svg width="26" height="26" viewBox="0 0 26 26" style={{ marginBottom: 16, display: 'block' }}>
          <ellipse cx="13" cy="13" rx="10" ry="10" fill="none" stroke="var(--ink)" strokeWidth="1"/>
          <ellipse cx="13" cy="13" rx="10" ry="4" fill="none" stroke="var(--ink)" strokeWidth="1"/>
          <ellipse cx="13" cy="13" rx="4" ry="10" fill="none" stroke="var(--ink)" strokeWidth="1"/>
          <line x1="3" y1="13" x2="23" y2="13" stroke="var(--ink)" strokeWidth="1"/>
        </svg>
        <div style={{ color: 'var(--ink)', marginBottom: 4 }}>22 May, 2026 · mmxxvi</div>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Personal site, in build</div>
        <div style={{ color: 'var(--ink-soft)' }}>Kept by: Jonas W. Rackl</div>
      </div>

      {/* tag row — role / location / contact, slash-separated like the ref */}
      <div style={{
        position: 'absolute', top: 320, left: 60, right: 60, zIndex: 5,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--f-sans)', fontSize: 13, color: 'var(--ink)',
      }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <span>Chemist</span>
          <span style={{ color: 'var(--ink-mute)' }}>/</span>
          <span>Maker</span>
          <span style={{ color: 'var(--ink-mute)' }}>/</span>
          <span>Writer</span>
        </div>
        <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
          <a style={{ color: 'var(--ink)', textDecoration: 'none' }}>contact@jonasrackl.com</a>
          <span style={{ color: 'var(--ink-mute)' }}>·</span>
          <span>Cambridge, MA</span>
        </div>
      </div>

      {/* THE NAME — massive, page-wide */}
      <div style={{
        position: 'absolute', top: 380, left: 0, right: 0, zIndex: 4,
        textAlign: 'center', padding: '0 40px',
      }}>
        <h1 style={{
          margin: 0,
          fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
          fontWeight: 800,
          fontSize: 'min(320px, 16.2vw)',
          lineHeight: 0.86,
          letterSpacing: '-0.055em',
          color: 'var(--ink)',
          // sized via inline-block to keep tight bounding box
          display: 'inline-block',
          fontSize: 312,
          width: '100%',
        }}>
          Jonas Rackl
        </h1>
      </div>

      {/* category row — slash-separated, lives where a footer would */}
      <div style={{
        position: 'absolute', left: 60, right: 60, bottom: 96, zIndex: 5,
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div style={{ display: 'flex', gap: 22, fontFamily: 'var(--f-sans)', fontSize: 15, color: 'var(--ink)' }}>
          {['01 / Writing','02 / Projects','03 / Stills'].map((t, i, a) => (
            <React.Fragment key={t}>
              <a style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: 4, textDecorationColor: 'var(--rule)' }}>{t}</a>
              {i < a.length - 1 && <span style={{ color: 'var(--ink-mute)' }}>·</span>}
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 18, fontFamily: 'var(--f-sans)', fontSize: 13, color: 'var(--ink-soft)' }}>
          {['google scholar','linkedin','github'].map((l, i, a) => (
            <React.Fragment key={l}>
              <a style={{ color: 'var(--ink-soft)', textDecoration: 'none' }}>{l} <span>{'↗︎'}</span></a>
              {i < a.length - 1 && <span style={{ color: 'var(--ink-mute)' }}>·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* bottom strip — date + title, mirroring the top block */}
      <div style={{
        position: 'absolute', left: 60, right: 60, bottom: 36, zIndex: 5,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--f-sans)', fontSize: 12, color: 'var(--ink)',
      }}>
        <span>Personal site, in build</span>
        <span>22 May, 2026</span>
      </div>

      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V8 — Hello, figure
//   Two-column editorial: abstract figure on left, "Hello, I'm Jonas"
//   greeting + justified body on right. Index sits as a quiet bottom row.
//   Reference: the "Hello! I'm Ramy Ayman" slide.
// ──────────────────────────────────────────────────────────
function LandingHelloFigure() {
  return (
    <div className="art" style={{ background: '#f7f4ec' }}>
      {/* top meta line */}
      <div style={{
        position: 'absolute', top: 32, left: 60, right: 60, zIndex: 5,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--f-sans)', fontSize: 12, color: 'var(--ink-soft)',
      }}>
        <span>Personal site, in build</span>
        <span>22 May, 2026</span>
      </div>

      {/* the figure — abstract orb composition inside a colored square frame.
          Suggests "this is where your photo / illustration lives" while reading
          as deliberate composition. */}
      <div style={{
        position: 'absolute', top: 130, left: 60, width: 480, height: 480, zIndex: 3,
        background: '#3a1d3e',
        overflow: 'hidden',
      }}>
        {/* large soft pink orb, lower-left */}
        <div style={{
          position: 'absolute', left: '-12%', bottom: '-18%',
          width: '90%', height: '90%', borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, #e077a5 0%, #c4538a 40%, #8a3768 80%)',
          filter: 'blur(0.5px)',
        }}>
          <ShapeGrain color="#c4538a" round/>
        </div>
        {/* small warm-yellow accent orb */}
        <div style={{
          position: 'absolute', left: '14%', top: '36%',
          width: 70, height: 56, borderRadius: '50%',
          background: 'radial-gradient(ellipse at 40% 40%, #f1c47a 0%, #d8a352 60%)',
          filter: 'blur(0.5px)',
        }}/>
        {/* thin line — gestural */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 480 480" preserveAspectRatio="none">
          <path d="M 120,260 Q 220,200 360,180" stroke="#f1c47a" strokeWidth="1.5" fill="none" opacity="0.85"/>
        </svg>
        {/* grain inside frame */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='2' stitchTiles='stitch' seed='9'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: '280px 280px', mixBlendMode: 'multiply', opacity: 0.55,
        }}/>
      </div>

      {/* RIGHT — greeting + body */}
      <div style={{
        position: 'absolute', top: 130, left: 620, right: 60, zIndex: 3,
      }}>
        <h1 style={{
          margin: 0,
          fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
          fontWeight: 700,
          fontSize: 92,
          lineHeight: 0.96,
          letterSpacing: '-0.035em',
          color: 'var(--ink)',
        }}>
          Hello!<br/>I'm Jonas Rackl
        </h1>

        <p style={{
          margin: '52px 0 0',
          fontFamily: 'var(--f-sans)', fontSize: 16, lineHeight: 1.55,
          color: 'var(--ink)', maxWidth: 540,
          textAlign: 'justify', hyphens: 'auto',
        }}>
          A chemist in Cambridge, MA. I build open-source instruments, write notes on practice and pivots, and keep a small archive of photographs of phenomena I can&rsquo;t quite explain.
        </p>
        <p style={{
          margin: '20px 0 0',
          fontFamily: 'var(--f-sans)', fontSize: 16, lineHeight: 1.55,
          color: 'var(--ink-soft)', maxWidth: 540,
          textAlign: 'justify', hyphens: 'auto',
        }}>
          This site collects three working surfaces &mdash; writing, projects, and stills. The same person, in three modes. Cold notes welcome; I answer slowly.
        </p>

        <SocialLinks marginTop={32}/>
      </div>

      {/* contact / footer strip */}
      <div style={{
        position: 'absolute', left: 60, right: 60, bottom: 80, zIndex: 5,
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        fontFamily: 'var(--f-sans)', fontSize: 13, color: 'var(--ink)',
        borderTop: '1px solid var(--rule)', paddingTop: 18,
      }}>
        <span>contact@jonasrackl.com</span>
        <span>jonasrackl.com</span>
        <span>Cambridge, MA</span>
      </div>

      {/* tiny index row at very bottom — categories live here as a slash list */}
      <div style={{
        position: 'absolute', left: 60, right: 60, bottom: 32, zIndex: 5,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.06em',
        color: 'var(--ink-soft)', textTransform: 'lowercase',
      }}>
        <span>est. mmxxvi</span>
        <span>01 writing  ·  02 projects  ·  03 stills</span>
      </div>

      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V9 — Atelier × Greeting   (merge: V3 cluster + V8 layout)
//   Two-column editorial. Left: V3's animated orb cluster takes the
//   place of V8's purple square — same composition, atelier atmosphere.
//   Right: "Hello!" greeting, justified body, social links.
//   Bottom: V3's interactive index.
// ──────────────────────────────────────────────────────────
function LandingAtelierGreeting() {
  return (
    <div className="art" style={{ background: 'var(--bg-paper)' }}>
      <Masthead/>

      {/* LEFT — V3 cluster, contained in the left half, animated.
          No hard frame: the cluster bleeds within the paper, atelier-style. */}
      <div style={{ position: 'absolute', top: 90, left: 0, width: 620, height: 480, zIndex: 1, pointerEvents: 'none' }}>
        <OrbCluster top={0} left={20} right={20} scale={0.58} grainOpacity={0.3} animate />
      </div>

      {/* RIGHT — greeting + body */}
      <div style={{ position: 'absolute', top: 110, left: 660, right: 60, zIndex: 3 }}>
        <h1 style={{
          margin: 0,
          fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
          fontWeight: 700,
          fontSize: 76,
          lineHeight: 0.98,
          letterSpacing: '-0.032em',
          color: 'var(--ink)',
        }}>
          Hello!<br/>I'm Jonas Rackl
        </h1>
        <p style={{
          margin: '38px 0 0',
          fontFamily: 'var(--f-sans)', fontSize: 16, lineHeight: 1.55,
          color: 'var(--ink)', maxWidth: 500,
          textAlign: 'justify', hyphens: 'auto',
        }}>
          A chemist in Cambridge, MA. I build open-source instruments, write notes on practice and pivots, and keep a small archive of photographs of phenomena I can&rsquo;t quite explain.
        </p>
        <p style={{
          margin: '18px 0 0',
          fontFamily: 'var(--f-sans)', fontSize: 16, lineHeight: 1.55,
          color: 'var(--ink-soft)', maxWidth: 500,
          textAlign: 'justify', hyphens: 'auto',
        }}>
          Three working surfaces — writing, projects, and stills. The same person, in three modes.
        </p>
        <SocialLinks marginTop={26}/>
      </div>

      {/* index — interactive, like V3 */}
      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 76, zIndex: 3 }}>
        <CategoryIndexInteractive/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V10 — Full-bleed atelier   (merge: V3 + V6 + V8)
//   Background: V6's grainy gradient field washes across the whole page.
//   Layered: V3's animated orb cluster floats in the upper area.
//   Hero: V8's "Hello!" greeting + body, left-anchored.
//   Bottom: V3's interactive index on a paper-wash strip for legibility.
// ──────────────────────────────────────────────────────────
function LandingFullBleedAtelier() {
  return (
    <div className="art" style={{
      background: `
        radial-gradient(ellipse 50% 55% at 100% 30%, rgba(214,196,98,0.42) 0%, transparent 70%),
        radial-gradient(ellipse 36% 32% at 96% 95%, rgba(208,98,68,0.40) 0%, transparent 72%),
        radial-gradient(ellipse 30% 28% at 4% 84%, rgba(110,170,196,0.32) 0%, transparent 74%),
        radial-gradient(ellipse 24% 22% at 50% 4%, rgba(178,172,212,0.22) 0%, transparent 76%),
        #f6f3eb`,
    }}>
      <Masthead/>

      {/* V3 cluster, animated, off-center toward upper-right */}
      <div style={{ position: 'absolute', top: 70, left: 0, right: -80, height: 460, zIndex: 1, pointerEvents: 'none' }}>
        <OrbCluster top={0} left={'30%'} right={0} scale={0.52} grainOpacity={0.28} animate />
      </div>

      {/* Paper wash behind the hero — type legibility */}
      <div style={{
        position: 'absolute', top: 130, left: 0, width: '60%', height: 380,
        background: 'radial-gradient(ellipse 75% 80% at 30% 50%, rgba(246,243,235,0.75) 0%, rgba(246,243,235,0) 78%)',
        zIndex: 2, pointerEvents: 'none',
      }}/>

      {/* HERO — "Hello!" greeting, left-anchored */}
      <div style={{ position: 'absolute', top: 150, left: 60, right: 60, zIndex: 3, maxWidth: 720 }}>
        <h1 style={{
          margin: 0,
          fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
          fontWeight: 700,
          fontSize: 82,
          lineHeight: 0.96,
          letterSpacing: '-0.034em',
          color: 'var(--ink)',
        }}>
          Hello!<br/>I'm Jonas Rackl
        </h1>
        <p style={{
          margin: '34px 0 0',
          fontFamily: 'var(--f-sans)', fontSize: 17, lineHeight: 1.55,
          color: 'var(--ink)', maxWidth: 520,
          textWrap: 'pretty',
        }}>
          A chemist in Cambridge, MA. <span style={{ color: 'var(--ink-soft)' }}>I build open-source instruments, write notes, and keep a small archive of photographs of phenomena I can&rsquo;t quite explain.</span>
        </p>
        <SocialLinks marginTop={24}/>
      </div>

      {/* Index — interactive, on a faint paper-wash strip */}
      <div style={{
        position: 'absolute', left: 60, right: 60, bottom: 76, zIndex: 3,
        padding: '22px 28px 0',
        background: 'linear-gradient(to bottom, rgba(246,243,235,0) 0%, rgba(246,243,235,0.78) 28%, rgba(246,243,235,0.92) 100%)',
      }}>
        <CategoryIndexInteractive/>
      </div>

      <FooterMinimal/>

      {/* heavier uniform grain — ties field + orbs into one atmosphere */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 49, pointerEvents: 'none',
        mixBlendMode: 'multiply',
        opacity: 0.55,
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.55' numOctaves='2' stitchTiles='stitch' seed='17'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: '280px 280px',
      }}/>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V11 — Atelier minimalist (clean type, no grain-blend)
//   "Hullo! I'm Jonas" set in a soft serif as a quiet greeting.
//   Animated molecule cluster overhead.
//   When a category drawer opens, the hero + cluster + stamp fade
//   out so the expanding drawer breathes upward without text colliding.
// ──────────────────────────────────────────────────────────
function LandingMinimalGrain() {
  const [catOpen, setCatOpen] = React.useState(false);
  return (
    <div className="art art-v11" style={{ background: 'var(--bg-paper)' }} data-cat-open={catOpen ? 'true' : 'false'}>
      <Masthead/>

      {/* molecule cluster — overhead, animated. Higher grain to give
          each orb texture; 10% slower drift in tokens.css. Shifted
          right so it sits clear of the hero copy on the left. */}
      <div className="v11-fade">
        <OrbCluster top={86} left={420} right={-40} scale={0.55} grainOpacity={0.7} animate />
      </div>

      {/* HERO — "Hullo! I'm Jonas.", one even serif weight, no italic mix */}
      <div className="v11-fade" style={{ position: 'absolute', top: 260, left: 60, right: 60, zIndex: 3 }}>
        <div style={{
          fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 18,
        }}>
          — a working notebook
        </div>
        <h1 style={{
          margin: 0,
          fontFamily: '"Newsreader", "Source Serif", Georgia, serif',
          fontWeight: 500,
          fontSize: 68,
          lineHeight: 0.96,
          letterSpacing: '-0.022em',
          color: 'var(--ink)',
        }}>
          Hullo! I'm Jonas.
        </h1>
        <div style={{ marginTop: 26 }}>
          <p style={{
            margin: 0,
            fontFamily: 'var(--f-sans)', fontSize: 17, lineHeight: 1.55,
            color: 'var(--ink)', textWrap: 'pretty', maxWidth: 600,
          }}>
            I'm a chemist trained in organic chemistry at <a href="https://www.tum.de/en/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'var(--rule)' }}>TUM</a>, <a href="https://sarponggroup.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'var(--rule)' }}>UC Berkeley</a>, and <a href="https://wennemers.ethz.ch" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'var(--rule)' }}>ETH Zürich</a>, <span style={{ color: 'var(--ink-soft)' }}>now joining <a href="https://chemistry.mit.edu" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'var(--rule)' }}>MIT</a> as a Postdoctoral Associate in the <a href="https://raineslab.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'var(--rule)' }}>Raines group</a> to dive into RNA chemistry, chemical biology and enzymology.</span>
          </p>
          <p style={{
            margin: '14px 0 0',
            fontFamily: 'var(--f-sans)', fontSize: 17, lineHeight: 1.55,
            color: 'var(--ink-soft)', textWrap: 'pretty', maxWidth: 600,
          }}>
            Outside the lab, my attention goes to film, photography, literature, and the arts more broadly, to running long distances, and to thinking elsewhere.
          </p>
        </div>
      </div>

      {/* Social links — moved out of the hero grid so they can sit lower
          on the page (closer to the bottom index) per request. */}
      <div className="v11-fade" style={{ position: 'absolute', top: 580, left: 60, right: 60, zIndex: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <SocialLinks marginTop={0} align="right"/>
      </div>

      <div className="v11-index-pad" style={{ position: 'absolute', left: 60, right: 60, bottom: 80, zIndex: 3 }}>
        <CategoryIndexInteractive onOpenChange={setCatOpen}/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V12 — V3 × CONTENTS  (numbered-grid hero)
//   The category index BECOMES the visual hierarchy: 01/02/03 set
//   as huge bold numerals in an asymmetric grid (ref #4).
//   "INDEX" rotated 90° on the left edge. A small animated cluster
//   sits in the upper-right corner as quiet atmosphere.
// ──────────────────────────────────────────────────────────
function LandingContentsGrid() {
  return (
    <div className="art" style={{ background: 'var(--bg-paper)' }}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="grain-edge-v12" x="-2%" y="-2%" width="104%" height="104%">
            <feTurbulence type="fractalNoise" baseFrequency="0.92" numOctaves="2" seed="11"/>
            <feDisplacementMap in="SourceGraphic" scale="2.2"/>
          </filter>
        </defs>
      </svg>

      <Masthead/>

      {/* vertical "INDEX" label on the left edge — ref #4 */}
      <div style={{
        position: 'absolute', top: 360, left: 64, zIndex: 5,
        transform: 'rotate(-90deg)', transformOrigin: 'left top',
        fontFamily: '"Schibsted Grotesk", sans-serif',
        fontWeight: 700, fontSize: 32, letterSpacing: '0.32em',
        color: 'var(--ink)', whiteSpace: 'nowrap',
      }}>
        I N D E X
      </div>
      <div style={{
        position: 'absolute', left: 96, top: 290, width: 80, height: 1,
        background: 'var(--ink)', zIndex: 5,
      }}/>

      {/* small animated cluster — upper-right corner accent */}
      <div style={{ position: 'absolute', top: 88, right: 60, width: 360, height: 260, zIndex: 1, pointerEvents: 'none' }}>
        <OrbCluster top={0} left={0} right={0} scale={0.35} grainOpacity={0.28} animate />
      </div>

      {/* HERO — name (grain-blended), smaller than V11 */}
      <div style={{ position: 'absolute', top: 110, left: 160, right: 440, zIndex: 3 }}>
        <h1 style={{
          margin: 0,
          fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
          fontWeight: 800,
          fontSize: 72,
          lineHeight: 0.94,
          letterSpacing: '-0.034em',
          color: 'var(--ink)',
          filter: 'url(#grain-edge-v12)',
        }}>
          Jonas Rackl
        </h1>
        <p style={{
          margin: '18px 0 0',
          fontFamily: 'var(--f-sans)', fontSize: 16, lineHeight: 1.55,
          color: 'var(--ink-soft)', maxWidth: 480, textWrap: 'pretty',
        }}>
          Chemist in Cambridge, MA. A working notebook of writing, projects, and photographs.
        </p>
      </div>

      {/* BIG numbered CONTENTS grid — asymmetric, ref #4 */}
      <div style={{ position: 'absolute', top: 380, left: 160, right: 60, height: 520, zIndex: 3 }}>
        <ContentsItem
          style={{ position: 'absolute', top: 0, left: 0, width: 360 }}
          n="01" k="Writing"
          sub="science · essays · notes"
          latest="On the half-life of a good question"
          meta="2026 · in build"
        />
        <ContentsItem
          style={{ position: 'absolute', top: 24, left: 480, width: 380 }}
          n="02" k="Projects"
          sub="instruments · ventures · builds"
          latest="Floret — a spectrum browser for synthesis labs"
          meta="open source · v0.4"
        />
        <ContentsItem
          style={{ position: 'absolute', top: 280, left: 260, width: 360 }}
          n="03" k="Stills"
          sub="photographs · short film"
          latest="Charles river, in fog"
          meta="2026 · 12 frames"
        />
      </div>

      <div style={{ position: 'absolute', left: 160, bottom: 100, zIndex: 4 }}>
        <SocialLinks marginTop={0}/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

function ContentsItem({ n, k, sub, latest, meta, style }) {
  return (
    <div style={style}>
      <div style={{
        fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
        fontWeight: 800,
        fontSize: 86,
        lineHeight: 0.92,
        letterSpacing: '-0.04em',
        color: 'var(--ink)',
      }}>{n}</div>
      <div style={{
        fontFamily: 'var(--f-sans)', fontWeight: 600, fontSize: 22,
        marginTop: 10, color: 'var(--ink)', letterSpacing: '-0.01em',
      }}>{k}</div>
      <div className="label" style={{ color: 'var(--ink-mute)', marginTop: 4 }}>{sub}</div>
      <div style={{
        fontSize: 13, marginTop: 14, color: 'var(--ink-soft)',
        lineHeight: 1.4, fontFamily: 'var(--f-sans)',
      }}>
        Latest — {latest}
      </div>
      <div className="label" style={{ color: 'var(--ink-mute)', marginTop: 4 }}>{meta}</div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V13 — DIETMAR WINKLER  (op-art layering, MIT poster ca. 1968)
//   Winkler's MIT posters layer the same word in shifted color
//   registrations, building rhythm from one syllable. Here "HULLO"
//   stacks three times in graded inks (rust → ember → ink) with
//   slight horizontal shifts — like a 3-pass offset print.
//   "I'm Jonas." sits underneath, set small in italic serif.
//   Molecule cluster floats above, smaller, as quiet atmosphere.
// ──────────────────────────────────────────────────────────
function LandingWinkler() {
  const [catOpen, setCatOpen] = React.useState(false);
  const HULLO = "HULLO";
  return (
    <div className="art art-v11" style={{ background: 'var(--bg-paper)' }} data-cat-open={catOpen ? 'true' : 'false'}>
      <Masthead/>

      {/* molecules — small, upper-right, less dominant than V11 */}
      <div className="v11-fade" style={{ position: 'absolute', top: 70, right: -120, width: 520, height: 360, zIndex: 1, pointerEvents: 'none' }}>
        <OrbCluster top={0} left={0} right={0} scale={0.42} grainOpacity={0.22} animate />
      </div>

      {/* HERO — three-pass overprint of HULLO */}
      <div className="v11-fade" style={{ position: 'absolute', top: 200, left: 60, right: 60, zIndex: 3 }}>
        <div style={{ position: 'relative', height: 340 }}>
          {/* light wash registration */}
          <div style={{
            position: 'absolute', top: 0, left: -6,
            fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
            fontWeight: 800, fontSize: 240, lineHeight: 0.86,
            letterSpacing: '-0.058em',
            color: 'var(--c-amber)',
            opacity: 0.45,
            mixBlendMode: 'multiply',
          }}>{HULLO}</div>
          {/* middle registration */}
          <div style={{
            position: 'absolute', top: 0, left: 6,
            fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
            fontWeight: 800, fontSize: 240, lineHeight: 0.86,
            letterSpacing: '-0.058em',
            color: 'var(--c-rust)',
            opacity: 0.55,
            mixBlendMode: 'multiply',
          }}>{HULLO}</div>
          {/* solid ink */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
            fontWeight: 800, fontSize: 240, lineHeight: 0.86,
            letterSpacing: '-0.058em',
            color: 'var(--ink)',
          }}>{HULLO}</div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 56,
          marginTop: 28, alignItems: 'baseline',
        }}>
          <div>
            <div style={{
              fontFamily: '"Newsreader", serif', fontStyle: 'italic',
              fontWeight: 500, fontSize: 44, lineHeight: 1,
              color: 'var(--ink)', letterSpacing: '-0.02em',
              marginBottom: 18,
            }}>
              — I'm Jonas.
            </div>
            <p style={{
              margin: 0,
              fontFamily: 'var(--f-sans)', fontSize: 16, lineHeight: 1.5,
              color: 'var(--ink-soft)', textWrap: 'pretty', maxWidth: 480,
            }}>
              Chemist in Cambridge, MA. Writing, projects, photographs — three working surfaces.
            </p>
          </div>
          <SocialLinks marginTop={0}/>
        </div>
      </div>

      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 80, zIndex: 3 }}>
        <CategoryIndexInteractive onOpenChange={setCatOpen}/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V14 — JACQUELINE CASEY  (MIT poster: monumental Helvetica + one icon)
//   Casey's MIT posters anchored on a single bold geometric form and
//   a tightly-set monumental headline. Here: one large pale disc on
//   the right (where the molecule cluster also lives — they merge),
//   "Hullo, Jonas." set as a single mass on the left.
//   Strict 12-column grid, every margin a multiple of the same unit.
// ──────────────────────────────────────────────────────────
function LandingCasey() {
  const [catOpen, setCatOpen] = React.useState(false);
  return (
    <div className="art art-v11" style={{ background: 'var(--bg-paper)' }} data-cat-open={catOpen ? 'true' : 'false'}>
      <Masthead/>

      {/* the disc — Casey-style single dominant form, right-anchored.
          The animated molecule cluster sits ON it so they read as one. */}
      <div className="v11-fade" style={{ position: 'absolute', top: 120, right: -80, width: 520, height: 520, zIndex: 1, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 36%, #efe3d0 0%, #e6d4b6 50%, #d6c094 100%)',
          opacity: 0.86,
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' stitchTiles='stitch' seed='6'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: '280px 280px', mixBlendMode: 'multiply', opacity: 0.5,
          }}/>
        </div>
        <div style={{ position: 'absolute', inset: 0 }}>
          <OrbCluster top={20} left={-40} right={20} scale={0.38} grainOpacity={0.2} animate />
        </div>
      </div>

      {/* HERO — single monumental line, hard left margin */}
      <div className="v11-fade" style={{ position: 'absolute', top: 200, left: 60, right: 60, zIndex: 3 }}>
        <div style={{
          fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 22,
        }}>
          Personal notebook · No. 01
        </div>
        <h1 style={{
          margin: 0,
          fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
          fontWeight: 700,
          fontSize: 132,
          lineHeight: 0.92,
          letterSpacing: '-0.045em',
          color: 'var(--ink)',
          maxWidth: 760,
        }}>
          Hullo,<br/>Jonas.
        </h1>
        <div style={{
          marginTop: 36,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          maxWidth: 720,
        }}>
          <p style={{
            margin: 0,
            fontFamily: 'var(--f-sans)', fontSize: 15, lineHeight: 1.55,
            color: 'var(--ink)',
          }}>
            <strong style={{ fontWeight: 600 }}>Chemist in Cambridge, MA.</strong> A working notebook of writing, projects, and photographs.
          </p>
          <p style={{
            margin: 0,
            fontFamily: 'var(--f-sans)', fontSize: 15, lineHeight: 1.55,
            color: 'var(--ink-soft)',
          }}>
            The same person, three modes. Cold notes welcome — I answer slowly.
          </p>
        </div>
        <SocialLinks marginTop={24}/>
      </div>

      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 80, zIndex: 3 }}>
        <CategoryIndexInteractive onOpenChange={setCatOpen}/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// V15 — OTL AICHER  (Munich '72 grid + pictogram system)
//   Aicher's signature: rigorous grid lines visible faintly across the
//   page, a strip of pictograms classifying the work, ultra-tidy sans
//   metadata, restrained palette (Munich pastels: sky / grass / amber /
//   violet). Vertical condensed serif strap on the left edge. Molecule
//   cluster reduced to one small floating accent so the geometry reads.
// ──────────────────────────────────────────────────────────
function LandingAicher() {
  const [catOpen, setCatOpen] = React.useState(false);
  return (
    <div className="art art-v11" style={{ background: 'var(--bg-paper)' }} data-cat-open={catOpen ? 'true' : 'false'}>
      {/* underlying grid — 12-col with faint vertical rules */}
      <div style={{ position: 'absolute', top: 90, left: 60, right: 60, bottom: 60, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', height: '100%' }}>
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} style={{ borderLeft: i === 0 || i === 12 ? '1px solid var(--rule-soft)' : '1px solid var(--rule-soft)', height: '100%', marginLeft: i === 12 ? 0 : 0, position: i === 12 ? 'relative' : 'static' }}/>
          ))}
        </div>
        {/* horizontal datum lines */}
        <div style={{ position: 'absolute', top: '38%', left: 0, right: 0, height: 1, background: 'var(--rule-soft)' }}/>
        <div style={{ position: 'absolute', top: '64%', left: 0, right: 0, height: 1, background: 'var(--rule-soft)' }}/>
      </div>

      <Masthead/>

      {/* vertical condensed serif strap — left edge */}
      <div className="v11-fade" style={{
        position: 'absolute', left: 28, top: 320, zIndex: 5,
        transform: 'rotate(-90deg)', transformOrigin: 'left top',
        fontFamily: '"Newsreader", serif',
        fontWeight: 500, fontSize: 13, letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: 'var(--ink-soft)', whiteSpace: 'nowrap',
      }}>
        Studio &nbsp; · &nbsp; Cambridge, MA &nbsp; · &nbsp; mmxxvi
      </div>

      {/* HERO — clean grotesque, left-anchored on grid column 2 */}
      <div className="v11-fade" style={{ position: 'absolute', top: 150, left: 130, right: 60, zIndex: 3 }}>
        <div style={{
          fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 18,
        }}>
          A·01 &nbsp; — &nbsp; Personal notebook
        </div>
        <h1 style={{
          margin: 0,
          fontFamily: '"Schibsted Grotesk", "Helvetica Neue", sans-serif',
          fontWeight: 500,
          fontSize: 78,
          lineHeight: 0.96,
          letterSpacing: '-0.024em',
          color: 'var(--ink)',
        }}>
          hullo, i'm jonas.
        </h1>
        <p style={{
          margin: '26px 0 0',
          fontFamily: 'var(--f-sans)', fontSize: 15, lineHeight: 1.55,
          color: 'var(--ink-soft)', maxWidth: 440,
        }}>
          Chemist in Cambridge, Massachusetts. A working notebook of writing, projects, and photographs.
        </p>

        {/* Aicher pictogram strip — three glyphs corresponding to the
            three categories, set in the Munich palette. Each glyph sits
            on a tinted square (silver / sky / grass), uniform stroke. */}
        <div style={{ display: 'flex', gap: 18, marginTop: 36 }}>
          <AicherTile bg="#dde5cf" label="01" name="Writing">
            <svg viewBox="0 0 60 60" width="60" height="60">
              <rect x="14" y="12" width="32" height="40" fill="none" stroke="#2b3b22" strokeWidth="3"/>
              <line x1="20" y1="22" x2="40" y2="22" stroke="#2b3b22" strokeWidth="3"/>
              <line x1="20" y1="30" x2="40" y2="30" stroke="#2b3b22" strokeWidth="3"/>
              <line x1="20" y1="38" x2="34" y2="38" stroke="#2b3b22" strokeWidth="3"/>
            </svg>
          </AicherTile>
          <AicherTile bg="#cfd9e5" label="02" name="Projects">
            <svg viewBox="0 0 60 60" width="60" height="60">
              <polygon points="30,8 50,20 50,42 30,54 10,42 10,20" fill="none" stroke="#1f2e44" strokeWidth="3"/>
              <line x1="30" y1="8" x2="30" y2="32" stroke="#1f2e44" strokeWidth="3"/>
              <line x1="10" y1="20" x2="30" y2="32" stroke="#1f2e44" strokeWidth="3"/>
              <line x1="50" y1="20" x2="30" y2="32" stroke="#1f2e44" strokeWidth="3"/>
            </svg>
          </AicherTile>
          <AicherTile bg="#e5d6c4" label="03" name="Stills">
            <svg viewBox="0 0 60 60" width="60" height="60">
              <rect x="8" y="16" width="44" height="32" fill="none" stroke="#3a2a18" strokeWidth="3"/>
              <rect x="22" y="10" width="16" height="8" fill="none" stroke="#3a2a18" strokeWidth="3"/>
              <circle cx="30" cy="32" r="9" fill="none" stroke="#3a2a18" strokeWidth="3"/>
              <circle cx="30" cy="32" r="2.5" fill="#3a2a18"/>
            </svg>
          </AicherTile>
        </div>

        <SocialLinks marginTop={28}/>
      </div>

      {/* small molecule accent — upper-right, modest */}
      <div className="v11-fade" style={{ position: 'absolute', top: 120, right: 90, width: 260, height: 200, zIndex: 1, pointerEvents: 'none' }}>
        <OrbCluster top={0} left={0} right={0} scale={0.3} grainOpacity={0.22} animate />
      </div>

      <div style={{ position: 'absolute', left: 60, right: 60, bottom: 80, zIndex: 3 }}>
        <CategoryIndexInteractive onOpenChange={setCatOpen}/>
      </div>

      <FooterMinimal/>
      <div className="grain"></div>
    </div>
  );
}

function AicherTile({ bg, label, name, children }) {
  return (
    <div style={{ width: 88 }}>
      <div style={{
        width: 88, height: 88, background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {children}
      </div>
      <div style={{
        fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'var(--ink-soft)',
        marginTop: 8,
      }}>
        {label} · {name}
      </div>
    </div>
  );
}

Object.assign(window, { LandingEditorial, LandingPoster, LandingGallery, LandingBauhausDisc, LandingBauhausTriptych, LandingGradientField, LandingMassiveWord, LandingHelloFigure, LandingAtelierGreeting, LandingFullBleedAtelier, LandingMinimalGrain, LandingContentsGrid, LandingWinkler, LandingCasey, LandingAicher, Orb, OrbCluster, Masthead, SocialLinks, CategoryIndexInteractive, FooterMinimal });
