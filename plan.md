# ATLAS Website Redesign — Master Plan

## Vision
Transform the current 7-page multi-file site into a **unified, single-page scrolling experience** with an Apple-quality homepage that *anyone* can understand, plus deep-dive chapter pages that are hyper-detailed with large animated SVG illustrations. Think: Apple.com product pages meets Stripe's documentation quality.

---

## Architecture: 2-Tier Structure

### Tier 1: The Homepage (`index.html`)
A stunning, scroll-driven narrative that tells the ATLAS story in plain English. No jargon upfront. Progressive disclosure — each scroll section gets slightly more technical but always stays visual and intuitive.

**Design language:**
- Full-viewport sections with generous whitespace
- Large (60-80% viewport width) animated SVG hero illustrations
- Sticky section labels that update as you scroll
- Smooth parallax and scroll-triggered animations
- 3-4 color palette max (blue primary, green success, purple intelligence, warm gray neutral)
- Typography: 2 weights of Inter only, massive headlines (clamp 48-96px), comfortable body (18-20px)
- Cards with subtle glass morphism, large rounded corners (24-32px)
- No walls of text — every concept has an illustration

**Homepage sections (scroll narrative):**
1. **Hero** — Full-screen animated illustration of data flowing around a student, tagline: "See Every Student. Miss Nothing." with a single CTA
2. **The Problem** — Before/after split showing fragmented vs unified view (animated transition)
3. **How It Works** — 5-step animated pipeline (each step triggers on scroll with large icon + one sentence)
4. **Who It's For** — 4 persona cards with hover interactions showing their specific view
5. **The Engine** — Animated architecture overview (simplified, beautiful, not technical) with clickable layers
6. **By The Numbers** — Large animated counter stats
7. **Core Principles** — 3 principles with large icons
8. **Explore Deep Dives** — Chapter preview grid linking to detail pages
9. **Footer** — Clean, minimal

### Tier 2: Deep-Dive Chapter Pages (6 pages)
Each chapter page is a long-form, richly illustrated technical deep-dive. These are for the curious — engineers, administrators who want to understand the "how."

**Shared deep-dive design:**
- Sticky left sidebar with section navigation (scrollspy)
- Full-width animated SVG diagrams (80-100% viewport width, 400-600px tall)
- Animated on scroll — elements draw in, connections animate, data flows
- Expandable detail sections with smooth height transitions
- Code blocks with syntax highlighting aesthetic
- Comparison tables with hover highlighting
- Interactive elements (hover to highlight parts of diagrams)

---

## Execution Plan: 8 Prompts

### Prompt 1: Design System & Homepage Foundation
**Scope:** Rewrite `atlas-design-system.css` + homepage HTML skeleton
- New CSS custom properties (refined 3-4 color palette, tighter type scale)
- New component library (unified card, section, grid, animation classes)
- CSS scroll-snap sections for homepage
- New animation keyframes (draw-in for SVGs, counter, parallax, stagger)
- Homepage HTML: nav, hero section, problem section
- ~800 lines CSS, ~200 lines HTML

### Prompt 2: Homepage — Story Sections
**Scope:** Complete the homepage narrative sections
- "How It Works" 5-step animated flow with large SVGs
- "Who It's For" persona section with interactive cards
- "The Engine" simplified architecture illustration (animated layers)
- "By The Numbers" animated counters
- "Core Principles" + "Explore Deep Dives" chapter grid
- Footer
- ~600 lines HTML

### Prompt 3: Architecture Deep-Dive
**Scope:** Complete rewrite of `architecture.html`
- Sticky sidebar navigation
- Full-width animated logical architecture SVG (elements draw in on scroll)
- Storage engine comparison with visual cards (not just text)
- Microservice tier diagram with interactive hover
- Data flow animated paths (write/read/intelligence)
- Performance target gauges/meters
- ~500 lines HTML

### Prompt 4: Ontology + Data Pipeline Deep-Dives
**Scope:** Rewrite `ontology.html` + `data-intelligence.html`
- Ontology: Large animated knowledge graph SVG with the student at center, domains orbit in
- Domain deep-dives with visual entity cards
- Data Pipeline: Animated 5-stage pipeline (data particles flow through)
- Entity resolution visual (before/after with animated merge)
- Signal detection method comparison cards
- ~900 lines HTML total

