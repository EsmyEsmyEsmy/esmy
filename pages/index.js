import Head from 'next/head'

const STYLES = `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --slate:      #111827;
  --slate2:     #1F2937;
  --slate3:     #374151;
  --orange:     #F97316;
  --orange-d:   #EA6C0A;
  --amber:      #F59E0B;
  --cream:      #FAFAF6;
  --white:      #FFFFFF;
  --g100:       #F4F4F1;
  --g200:       #E8E8E2;
  --g400:       #9B9B8E;
  --g600:       #5A5A50;
  --text:       #111827;
  --textsub:    #5A6478;
  --green:      #16A34A;
  --r:          14px;
  --rlg:        20px;
  --sh:         0 2px 12px rgba(17,24,39,0.08);
  --shmd:       0 8px 32px rgba(17,24,39,0.12);
  --shlg:       0 20px 60px rgba(17,24,39,0.18);
}

html { scroll-behavior: smooth; }
body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: var(--cream); color: var(--text); line-height: 1.6; overflow-x: hidden; }

/* ── UTILS ── */
.container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }

.badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(249,115,22,0.1); color: var(--orange);
  border: 1px solid rgba(249,115,22,0.2);
  border-radius: 100px; padding: 6px 14px; font-size: 13px; font-weight: 600;
}
.badge .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); animation: pulse 2s infinite; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

.btn-cta {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--orange); color: white; border: none;
  padding: 14px 28px; border-radius: 100px; font-size: 15px; font-weight: 700;
  cursor: pointer; text-decoration: none; transition: all .2s;
  box-shadow: 0 4px 20px rgba(249,115,22,.4);
}
.btn-cta:hover { background: var(--orange-d); transform: translateY(-1px); box-shadow: 0 8px 28px rgba(249,115,22,.5); }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: var(--slate); border: 1.5px solid rgba(17,24,39,.2);
  padding: 13px 26px; border-radius: 100px; font-size: 15px; font-weight: 600;
  cursor: pointer; text-decoration: none; transition: all .2s;
}
.btn-ghost:hover { border-color: var(--slate); background: rgba(17,24,39,.04); }

.btn-ghost-w {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: white; border: 1.5px solid rgba(255,255,255,.35);
  padding: 13px 26px; border-radius: 100px; font-size: 15px; font-weight: 600;
  cursor: pointer; text-decoration: none; transition: all .2s;
}
.btn-ghost-w:hover { background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.6); }

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: rgba(17,24,39,.94); backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.nav-inner {
  display: flex; align-items: center; justify-content: space-between;
  height: 66px; max-width: 1140px; margin: 0 auto; padding: 0 24px;
}
.logo {
  display: flex; align-items: center; gap: 10px;
  color: white; text-decoration: none; font-weight: 800; font-size: 22px; letter-spacing: -.5px;
}
.logo-icon {
  width: 34px; height: 34px; background: var(--orange); border-radius: 9px;
  display: flex; align-items: center; justify-content: center; font-size: 16px;
}
.nav-links { display: flex; align-items: center; gap: 28px; }
.nav-links a { color: rgba(255,255,255,.7); text-decoration: none; font-size: 14px; font-weight: 500; transition: color .15s; }
.nav-links a:hover { color: white; }
.nav-cta { display: flex; align-items: center; gap: 12px; }
.nav-cta .login { color: rgba(255,255,255,.7); text-decoration: none; font-size: 14px; font-weight: 500; transition: color .15s; }
.nav-cta .login:hover { color: white; }

/* ── HERO ── */
.hero {
  background: linear-gradient(145deg, #111827 0%, #1a2538 55%, #0f1a2e 100%);
  min-height: 100vh; padding: 130px 0 90px;
  position: relative; overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; top: -150px; right: -150px;
  width: 500px; height: 500px; border-radius: 50%;
  background: radial-gradient(circle, rgba(249,115,22,.12) 0%, transparent 70%);
  pointer-events: none;
}
.hero::after {
  content: ''; position: absolute; bottom: -80px; left: 8%;
  width: 350px; height: 350px; border-radius: 50%;
  background: radial-gradient(circle, rgba(245,158,11,.06) 0%, transparent 70%);
  pointer-events: none;
}

/* Near Me pill — hero accent */
.near-me-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(249,115,22,.12); border: 1px solid rgba(249,115,22,.3);
  border-radius: 100px; padding: 5px 14px 5px 8px;
  font-size: 13px; color: var(--orange); font-weight: 600; margin-bottom: 22px;
}
.near-me-pill .g-dot {
  width: 22px; height: 22px; background: var(--orange); border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 900; color: white;
}

.hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.hero-left { position: relative; z-index: 2; }
.hero-h1 {
  font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.08;
  color: white; letter-spacing: -1.5px; margin-bottom: 20px;
}
.hero-h1 .accent { color: var(--orange); }
.hero-h1 .near { 
  display: inline-block;
  color: var(--orange); font-style: italic;
}
.hero-sub {
  font-size: 17px; color: rgba(255,255,255,.65); line-height: 1.75;
  margin-bottom: 36px; max-width: 460px;
}
.hero-actions { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-bottom: 44px; }
.hero-social {
  display: flex; align-items: center; gap: 14px;
  border-top: 1px solid rgba(255,255,255,.08); padding-top: 24px;
}
.hero-social .avs { display: flex; }
.hero-social .av {
  width: 34px; height: 34px; border-radius: 50%; border: 2px solid #1F2937;
  background: var(--g200); display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; color: var(--slate); margin-left: -7px;
}
.hero-social .av:first-child { margin-left: 0; }
.av-a { background: #FED7AA!important; }
.av-b { background: #BBF7D0!important; }
.av-c { background: #BFDBFE!important; }
.av-d { background: #FDE68A!important; }
.hero-social-txt { font-size: 13.5px; color: rgba(255,255,255,.6); line-height: 1.45; }
.hero-social-txt strong { color: white; font-weight: 700; }

/* Hero right — visual card */
.hero-right { position: relative; z-index: 2; display: flex; justify-content: center; align-items: center; }
.hero-card {
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
  border-radius: var(--rlg); padding: 24px; backdrop-filter: blur(10px);
  width: 100%; max-width: 400px;
}
.hc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.hc-brand { display: flex; align-items: center; gap: 10px; }
.hc-logo { width: 38px; height: 38px; border-radius: 10px; background: var(--orange); display: flex; align-items: center; justify-content: center; font-size: 18px; }
.hc-name { color: white; font-weight: 700; font-size: 14px; }
.hc-loc { color: rgba(255,255,255,.45); font-size: 11px; margin-top: 1px; }
.hc-tag { background: rgba(22,163,74,.2); color: #4ADE80; border-radius: 100px; padding: 3px 10px; font-size: 11px; font-weight: 600; }

/* Google listing mockup */
.g-listing {
  background: white; border-radius: 12px; padding: 14px 16px; margin-bottom: 12px;
}
.gl-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
.gl-name { font-size: 13px; font-weight: 700; color: #1a0dab; }
.gl-pos { font-size: 11px; background: #e8f5e9; color: #2e7d32; border-radius: 100px; padding: 2px 8px; font-weight: 700; }
.gl-stars { color: #f5a623; font-size: 12px; }
.gl-count { font-size: 11px; color: #666; margin-left: 4px; }
.gl-tag { font-size: 11px; color: #666; display: flex; align-items: center; gap: 4px; margin-top: 4px; }

.near-badge {
  background: rgba(249,115,22,.12); border: 1px solid rgba(249,115,22,.25);
  border-radius: 8px; padding: 10px 14px; margin-bottom: 12px;
  display: flex; align-items: center; gap: 10px;
}
.nb-icon { font-size: 18px; }
.nb-text { font-size: 12px; color: rgba(255,255,255,.7); line-height: 1.4; }
.nb-text strong { color: var(--orange); }

.reviews-mini { display: flex; flex-direction: column; gap: 8px; }
.rm-item {
  background: rgba(255,255,255,.04); border-radius: 8px; padding: 10px 12px;
  display: flex; align-items: flex-start; gap: 10px;
}
.rm-av { width: 24px; height: 24px; border-radius: 50%; background: rgba(249,115,22,.3); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: white; flex-shrink: 0; }
.rm-av.b { background: rgba(22,163,74,.3); }
.rm-content {}
.rm-stars { color: var(--amber); font-size: 10px; }
.rm-text { font-size: 11px; color: rgba(255,255,255,.6); margin-top: 1px; line-height: 1.4; }
.rm-reply { font-size: 10.5px; color: #4ADE80; margin-top: 4px; font-style: italic; }

.fr-card {
  position: absolute; background: white; border-radius: 10px; padding: 10px 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,.3); max-width: 180px;
  animation: floatY 6s ease-in-out infinite;
}
.fr-card.top { top: -16px; right: -24px; animation-delay: 0s; }
.fr-card.bot { bottom: 20px; left: -28px; animation-delay: 3s; }
@keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
.frc-stars { color: var(--amber); font-size: 11px; }
.frc-text { font-size: 11.5px; color: var(--g600); line-height: 1.4; margin-top: 2px; }
.frc-name { font-size: 10.5px; font-weight: 700; color: var(--slate); margin-top: 4px; }

/* ── STATS BAR ── */
.stats-bar { background: white; border-top: 1px solid var(--g200); border-bottom: 1px solid var(--g200); }
.stats-inner { display: grid; grid-template-columns: repeat(4,1fr); }
.stat-item { padding: 32px 24px; text-align: center; border-right: 1px solid var(--g200); position: relative; }
.stat-item:last-child { border-right: none; }
.stat-num { font-size: 38px; font-weight: 800; color: var(--slate); letter-spacing: -2px; line-height: 1; }
.stat-num .accent { color: var(--slate); }
.stat-label { font-size: 13px; color: var(--textsub); margin-top: 8px; line-height: 1.4; max-width: 140px; margin-left: auto; margin-right: auto; }

/* ── NEAR ME SECTION — special ── */
.near-section {
  background: var(--slate); padding: 80px 0;
  position: relative; overflow: hidden;
}
.near-section::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(249,115,22,.08) 0%, transparent 60%);
}
.near-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; position: relative; }
.near-label { font-size: 12px; font-weight: 700; color: var(--orange); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
.near-title { font-size: clamp(26px, 3.5vw, 40px); font-weight: 800; color: white; letter-spacing: -1px; margin-bottom: 16px; line-height: 1.15; }
.near-desc { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.75; margin-bottom: 24px; }
.near-facts { display: flex; flex-direction: column; gap: 14px; }
.near-fact {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 14.5px; color: rgba(255,255,255,.75);
}
.near-fact .ico { width: 28px; height: 28px; border-radius: 7px; background: rgba(249,115,22,.15); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; margin-top: 1px; }

/* Google Local Pack visual */
.local-pack {
  background: white; border-radius: 14px; overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,.35);
}
.lp-header { background: #f8f9fa; padding: 10px 14px; border-bottom: 1px solid #e8eaed; display: flex; align-items: center; gap: 8px; }
.lp-search { font-size: 13px; color: #3c4043; background: white; border: 1px solid #dfe1e5; border-radius: 22px; padding: 5px 14px; flex: 1; }
.lp-map { height: 80px; background: linear-gradient(135deg, #e8f4e8 0%, #d4edda 100%); display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 13px; color: #3c4043; }

.lp-results { padding: 8px 0; }
.lp-row {
  display: flex; align-items: center; gap: 10px; padding: 8px 14px;
  border-bottom: 1px solid #f0f0f0; cursor: pointer; transition: background .15s;
}
.lp-row:hover { background: #f8f9fa; }
.lp-row:last-child { border-bottom: none; }
.lp-rank {
  width: 24px; height: 24px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 800; flex-shrink: 0;
}
.r1 { background: var(--orange); color: white; }
.r2 { background: #e8eaed; color: #5f6368; }
.r3 { background: #e8eaed; color: #5f6368; }
.lp-biz {}
.lp-biz-name { font-size: 13px; font-weight: 700; color: #1a0dab; }
.lp-stars-row { display: flex; align-items: center; gap: 4px; margin-top: 1px; }
.lp-stars { color: var(--amber); font-size: 11px; }
.lp-reviews { font-size: 11px; color: #70757a; }
.lp-esmy { margin-left: auto; font-size: 10px; background: rgba(249,115,22,.1); color: var(--orange); border-radius: 100px; padding: 2px 8px; font-weight: 600; }

/* ── SECTIONS ── */
section { padding: 96px 0; }
.section-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(249,115,22,.08); color: var(--orange);
  border-radius: 100px; padding: 5px 14px; font-size: 13px; font-weight: 600; margin-bottom: 14px;
}
.section-title { font-size: clamp(28px, 4vw, 42px); font-weight: 800; letter-spacing: -1px; line-height: 1.12; margin-bottom: 14px; }
.section-sub { font-size: 17px; color: var(--textsub); line-height: 1.7; max-width: 560px; }
.text-center { text-align: center; }
.text-center .section-sub { margin: 0 auto; }

/* ── HOW ── */
.how { background: var(--cream); }
.steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; margin-top: 56px; position: relative; }
.steps::before {
  content: ''; position: absolute; top: 34px; left: 18%; right: 18%;
  height: 1px; background: linear-gradient(to right, transparent, var(--orange), transparent);
}
.step-card {
  background: white; border-radius: var(--rlg); padding: 30px;
  border: 1px solid var(--g200); position: relative; transition: all .3s;
}
.step-card:hover { transform: translateY(-4px); box-shadow: var(--shmd); }
.step-num {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--slate); color: white; font-weight: 800; font-size: 17px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
}
.step-card:nth-child(2) .step-num { background: var(--orange); }
.step-card:nth-child(3) .step-num { background: var(--amber); color: var(--slate); }
.step-icon { font-size: 30px; margin-bottom: 14px; }
.step-title { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
.step-desc { font-size: 14.5px; color: var(--textsub); line-height: 1.65; }

/* ── FEATURES ── */
.features { background: white; }
.feature-block {
  display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
  padding: 56px 0; border-bottom: 1px solid var(--g200);
}
.feature-block:last-child { border-bottom: none; padding-bottom: 0; }
.feature-block.rev .feature-visual { order: -1; }
.feature-label { font-size: 11.5px; font-weight: 700; color: var(--orange); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
.feature-title { font-size: clamp(22px, 3vw, 32px); font-weight: 800; letter-spacing: -.8px; margin-bottom: 14px; line-height: 1.2; }
.feature-desc { font-size: 15.5px; color: var(--textsub); line-height: 1.75; margin-bottom: 24px; }
.feature-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--g600); }
.feature-list li::before {
  content: ''; width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
  background: rgba(249,115,22,.1) url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 10l3.5 3.5L15 6.5' stroke='%23F97316' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
}
.feature-visual { display: flex; justify-content: center; align-items: center; }
.fv-card {
  background: var(--cream); border-radius: var(--rlg); padding: 22px;
  border: 1px solid var(--g200); width: 100%; max-width: 370px;
  box-shadow: var(--shmd);
}

/* Review cards */
.review-item {
  background: white; border-radius: 10px; padding: 14px; margin-bottom: 10px;
  border: 1px solid var(--g200); display: flex; flex-direction: column; gap: 7px;
}
.rv-header { display: flex; align-items: center; justify-content: space-between; }
.rv-author { font-weight: 700; font-size: 13.5px; color: var(--slate); }
.rv-stars { color: var(--amber); font-size: 12px; }
.rv-text { font-size: 12.5px; color: var(--g600); line-height: 1.5; }
.ai-reply {
  background: rgba(249,115,22,.05); border: 1px solid rgba(249,115,22,.15);
  border-radius: 7px; padding: 10px; font-size: 12px; color: var(--textsub); line-height: 1.5;
}
.ai-header { display: flex; align-items: center; gap: 6px; font-size: 10.5px; font-weight: 700; color: var(--orange); margin-bottom: 5px; }
.ai-tag { background: var(--orange); color: white; border-radius: 4px; padding: 1px 6px; font-size: 9.5px; font-weight: 700; }

/* Dashboard stat cards */
.dash-stat {
  background: white; border-radius: 10px; padding: 14px 18px;
  border: 1px solid var(--g200); margin-bottom: 10px;
  display: flex; align-items: center; gap: 12px;
}
.ds-icon { width: 40px; height: 40px; border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; }
.ds-icon.o { background: rgba(249,115,22,.1); }
.ds-icon.g { background: rgba(22,163,74,.1); }
.ds-icon.s { background: rgba(17,24,39,.07); }
.ds-lbl { font-size: 11.5px; color: var(--textsub); }
.ds-val { font-size: 20px; font-weight: 800; color: var(--slate); letter-spacing: -.5px; }
.ds-trend { font-size: 11.5px; color: var(--green); font-weight: 600; }

/* ── TESTIMONIALS ── */
.testimonials { background: var(--slate); padding: 96px 0; }
.testimonials .section-title { color: white; }
.testimonials .section-sub { color: rgba(255,255,255,.55); }
.testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; margin-top: 52px; }
.testi-card {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.09);
  border-radius: var(--rlg); padding: 26px; transition: all .3s;
}
.testi-card:hover { background: rgba(255,255,255,.08); transform: translateY(-3px); }
.testi-stars { color: var(--amber); font-size: 13px; margin-bottom: 12px; letter-spacing: 2px; }
.testi-text { font-size: 14.5px; color: rgba(255,255,255,.78); line-height: 1.7; margin-bottom: 18px; font-style: italic; }
.testi-author { display: flex; align-items: center; gap: 11px; }
.testi-av { width: 38px; height: 38px; border-radius: 50%; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center; }
.ta-a { background: rgba(249,115,22,.3); color: #FED7AA; }
.ta-b { background: rgba(245,158,11,.3); color: #FDE68A; }
.ta-c { background: rgba(100,180,255,.2); color: #BFDBFE; }
.testi-name { color: white; font-weight: 700; font-size: 13.5px; }
.testi-role { color: rgba(255,255,255,.45); font-size: 12px; }
.g-validated { margin-top: 18px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,.07); display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: rgba(255,255,255,.35); }

/* ── PRICING ── */
.pricing { background: var(--cream); }
.pricing-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 22px; margin-top: 52px; max-width: 900px; margin-left: auto; margin-right: auto; }
.plan-card { background: white; border-radius: var(--rlg); padding: 32px; border: 1px solid var(--g200); position: relative; }
.plan-card.feat { background: var(--slate); border: none; box-shadow: 0 20px 60px rgba(17,24,39,.25); }
.plan-badge {
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
  background: var(--orange); color: white; border-radius: 100px; padding: 4px 16px;
  font-size: 11.5px; font-weight: 700; white-space: nowrap;
}
.plan-name { font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--textsub); margin-bottom: 8px; }
.plan-card.feat .plan-name { color: rgba(255,255,255,.55); }
.plan-price { font-size: 44px; font-weight: 800; letter-spacing: -2px; color: var(--slate); margin-bottom: 4px; }
.plan-price sup { font-size: 18px; vertical-align: super; letter-spacing: 0; }
.plan-price span { font-size: 15px; font-weight: 500; color: var(--textsub); letter-spacing: 0; }
.plan-card.feat .plan-price { color: white; }
.plan-card.feat .plan-price span { color: rgba(255,255,255,.45); }
.plan-tag { font-size: 13px; color: var(--textsub); margin-bottom: 22px; line-height: 1.5; }
.plan-card.feat .plan-tag { color: rgba(255,255,255,.55); }
.plan-divider { height: 1px; background: var(--g200); margin-bottom: 20px; }
.plan-card.feat .plan-divider { background: rgba(255,255,255,.1); }
.plan-features { list-style: none; display: flex; flex-direction: column; gap: 11px; margin-bottom: 28px; }
.plan-features li { display: flex; align-items: center; gap: 9px; font-size: 13.5px; color: var(--g600); }
.plan-card.feat .plan-features li { color: rgba(255,255,255,.72); }
.pf-check { width: 18px; height: 18px; flex-shrink: 0; }
.pf-no { color: var(--g400)!important; }
.btn-plan {
  display: flex; align-items: center; justify-content: center;
  background: var(--orange); color: white; border-radius: 100px;
  padding: 13px; font-size: 14px; font-weight: 700; width: 100%;
  text-decoration: none; border: none; cursor: pointer; transition: all .2s;
}
.btn-plan:hover { background: var(--orange-d); }
.btn-plan-w {
  display: flex; align-items: center; justify-content: center;
  background: white; color: var(--slate); border-radius: 100px;
  padding: 13px; font-size: 14px; font-weight: 700; width: 100%;
  text-decoration: none; border: none; cursor: pointer; transition: all .2s;
}
.btn-plan-w:hover { background: var(--cream); }
.btn-plan-ghost {
  display: flex; align-items: center; justify-content: center;
  background: transparent; color: var(--slate); border: 1.5px solid var(--g200); border-radius: 100px;
  padding: 12px; font-size: 14px; font-weight: 600; width: 100%;
  text-decoration: none; cursor: pointer; transition: all .2s;
}
.btn-plan-ghost:hover { border-color: var(--slate); }

/* ── CTA FINAL ── */
.cta-section {
  background: linear-gradient(135deg, var(--orange) 0%, #E86208 100%);
  padding: 96px 0; text-align: center;
}
.cta-section h2 { font-size: clamp(28px, 4vw, 48px); font-weight: 800; color: white; letter-spacing: -1px; margin-bottom: 14px; }
.cta-section p { font-size: 17px; color: rgba(255,255,255,.8); margin-bottom: 36px; }
.cta-actions { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; }
.btn-white-cta {
  display: inline-flex; align-items: center; gap: 8px;
  background: white; color: var(--orange); border-radius: 100px;
  padding: 14px 30px; font-size: 15px; font-weight: 800;
  cursor: pointer; text-decoration: none; transition: all .2s;
  box-shadow: 0 4px 20px rgba(0,0,0,.2);
}
.btn-white-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,.25); }

/* ── FOOTER ── */
footer { background: var(--slate); padding: 56px 0 28px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 44px; }
.footer-brand .logo { color: white; margin-bottom: 12px; display: inline-flex; }
.footer-brand p { font-size: 13.5px; color: rgba(255,255,255,.45); line-height: 1.65; max-width: 240px; }
.footer-col h4 { font-size: 12.5px; font-weight: 700; color: white; letter-spacing: .5px; margin-bottom: 14px; }
.footer-col a { display: block; font-size: 13.5px; color: rgba(255,255,255,.45); text-decoration: none; margin-bottom: 9px; transition: color .2s; }
.footer-col a:hover { color: rgba(255,255,255,.85); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.07); padding-top: 22px;
  display: flex; align-items: center; justify-content: space-between;
}
.footer-bottom p { font-size: 12.5px; color: rgba(255,255,255,.3); }
.footer-links { display: flex; gap: 18px; }
.footer-links a { font-size: 12.5px; color: rgba(255,255,255,.3); text-decoration: none; transition: color .2s; }
.footer-links a:hover { color: rgba(255,255,255,.55); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .hero-grid, .feature-block, .feature-block.rev, .near-grid { grid-template-columns: 1fr; }
  .feature-block.rev .feature-visual { order: 0; }
  .steps, .testi-grid, .pricing-grid { grid-template-columns: 1fr; }
  .stats-inner { grid-template-columns: repeat(2,1fr); }
  .hero-right { display: none; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .steps::before { display: none; }
  .near-section { padding: 60px 0; }
}

/* ── ANIMATIONS ── */
.fade-in { opacity: 0; transform: translateY(20px); transition: opacity .55s ease, transform .55s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }`

