import Head from 'next/head'

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#2563EB;--blue-d:#1D4ED8;--blue-l:#EFF6FF;--blue-m:#DBEAFE;
  --text:#0F172A;--sub:#64748B;--muted:#94A3B8;
  --bg:#ffffff;--bg2:#F8FAFC;--bg3:#F1F5F9;
  --border:#E2E8F0;--border2:#CBD5E1;
  --green:#16A34A;--green-l:#F0FDF4;
  --orange:#F97316;
  --r:10px;--r2:16px;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);line-height:1.6;-webkit-font-smoothing:antialiased}
.container{max-width:1100px;margin:0 auto;padding:0 28px}

/* ── NAV ── */
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:64px;max-width:1100px;margin:0 auto;padding:0 28px}
.logo{font-family:'Bricolage Grotesque',sans-serif;font-size:20px;font-weight:700;letter-spacing:-.04em;color:var(--text);text-decoration:none;display:flex;align-items:center;gap:0}
.logo-dot{color:var(--blue);margin-left:-2px}
.nav-links{display:flex;align-items:center;gap:32px}
.nav-links a{font-size:14px;font-weight:500;color:var(--sub);text-decoration:none;transition:color .15s}
.nav-links a:hover{color:var(--text)}
.nav-right{display:flex;align-items:center;gap:12px}
.btn-ghost{font-size:14px;font-weight:500;color:var(--sub);text-decoration:none;padding:8px 14px;border-radius:var(--r);transition:all .15s}
.btn-ghost:hover{color:var(--text);background:var(--bg2)}
.btn-primary{display:inline-flex;align-items:center;gap:6px;background:var(--blue);color:white;font-size:14px;font-weight:600;padding:9px 20px;border-radius:var(--r);text-decoration:none;border:none;cursor:pointer;transition:all .2s}
.btn-primary:hover{background:var(--blue-d)}
.btn-outline{display:inline-flex;align-items:center;gap:6px;background:white;color:var(--text);font-size:14px;font-weight:600;padding:9px 20px;border-radius:var(--r);text-decoration:none;border:1.5px solid var(--border);cursor:pointer;transition:all .2s}
.btn-outline:hover{border-color:var(--border2);background:var(--bg2)}

/* ── HERO ── */
.hero{padding:120px 0 80px;text-align:center}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--blue-l);border:1px solid var(--blue-m);border-radius:100px;padding:5px 14px;font-size:13px;font-weight:600;color:var(--blue);margin-bottom:28px}
.hero-badge span{width:6px;height:6px;border-radius:50%;background:var(--blue)}
.hero h1{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(36px,5.5vw,64px);font-weight:800;letter-spacing:-2px;line-height:1.08;color:var(--text);margin-bottom:20px}
.hero h1 em{font-style:normal;color:var(--blue)}
.hero-sub{font-size:18px;color:var(--sub);max-width:540px;margin:0 auto 36px;line-height:1.7}
.hero-actions{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:52px}
.hero-social{display:flex;align-items:center;justify-content:center;gap:8px;font-size:13px;color:var(--muted)}
.hero-avs{display:flex}
.hero-av{width:28px;height:28px;border-radius:50%;border:2px solid white;background:var(--blue-l);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--blue);margin-left:-8px}
.hero-av:first-child{margin-left:0}
.stars{color:#F59E0B;letter-spacing:1px;font-size:13px}

/* ── HERO PRODUCT CARD ── */
.hero-visual{max-width:680px;margin:0 auto;background:white;border:1px solid var(--border);border-radius:var(--r2);overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,.08)}
.hv-bar{background:var(--bg2);padding:12px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px}
.hv-dots{display:flex;gap:5px}
.hv-dot{width:10px;height:10px;border-radius:50%}
.hv-title{font-size:12px;color:var(--muted);margin-left:8px;font-weight:500}
.hv-body{padding:24px}
.hv-review{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:16px;margin-bottom:12px}
.hv-rev-top{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.hv-av{width:32px;height:32px;border-radius:50%;background:var(--blue-l);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--blue);flex-shrink:0}
.hv-name{font-size:13px;font-weight:600}
.hv-date{font-size:11px;color:var(--muted)}
.hv-text{font-size:13px;color:var(--sub);line-height:1.6}
.hv-ai{background:var(--blue-l);border:1px solid var(--blue-m);border-radius:var(--r);padding:14px 16px;margin-bottom:12px}
.hv-ai-label{font-size:11px;font-weight:700;color:var(--blue);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;display:flex;align-items:center;gap:6px}
.hv-ai-dot{width:6px;height:6px;border-radius:50%;background:var(--blue);animation:pulse 1.5s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.hv-ai-text{font-size:13px;color:var(--text);line-height:1.65}
.hv-actions{display:flex;gap:8px}
.hv-btn-approve{flex:1;background:var(--blue);color:white;border:none;border-radius:var(--r);padding:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer}
.hv-btn-edit{background:white;color:var(--sub);border:1px solid var(--border);border-radius:var(--r);padding:10px 16px;font-family:'DM Sans',sans-serif;font-size:13px;cursor:pointer}

/* ── STATS STRIP ── */
.stats-strip{border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:28px 0;margin:60px 0}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);text-align:center}
.stat-item{padding:8px 16px;border-right:1px solid var(--border)}
.stat-item:last-child{border-right:none}
.stat-num{font-family:'Bricolage Grotesque',sans-serif;font-size:32px;font-weight:800;letter-spacing:-1.5px;color:var(--blue)}
.stat-lbl{font-size:13px;color:var(--sub);margin-top:2px}

/* ── SECTIONS ── */
section{padding:80px 0}
.section-eyebrow{font-size:13px;font-weight:600;color:var(--blue);letter-spacing:.04em;margin-bottom:10px;display:flex;align-items:center;gap:8px}
.section-eyebrow::before{content:'';width:20px;height:2px;background:var(--blue);border-radius:2px}
.section-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(28px,3.5vw,40px);font-weight:800;letter-spacing:-1.5px;line-height:1.15;color:var(--text);margin-bottom:14px}
.section-sub{font-size:16px;color:var(--sub);line-height:1.75;max-width:520px}