### Prompt 5: Optimization Deep-Dive
**Scope:** Rewrite `optimization.html`
- LangGraph state machine as large animated flow diagram
- Tool registry as interactive card grid
- 12 optimization models as visual cards with solver badges
- eROI formula visualization with animated components
- Solver comparison section
- ~500 lines HTML

### Prompt 6: Causal Analysis + Monitoring Deep-Dive
**Scope:** Rewrite `causal-monitoring.html`
- 5 causal methods as visual comparison cards with illustrated examples
- Large animated CUSUM chart (line draws in, alert point pulses)
- Bayesian growth model visualization
- Closed-loop journey as animated cycle diagram
- Monitoring dashboard mockup
- ~500 lines HTML

### Prompt 7: Security & Roadmap Deep-Dive
**Scope:** Rewrite `security-roadmap.html`
- Defense-in-depth as animated concentric rings/layers
- ABAC+ReBAC as visual flow diagram
- Encryption architecture diagram
- 30-week roadmap as animated horizontal timeline (scroll-driven)
- Phase gates as milestone markers on timeline
- ~500 lines HTML

### Prompt 8: Polish, Transitions & Performance
**Scope:** Final integration pass
- Page transition animations between homepage and deep-dives
- Prefers-reduced-motion support
- Performance optimization (lazy load SVGs, intersection observer cleanup)
- Mobile responsive polish across all pages
- Print stylesheet
- Final visual QA and consistency pass
- ~200 lines CSS/JS additions

---

## Key Design Decisions

### Color Palette (Simplified from 8 to 4+neutral)
- **Primary Blue** `#007AFF` — Actions, links, primary CTAs
- **Intelligence Purple** `#AF52DE` — AI/ML, optimization, reasoning
- **Success Green** `#34C759` — Outcomes, growth, positive states
- **Alert Amber** `#FF9500` — Warnings, attention, signals
- **Neutral Gray** `#F5F5F7` / `#1D1D1F` — Backgrounds, text

### Typography Scale (Simplified to 6 sizes)
- Display: clamp(48px, 6vw, 96px) — Hero headlines only
- H1: clamp(36px, 4vw, 64px) — Section titles
- H2: clamp(24px, 3vw, 40px) — Subsection titles
- Body Large: 20px — Lead paragraphs
- Body: 16px — Standard text
- Small: 14px — Captions, labels, metadata

### Animation Philosophy
- Scroll-triggered entrance animations (once, not repeating)
- SVG draw-in effects for diagrams (stroke-dashoffset animation)
- Subtle parallax on background elements (translateY at 10% scroll speed)
- Data flow particles in pipeline diagrams
- Counter animations for statistics
- Hover micro-interactions on cards (translateY + shadow)
- No animation on prefers-reduced-motion

### Illustration Style
- Clean, geometric SVG illustrations
- Consistent stroke width (1.5-2px)
- Color fills at 8-12% opacity with colored strokes
- Rounded rectangles (12-16px radius) for containers
- Circle nodes for entities
- Animated dashed lines for data flow
- Large viewBox dimensions (1200×600+ for full-width diagrams)

---

## File Structure (Final)
```
atlas-landing-page/
├── index.html              (homepage — complete rewrite)
├── atlas-design-system.css  (design system — complete rewrite)
├── architecture.html        (deep-dive — complete rewrite)
├── ontology.html            (deep-dive — complete rewrite)
├── data-intelligence.html   (deep-dive — complete rewrite)
├── optimization.html        (deep-dive — complete rewrite)
├── causal-monitoring.html   (deep-dive — complete rewrite)
└── security-roadmap.html    (deep-dive — complete rewrite)
```

No new files needed. Every file gets rewritten with the new design system.

---

## Estimated Output
- ~5,000-6,000 total lines across 8 files
- 15+ animated SVG illustrations
- 8 scroll-driven animation sequences
- Fully responsive (mobile-first)
- Accessible (WCAG AA contrast, reduced-motion, semantic HTML)