const BODY = `<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="/" class="logo">esmy<span style="color:rgba(255,255,255,.35);">.</span>
    </a>
    <div class="nav-links">
      <a href="#fonctionnement">Comment ça marche</a>
      <a href="#fonctionnalites">Fonctionnalités</a>
      <a href="#tarifs">Tarifs</a>
      <a href="/about">À propos</a>
    </div>
    <div class="nav-cta">
      <a href="/login" class="login">Connexion</a>
      <a href="#tarifs" class="btn-cta" style="padding:10px 20px;font-size:13.5px;">Démarrer gratuitement</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-left">
        <div class="near-me-pill">
          <div class="g-dot">G</div>
          Recherches "near me" · +58% en 2025
        </div>
        <h1 class="hero-h1">
          Soyez #1 quand<br>vos clients cherchent<br>
          <span class="near">"près de moi"</span>
        </h1>
        <div class="hero-sub">
          <p style="font-size:18px;font-weight:700;color:white;margin-bottom:12px;line-height:1.3;">Esmy fait exploser vos avis Google en moins d'une semaine.</p>
          <p style="margin-bottom:12px;">Grâce à une gamification qui incite naturellement vos clients à laisser des avis, et une IA puissante qui répond automatiquement à chaque commentaire.</p>
          <p style="margin-bottom:12px;color:rgba(255,255,255,.75);">Plus d'avis → meilleure note → meilleure position dans Google Maps → plus de clients et plus de chiffre.</p>
          <p style="font-style:italic;color:rgba(255,255,255,.6);">Votre réputation Google boostée, votre chiffre d'affaires en hausse… sans que vous ayez à y passer du temps.</p>
        </div>
        <div class="hero-actions">
          <a href="#tarifs" class="btn-cta">
            Démarrer gratuitement
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="/demo" class="btn-ghost-w">Voir la démo →</a>
        </div>
        <div class="hero-social">
          <div class="avs">
            <div class="av av-a">M</div>
            <div class="av av-b">S</div>
            <div class="av av-c">J</div>
            <div class="av av-d">L</div>
          </div>
          <div class="hero-social-txt">
            <strong>33 clients</strong> sont déjà inscrits<br>
            pour la sortie officielle d'Esmy
          </div>
        </div>
      </div>

      <div class="hero-right">
        <div style="position:relative;">
          <div class="hero-card">
            <div class="hc-top">
              <div class="hc-brand">
                <div class="hc-logo">🍕</div>
                <div>
                  <div class="hc-name">La Pizza du Soleil</div>
                  <div class="hc-loc">📍 Nice Centre</div>
                </div>
              </div>
              <div class="hc-tag">+28 avis ce mois</div>
            </div>

            <div class="near-badge">
              <div class="nb-icon">🔍</div>
              <div class="nb-text">
                Votre fiche apparaît maintenant dans les recherches<br>
                <strong>"pizza near me · Nice"</strong> — Position #1 dans votre zone
              </div>
            </div>

            <div class="g-listing">
              <div class="gl-top">
                <div class="gl-name">La Pizza du Soleil</div>
                <div class="gl-pos">#1 Local Pack</div>
              </div>
              <div><span class="gl-stars">★★★★★</span><span class="gl-count">4.9 (312 avis)</span></div>
              <div class="gl-tag">🍕 Restaurant · Ouvert · Pizza · Nice</div>
            </div>

            <div class="reviews-mini">
              <div class="rm-item">
                <div class="rm-av">M</div>
                <div class="rm-content">
                  <div class="rm-stars">★★★★★</div>
                  <div class="rm-text">"Meilleure pizza du quartier, service au top !"</div>
                  <div class="rm-reply">↳ IA : Merci Marie ! On vous attend avec plaisir 🍕</div>
                </div>
              </div>
              <div class="rm-item">
                <div class="rm-av b">S</div>
                <div class="rm-content">
                  <div class="rm-stars">★★★★★</div>
                  <div class="rm-text">"Toujours aussi bon, la roue de la chance est super !"</div>
                  <div class="rm-reply">↳ IA : Merci Sophie ! À très vite ❤️</div>
                </div>
              </div>
            </div>
          </div>

          <div class="fr-card top">
            <div class="frc-stars">★★★★★</div>
            <div class="frc-text">J'ai tourné la roue et gagné un dessert !</div>
            <div class="frc-name">— Camille B.</div>
          </div>
          <div class="fr-card bot">
            <div class="frc-stars">★★★★★</div>
            <div class="frc-text">De 3.8 à 4.9 en un mois. Incroyable.</div>
            <div class="frc-name">— Marco V.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="stats-bar">
  <div class="container">
    <div class="stats-inner">
      <div class="stat-item">
        <div class="stat-num">+300%</div>
        <div class="stat-label">d'avis collectés chez certains commerçants</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">&lt;24h</div>
        <div class="stat-label">pour recevoir les premiers avis clients</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">94%</div>
        <div class="stat-label">des avis reçoivent une réponse IA</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">10 min</div>
        <div class="stat-label">pour configurer et déployer votre QR code</div>
      </div>
    </div>
  </div>
</div>

<!-- NEAR ME SECTION -->
<div class="near-section">
  <div class="container">
    <div class="near-grid">
      <div>
        <div class="near-label">Visibilité locale · Google Près De Moi</div>
        <h2 class="near-title">
          "Restaurant près de moi"<br>— votre client cherche.<br>
          <span style="color:var(--orange);">Êtes-vous visible ?</span>
        </h2>
        <p class="near-desc">Google place en tête les commerces qui ont le plus d'avis récents et bien notés. Ces trois premières positions (Local Pack) captent <strong style="color:white;">70 % des clics</strong>.</p>
        <p class="near-desc">Avec Esmy, vous multipliez vos avis grâce à la gamification et à l'IA, vous améliorez votre notoriété, et vous remontez rapidement dans les recherches "près de moi".</p>
        <p style="font-size:16px;font-weight:700;color:white;margin-bottom:24px;">Plus visible. Plus de clients. Plus de ventes.</p>
        <div class="near-facts">
          <div class="near-fact">
            <div class="ico">📍</div>
            <span>58% des recherches Google incluent "near me" ou "près de moi" en 2025</span>
          </div>
          <div class="near-fact">
            <div class="ico">⭐</div>
            <span>Les 3 premières fiches Google captent 70% des appels et visites</span>
          </div>
          <div class="near-fact">
            <div class="ico">📈</div>
            <span>Un commerce avec 4.5+ ★ et 50+ avis récents passe systématiquement en tête</span>
          </div>
          <div class="near-fact">
            <div class="ico">🤖</div>
            <span>Répondre à vos avis améliore votre score de pertinence Google</span>
          </div>
        </div>
      </div>

      <div>
        <div class="local-pack">
          <div class="lp-header">
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 1.5L10.5 6.5H15.5L11.5 9.5 13 14.5 9 11.5 5 14.5 6.5 9.5 2.5 6.5H7.5Z" fill="#F97316"/></svg>
            <div class="lp-search">pizza near me · Nice · Nice</div>
          </div>
          <div class="lp-map">🗺️ Carte — 3 résultats à proximité</div>
          <div class="lp-results">
            <div class="lp-row">
              <div class="lp-rank r1">1</div>
              <div class="lp-biz">
                <div class="lp-biz-name">La Pizza du Soleil</div>
                <div class="lp-stars-row">
                  <span class="lp-stars">★★★★★</span>
                  <span class="lp-reviews">4.9 (312)</span>
                </div>
              </div>
              <div class="lp-esmy">Esmy ✓</div>
            </div>
            <div class="lp-row">
              <div class="lp-rank r2">2</div>
              <div class="lp-biz">
                <div class="lp-biz-name">Pizza Roma</div>
                <div class="lp-stars-row">
                  <span class="lp-stars" style="color:#9ca3af">★★★★☆</span>
                  <span class="lp-reviews">4.1 (47)</span>
                </div>
              </div>
            </div>
            <div class="lp-row">
              <div class="lp-rank r3">3</div>
              <div class="lp-biz">
                <div class="lp-biz-name">Napoli Express</div>
                <div class="lp-stars-row">
                  <span class="lp-stars" style="color:#9ca3af">★★★☆☆</span>
                  <span class="lp-reviews">3.8 (23)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style="font-size:12px;color:rgba(255,255,255,.3);text-align:center;margin-top:12px;">Simulation Local Pack Google · Résultats types Esmy</p>
      </div>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<section class="how" id="fonctionnement">
  <div class="container">
    <div class="text-center fade-in">
      <div class="section-badge">⚡ Simple & efficace</div>
      <h2 class="section-title">3 étapes. Premiers avis en moins de 24h.</h2>
      <p class="section-sub" style="max-width:620px;">Essayez Esmy <strong>14 jours gratuitement</strong>. Aucune carte bancaire demandée. Seulement votre email et le nom de votre commerce.<br><br>Nous vous accompagnons du premier jour jusqu'à la fin de votre période d'essai pour maximiser vos résultats. <span style="font-weight:700;color:var(--slate);">Zéro risque. Que des résultats.</span></p>
    </div>
    <div class="steps">
      <div class="step-card fade-in">
        <div class="step-num">1</div>
        <div class="step-icon">📲</div>
        <div class="step-title">Le client scanne votre QR</div>
        <div class="step-desc">Un QR code sur votre comptoir ou votre table. Le client scanne en 2 secondes depuis son téléphone — sans app à télécharger.</div>
      </div>
      <div class="step-card fade-in">
        <div class="step-num">2</div>
        <div class="step-icon">🎡</div>
        <div class="step-title">Il laisse son avis — et joue</div>
        <div class="step-desc">La roue de la chance se déverrouille après l'avis Google. La récompense est garantie quelle que soit la note donnée.</div>
      </div>
      <div class="step-card fade-in">
        <div class="step-num">3</div>
        <div class="step-icon">🤖</div>
        <div class="step-title">L'IA répond automatiquement aux commentaires aidant à référencer votre commerce</div>
        <div class="step-desc">Chaque avis reçoit une réponse personnalisée générée par IA — dans votre ton, vérifiée par vous, publiée sur Google en un clic.</div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="features" id="fonctionnalites">
  <div class="container">

    <div class="feature-block fade-in">
      <div class="feature-text">
        <div class="feature-label">Gamification</div>
        <h3 class="feature-title">La roue qui transforme chaque visite en avis</h3>
        <p class="feature-desc">Vos clients ne laissent pas d'avis parce qu'ils n'ont pas de raison suffisante. Esmy crée cette raison avec une mécanique ludique et une récompense immédiate.</p>
        <p class="feature-desc"><strong>Résultat : jusqu'à +300 % d'avis</strong> chez certains commerçants.</p>
        <p class="feature-desc" style="font-size:14px;background:rgba(249,115,22,.06);border-left:3px solid var(--orange);padding:10px 14px;border-radius:0 8px 8px 0;margin-bottom:24px;">Plus d'avis = meilleure note = plus de visibilité dans "Restaurant près de moi" et toutes les recherches locales.</p>
        <ul class="feature-list">
          <li>Lots entièrement personnalisables (café, réduction, cadeau…)</li>
          <li>Probabilités configurables par lot, roue temps réel</li>
          <li>Code unique généré — présenté en caisse</li>
          <li>100% conforme aux règles Google Business</li>
        </ul>
      </div>
      <div class="feature-visual">
        <div class="fv-card">
          <div style="text-align:center;margin-bottom:14px;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--g400);margin-bottom:6px;">Votre roue en live</div>
            <div style="display:flex;justify-content:center;">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <defs>
                  <clipPath id="circ"><circle cx="100" cy="100" r="92"/></clipPath>
                  <filter id="shadow"><feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.25)"/></filter>
                  <radialGradient id="hubGrad" cx="40%" cy="35%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#e8e0d5"/></radialGradient>
                </defs>
                <!-- Outer ring -->
                <circle cx="100" cy="100" r="96" fill="#1a1a1a" filter="url(#shadow)"/>
                <circle cx="100" cy="100" r="93" fill="none" stroke="#C9A96E" stroke-width="1.5"/>
                <!-- Segments -->
                <g clip-path="url(#circ)">
                  <path d="M100 100 L192 100 A92 92 0 0 0 146 21Z" fill="#1C1C1C"/>
                  <path d="M100 100 L146 21 A92 92 0 0 0 54 21Z" fill="#F97316"/>
                  <path d="M100 100 L54 21 A92 92 0 0 0 8 100Z" fill="#1C1C1C"/>
                  <path d="M100 100 L8 100 A92 92 0 0 0 54 179Z" fill="#C9A96E"/>
                  <path d="M100 100 L54 179 A92 92 0 0 0 146 179Z" fill="#1C1C1C"/>
                  <path d="M100 100 L146 179 A92 92 0 0 0 192 100Z" fill="#F97316"/>
                  <!-- Divider lines -->
                  <line x1="100" y1="100" x2="192" y2="100" stroke="#C9A96E" stroke-width="0.8" opacity="0.6"/>
                  <line x1="100" y1="100" x2="146" y2="21" stroke="#C9A96E" stroke-width="0.8" opacity="0.6"/>
                  <line x1="100" y1="100" x2="54" y2="21" stroke="#C9A96E" stroke-width="0.8" opacity="0.6"/>
                  <line x1="100" y1="100" x2="8" y2="100" stroke="#C9A96E" stroke-width="0.8" opacity="0.6"/>
                  <line x1="100" y1="100" x2="54" y2="179" stroke="#C9A96E" stroke-width="0.8" opacity="0.6"/>
                  <line x1="100" y1="100" x2="146" y2="179" stroke="#C9A96E" stroke-width="0.8" opacity="0.6"/>
                  <!-- Emojis -->
                  <text x="158" y="68" font-size="16" text-anchor="middle">🍕</text>
                  <text x="100" y="32" font-size="16" text-anchor="middle">🏝️</text>
                  <text x="42" y="68" font-size="16" text-anchor="middle">☕</text>
                  <text x="42" y="145" font-size="16" text-anchor="middle">🎁</text>
                  <text x="100" y="178" font-size="16" text-anchor="middle">🥂</text>
                  <text x="158" y="145" font-size="16" text-anchor="middle">💳</text>
                </g>
                <!-- Hub -->
                <circle cx="100" cy="100" r="22" fill="url(#hubGrad)" stroke="#C9A96E" stroke-width="1.5"/>
                <text x="100" y="97" font-size="8" fill="#1a1a1a" text-anchor="middle" font-weight="700" letter-spacing="1">ESMY</text>
                <text x="100" y="107" font-size="6" fill="#C9A96E" text-anchor="middle" font-weight="600" letter-spacing="1.5">✦</text>
                <!-- Pointer -->
                <polygon points="100,4 95,18 105,18" fill="#C9A96E"/>
                <polygon points="100,4 95,18 105,18" fill="none" stroke="#1a1a1a" stroke-width="0.5"/>
              </svg>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:white;border:1px solid var(--g200);border-radius:8px;padding:10px;text-align:center;">
              <div style="font-size:18px;margin-bottom:3px;">🍕</div>
              <div style="font-size:11px;font-weight:700;">Pizza offerte</div>
              <div style="font-size:10px;color:var(--g400);">30%</div>
            </div>
            <div style="background:white;border:1px solid var(--g200);border-radius:8px;padding:10px;text-align:center;">
              <div style="font-size:18px;margin-bottom:3px;">🏝️</div>
              <div style="font-size:11px;font-weight:700;">Week-end spa</div>
              <div style="font-size:10px;color:var(--g400);">2%</div>
            </div>
            <div style="background:white;border:1px solid var(--g200);border-radius:8px;padding:10px;text-align:center;">
              <div style="font-size:18px;margin-bottom:3px;">☕</div>
              <div style="font-size:11px;font-weight:700;">Café offert</div>
              <div style="font-size:10px;color:var(--g400);">40%</div>
            </div>
            <div style="background:white;border:1px solid var(--g200);border-radius:8px;padding:10px;text-align:center;">
              <div style="font-size:18px;margin-bottom:3px;">🎁</div>
              <div style="font-size:11px;font-weight:700;">Bon 20€</div>
              <div style="font-size:10px;color:var(--g400);">15%</div>
            </div>
          </div>
          <div style="margin-top:16px;padding:14px 16px;background:white;border:1px solid var(--g200);border-radius:10px;display:flex;align-items:center;gap:12px;">
            <div style="width:36px;height:36px;border-radius:9px;background:rgba(249,115,22,.1);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">📊</div>
            <div>
              <div style="font-size:12.5px;font-weight:700;color:var(--slate);margin-bottom:2px;">Données clients collectées automatiquement</div>
              <div style="font-size:12px;color:var(--textsub);">Récupérez l'email de chaque participant et utilisez-les pour des campagnes marketing ciblées — email, SMS, promotions saisonnières.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-block rev fade-in">
      <div class="feature-text">
        <div class="feature-label">Intelligence Artificielle</div>
        <h3 class="feature-title">Répondez à chaque avis sans y penser</h3>
        <p class="feature-desc">Un avis sans réponse, c'est un signal négatif pour Google. Esmy génère automatiquement des réponses naturelles dans le ton de votre commerce — et améliore votre score de pertinence locale à chaque réponse publiée.</p>
        <ul class="feature-list">
          <li>Réponses personnalisées au contenu de chaque avis</li>
          <li>Ton configurable (chaleureux, pro, local…)</li>
          <li>Alerte immédiate sur les avis négatifs</li>
          <li>Vous validez en 1 clic avant publication</li>
        </ul>
      </div>
      <div class="feature-visual">
        <div class="fv-card">
          <div class="review-item">
            <div class="rv-header">
              <div class="rv-author">Sophie M.</div>
              <div class="rv-stars">★★★★★</div>
            </div>
            <div class="rv-text">"Ambiance parfaite, le personnel est adorable. On reviendra !"</div>
            <div class="ai-reply">
              <div class="ai-header"><span class="ai-tag">IA</span> Réponse générée · En attente</div>
              Merci infiniment Sophie ! Votre fidélité nous touche vraiment. On a hâte de vous revoir ! 🙏
            </div>
          </div>
          <div class="review-item" style="border-left:3px solid #EF4444;">
            <div class="rv-header">
              <div class="rv-author">Marc D.</div>
              <div class="rv-stars" style="color:#EF4444;">★★☆☆☆</div>
            </div>
            <div class="rv-text">"Attente un peu longue pour une heure creuse."</div>
            <div class="ai-reply" style="background:rgba(239,68,68,.05);border-color:rgba(239,68,68,.2);">
              <div class="ai-header" style="color:#EF4444;"><span class="ai-tag" style="background:#EF4444;">⚠ URGENT</span> Réponse empathique</div>
              Cher Marc, merci pour votre retour sincère. Nous prenons note pour améliorer notre service. N'hésitez pas à nous recontacter.
            </div>
          </div>
          <div style="text-align:center;margin-top:10px;">
            <div style="font-size:12px;color:var(--textsub);">94% de taux de réponse · Délai &lt; 2h</div>
          </div>
        </div>
      </div>
    </div>

    <div class="feature-block fade-in">
      <div class="feature-text">
        <div class="feature-label">Dashboard & Analytics</div>
        <h3 class="feature-title">Pilotez votre réputation en temps réel</h3>
        <p class="feature-desc">Un tableau de bord clair qui vous donne l'essentiel : votre progression, vos alertes, vos performances par établissement. Conçu pour un commerçant, pas pour un analyste données.</p>
        <ul class="feature-list">
          <li>Note Google, évolution semaine par semaine</li>
          <li>Classement dans le Local Pack Google</li>
          <li>Multi-établissements depuis un seul compte</li>
          <li>Export des données et rapports automatiques</li>
        </ul>
      </div>
      <div class="feature-visual">
        <div class="fv-card">
          <div class="dash-stat">
            <div class="ds-icon o">⭐</div>
            <div>
              <div class="ds-lbl">Note Google</div>
              <div class="ds-val">4.9 <span class="ds-trend">↑ +0.8 ce mois</span></div>
            </div>
          </div>
          <div class="dash-stat">
            <div class="ds-icon g">📈</div>
            <div>
              <div class="ds-lbl">Position Local Pack</div>
              <div class="ds-val">#1 <span class="ds-trend">↑ était #4</span></div>
            </div>
          </div>
          <div class="dash-stat">
            <div class="ds-icon s">💬</div>
            <div>
              <div class="ds-lbl">Avis ce mois</div>
              <div class="ds-val">47 <span class="ds-trend">↑ +320%</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials" id="temoignages">
  <div class="container">
    <div class="text-center fade-in">
      <div class="section-badge" style="background:rgba(249,115,22,.15);color:var(--orange);">❤️ Ils nous font confiance</div>
      <h2 class="section-title">Des commerçants qui ont retrouvé leur visibilité</h2>
      <p class="section-sub">Restaurants, boulangeries, instituts de beauté — partout en France, Esmy transforme leur réputation locale.</p>
    </div>
    <div class="testi-grid">
      <div class="testi-card fade-in">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"En 3 semaines, on est passé de 47 à 134 avis Google. Ma fiche remonte enfin dans les recherches 'boulangerie près de moi'. La roue de la fortune, mes clients adorent ça."</p>
        <div class="testi-author">
          <div class="testi-av ta-a">M</div>
          <div>
            <div class="testi-name">Marie-Claire B.</div>
            <div class="testi-role">Boulangerie Artisanale · Aix-en-Provence</div>
          </div>
        </div>
        <div class="g-validated">
          <svg width="12" height="12" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="rgba(255,255,255,.2)"/><text x="3.5" y="10.5" font-size="8" fill="white" font-weight="700">G</text></svg>
          Avis validé Google Business
        </div>
      </div>
      <div class="testi-card fade-in">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"Ce qui m'a convaincu c'est la réponse automatique. Je n'avais jamais le temps de répondre. Maintenant tous mes avis ont une réponse pro. Google a adoré — ma note est passée de 4.0 à 4.8."</p>
        <div class="testi-author">
          <div class="testi-av ta-b">J</div>
          <div>
            <div class="testi-name">Julien F.</div>
            <div class="testi-role">Restaurant Méditerranéen · Marseille</div>
          </div>
        </div>
        <div class="g-validated">
          <svg width="12" height="12" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="rgba(255,255,255,.2)"/><text x="3.5" y="10.5" font-size="8" fill="white" font-weight="700">G</text></svg>
          Avis validé Google Business
        </div>
      </div>
      <div class="testi-card fade-in">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"Ma note est passée de 3.9 à 4.7 en deux mois. Esmy m'a sauvé la mise — j'apparais maintenant dans les 3 premiers résultats quand quelqu'un cherche 'institut beauté Luberon'."</p>
        <div class="testi-author">
          <div class="testi-av ta-c">S</div>
          <div>
            <div class="testi-name">Sophie A.</div>
            <div class="testi-role">Institut de Beauté · Luberon</div>
          </div>
        </div>
        <div class="g-validated">
          <svg width="12" height="12" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="rgba(255,255,255,.2)"/><text x="3.5" y="10.5" font-size="8" fill="white" font-weight="700">G</text></svg>
          Avis validé Google Business
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="tarifs">
  <div class="container">
    <div class="text-center fade-in">
      <div class="section-badge">💰 Tarifs</div>
      <h2 class="section-title">Simple et transparent</h2>
      <p class="section-sub">Sans engagement. Annulez à tout moment depuis votre espace client.</p>
    </div>
    <div class="pricing-grid">
      <div class="plan-card fade-in">
        <div class="plan-name">Starter</div>
        <div class="plan-price"><sup>€</sup>29<span> /mois</span></div>
        <div class="plan-tag">1 établissement · Pour démarrer</div>
        <div class="plan-divider"></div>
        <ul class="plan-features">
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Réponses IA aux avis</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>QR code imprimable</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Avis illimités</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Dashboard basique</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M5 9h8" stroke="#ccc" stroke-width="2" stroke-linecap="round"/></svg><span class="pf-no">Roue de fortune</span></li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M5 9h8" stroke="#ccc" stroke-width="2" stroke-linecap="round"/></svg><span class="pf-no">SMS post-visite</span></li>
        </ul>
        <a href="#" class="btn-plan-ghost" onclick="openModal('Starter');return false">Démarrer</a>
      </div>

      <div class="plan-card feat fade-in">
        <div class="plan-badge">Le plus populaire</div>
        <div class="plan-name">Pro</div>
        <div class="plan-price"><sup>€</sup>79<span> /mois</span></div>
        <div class="plan-tag">Jusqu'à 3 établissements</div>
        <div class="plan-divider"></div>
        <ul class="plan-features">
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Tout le plan Starter</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Roue de fortune personnalisée</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Avis illimités</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Réponses IA automatiques</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>SMS post-visite</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Analytics avancés</li>
        </ul>
        <a href="#" class="btn-plan-w" onclick="openModal('Pro');return false">Démarrer le Pro</a>
      </div>

      <div class="plan-card fade-in">
        <div class="plan-name">Agence</div>
        <div class="plan-price" style="font-size:28px;letter-spacing:-.5px;">Sur demande</div>
        <div class="plan-tag">Établissements illimités · Tarif personnalisé</div>
        <div class="plan-divider"></div>
        <ul class="plan-features">
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Tout le plan Pro</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Dashboard agence multi-clients</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Marque blanche</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>API access</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Support prioritaire</li>
          <li><svg class="pf-check" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5L15 5" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Onboarding dédié</li>
        </ul>
        <a href="#" class="btn-plan" onclick="openModal('Agence');return false">Nous contacter →</a>
      </div>
    </div>
    <p style="text-align:center;font-size:13.5px;color:var(--textsub);margin-top:20px;">Sans engagement · Sans frais cachés · Annulez à tout moment</p>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-section">
  <div class="container">
    <h2>Prêt à être #1 sur Google Maps ?</h2>
    <p>Rejoignez les premiers commerçants qui dominent leur réputation locale avec Esmy.<br>Configuration en 10 minutes. Premiers avis en moins de 24h.</p>
    <div class="cta-actions">
      <a href="#tarifs" class="btn-white-cta">
        Démarrer gratuitement
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#F97316" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="/demo" class="btn-ghost-w">Voir la démo API Google →</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo">esmy<span style="color:rgba(255,255,255,.35);">.</span>
        </a>
      </div>
      <div class="footer-col">
        <h4>Produit</h4>
        <a href="#fonctionnalites">Fonctionnalités</a>
        <a href="#tarifs">Tarifs</a>
        <a href="/demo">Démo Google API</a>
      </div>
      <div class="footer-col">
        <h4>Entreprise</h4>
        <a href="/about">À propos</a>
        <a href="mailto:contact@esmy.ai">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Légal</h4>
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/terms">CGU</a>
        <a href="/privacy">Confidentialité</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Esmy · Made in Provence 🌿</p>
      <div class="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/privacy">Confidentialité</a>
        <a href="/terms">CGU</a>
      </div>
    </div>
  </div>
</footer>

<div id="contact-modal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(17,24,39,.75);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px;">
  <div style="background:white;border-radius:24px;padding:44px 40px;width:100%;max-width:460px;box-shadow:0 32px 80px rgba(0,0,0,.25);position:relative;">
    <button onclick="closeModal()" style="position:absolute;top:18px;right:20px;background:none;border:none;font-size:22px;cursor:pointer;color:#9ca3af;line-height:1;">&#215;</button>
    <div style="text-align:center;margin-bottom:28px;">
      <div style="width:52px;height:52px;background:#F97316;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:26px;">&#11088;</div>
      <div id="modal-plan-badge" style="display:inline-block;background:#F97316;color:white;border-radius:100px;padding:4px 16px;font-size:12px;font-weight:700;margin-bottom:10px;">Plan Pro</div>
      <h2 style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-.5px;margin-bottom:6px;">Demarrons ensemble</h2>
      <p style="font-size:14px;color:#6b7280;line-height:1.6;">Laissez vos coordonnees — nous vous contactons <strong style="color:#111827;">sous 24h</strong> pour configurer votre compte.</p>
    </div>
    <div id="modal-form">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div>
          <label style="display:block;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;">Prenom et nom *</label>
          <input id="cf-name" type="text" placeholder="Marie Dupont" style="width:100%;padding:11px 13px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;" />
        </div>
        <div>
          <label style="display:block;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;">Telephone *</label>
          <input id="cf-phone" type="tel" placeholder="06 12 34 56 78" style="width:100%;padding:11px 13px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;" />
        </div>
      </div>
      <div style="margin-bottom:12px;">
        <label style="display:block;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;">Email *</label>
        <input id="cf-email" type="email" placeholder="contact@moncommerce.fr" style="width:100%;padding:11px 13px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;" />
      </div>
      <div style="margin-bottom:22px;">
        <label style="display:block;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;">Nom du commerce *</label>
        <input id="cf-biz" type="text" placeholder="La Bella Pizza" style="width:100%;padding:11px 13px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;" />
      </div>
      <div id="cf-error" style="display:none;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:10px 13px;font-size:13px;color:#dc2626;margin-bottom:12px;"></div>
      <button onclick="submitContact()" style="width:100%;padding:15px;background:#F97316;color:white;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;">Envoyer ma demande &#8594;</button>
      <p style="text-align:center;font-size:12px;color:#9ca3af;margin-top:10px;">Sans engagement &#183; Nous vous rappelons sous 24h</p>
    </div>
    <div id="modal-success" style="display:none;text-align:center;padding:20px 0;">
      <div style="font-size:52px;margin-bottom:16px;">&#127881;</div>
      <h3 style="font-size:22px;font-weight:800;color:#111827;margin-bottom:8px;">Demande envoyee !</h3>
      <p style="font-size:14px;color:#6b7280;line-height:1.65;margin-bottom:24px;">Merci ! Notre equipe vous contactera <strong style="color:#111827;">sous 24 heures</strong> pour configurer votre compte Esmy.</p>
      <button onclick="closeModal()" style="padding:13px 28px;background:#111827;color:white;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer;">Fermer</button>
    </div>
  </div>
</div>
<style>#contact-modal.open{display:flex!important;}</style>`