/* ── HOW IT WORKS ── */
.how-bg{background:var(--bg2);padding:80px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:52px}
.step-card{background:white;border:1px solid var(--border);border-radius:var(--r2);padding:28px}
.step-num{width:36px;height:36px;border-radius:var(--r);background:var(--blue-l);border:1px solid var(--blue-m);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:var(--blue);margin-bottom:16px}
.step-title{font-size:16px;font-weight:700;color:var(--text);margin-bottom:8px;letter-spacing:-.3px}
.step-desc{font-size:14px;color:var(--sub);line-height:1.7}

/* ── FEATURES ── */
.feature-block{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;padding:72px 0;border-bottom:1px solid var(--border)}
.feature-block:last-child{border-bottom:none}
.feature-block.rev{direction:rtl}
.feature-block.rev > *{direction:ltr}
.feature-tag{display:inline-flex;align-items:center;gap:6px;background:var(--bg2);border:1px solid var(--border);border-radius:100px;padding:4px 12px;font-size:12px;font-weight:600;color:var(--sub);margin-bottom:16px}
.feature-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(24px,2.8vw,32px);font-weight:800;letter-spacing:-1px;line-height:1.2;margin-bottom:12px}
.feature-desc{font-size:15px;color:var(--sub);line-height:1.75;margin-bottom:20px}
.feature-list{display:flex;flex-direction:column;gap:10px}
.feature-list li{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:var(--sub);list-style:none}
.feature-list li::before{content:'✓';color:var(--blue);font-weight:700;flex-shrink:0;margin-top:1px}
.feature-visual{display:flex;justify-content:center;align-items:center}
.fv-card{background:white;border:1px solid var(--border);border-radius:var(--r2);padding:24px;box-shadow:0 4px 20px rgba(15,23,42,.06);width:100%;max-width:360px}
.fv-card-dark{background:#080808;border:1px solid rgba(201,168,76,.2);border-radius:var(--r2);padding:24px;width:100%;max-width:360px}

/* ── WHEEL (dark luxe in clean card) ── */
.wheel-wrapper{background:#080808;border-radius:var(--r2);padding:24px 20px 20px;overflow:hidden;position:relative}
.wheel-wrapper::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 15%,rgba(201,168,76,.07) 0%,transparent 70%);pointer-events:none}
.wheel-header{text-align:center;margin-bottom:14px;position:relative}
.wheel-eyebrow{font-size:8px;letter-spacing:5px;color:#C9A84C;text-transform:uppercase;font-family:'DM Sans',sans-serif;margin-bottom:4px}
.wheel-title{font-family:'Bricolage Grotesque',sans-serif;font-size:14px;font-weight:700;color:#F0D080;letter-spacing:-.3px}
.wheel-stage{position:relative;width:100%;padding-bottom:100%;margin-bottom:14px}
.wheel-ring-outer{position:absolute;inset:-4px;border-radius:50%;background:conic-gradient(from 0deg,#8A6A1A,#F0D080,#C9A84C,#8A6A1A,#F0D080,#C9A84C,#8A6A1A,#F0D080,#C9A84C,#8A6A1A);padding:2px;z-index:0}
.wheel-ring-inner{width:100%;height:100%;border-radius:50%;background:#080808}
#lp-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:50%;cursor:pointer;z-index:1}
.wheel-ptr{position:absolute;top:-12px;left:50%;transform:translateX(-50%);z-index:5;filter:drop-shadow(0 3px 6px rgba(201,168,76,.5))}
.wheel-boss{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:38px;height:38px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#F0D080,#8A6A1A);border:2px solid #C9A84C;box-shadow:0 0 16px rgba(201,168,76,.4);z-index:6;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .2s,box-shadow .2s}
.wheel-boss:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 0 28px rgba(201,168,76,.7)}
.wheel-result{text-align:center;min-height:40px;transition:all .45s cubic-bezier(.175,.885,.32,1.275);opacity:0;transform:translateY(8px)}
.wheel-result.show{opacity:1;transform:translateY(0)}
.wheel-result-lbl{font-size:8px;letter-spacing:4px;color:#C9A84C;text-transform:uppercase;font-family:'DM Sans',sans-serif;margin-bottom:3px}
.wheel-result-val{font-family:'Bricolage Grotesque',sans-serif;font-size:16px;font-weight:700;background:linear-gradient(135deg,#F0D080,#E8B4A0);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.wheel-lots{display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(201,168,76,.12)}
.wheel-lot{display:flex;align-items:center;gap:6px;padding:5px 7px;background:rgba(201,168,76,.04);border:0.5px solid rgba(201,168,76,.1)}
.wheel-lot-name{font-size:10px;font-weight:600;color:#F5EDD5;font-family:'DM Sans',sans-serif}
.wheel-lot-pct{font-size:9px;color:rgba(201,168,76,.6)}

/* ── TESTIMONIALS ── */
.testi-section{background:var(--bg2);padding:80px 0;border-top:1px solid var(--border)}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
.testi-card{background:white;border:1px solid var(--border);border-radius:var(--r2);padding:24px}
.testi-stars{color:#F59E0B;font-size:13px;margin-bottom:14px}
.testi-text{font-size:14px;color:var(--sub);line-height:1.75;margin-bottom:20px;font-style:italic}
.testi-author{display:flex;align-items:center;gap:10px}
.testi-av{width:36px;height:36px;border-radius:50%;background:var(--blue-l);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--blue);flex-shrink:0}
.testi-name{font-size:13px;font-weight:700;color:var(--text)}
.testi-biz{font-size:12px;color:var(--muted)}
.testi-badge{display:flex;align-items:center;gap:5px;margin-top:5px;font-size:11px;color:var(--green);font-weight:600}

/* ── PRICING ── */
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px;max-width:960px;margin-left:auto;margin-right:auto}
.plan-card{background:white;border:1.5px solid var(--border);border-radius:var(--r2);padding:28px;position:relative;transition:all .2s}
.plan-card:hover{box-shadow:0 8px 32px rgba(15,23,42,.08)}
.plan-card.featured{border-color:var(--blue);box-shadow:0 0 0 1px var(--blue)}
.plan-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);white-space:nowrap;background:var(--blue);color:white;font-size:11px;font-weight:700;padding:4px 14px;border-radius:100px;letter-spacing:.04em}
.plan-name{font-size:14px;font-weight:700;color:var(--text);margin-bottom:8px}
.plan-price{font-family:'Bricolage Grotesque',sans-serif;font-size:38px;font-weight:800;letter-spacing:-1.5px;color:var(--text);margin-bottom:4px}
.plan-price sup{font-size:18px;font-weight:600;vertical-align:top;margin-top:8px}
.plan-price span{font-size:15px;font-weight:500;color:var(--muted)}
.plan-tag{font-size:13px;color:var(--muted);margin-bottom:20px}
.plan-divider{height:1px;background:var(--border);margin:20px 0}
.plan-features{display:flex;flex-direction:column;gap:10px;margin-bottom:24px}
.plan-feat{display:flex;align-items:flex-start;gap:9px;font-size:14px;color:var(--sub)}
.plan-feat-check{color:var(--blue);flex-shrink:0;font-weight:700;margin-top:1px}
.plan-feat-no{color:var(--border2)}
.plan-feat-no + span{color:var(--muted);text-decoration:line-through}
.btn-plan{display:block;width:100%;text-align:center;padding:11px;border-radius:var(--r);font-size:14px;font-weight:600;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;text-decoration:none;transition:all .2s}
.btn-plan-blue{background:var(--blue);color:white}.btn-plan-blue:hover{background:var(--blue-d)}
.btn-plan-outline{background:white;color:var(--text);border:1.5px solid var(--border)}.btn-plan-outline:hover{border-color:var(--border2);background:var(--bg2)}

/* ── CTA FINAL ── */
.cta-section{background:var(--blue);padding:80px 0;text-align:center}
.cta-section h2{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(28px,3.5vw,44px);font-weight:800;letter-spacing:-1.5px;color:white;margin-bottom:14px}
.cta-section p{font-size:16px;color:rgba(255,255,255,.75);margin-bottom:32px;max-width:480px;margin-left:auto;margin-right:auto}
.btn-white{display:inline-flex;align-items:center;gap:6px;background:white;color:var(--blue);font-size:14px;font-weight:700;padding:12px 28px;border-radius:var(--r);text-decoration:none;border:none;cursor:pointer;transition:all .2s}
.btn-white:hover{background:var(--blue-l)}
.btn-white-outline{display:inline-flex;align-items:center;gap:6px;background:transparent;color:white;font-size:14px;font-weight:600;padding:12px 28px;border-radius:var(--r);text-decoration:none;border:1.5px solid rgba(255,255,255,.4);cursor:pointer;transition:all .2s}
.btn-white-outline:hover{border-color:white;background:rgba(255,255,255,.1)}

/* ── FOOTER ── */
footer{background:var(--bg);border-top:1px solid var(--border);padding:56px 0 28px}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:44px}
.footer-logo{font-family:'Bricolage Grotesque',sans-serif;font-size:18px;font-weight:700;letter-spacing:-.04em;color:var(--text);margin-bottom:10px;display:flex;align-items:center}
.footer-logo-dot{color:var(--blue);margin-left:-2px}
.footer-desc{font-size:13px;color:var(--muted);line-height:1.65;max-width:220px}
.footer-col h4{font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.08em;margin-bottom:14px}
.footer-col a{display:block;font-size:13px;color:var(--sub);text-decoration:none;margin-bottom:9px;transition:color .15s}
.footer-col a:hover{color:var(--text)}
.footer-bottom{display:flex;align-items:center;justify-content:space-between;padding-top:24px;border-top:1px solid var(--border)}
.footer-bottom p{font-size:13px;color:var(--muted)}
.footer-links{display:flex;gap:16px}
.footer-links a{font-size:13px;color:var(--muted);text-decoration:none;transition:color .15s}
.footer-links a:hover{color:var(--text)}

/* ── REVIEW CARD ── */
.review-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:14px;margin-bottom:10px}
.review-card:last-child{margin-bottom:0}
.rc-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.rc-meta{display:flex;align-items:center;gap:8px}
.rc-av{width:28px;height:28px;border-radius:50%;background:var(--blue-l);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--blue)}
.rc-name{font-size:13px;font-weight:600}
.rc-stars{color:#F59E0B;font-size:12px}
.rc-tag{font-size:10px;font-weight:700;padding:2px 8px;border-radius:100px}
.rc-tag-ok{background:var(--green-l);color:var(--green)}
.rc-tag-warn{background:#FFF7ED;color:#C2410C}
.rc-text{font-size:12px;color:var(--sub);line-height:1.6;margin-bottom:8px}
.rc-reply{background:var(--blue-l);border-radius:6px;padding:8px 10px;font-size:12px;color:var(--text);line-height:1.55}
.rc-reply-lbl{font-size:10px;font-weight:700;color:var(--blue);margin-bottom:3px;display:flex;align-items:center;gap:5px}

/* ── MODAL ── */
#contact-modal{display:none;position:fixed;inset:0;z-index:9999;background:rgba(15,23,42,.6);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px}
.modal-box{background:white;border-radius:20px;padding:40px 36px;width:100%;max-width:440px;box-shadow:0 24px 60px rgba(15,23,42,.2);position:relative}
.modal-close{position:absolute;top:16px;right:16px;background:none;border:none;font-size:18px;cursor:pointer;color:var(--muted);padding:4px;line-height:1}
.modal-close:hover{color:var(--text)}
.modal-logo{font-family:'Bricolage Grotesque',sans-serif;font-size:18px;font-weight:700;letter-spacing:-.04em;color:var(--text);margin-bottom:4px}
.modal-logo-dot{color:var(--blue);margin-left:-2px}
.modal-badge{display:inline-flex;background:var(--blue-l);color:var(--blue);border-radius:100px;padding:3px 12px;font-size:12px;font-weight:600;margin-bottom:16px}
.modal-title{font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:800;letter-spacing:-.5px;margin-bottom:6px}
.modal-sub{font-size:14px;color:var(--sub);margin-bottom:24px;line-height:1.6}
.modal-sub strong{color:var(--text)}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.field{margin-bottom:12px}
.field label{display:block;font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px}
.field input{width:100%;padding:10px 13px;border:1.5px solid var(--border);border-radius:var(--r);font-family:'DM Sans',sans-serif;font-size:14px;color:var(--text);outline:none;transition:border-color .15s}
.field input:focus{border-color:var(--blue)}
.field input::placeholder{color:var(--muted)}
.field-error{display:none;background:#FEF2F2;border:1px solid #FECACA;border-radius:var(--r);padding:9px 12px;font-size:13px;color:#DC2626;margin-bottom:12px}
.modal-submit{width:100%;padding:13px;background:var(--blue);color:white;border:none;border-radius:var(--r);font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:background .2s}
.modal-submit:hover{background:var(--blue-d)}
.modal-note{text-align:center;font-size:12px;color:var(--muted);margin-top:10px}
.modal-success{display:none;text-align:center;padding:16px 0}
.modal-success-ico{font-size:44px;margin-bottom:14px}
.modal-success h3{font-family:'Bricolage Grotesque',sans-serif;font-size:20px;font-weight:800;margin-bottom:8px}
.modal-success p{font-size:14px;color:var(--sub);line-height:1.65;margin-bottom:20px}
.btn-close-modal{padding:11px 24px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;color:var(--text)}

/* ── COMPLIANCE STRIP ── */
.compliance{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:24px}
.cp-tag{background:var(--green-l);border:1px solid #BBF7D0;border-radius:100px;padding:4px 12px;font-size:12px;font-weight:600;color:var(--green)}

/* ── ANIMATIONS ── */
.fade-in{opacity:0;transform:translateY(16px);transition:opacity .5s ease,transform .5s ease}
.fade-in.visible{opacity:1;transform:translateY(0)}

/* ── MOBILE ── */
@media(max-width:900px){
  .nav-links{display:none}
  .hero{padding:90px 0 60px}
  .hero h1{font-size:36px;letter-spacing:-1.2px}
  .hero-sub{font-size:16px}
  .stats-grid{grid-template-columns:repeat(2,1fr)}
  .stat-item:nth-child(2){border-right:none}
  .stat-item:nth-child(3){border-right:1px solid var(--border);border-top:1px solid var(--border)}
  .stat-item:nth-child(4){border-top:1px solid var(--border)}
  .steps-grid{grid-template-columns:1fr}
  .feature-block{grid-template-columns:1fr;gap:36px;padding:52px 0}
  .feature-block.rev{direction:ltr}
  .feature-visual{order:-1}
  .testi-grid{grid-template-columns:1fr}
  .pricing-grid{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr 1fr}
  .footer-bottom{flex-direction:column;gap:12px;text-align:center}
}
@media(max-width:480px){
  .container{padding:0 16px}
  .nav-inner{padding:0 16px}
  .hero{padding:80px 0 48px}
  .hero h1{font-size:28px}
  .hero-actions{flex-direction:column;align-items:stretch}
  .hero-actions a,.hero-actions button{text-align:center;justify-content:center}
  .stats-grid{grid-template-columns:1fr 1fr}
  section{padding:56px 0}
  .cta-section h2{font-size:26px}
  .footer-grid{grid-template-columns:1fr;gap:28px}
  .field-row{grid-template-columns:1fr}
  .hero-visual{border-radius:12px}
}
`

const BODY = `
<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="/" class="logo">esmy<span class="logo-dot">.</span></a>
    <div class="nav-links">
      <a href="#fonctionnement">Comment ça marche</a>
      <a href="#fonctionnalites">Fonctionnalités</a>
      <a href="#tarifs">Tarifs</a>
      <a href="/about">À propos</a>
      <a href="/demo">API Google</a>
    </div>
    <div class="nav-right">
      <a href="/login" class="btn-ghost">Connexion</a>
      <a href="/login" class="btn-primary">Démarrer gratuitement →</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-badge"><span></span>Roue de fortune · IA · Google Maps</div>
    <h1>Soyez <em>#1</em> sur Google Maps<br>sans y passer du temps</h1>
    <p class="hero-sub">Esmy multiplie vos avis Google grâce à la gamification et répond automatiquement à chaque commentaire — sans que vous ayez à intervenir.</p>
    <div class="hero-actions">
      <a href="/login" class="btn-primary" style="font-size:15px;padding:13px 28px;">Démarrer gratuitement →</a>
      <a href="/demo" class="btn-outline" style="font-size:15px;padding:13px 28px;">Voir la démo API</a>
    </div>
    <div class="hero-social">
      <div class="hero-avs">
        <div class="hero-av">M</div><div class="hero-av">S</div><div class="hero-av">J</div><div class="hero-av">L</div>
      </div>
      <span class="stars">★★★★★</span>
      <span>33 commerçants inscrits · 14 jours gratuits · Sans carte</span>
    </div>

    <!-- PRODUCT MOCKUP -->
    <div class="hero-visual" style="margin-top:52px;">
      <div class="hv-bar">
        <div class="hv-dots">
          <div class="hv-dot" style="background:#FF5F56"></div>
          <div class="hv-dot" style="background:#FFBD2E"></div>
          <div class="hv-dot" style="background:#27C93F"></div>
        </div>
        <div class="hv-title">esmy. — Tableau de bord</div>
      </div>
      <div class="hv-body">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:20px;">
          <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:14px 16px;">
            <div style="font-size:11px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Note Google</div>
            <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:24px;font-weight:800;color:var(--text);">4.9 <span style="font-size:13px;color:var(--green);font-weight:600;">↑ +0.8</span></div>
          </div>
          <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:14px 16px;">
            <div style="font-size:11px;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Avis ce mois</div>
            <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:24px;font-weight:800;color:var(--text);">47 <span style="font-size:13px;color:var(--green);font-weight:600;">↑ +320%</span></div>
          </div>
          <div style="background:var(--blue-l);border:1px solid var(--blue-m);border-radius:var(--r);padding:14px 16px;">
            <div style="font-size:11px;color:var(--blue);font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Position Maps</div>
            <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:24px;font-weight:800;color:var(--blue);">#1 <span style="font-size:13px;font-weight:600;">Local Pack</span></div>
          </div>
        </div>
        <div class="hv-review">
          <div class="hv-rev-top">
            <div class="hv-av">S</div>
            <div><div class="hv-name">Sophie M.</div><div class="hv-date">Il y a 5 min · ★★★★★</div></div>
            <div style="margin-left:auto;font-size:11px;background:#FFF7ED;color:#C2410C;border-radius:100px;padding:2px 10px;font-weight:600;">Nouveau</div>
          </div>
          <div class="hv-text">"Ambiance parfaite, service au top. La roue de la fortune est tellement fun !"</div>
        </div>
        <div class="hv-ai">
          <div class="hv-ai-label"><div class="hv-ai-dot"></div>Réponse IA générée · En attente de validation</div>
          <div class="hv-ai-text">Merci infiniment Sophie ! Votre enthousiasme nous touche vraiment. On a hâte de vous revoir très bientôt ! 🙏</div>
        </div>
        <div class="hv-actions">
          <button class="hv-btn-approve">✓ Approuver et publier sur Google</button>
          <button class="hv-btn-edit">Modifier</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STATS STRIP -->
<div class="stats-strip">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item"><div class="stat-num">+300%</div><div class="stat-lbl">d'avis collectés en moyenne</div></div>
      <div class="stat-item"><div class="stat-num">&lt;24h</div><div class="stat-lbl">pour les premiers avis</div></div>
      <div class="stat-item"><div class="stat-num">94%</div><div class="stat-lbl">des avis ont une réponse IA</div></div>
      <div class="stat-item"><div class="stat-num">10 min</div><div class="stat-lbl">pour configurer et déployer</div></div>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div class="how-bg" id="fonctionnement">
  <div class="container">
    <div class="section-eyebrow">Comment ça marche</div>
    <div class="section-title">3 étapes. Premiers avis en moins de 24h.</div>
    <p class="section-sub">Aucune compétence technique requise. Vos clients jouent, vous gagnez des avis.</p>
    <div class="steps-grid">
      <div class="step-card fade-in">
        <div class="step-num">1</div>
        <div class="step-title">Le client scanne votre QR</div>
        <div class="step-desc">Un QR code sur votre comptoir. Le client scanne depuis son téléphone — sans app à télécharger. Il est redirigé vers votre fiche Google.</div>
      </div>
      <div class="step-card fade-in">
        <div class="step-num">2</div>
        <div class="step-title">Il laisse un avis et joue</div>
        <div class="step-desc">Après son avis Google (toute note 1★ à 5★), la roue de fortune se déverrouille. Il tourne, gagne un lot, reçoit un code unique.</div>
      </div>
      <div class="step-card fade-in">
        <div class="step-num">3</div>
        <div class="step-title">L'IA répond automatiquement</div>
        <div class="step-desc">Chaque avis reçoit une réponse personnalisée générée par IA dans votre ton. Vous validez en 1 clic — ou activez la publication automatique.</div>
      </div>
    </div>
  </div>
</div>

<!-- FEATURES -->
<section id="fonctionnalites">
  <div class="container">

    <!-- Gamification -->
    <div class="feature-block fade-in">
      <div class="feature-text">
        <div class="feature-tag">🎡 Gamification</div>
        <h3 class="feature-title">La roue qui transforme chaque visite en avis</h3>
        <p class="feature-desc">Vos clients ne laissent pas d'avis parce qu'ils n'ont pas de raison suffisante. Esmy crée cette raison avec une mécanique ludique et une récompense immédiate. Jusqu'à +300% d'avis chez certains commerçants.</p>
        <ul class="feature-list">
          <li>Lots entièrement personnalisables (café, réduction, cadeau…)</li>
          <li>Probabilités configurables par lot</li>
          <li>Code unique généré — présenté en caisse</li>
          <li>100% conforme aux règles Google Business</li>
          <li>Données clients collectées automatiquement</li>
        </ul>
      </div>
      <div class="feature-visual">
        <div style="width:100%;max-width:340px;">
          <div class="wheel-wrapper">
            <div class="wheel-header">
              <div class="wheel-eyebrow">Votre roue en live</div>
              <div class="wheel-title">Cliquez pour tourner</div>
            </div>
            <div class="wheel-stage" id="lp-stage">
              <div class="wheel-ring-outer"><div class="wheel-ring-inner"></div></div>
              <canvas id="lp-canvas" onclick="lpSpin()"></canvas>
              <div class="wheel-ptr">
                <svg width="12" height="20" viewBox="0 0 12 20"><polygon points="6,0 12,20 6,15 0,20" fill="#C9A84C"/><polygon points="6,3 10,17 6,12 2,17" fill="#F0D080"/></svg>
              </div>
              <div class="wheel-boss" onclick="lpSpin()">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#080808" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
            </div>
            <div class="wheel-result" id="lp-result">
              <div class="wheel-result-lbl">Lot gagné</div>
              <div class="wheel-result-val" id="lp-result-txt"></div>
            </div>
            <div class="wheel-lots">
              <div class="wheel-lot"><span style="font-size:12px;">☕</span><div><div class="wheel-lot-name">Café offert</div><div class="wheel-lot-pct">40%</div></div></div>
              <div class="wheel-lot"><span style="font-size:12px;">🍕</span><div><div class="wheel-lot-name">Pizza offerte</div><div class="wheel-lot-pct">20%</div></div></div>
              <div class="wheel-lot"><span style="font-size:12px;">🎁</span><div><div class="wheel-lot-name">Bon 20€</div><div class="wheel-lot-pct">25%</div></div></div>
              <div class="wheel-lot"><span style="font-size:12px;">🏝️</span><div><div class="wheel-lot-name">Week-end spa</div><div class="wheel-lot-pct">5%</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- IA -->
    <div class="feature-block rev fade-in">
      <div class="feature-text">
        <div class="feature-tag">🤖 Intelligence Artificielle</div>
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
          <div class="review-card">
            <div class="rc-top">
              <div class="rc-meta"><div class="rc-av">S</div><div><div class="rc-name">Sophie M.</div><div class="rc-stars">★★★★★</div></div></div>
              <div class="rc-tag rc-tag-ok">Répondu ✓</div>
            </div>
            <div class="rc-text">"Ambiance parfaite, le personnel est adorable. On reviendra !"</div>
            <div class="rc-reply"><div class="rc-reply-lbl"><span style="background:var(--blue);color:white;padding:1px 6px;border-radius:4px;font-size:9px;">IA</span> Réponse publiée</div>Merci infiniment Sophie ! Votre fidélité nous touche. On a hâte de vous revoir ! 🙏</div>
          </div>
          <div class="review-card">
            <div class="rc-top">
              <div class="rc-meta"><div class="rc-av" style="background:#FFF7ED;color:#C2410C;">M</div><div><div class="rc-name">Marc D.</div><div class="rc-stars" style="color:#F59E0B;">★★☆☆☆</div></div></div>
              <div class="rc-tag rc-tag-warn">⚠ Urgent</div>
            </div>
            <div class="rc-text">"Attente un peu longue pour une heure creuse."</div>
            <div class="rc-reply" style="background:#FFF7ED;border-left:3px solid #F97316;"><div class="rc-reply-lbl" style="color:#C2410C;"><span style="background:#C2410C;color:white;padding:1px 6px;border-radius:4px;font-size:9px;">IA</span> En attente</div>Cher Marc, merci pour votre retour sincère. Nous prenons note pour améliorer notre service…</div>
          </div>
          <div style="padding:10px 12px;background:var(--blue-l);border-radius:var(--r);margin-top:10px;display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:12px;font-weight:600;color:var(--blue);">94% de taux de réponse</span>
            <span style="font-size:12px;color:var(--muted);">Délai moyen &lt; 2h</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Dashboard -->
    <div class="feature-block fade-in">
      <div class="feature-text">
        <div class="feature-tag">📊 Dashboard & Analytics</div>
        <h3 class="feature-title">Pilotez votre réputation en temps réel</h3>
        <p class="feature-desc">Un tableau de bord clair qui vous donne l'essentiel : votre progression, vos alertes, vos performances par établissement. Conçu pour un commerçant, pas pour un analyste.</p>
        <ul class="feature-list">
          <li>Note Google, évolution semaine par semaine</li>
          <li>Classement dans le Local Pack Google</li>
          <li>Multi-établissements depuis un seul compte</li>
          <li>Export des données et rapports automatiques</li>
        </ul>
      </div>
      <div class="feature-visual">
        <div class="fv-card">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
            <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:12px;">
              <div style="font-size:10px;color:var(--muted);font-weight:600;margin-bottom:3px;">Note Google</div>
              <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:800;">4.9</div>
              <div style="font-size:11px;color:var(--green);font-weight:600;">↑ +0.8 ce mois</div>
            </div>
            <div style="background:var(--blue-l);border:1px solid var(--blue-m);border-radius:var(--r);padding:12px;">
              <div style="font-size:10px;color:var(--blue);font-weight:600;margin-bottom:3px;">Position Maps</div>
              <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:800;color:var(--blue);">#1</div>
              <div style="font-size:11px;color:var(--blue);font-weight:600;">↑ était #4</div>
            </div>
          </div>
          <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:14px;margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;">Avis ce mois</span>
              <span style="font-size:12px;font-weight:700;color:var(--green);">47 ↑ +320%</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:5px;">
              <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:11px;color:var(--muted);width:20px;">5★</span><div style="flex:1;height:6px;background:var(--border);border-radius:3px;"><div style="width:78%;height:100%;background:var(--green);border-radius:3px;"></div></div><span style="font-size:11px;color:var(--muted);">78%</span></div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:11px;color:var(--muted);width:20px;">4★</span><div style="flex:1;height:6px;background:var(--border);border-radius:3px;"><div style="width:14%;height:100%;background:#84CC16;border-radius:3px;"></div></div><span style="font-size:11px;color:var(--muted);">14%</span></div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:11px;color:var(--muted);width:20px;">3★</span><div style="flex:1;height:6px;background:var(--border);border-radius:3px;"><div style="width:5%;height:100%;background:#F59E0B;border-radius:3px;"></div></div><span style="font-size:11px;color:var(--muted);">5%</span></div>
              <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:11px;color:var(--muted);width:20px;">1★</span><div style="flex:1;height:6px;background:var(--border);border-radius:3px;"><div style="width:3%;height:100%;background:#EF4444;border-radius:3px;"></div></div><span style="font-size:11px;color:var(--muted);">3%</span></div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--green-l);border-radius:var(--r);">
            <span style="font-size:14px;">📈</span>
            <span style="font-size:12px;color:var(--green);font-weight:600;">+47 nouveaux clients ce mois grâce à votre meilleur classement</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<div class="testi-section">
  <div class="container">
    <div style="text-align:center;">
      <div class="section-eyebrow" style="justify-content:center;">❤️ Témoignages</div>
      <div class="section-title" style="text-align:center;">Des commerçants qui ont retrouvé leur visibilité</div>
    </div>
    <div class="testi-grid">
      <div class="testi-card fade-in">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"En 3 semaines, on est passé de 47 à 134 avis Google. La roue de la fortune, mes clients adorent ça. Ma fiche remonte enfin dans les recherches 'boulangerie près de moi'."</p>
        <div class="testi-author">
          <div class="testi-av">M</div>
          <div><div class="testi-name">Marie-Claire B.</div><div class="testi-biz">Boulangerie · Aix-en-Provence</div><div class="testi-badge">✓ Avis Google vérifié</div></div>
        </div>
      </div>
      <div class="testi-card fade-in">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"Ce qui m'a convaincu c'est la réponse automatique. Je n'avais jamais le temps de répondre. Maintenant tous mes avis ont une réponse pro. Google a adoré — ma note est passée de 4.0 à 4.8."</p>
        <div class="testi-author">
          <div class="testi-av">J</div>
          <div><div class="testi-name">Julien F.</div><div class="testi-biz">Restaurant Méditerranéen · Marseille</div><div class="testi-badge">✓ Avis Google vérifié</div></div>
        </div>
      </div>
      <div class="testi-card fade-in">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"Ma note est passée de 3.9 à 4.7 en deux mois. J'apparais maintenant dans les 3 premiers résultats quand quelqu'un cherche 'institut beauté Luberon'."</p>
        <div class="testi-author">
          <div class="testi-av">S</div>
          <div><div class="testi-name">Sophie A.</div><div class="testi-biz">Institut de Beauté · Luberon</div><div class="testi-badge">✓ Avis Google vérifié</div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PRICING -->
<section id="tarifs">
  <div class="container">
    <div style="text-align:center;margin-bottom:0;">
      <div class="section-eyebrow" style="justify-content:center;">💰 Tarifs</div>
      <div class="section-title" style="text-align:center;">Simple et transparent</div>
      <p class="section-sub" style="text-align:center;margin:0 auto;">Sans engagement · Annulez à tout moment depuis votre espace client.</p>
    </div>
    <div class="pricing-grid">
      <div class="plan-card fade-in">
        <div class="plan-name">Starter</div>
        <div class="plan-price"><sup>€</sup>33<span> /mois</span></div>
        <div class="plan-tag">1 établissement · Pour démarrer</div>
        <div class="plan-divider"></div>
        <div class="plan-features">
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Réponses IA aux avis</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>QR code imprimable</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Avis illimités</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Dashboard basique</div>
          <div class="plan-feat"><span class="plan-feat-no">—</span><span>Roue de fortune</span></div>
          <div class="plan-feat"><span class="plan-feat-no">—</span><span>SMS post-visite</span></div>
        </div>
        <a href="#" class="btn-plan btn-plan-outline" onclick="openModal('Starter');return false">Démarrer</a>
      </div>
      <div class="plan-card featured fade-in">
        <div class="plan-badge">Le plus populaire</div>
        <div class="plan-name">Pro</div>
        <div class="plan-price"><sup>€</sup>69<span> /mois</span></div>
        <div class="plan-tag">Jusqu'à 3 établissements</div>
        <div class="plan-divider"></div>
        <div class="plan-features">
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Tout le plan Starter</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Roue de fortune personnalisée</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Avis illimités</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Réponses IA automatiques</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>SMS post-visite</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Analytics avancés</div>
        </div>
        <a href="#" class="btn-plan btn-plan-blue" onclick="openModal('Pro');return false">Démarrer le Pro</a>
      </div>
      <div class="plan-card fade-in">
        <div class="plan-name">Agence</div>
        <div class="plan-price" style="font-size:26px;letter-spacing:-.5px;">Sur demande</div>
        <div class="plan-tag">Établissements illimités · Tarif personnalisé</div>
        <div class="plan-divider"></div>
        <div class="plan-features">
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Tout le plan Pro</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Dashboard agence multi-clients</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Marque blanche</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>API access</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Support prioritaire</div>
          <div class="plan-feat"><span class="plan-feat-check">✓</span>Onboarding dédié</div>
        </div>
        <a href="#" class="btn-plan btn-plan-outline" onclick="openModal('Agence');return false">Nous contacter →</a>
      </div>
    </div>
    <p style="text-align:center;font-size:13px;color:var(--muted);margin-top:20px;">Sans engagement · Sans frais cachés · Annulez à tout moment</p>
  </div>
</section>

<!-- CTA FINAL -->
<div class="cta-section">
  <div class="container">
    <h2>Prêt à être #1 sur Google Maps ?</h2>
    <p>Rejoignez les premiers commerçants qui dominent leur réputation locale avec Esmy. Configuration en 10 minutes.</p>
    <div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;">
      <a href="/login" class="btn-white">Démarrer gratuitement →</a>
      <a href="/demo" class="btn-white-outline">Voir la démo API Google</a>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">esmy<span class="footer-logo-dot">.</span></div>
        <p class="footer-desc">La plateforme SaaS qui aide les commerçants locaux à dominer Google Maps grâce à la gamification et à l'IA.</p>
        <p style="font-size:12px;color:var(--muted);margin-top:10px;">Made in Provence 🌿</p>
      </div>
      <div class="footer-col">
        <h4>Produit</h4>
        <a href="#fonctionnalites">Fonctionnalités</a>
        <a href="#tarifs">Tarifs</a>
        <a href="/demo">Démo API Google</a>
        <a href="/login">Dashboard</a>
      </div>
      <div class="footer-col">
        <h4>Entreprise</h4>
        <a href="/about">À propos</a>
        <a href="#" onclick="openModal('Contact');return false">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Légal</h4>
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/privacy">Confidentialité</a>
        <a href="/terms">CGU</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Esmy · contact@esmy.ai</p>
      <div class="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/privacy">Confidentialité</a>
        <a href="/terms">CGU</a>
      </div>
    </div>
  </div>
</footer>

<!-- CONTACT MODAL -->
<div id="contact-modal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(15,23,42,.6);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px;">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-logo">esmy<span class="modal-logo-dot">.</span></div>
    <div class="modal-badge" id="modal-badge">Plan Pro</div>
    <h2 class="modal-title">Démarrons ensemble</h2>
    <p class="modal-sub">Laissez vos coordonnées — nous vous contactons <strong>sous 24h</strong> pour configurer votre compte.</p>
    <div id="modal-form">
      <div class="field-row">
        <div class="field"><label>Prénom et nom *</label><input type="text" id="cf-name" placeholder="Marie Dupont"></div>
        <div class="field"><label>Téléphone *</label><input type="tel" id="cf-phone" placeholder="06 12 34 56 78"></div>
      </div>
      <div class="field"><label>Email *</label><input type="email" id="cf-email" placeholder="contact@moncommerce.fr"></div>
      <div class="field"><label>Nom du commerce *</label><input type="text" id="cf-biz" placeholder="La Bella Pizza"></div>
      <div class="field-error" id="cf-error">Veuillez remplir tous les champs.</div>
      <button class="modal-submit" onclick="submitContact()">Envoyer ma demande →</button>
      <p class="modal-note">Sans engagement · Nous vous rappelons sous 24h</p>
    </div>
    <div class="modal-success" id="modal-success">
      <div class="modal-success-ico">🎉</div>
      <h3>Demande envoyée !</h3>
      <p>Merci ! Notre équipe vous contactera <strong>sous 24 heures</strong> pour configurer votre compte Esmy.</p>
      <button class="btn-close-modal" onclick="closeModal()">Fermer</button>
    </div>
  </div>
</div>
`

const SCRIPTS = `
// ── INTERSECTION OBSERVER ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// ── MODAL ──
function openModal(plan) {
  document.getElementById('modal-badge').textContent = 'Plan ' + plan;
  var m = document.getElementById('contact-modal');
  m.style.cssText = 'display:flex;position:fixed;inset:0;z-index:9999;background:rgba(15,23,42,.6);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px;';
  document.getElementById('modal-form').style.display = 'block';
  document.getElementById('modal-success').style.display = 'none';
  document.getElementById('cf-error').style.display = 'none';
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('contact-modal').style.display = 'none';
  document.body.style.overflow = '';
}
document.getElementById('contact-modal').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
function submitContact() {
  var name=document.getElementById('cf-name').value.trim();
  var phone=document.getElementById('cf-phone').value.trim();
  var email=document.getElementById('cf-email').value.trim();
  var biz=document.getElementById('cf-biz').value.trim();
  var err=document.getElementById('cf-error');
  if(!name||!phone||!email||!biz||!email.includes('@')){err.style.display='block';return;}
  err.style.display='none';
  document.getElementById('modal-form').style.display='none';
  document.getElementById('modal-success').style.display='block';
}

// ── LUXURY WHEEL ──
(function(){
  var segs=[
    {label:'Café offert',    weight:40,color:'#130C00',text:'#F0D080'},
    {label:'Pizza offerte',  weight:20,color:'#0A1200',text:'#C9A84C'},
    {label:'Bon 20€',        weight:25,color:'#080A1A',text:'#E8B4A0'},
    {label:'Dessert offert', weight:10,color:'#1A0A0D',text:'#F0D080'},
    {label:'Week-end spa',   weight:5, color:'#050A14',text:'#C9A84C'},
  ];
  var angle=0,spinning=false,cv,size;
  function setup(){
    var stage=document.getElementById('lp-stage');
    if(!stage)return;
    cv=document.getElementById('lp-canvas');
    size=stage.offsetWidth;
    cv.width=size; cv.height=size;
    draw(angle);
  }
  function draw(a){
    if(!cv)return;
    var ctx=cv.getContext('2d'),w=size,cx=w/2,cy=w/2,r=w/2-3;
    ctx.clearRect(0,0,w,w);
    var total=segs.reduce(function(s,g){return s+g.weight;},0);
    var sa=a-Math.PI/2;
    segs.forEach(function(seg){
      var sl=seg.weight/total*Math.PI*2,ea=sa+sl,mid=sa+sl/2;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r-1,sa,ea);ctx.closePath();
      ctx.fillStyle=seg.color;ctx.fill();
      var g=ctx.createRadialGradient(cx,cy,0,cx,cy,r);
      g.addColorStop(0,'rgba(255,255,255,.04)');g.addColorStop(.65,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.28)');
      ctx.fillStyle=g;ctx.fill();
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+r*Math.cos(sa),cy+r*Math.sin(sa));
      ctx.strokeStyle='rgba(201,168,76,.55)';ctx.lineWidth=1.2;ctx.stroke();
      ctx.save();ctx.translate(cx,cy);ctx.rotate(mid);ctx.textAlign='right';
      ctx.fillStyle=seg.text;var fs=Math.max(8,Math.min(11,r*.068));
      ctx.font='600 '+fs+'px DM Sans,sans-serif';
      ctx.shadowColor='rgba(0,0,0,.9)';ctx.shadowBlur=5;
      ctx.fillText(seg.label,r-12,fs*.35,r*.62);ctx.restore();
      sa=ea;
    });
    ctx.beginPath();ctx.arc(cx,cy,r-1,0,Math.PI*2);
    ctx.strokeStyle='rgba(201,168,76,.65)';ctx.lineWidth=1.5;ctx.stroke();
    var dots=32;
    for(var i=0;i<dots;i++){
      var da=i/dots*Math.PI*2;
      ctx.beginPath();ctx.arc(cx+(r-6)*Math.cos(da),cy+(r-6)*Math.sin(da),1,0,Math.PI*2);
      ctx.fillStyle=i%3===0?'rgba(201,168,76,.7)':'rgba(201,168,76,.2)';ctx.fill();
    }
    ctx.beginPath();ctx.arc(cx,cy,r*.13,0,Math.PI*2);
    ctx.fillStyle='rgba(8,8,8,.96)';ctx.fill();
    ctx.strokeStyle='rgba(201,168,76,.5)';ctx.lineWidth=1;ctx.stroke();
  }
  window.lpSpin=function(){
    if(spinning)return;spinning=true;
    var res=document.getElementById('lp-result');
    res.style.opacity='0';res.style.transform='translateY(8px)';
    var total=segs.reduce(function(s,g){return s+g.weight;},0);
    var rand=Math.random()*total,acc=0,ti=0;
    for(var i=0;i<segs.length;i++){acc+=segs[i].weight;if(rand<acc){ti=i;break;}}
    var slices=segs.map(function(s){return s.weight/total*Math.PI*2;});
    var ss=slices.slice(0,ti).reduce(function(a,b){return a+b;},0);
    var ta=ss+slices[ti]/2;
    var end=angle+7*Math.PI*2+(Math.PI*1.5-ta)+(Math.random()-.5)*slices[ti]*.4;
    var t0=performance.now(),dur=5500,start=angle;
    function ease(t){return 1-Math.pow(1-t,4);}
    function frame(now){
      var t=Math.min((now-t0)/dur,1);
      angle=start+(end-start)*ease(t);draw(angle);
      if(t<1){requestAnimationFrame(frame);}
      else{
        angle=end%(Math.PI*2);draw(angle);spinning=false;
        document.getElementById('lp-result-txt').textContent=segs[ti].label;
        res.style.opacity='1';res.style.transform='translateY(0)';
      }
    }
    requestAnimationFrame(frame);
  };
  window.addEventListener('load',setup);
  window.addEventListener('resize',function(){
    var stage=document.getElementById('lp-stage');if(!stage||!cv)return;
    size=stage.offsetWidth;cv.width=size;cv.height=size;draw(angle);
  });
})();
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Esmy — Soyez #1 sur Google Maps</title>
        <meta name="description" content="Esmy multiplie vos avis Google grâce à la gamification et répond automatiquement à chaque commentaire avec l'IA." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Bricolage+Grotesque:wght@700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      <script dangerouslySetInnerHTML={{ __html: SCRIPTS }} />
    </>
  )
}