const SCRIPTS = `const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

function openModal(plan) {
  document.getElementById('modal-plan-badge').textContent = 'Plan ' + plan;
  var m = document.getElementById('contact-modal');
  m.style.cssText = 'display:flex;position:fixed;inset:0;z-index:9999;background:rgba(17,24,39,.75);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px;';
  document.getElementById('modal-form').style.display = 'block';
  document.getElementById('modal-success').style.display = 'none';
  document.getElementById('cf-error').style.display = 'none';
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('contact-modal').style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded', function() {
  var m = document.getElementById('contact-modal');
  if (m) m.addEventListener('click', function(e){ if(e.target===this) closeModal(); });
});
function submitContact() {
  var name = document.getElementById('cf-name').value.trim();
  var phone = document.getElementById('cf-phone').value.trim();
  var email = document.getElementById('cf-email').value.trim();
  var biz = document.getElementById('cf-biz').value.trim();
  var errEl = document.getElementById('cf-error');
  if (!name || !phone || !email || !biz) {
    errEl.textContent = 'Veuillez remplir tous les champs.';
    errEl.style.display = 'block'; return;
  }
  errEl.style.display = 'none';
  document.getElementById('modal-form').style.display = 'none';
  document.getElementById('modal-success').style.display = 'block';
}

// Redirect Supabase auth tokens to /confirm
if (typeof window !== 'undefined' && window.location.hash.includes('access_token')) {
  window.location.href = '/confirm' + window.location.hash;
}`

export default function Page() {
  return (
    <>
      <Head>
        <title>Esmy — Soyez trouvé quand vos clients cherchent "near me"</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      <script dangerouslySetInnerHTML={{ __html: SCRIPTS }} />
    </>
  )
}
