import Head from 'next/head'

const STYLES = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --slate:#111827;--slate2:#1F2937;--slate3:#374151;--orange:#F97316;--orange-d:#EA6C0A;
  --amber:#F59E0B;--cream:#FAFAF6;--g100:#F4F4F1;--g200:#E8E8E2;--g400:#9B9B8E;
  --g600:#5A5A50;--text:#111827;--textsub:#5A6478;--green:#16A34A;
  --r:14px;--rlg:20px;--sh:0 2px 12px rgba(17,24,39,0.08);
  --shmd:0 8px 32px rgba(17,24,39,0.12);--shlg:0 20px 60px rgba(17,24,39,0.18);
}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:var(--cream);color:var(--text);line-height:1.6;overflow-x:hidden}
.container{max-width:1140px;margin:0 auto;padding:0 24px}
.btn-cta{display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:white;border:none;padding:14px 28px;border-radius:100px;font-size:15px;font-weight:700;cursor:pointer;text-decoration:none;transition:all .2s;box-shadow:0 4px 20px rgba(249,115,22,.4)}
.btn-cta:hover{background:var(--orange-d);transform:translateY(-1px)}
.btn-ghost-w{display:inline-flex;align-items:center;gap:8px;background:transparent;color:white;border:1.5px solid rgba(255,255,255,.35);padding:13px 26px;border-radius:100px;font-size:15px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s}
.btn-ghost-w:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6)}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(17,24,39,.94);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:1140px;margin:0 auto;padding:0 24px}
.logo{display:flex;align-items:center;gap:0;color:white;text-decoration:none;font-weight:700;font-size:22px;letter-spacing:-.04em;font-family:'Bricolage Grotesque',sans-serif}
.logo-dot{color:rgba(255,255,255,.35);margin-left:-2px;letter-spacing:-.5px}
.nav-links{display:flex;align-items:center;gap:28px}
.nav-links a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;font-weight:500;transition:color .15s}
.nav-links a:hover{color:white}
.nav-cta{display:flex;align-items:center;gap:12px}
.nav-cta .login{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;font-weight:500;transition:color .15s}
.nav-cta .login:hover{color:white}
.hero{background:linear-gradient(145deg,#111827 0%,#1a2538 55%,#0f1a2e 100%);min-height:100vh;padding:130px 0 90px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-150px;right:-150px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.12) 0%,transparent 70%);pointer-events:none}
.hero::after{content:'';position:absolute;bottom:-80px;left:8%;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(245,158,11,.06) 0%,transparent 70%);pointer-events:none}
.near-me-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(22,163,74,.15);border:1px solid rgba(22,163,74,.3);border-radius:100px;padding:5px 14px 5px 8px;font-size:13px;color:#4ADE80;font-weight:600;margin-bottom:22px}
.near-me-pill .g-dot{width:22px;height:22px;background:#4ADE80;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900;color:#111827}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.hero-left{position:relative;z-index:2}
.hero-h1{font-size:clamp(36px,5vw,56px);font-weight:800;line-height:1.08;color:white;letter-spacing:-1.5px;margin-bottom:20px}
.near{display:inline-block;background:rgba(249,115,22,.15);border-radius:8px;padding:0 8px;color:var(--orange);font-style:italic}
.hero-sub{font-size:17px;color:rgba(255,255,255,.65);line-height:1.75;margin-bottom:36px;max-width:460px}
.hero-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:44px}
.hero-social{display:flex;align-items:center;gap:14px;border-top:1px solid rgba(255,255,255,.08);padding-top:24px}
.hero-social .avs{display:flex}
.hero-social .av{width:34px;height:34px;border-radius:50%;border:2px solid #1F2937;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--slate);margin-left:-7px}
.hero-social .av:first-child{margin-left:0}
.av-a{background:#FED7AA!important}.av-b{background:#BBF7D0!important}.av-c{background:#BFDBFE!important}.av-d{background:#FDE68A!important}
.hero-social-txt{font-size:13.5px;color:rgba(255,255,255,.6);line-height:1.45}
.hero-social-txt strong{color:white;font-weight:700}
.hero-right{position:relative;z-index:2;display:flex;justify-content:center;align-items:center}
.hero-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:var(--rlg);padding:24px;backdrop-filter:blur(10px);width:100%;max-width:400px}
.hc-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.hc-brand{display:flex;align-items:center;gap:10px}
.hc-logo{width:38px;height:38px;border-radius:10px;background:var(--orange);display:flex;align-items:center;justify-content:center;font-size:18px}
.hc-name{color:white;font-weight:700;font-size:14px}
.hc-loc{color:rgba(255,255,255,.45);font-size:11px;margin-top:1px}
.hc-tag{background:rgba(22,163,74,.2);color:#4ADE80;border-radius:100px;padding:3px 10px;font-size:11px;font-weight:600}
.g-listing{background:white;border-radius:12px;padding:14px 16px;margin-bottom:12px}
.gl-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.gl-name{font-size:13px;font-weight:700;color:#1a0dab}
.gl-pos{font-size:11px;background:#e8f5e9;color:#2e7d32;border-radius:100px;padding:2px 8px;font-weight:700}
.gl-stars{color:#f5a623;font-size:12px}
.gl-count{font-size:11px;color:#666;margin-left:4px}
.gl-tag{font-size:11px;color:#666;display:flex;align-items:center;gap:4px;margin-top:4px}
.near-badge{background:rgba(249,115,22,.12);border:1px solid rgba(249,115,22,.25);border-radius:8px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;gap:10px}
.nb-icon{font-size:18px}
.nb-text{font-size:12px;color:rgba(255,255,255,.7);line-height:1.4}
.nb-text strong{color:var(--orange)}
.reviews-mini{display:flex;flex-direction:column;gap:8px}
.rm-item{background:rgba(255,255,255,.04);border-radius:8px;padding:10px 12px;display:flex;align-items:flex-start;gap:10px}
.rm-av{width:24px;height:24px;border-radius:50%;background:rgba(249,115,22,.3);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:white;flex-shrink:0}
.rm-av.b{background:rgba(22,163,74,.3)}
.rm-stars{color:var(--amber);font-size:10px}
.rm-text{font-size:11px;color:rgba(255,255,255,.6);margin-top:1px;line-height:1.4}
.rm-reply{font-size:10.5px;color:#4ADE80;margin-top:4px;font-style:italic}
.fr-card{position:absolute;background:white;border-radius:10px;padding:10px 14px;box-shadow:0 8px 32px rgba(0,0,0,.3);max-width:180px;animation:floatY 6s ease-in-out infinite}
.fr-card.top{top:-16px;right:-24px;animation-delay:0s}
.fr-card.bot{bottom:20px;left:-28px;animation-delay:3s}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.frc-stars{color:var(--amber);font-size:11px}
.frc-text{font-size:11.5px;color:var(--g600);line-height:1.4;margin-top:2px}
.frc-name{font-size:10.5px;font-weight:700;color:var(--slate);margin-top:4px}
.stats-bar{background:white;border-top:1px solid var(--g200);border-bottom:1px solid var(--g200)}
.stats-inner{display:grid;grid-template-columns:repeat(4,1fr)}
.stat-item{padding:28px 24px;text-align:center;border-right:1px solid var(--g200)}
.stat-item:last-child{border-right:none}
.stat-num{font-size:34px;font-weight:800;color:var(--slate);letter-spacing:-1px}
.stat-num .accent{color:var(--orange)}
.stat-label{font-size:13.5px;color:var(--textsub);margin-top:3px}
.near-section{background:var(--slate);padding:80px 0;position:relative;overflow:hidden}
.near-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 70% 50%,rgba(249,115,22,.08) 0%,transparent 60%)}
.near-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;position:relative}
.near-label{font-size:12px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.near-title{font-size:clamp(26px,3.5vw,40px);font-weight:800;color:white;letter-spacing:-1px;margin-bottom:16px;line-height:1.15}
.near-desc{font-size:16px;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:24px}
.near-facts{display:flex;flex-direction:column;gap:14px}
.near-fact{display:flex;align-items:flex-start;gap:12px;font-size:14.5px;color:rgba(255,255,255,.75)}
.near-fact .ico{width:28px;height:28px;border-radius:7px;background:rgba(249,115,22,.15);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;margin-top:1px}
.local-pack{background:white;border-radius:14px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.35)}
.lp-header{background:#f8f9fa;padding:10px 14px;border-bottom:1px solid #e8eaed;display:flex;align-items:center;gap:8px}
.lp-search{font-size:13px;color:#3c4043;background:white;border:1px solid #dfe1e5;border-radius:22px;padding:5px 14px;flex:1}
.lp-map{height:80px;background:linear-gradient(135deg,#e8f4e8 0%,#d4edda 100%);display:flex;align-items:center;justify-content:center;gap:8px;font-size:13px;color:#3c4043}
.lp-results{padding:8px 0}
.lp-row{display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid #f0f0f0;cursor:pointer;transition:background .15s}
.lp-row:hover{background:#f8f9fa}
.lp-row:last-child{border-bottom:none}
.lp-rank{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0}
.r1{background:var(--orange);color:white}.r2{background:#e8eaed;color:#5f6368}.r3{background:#e8eaed;color:#5f6368}
.lp-biz-name{font-size:13px;font-weight:700;color:#1a0dab}
.lp-stars-row{display:flex;align-items:center;gap:4px;margin-top:1px}
.lp-stars{color:var(--amber);font-size:11px}
.lp-reviews{font-size:11px;color:#70757a}
.lp-esmy{margin-left:auto;font-size:10px;background:rgba(249,115,22,.1);color:var(--orange);border-radius:100px;padding:2px 8px;font-weight:600}
section{padding:96px 0}
.section-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(249,115,22,.08);color:var(--orange);border-radius:100px;padding:5px 14px;font-size:13px;font-weight:600;margin-bottom:14px}
.section-title{font-size:clamp(28px,4vw,42px);font-weight:800;letter-spacing:-1px;line-height:1.12;margin-bottom:14px}
.section-sub{font-size:17px;color:var(--textsub);line-height:1.7;max-width:560px}
.text-center{text-align:center}
.text-center .section-sub{margin:0 auto}
.how{background:var(--cream)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:56px;position:relative}
.steps::before{content:'';position:absolute;top:34px;left:18%;right:18%;height:1px;background:linear-gradient(to right,transparent,var(--orange),transparent)}
.step-card{background:white;border-radius:var(--rlg);padding:30px;border:1px solid var(--g200);position:relative;transition:all .3s}
.step-card:hover{transform:translateY(-4px);box-shadow:var(--shmd)}
.step-num{width:44px;height:44px;border-radius:50%;background:var(--slate);color:white;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.step-card:nth-child(2) .step-num{background:var(--orange)}
.step-card:nth-child(3) .step-num{background:var(--amber);color:var(--slate)}
.step-icon{font-size:30px;margin-bottom:14px}
.step-title{font-size:17px;font-weight:700;margin-bottom:8px}
.step-desc{font-size:14.5px;color:var(--textsub);line-height:1.65}
.features{background:white}
.feature-block{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;padding:56px 0;border-bottom:1px solid var(--g200)}
.feature-block:last-child{border-bottom:none;padding-bottom:0}
.feature-block.rev .feature-visual{order:-1}
.feature-label{font-size:11.5px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}
.feature-title{font-size:clamp(22px,3vw,32px);font-weight:800;letter-spacing:-.8px;margin-bottom:14px;line-height:1.2}
.feature-desc{font-size:15.5px;color:var(--textsub);line-height:1.75;margin-bottom:24px}
.feature-list{list-style:none;display:flex;flex-direction:column;gap:10px}
.feature-list li{display:flex;align-items:flex-start;gap:10px;font-size:14.5px;color:var(--g600)}
.feature-list li::before{content:'✓';color:var(--orange);font-weight:700;flex-shrink:0;margin-top:1px}
.feature-visual{display:flex;justify-content:center;align-items:center}
.fv-card{background:var(--cream);border-radius:var(--rlg);padding:22px;border:1px solid var(--g200);width:100%;max-width:370px;box-shadow:var(--shmd)}
.review-item{background:white;border-radius:10px;padding:14px;margin-bottom:10px;border:1px solid var(--g200);display:flex;flex-direction:column;gap:7px}
.rv-header{display:flex;align-items:center;justify-content:space-between}
.rv-author{font-weight:700;font-size:13.5px;color:var(--slate)}
.rv-stars{color:var(--amber);font-size:12px}
.rv-text{font-size:12.5px;color:var(--g600);line-height:1.5}
.ai-reply{background:rgba(249,115,22,.05);border:1px solid rgba(249,115,22,.15);border-radius:7px;padding:10px;font-size:12px;color:var(--textsub);line-height:1.5}
.ai-header{display:flex;align-items:center;gap:6px;font-size:10.5px;font-weight:700;color:var(--orange);margin-bottom:5px}
.ai-tag{background:var(--orange);color:white;border-radius:4px;padding:1px 6px;font-size:9.5px;font-weight:700}
.dash-stat{background:white;border-radius:10px;padding:14px 18px;border:1px solid var(--g200);margin-bottom:10px;display:flex;align-items:center;gap:12px}
.ds-icon{width:40px;height:40px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px}
.ds-icon.o{background:rgba(249,115,22,.1)}.ds-icon.g{background:rgba(22,163,74,.1)}.ds-icon.s{background:rgba(17,24,39,.07)}
.ds-lbl{font-size:11.5px;color:var(--textsub)}
.ds-val{font-size:20px;font-weight:800;color:var(--slate);letter-spacing:-.5px}
.ds-trend{font-size:11.5px;color:var(--green);font-weight:600}
.testimonials{background:var(--slate);padding:96px 0}
.testimonials .section-title{color:white}
.testimonials .section-sub{color:rgba(255,255,255,.55)}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px}
.testi-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:var(--rlg);padding:26px;transition:all .3s}
.testi-card:hover{background:rgba(255,255,255,.08);transform:translateY(-3px)}
.testi-stars{color:var(--amber);font-size:13px;margin-bottom:12px;letter-spacing:2px}
.testi-text{font-size:14.5px;color:rgba(255,255,255,.78);line-height:1.7;margin-bottom:18px;font-style:italic}
.testi-author{display:flex;align-items:center;gap:11px}
.testi-av{width:38px;height:38px;border-radius:50%;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center}
.ta-a{background:rgba(249,115,22,.3);color:#FED7AA}.ta-b{background:rgba(245,158,11,.3);color:#FDE68A}.ta-c{background:rgba(100,180,255,.2);color:#BFDBFE}
.testi-name{color:white;font-weight:700;font-size:13.5px}
.testi-role{color:rgba(255,255,255,.45);font-size:12px}
.g-validated{margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:6px;font-size:11.5px;color:rgba(255,255,255,.35)}
.pricing{background:var(--cream)}
.pricing-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:22px;margin-top:52px;max-width:900px;margin-left:auto;margin-right:auto}
.plan-card{background:white;border-radius:var(--rlg);padding:32px;border:1px solid var(--g200);position:relative}
.plan-card.feat{background:var(--slate);border:none;box-shadow:0 20px 60px rgba(17,24,39,.25)}
.plan-badge{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--orange);color:white;border-radius:100px;padding:4px 16px;font-size:11.5px;font-weight:700;white-space:nowrap}
.plan-name{font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--textsub);margin-bottom:8px}
.plan-card.feat .plan-name{color:rgba(255,255,255,.55)}
.plan-price{font-size:44px;font-weight:800;letter-spacing:-2px;color:var(--slate);margin-bottom:4px}
.plan-price sup{font-size:18px;vertical-align:super;letter-spacing:0}
.plan-price span{font-size:15px;font-weight:500;color:var(--textsub);letter-spacing:0}
.plan-card.feat .plan-price{color:white}
.plan-card.feat .plan-price span{color:rgba(255,255,255,.45)}
.plan-tag{font-size:13px;color:var(--textsub);margin-bottom:22px;line-height:1.5}
.plan-card.feat .plan-tag{color:rgba(255,255,255,.55)}
.plan-divider{height:1px;background:var(--g200);margin-bottom:20px}
.plan-card.feat .plan-divider{background:rgba(255,255,255,.1)}
.plan-features{list-style:none;display:flex;flex-direction:column;gap:11px;margin-bottom:28px}
.plan-features li{display:flex;align-items:center;gap:9px;font-size:13.5px;color:var(--g600)}
.plan-card.feat .plan-features li{color:rgba(255,255,255,.72)}
.pf-check{width:18px;height:18px;flex-shrink:0}
.pf-no{color:var(--g400)!important}
.btn-plan{display:flex;align-items:center;justify-content:center;background:var(--orange);color:white;border-radius:100px;padding:13px;font-size:14px;font-weight:700;width:100%;text-decoration:none;border:none;cursor:pointer;transition:all .2s}
.btn-plan:hover{background:var(--orange-d)}
.btn-plan-w{display:flex;align-items:center;justify-content:center;background:white;color:var(--slate);border-radius:100px;padding:13px;font-size:14px;font-weight:700;width:100%;text-decoration:none;border:none;cursor:pointer;transition:all .2s}
.btn-plan-w:hover{background:var(--cream)}
.btn-plan-ghost{display:flex;align-items:center;justify-content:center;background:transparent;color:var(--slate);border:1.5px solid var(--g200);border-radius:100px;padding:12px;font-size:14px;font-weight:600;width:100%;text-decoration:none;cursor:pointer;transition:all .2s}
.btn-plan-ghost:hover{border-color:var(--slate)}
.cta-section{background:linear-gradient(135deg,var(--orange) 0%,#E86208 100%);padding:96px 0;text-align:center}
.cta-section h2{font-size:clamp(28px,4vw,48px);font-weight:800;color:white;letter-spacing:-1px;margin-bottom:14px}
.cta-section p{font-size:17px;color:rgba(255,255,255,.8);margin-bottom:36px}
.cta-actions{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap}
.btn-white-cta{display:inline-flex;align-items:center;gap:8px;background:white;color:var(--orange);border-radius:100px;padding:14px 30px;font-size:15px;font-weight:800;cursor:pointer;text-decoration:none;transition:all .2s;box-shadow:0 4px 20px rgba(0,0,0,.2)}
.btn-white-cta:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.25)}
footer{background:var(--slate);padding:56px 0 28px}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:44px}
.footer-brand p{font-size:13.5px;color:rgba(255,255,255,.45);line-height:1.65;max-width:240px;margin-top:12px}
.footer-col h4{font-size:12.5px;font-weight:700;color:white;letter-spacing:.5px;margin-bottom:14px}
.footer-col a{display:block;font-size:13.5px;color:rgba(255,255,255,.45);text-decoration:none;margin-bottom:9px;transition:color .2s}
.footer-col a:hover{color:rgba(255,255,255,.85)}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding-top:22px;display:flex;align-items:center;justify-content:space-between}
.footer-bottom p{font-size:12.5px;color:rgba(255,255,255,.3)}
.footer-links{display:flex;gap:18px}
.footer-links a{font-size:12.5px;color:rgba(255,255,255,.3);text-decoration:none;transition:color .2s}
.footer-links a:hover{color:rgba(255,255,255,.55)}
/* WHEEL */
.wheel-wrapper{background:var(--cream);border-radius:var(--rlg);padding:22px 18px 18px;border:1px solid var(--g200);box-shadow:var(--shmd)}
.wheel-eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--g400);margin-bottom:6px;text-align:center}
.wheel-hint{font-size:12px;font-weight:600;color:var(--orange);text-align:center;margin-bottom:14px}
.wheel-stage{position:relative;width:100%;padding-bottom:100%;margin-bottom:12px}
.wheel-ring-outer{position:absolute;inset:-3px;border-radius:50%;background:var(--slate);padding:2px;z-index:0}
.wheel-ring-inner{width:100%;height:100%;border-radius:50%;background:var(--cream)}
#lp-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:50%;cursor:pointer;z-index:1;transition:filter .3s}
#lp-canvas:hover{filter:drop-shadow(0 0 10px rgba(249,115,22,.3))}
.wheel-ptr{position:absolute;top:-10px;left:50%;transform:translateX(-50%);z-index:5;filter:drop-shadow(0 2px 4px rgba(17,24,39,.3))}
.wheel-boss{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:38px;height:38px;border-radius:50%;background:white;border:3px solid var(--slate);box-shadow:0 2px 8px rgba(17,24,39,.2);z-index:6;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .2s,box-shadow .2s}
.wheel-boss:hover{transform:translate(-50%,-50%) scale(1.08);box-shadow:0 4px 16px rgba(17,24,39,.3)}
.wheel-result{text-align:center;min-height:38px;transition:all .45s cubic-bezier(.175,.885,.32,1.275);opacity:0;transform:translateY(8px)}
.wheel-result.show{opacity:1;transform:translateY(0)}
.wheel-result-lbl{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--g400);margin-bottom:3px}
.wheel-result-val{font-size:16px;font-weight:800;color:var(--orange)}
.wheel-lots{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:12px;padding-top:12px;border-top:1px solid var(--g200)}
.wheel-lot{display:flex;align-items:center;gap:6px;padding:6px 8px;background:white;border:1px solid var(--g200);border-radius:8px}
.wheel-lot-name{font-size:10px;font-weight:700;color:var(--slate)}
.wheel-lot-pct{font-size:9px;color:var(--g400)}
/* MODAL */
#contact-modal{display:none;position:fixed;inset:0;z-index:9999;background:rgba(17,24,39,.75);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px}
.modal-box{background:white;border-radius:20px;padding:40px 36px;width:100%;max-width:440px;box-shadow:0 24px 60px rgba(15,23,42,.2);position:relative}
.modal-close{position:absolute;top:16px;right:16px;background:none;border:none;font-size:18px;cursor:pointer;color:#9ca3af;padding:4px;line-height:1}
.modal-close:hover{color:#111827}
.modal-logo{font-family:'Bricolage Grotesque',sans-serif;font-size:18px;font-weight:700;letter-spacing:-.04em;color:var(--slate);margin-bottom:4px;display:flex;align-items:center}
.modal-logo-dot{color:rgba(0,0,0,.25);margin-left:-2px}
.modal-badge{display:inline-flex;background:rgba(249,115,22,.1);color:var(--orange);border-radius:100px;padding:3px 12px;font-size:12px;font-weight:600;margin-bottom:14px;border:1px solid rgba(249,115,22,.2)}
.modal-title{font-size:22px;font-weight:800;letter-spacing:-.5px;margin-bottom:6px}
.modal-sub{font-size:14px;color:var(--textsub);margin-bottom:20px;line-height:1.6}
.modal-sub strong{color:var(--slate)}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.field{margin-bottom:12px}
.field label{display:block;font-size:11px;font-weight:700;color:var(--textsub);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px}
.field input{width:100%;padding:10px 13px;border:1.5px solid var(--g200);border-radius:var(--r);font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;color:var(--slate);outline:none;transition:border-color .15s}
.field input:focus{border-color:var(--orange)}
.field input::placeholder{color:var(--g400)}
.field-error{display:none;background:#FEF2F2;border:1px solid #FECACA;border-radius:var(--r);padding:9px 12px;font-size:13px;color:#DC2626;margin-bottom:12px}
.modal-submit{width:100%;padding:13px;background:var(--orange);color:white;border:none;border-radius:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:background .2s}
.modal-submit:hover{background:var(--orange-d)}
.modal-note{text-align:center;font-size:12px;color:var(--g400);margin-top:10px}
.modal-success{display:none;text-align:center;padding:16px 0}
.modal-success-ico{font-size:44px;margin-bottom:14px}
.modal-success h3{font-size:20px;font-weight:800;margin-bottom:8px}
.modal-success p{font-size:14px;color:var(--textsub);line-height:1.65;margin-bottom:20px}
.btn-close-modal{padding:11px 24px;background:var(--g100);border:1px solid var(--g200);border-radius:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;color:var(--slate)}
/* RESPONSIVE */
.fade-in{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}
.fade-in.visible{opacity:1;transform:translateY(0)}
@media(max-width:900px){
  .hero-grid,.feature-block,.feature-block.rev,.near-grid{grid-template-columns:1fr}
  .feature-block.rev .feature-visual{order:0}
  .steps,.testi-grid,.pricing-grid{grid-template-columns:1fr}
  .stats-inner{grid-template-columns:repeat(2,1fr)}
  .hero-right{display:none}
  .footer-grid{grid-template-columns:1fr 1fr}
  .steps::before{display:none}
  .near-section{padding:60px 0}
  .nav-links{display:none}
  section{padding:60px 0}
}
@media(max-width:480px){
  .container{padding:0 16px}
  .nav-inner{padding:0 16px}
  .hero{padding:90px 0 60px}
  .hero-h1{font-size:28px}
  .hero-actions{flex-direction:column}
  .hero-actions a{text-align:center;justify-content:center}
  .stats-inner{grid-template-columns:1fr 1fr}
  .footer-grid{grid-template-columns:1fr}
  .footer-bottom{flex-direction:column;gap:12px;text-align:center}
  .field-row{grid-template-columns:1fr}
}`

const BODY = `
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
    <div class="nav-cta">
      <a href="/login" class="login">Connexion</a>
      <a href="/login" class="btn-cta" style="padding:10px 20px;font-size:13.5px;">Démarrer gratuitement</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="container">
    <div style="max-width:860px;margin:0 auto;text-align:center;position:relative;z-index:2;">

      <!-- Authority badge -->
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(22,163,74,.15);border:1px solid rgba(22,163,74,.3);border-radius:100px;padding:6px 16px;font-size:12.5px;color:#4ADE80;font-weight:600;margin-bottom:32px;">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#4ADE80" stroke-width="1.5"/><path d="M4.5 7l1.5 1.5L9.5 5" stroke="#4ADE80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Harvard Business Review · Étude sur 166 000 établissements
      </div>

      <!-- Main headline -->
      <h1 class="hero-h1" style="font-size:clamp(32px,5.5vw,64px);margin-bottom:24px;line-height:1.05;">
        Chaque étoile gagnée sur Google<br>
        vaut <span class="near" style="font-size:1.1em;padding:2px 12px;">entre 5% et 9%</span><br>
        de revenus supplémentaires
      </h1>

      <!-- Sub -->
      <p style="font-size:clamp(15px,2vw,20px);color:rgba(255,255,255,.7);line-height:1.7;max-width:620px;margin:0 auto 20px;">
        <strong style="color:white;">92% des consommateurs</strong> refusent de faire affaire avec une entreprise notée sous 4★.
        Passer de 3.9 à 4.0 n'est pas un détail — c'est le levier le plus puissant de votre croissance locale.
      </p>
      <p style="font-size:15px;color:rgba(255,255,255,.5);margin-bottom:40px;">
        Esmy vous fait monter automatiquement — grâce à la gamification et à l'IA.
      </p>

      <!-- CTAs -->
      <div class="hero-actions" style="justify-content:center;margin-bottom:48px;">
        <a href="/login" class="btn-cta" style="font-size:16px;padding:16px 32px;">
          Augmenter ma note Google →
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="/demo" class="btn-ghost-w" style="font-size:15px;">Voir comment →</a>
      </div>

      <!-- 3 Stats -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.08);border-radius:var(--rlg);overflow:hidden;max-width:680px;margin:0 auto 32px;">
        <div style="background:rgba(255,255,255,.05);padding:28px 20px;text-align:center;">
          <div style="font-size:44px;font-weight:800;color:var(--orange);letter-spacing:-2px;line-height:1;">+9%</div>
          <div style="font-size:12px;color:rgba(255,255,255,.55);margin-top:6px;line-height:1.5;">de revenus par étoile<br>gagnée sur Google</div>
        </div>
        <div style="background:rgba(255,255,255,.05);padding:28px 20px;text-align:center;">
          <div style="font-size:44px;font-weight:800;color:var(--orange);letter-spacing:-2px;line-height:1;">92%</div>
          <div style="font-size:12px;color:rgba(255,255,255,.55);margin-top:6px;line-height:1.5;">des clients fuient<br>les notes sous 4★</div>
        </div>
        <div style="background:rgba(255,255,255,.05);padding:28px 20px;text-align:center;">
          <div style="font-size:44px;font-weight:800;color:var(--orange);letter-spacing:-2px;line-height:1;">×3</div>
          <div style="font-size:12px;color:rgba(255,255,255,.55);margin-top:6px;line-height:1.5;">plus de clics pour<br>les fiches à 4.5★+</div>
        </div>
      </div>

      <!-- Social proof -->
      <div style="display:flex;align-items:center;justify-content:center;gap:12px;">
        <div style="display:flex;">
          <div class="av av-a">M</div><div class="av av-b">S</div><div class="av av-c">J</div><div class="av av-d">L</div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,.55);">
          <strong style="color:rgba(255,255,255,.85);">33 commerçants</strong> ont déjà rejoint Esmy · 14 jours gratuits · Sans carte
        </div>
      </div>

      <div style="margin-top:20px;font-size:11px;color:rgba(255,255,255,.25);">
        Sources : Harvard Business Review · BrightLocal Consumer Review Survey 2024
      </div>
    </div>
  </div>
</section>

<div style="background:white;border-top:1px solid var(--g200);border-bottom:1px solid var(--g200);padding:52px 0;">
  <div class="container">
    <div style="max-width:760px;margin:0 auto;text-align:center;">
      <div style="font-size:11px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:18px;">Harvard Business Review · Étude prouvée</div>
      <p style="font-size:clamp(18px,2.5vw,26px);font-weight:800;color:var(--slate);line-height:1.35;letter-spacing:-.5px;margin-bottom:16px;">
        Augmenter votre note Google d'<span style="color:var(--orange);">une seule étoile</span><br>
        génère entre <span style="color:var(--orange);">5% et 9% de revenus supplémentaires.</span>
      </p>
      <p style="font-size:16px;color:var(--textsub);line-height:1.7;max-width:580px;margin:0 auto 36px;">
        Aujourd'hui, <strong style="color:var(--slate);">92% des consommateurs</strong> refusent de faire affaire avec une entreprise notée sous 4 étoiles. Passer de 3.9 à 4.0 n'est pas un détail — c'est un levier de croissance massif.
      </p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--g200);border-radius:var(--rlg);overflow:hidden;max-width:640px;margin:0 auto;">
        <div style="padding:24px 20px;text-align:center;border-right:1px solid var(--g200);">
          <div style="font-size:36px;font-weight:800;color:var(--orange);letter-spacing:-1.5px;line-height:1;">+9%</div>
          <div style="font-size:12px;color:var(--textsub);margin-top:4px;line-height:1.4;">de revenus par étoile<br>gagnée sur Google</div>
        </div>
        <div style="padding:24px 20px;text-align:center;border-right:1px solid var(--g200);">
          <div style="font-size:36px;font-weight:800;color:var(--orange);letter-spacing:-1.5px;line-height:1;">92%</div>
          <div style="font-size:12px;color:var(--textsub);margin-top:4px;line-height:1.4;">des clients évitent<br>les notes sous 4★</div>
        </div>
        <div style="padding:24px 20px;text-align:center;">
          <div style="font-size:36px;font-weight:800;color:var(--orange);letter-spacing:-1.5px;line-height:1;">×3</div>
          <div style="font-size:12px;color:var(--textsub);margin-top:4px;line-height:1.4;">plus de clics pour<br>les fiches à 4.5★+</div>
        </div>
      </div>
      <div style="margin-top:16px;font-size:11px;color:var(--g400);">Sources : Harvard Business Review · BrightLocal Consumer Review Survey 2024</div>
    </div>
  </div>
</div>

<div class="near-section">
  <div class="container">
    <div class="near-grid">
      <div>
        <div class="near-label">Visibilité locale · Google Near Me</div>
        <h2 class="near-title">"Restaurant near me"<br>— votre client cherche.<br>Êtes-vous visible ?</h2>
        <p class="near-desc">Google classe les commerces locaux selon 3 critères : pertinence, distance, et <strong style="color:white;">notoriété</strong>. Plus vous avez d'avis récents et bien notés, plus vous apparaissez haut dans le "Local Pack" — les 3 fiches qui captent 70% des clics.</p>
        <div class="near-facts">
          <div class="near-fact"><div class="ico">📍</div><span>58% des recherches Google incluent "near me" ou "près de moi" en 2025</span></div>
          <div class="near-fact"><div class="ico">⭐</div><span>Les 3 premières fiches Google captent 70% des appels et visites</span></div>
          <div class="near-fact"><div class="ico">📈</div><span>Un commerce avec 4.5+ ★ et 50+ avis récents passe systématiquement en tête</span></div>
          <div class="near-fact"><div class="ico">🤖</div><span>Répondre à vos avis améliore votre score de pertinence Google</span></div>
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
                <div class="lp-stars-row"><span class="lp-stars">★★★★★</span><span class="lp-reviews">4.9 (312)</span></div>
              </div>
              <div class="lp-esmy">Esmy ✓</div>
            </div>
            <div class="lp-row">
              <div class="lp-rank r2">2</div>
              <div class="lp-biz">
                <div class="lp-biz-name">Pizza Roma</div>
                <div class="lp-stars-row"><span class="lp-stars" style="color:#9ca3af">★★★★☆</span><span class="lp-reviews">4.1 (47)</span></div>
              </div>
            </div>
            <div class="lp-row">
              <div class="lp-rank r3">3</div>
              <div class="lp-biz">
                <div class="lp-biz-name">Napoli Express</div>
                <div class="lp-stars-row"><span class="lp-stars" style="color:#9ca3af">★★★☆☆</span><span class="lp-reviews">3.8 (23)</span></div>
              </div>
            </div>
          </div>
        </div>
        <p style="font-size:12px;color:rgba(255,255,255,.3);text-align:center;margin-top:12px;">Simulation Local Pack Google · Résultats types Esmy</p>
      </div>
    </div>
  </div>
</div>

<section class="how" id="fonctionnement">
  <div class="container">
    <div class="text-center fade-in">
      <div class="section-badge">⚡ Simple & efficace</div>
      <h2 class="section-title">3 étapes. Premiers avis en moins de 24h.</h2>
      <p class="section-sub">Essayez Esmy <strong>14 jours gratuitement</strong>. Aucune carte bancaire demandée. Seulement votre email et le nom de votre commerce.</p>
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
        <div class="step-title">L'IA répond automatiquement</div>
        <div class="step-desc">Chaque avis reçoit une réponse personnalisée générée par IA — dans votre ton, vérifiée par vous, publiée sur Google en un clic.</div>
      </div>
    </div>
  </div>
</section>

<section class="features" id="fonctionnalites">
  <div class="container">

    <div class="feature-block fade-in">
      <div class="feature-text">
        <div class="feature-label">Gamification</div>
        <h3 class="feature-title">La roue qui transforme chaque visite en avis</h3>
        <p class="feature-desc">Vos clients ne laissent pas d'avis parce qu'ils n'ont pas de raison suffisante. Esmy crée cette raison avec une mécanique ludique et une récompense immédiate. Résultat : jusqu'à +300% d'avis chez certains commerçants.</p>
        <ul class="feature-list">
          <li>Lots entièrement personnalisables (café, réduction, cadeau…)</li>
          <li>Probabilités configurables par lot, roue temps réel</li>
          <li>Code unique généré — présenté en caisse</li>
          <li>100% conforme aux règles Google Business</li>
          <li>Données clients collectées automatiquement</li>
        </ul>
      </div>
      <div class="feature-visual">
        <div style="width:100%;max-width:340px;">
          <div class="wheel-wrapper">
            <div class="wheel-eyebrow">Votre roue en live</div>
            <div class="wheel-hint">Cliquez pour tourner ↓</div>
            <div class="wheel-stage" id="lp-stage">
              <div class="wheel-ring-outer"><div class="wheel-ring-inner"></div></div>
              <canvas id="lp-canvas" onclick="lpSpin()"></canvas>
              <div class="wheel-ptr">
                <svg width="14" height="18" viewBox="0 0 14 18"><polygon points="7,0 14,18 7,13 0,18" fill="#111827"/></svg>
              </div>
              <div class="wheel-boss" onclick="lpSpin()">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#111827" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5,3 19,12 5,21"/></svg>
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
          <div style="margin-top:10px;padding:10px 12px;background:rgba(249,115,22,.06);border:1px solid rgba(249,115,22,.15);border-radius:var(--r);display:flex;align-items:center;gap:10px;">
            <div style="font-size:14px;flex-shrink:0;">📊</div>
            <div style="font-size:11px;color:var(--textsub);line-height:1.5;">Données clients collectées automatiquement après chaque spin.</div>
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
            <div class="rv-header"><div class="rv-author">Sophie M.</div><div class="rv-stars">★★★★★</div></div>
            <div class="rv-text">"Ambiance parfaite, le personnel est adorable. On reviendra !"</div>
            <div class="ai-reply">
              <div class="ai-header"><span class="ai-tag">IA</span> Réponse générée · En attente</div>
              Merci infiniment Sophie ! Votre fidélité nous touche vraiment. On a hâte de vous revoir ! 🙏
            </div>
          </div>
          <div class="review-item" style="border-left:3px solid #EF4444;">
            <div class="rv-header"><div class="rv-author">Marc D.</div><div class="rv-stars" style="color:#EF4444;">★★☆☆☆</div></div>
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
          <div class="dash-stat"><div class="ds-icon o">⭐</div><div><div class="ds-lbl">Note Google</div><div class="ds-val">4.9 <span class="ds-trend">↑ +0.8 ce mois</span></div></div></div>
          <div class="dash-stat"><div class="ds-icon g">📈</div><div><div class="ds-lbl">Position Local Pack</div><div class="ds-val">#1 <span class="ds-trend">↑ était #4</span></div></div></div>
          <div class="dash-stat"><div class="ds-icon s">💬</div><div><div class="ds-lbl">Avis ce mois</div><div class="ds-val">47 <span class="ds-trend">↑ +320%</span></div></div></div>
        </div>
      </div>
    </div>

  </div>
</section>

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
          <div><div class="testi-name">Marie-Claire B.</div><div class="testi-role">Boulangerie Artisanale · Aix-en-Provence</div></div>
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
          <div><div class="testi-name">Julien F.</div><div class="testi-role">Restaurant Méditerranéen · Marseille</div></div>
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
          <div><div class="testi-name">Sophie A.</div><div class="testi-role">Institut de Beauté · Luberon</div></div>
        </div>
        <div class="g-validated">
          <svg width="12" height="12" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="rgba(255,255,255,.2)"/><text x="3.5" y="10.5" font-size="8" fill="white" font-weight="700">G</text></svg>
          Avis validé Google Business
        </div>
      </div>
    </div>
  </div>
</section>

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
        <div class="plan-price"><sup>€</sup>33<span> /mois</span></div>
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
        <div class="plan-price"><sup>€</sup>69<span> /mois</span></div>
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

<section class="cta-section">
  <div class="container">
    <h2>Prêt à être #1 sur Google Maps ?</h2>
    <p>Rejoignez les premiers commerçants qui dominent leur réputation locale avec Esmy.<br>Configuration en 10 minutes. Premiers avis en moins de 24h.</p>
    <div class="cta-actions">
      <a href="/login" class="btn-white-cta">
        Démarrer gratuitement
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#F97316" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="/demo" class="btn-ghost-w">Voir la démo API Google →</a>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo">esmy<span class="logo-dot">.</span></a>
        <p>La plateforme de réputation pour les commerces locaux. Plus d'avis, meilleure note, trouvé en premier.</p>
        <p style="margin-top:8px;">Made in Provence 🌿</p>
      </div>
      <div class="footer-col">
        <h4>Produit</h4>
        <a href="#fonctionnalites">Fonctionnalités</a>
        <a href="#tarifs">Tarifs</a>
        <a href="/demo">Démo Google API</a>
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
<div id="contact-modal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(17,24,39,.75);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:24px;">
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
</div>`

const SCRIPTS = `
// ── FADE IN ──
const obs = new IntersectionObserver(entries => {
  entries.forEach((e,i) => {
    if(e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i*70);
  });
}, {threshold:0.08});
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// ── MODAL ──
function openModal(plan) {
  document.getElementById('modal-badge').textContent = 'Plan ' + plan;
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

// ── WHEEL ──
(function(){
  var segs=[
    {label:'Café offert',    weight:40,color:'#F97316',text:'#ffffff'},
    {label:'Pizza offerte',  weight:20,color:'#111827',text:'#ffffff'},
    {label:'Bon 20€',        weight:25,color:'#F59E0B',text:'#111827'},
    {label:'Dessert offert', weight:10,color:'#374151',text:'#ffffff'},
    {label:'Week-end spa',   weight:5, color:'#1F2937',text:'#F97316'},
  ];
  var angle=0,spinning=false,cv,size;
  function setup(){
    var stage=document.getElementById('lp-stage');
    if(!stage)return;
    cv=document.getElementById('lp-canvas');
    size=stage.offsetWidth;
    cv.width=size;cv.height=size;
    draw(angle);
  }
  function draw(a){
    if(!cv)return;
    var ctx=cv.getContext('2d'),w=size,cx=w/2,cy=w/2,r=w/2-3;
    ctx.clearRect(0,0,w,w);
    var sa=a-Math.PI/2;
    var equalSlice=Math.PI*2/segs.length;
    segs.forEach(function(seg){
      var sl=equalSlice,ea=sa+sl,mid=sa+sl/2;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r-1,sa,ea);ctx.closePath();
      ctx.fillStyle=seg.color;ctx.fill();
      var g=ctx.createRadialGradient(cx,cy,0,cx,cy,r);
      g.addColorStop(0,'rgba(255,255,255,.04)');g.addColorStop(.65,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.28)');
      ctx.fillStyle=g;ctx.fill();
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+r*Math.cos(sa),cy+r*Math.sin(sa));
      ctx.strokeStyle='rgba(17,24,39,.2)';ctx.lineWidth=1.2;ctx.stroke();
      ctx.save();ctx.translate(cx,cy);ctx.rotate(mid);ctx.textAlign='right';
      ctx.fillStyle=seg.text;var fs=Math.max(8,Math.min(11,r*.068));
      ctx.font='600 '+fs+'px "Plus Jakarta Sans",sans-serif';
      ctx.shadowColor='rgba(0,0,0,.9)';ctx.shadowBlur=5;
      ctx.fillText(seg.label,r-12,fs*.35,r*.62);ctx.restore();
      sa=ea;
    });
    ctx.beginPath();ctx.arc(cx,cy,r-1,0,Math.PI*2);
    ctx.strokeStyle='rgba(17,24,39,.15)';ctx.lineWidth=1.5;ctx.stroke();
    var dots=32;
    for(var i=0;i<dots;i++){
      var da=i/dots*Math.PI*2;
      ctx.beginPath();ctx.arc(cx+(r-6)*Math.cos(da),cy+(r-6)*Math.sin(da),1,0,Math.PI*2);
      ctx.fillStyle=i%3===0?'rgba(17,24,39,.5)':'rgba(17,24,39,.15)';ctx.fill();
    }
    ctx.beginPath();ctx.arc(cx,cy,r*.13,0,Math.PI*2);
    ctx.fillStyle='white';ctx.fill();
    ctx.strokeStyle='rgba(17,24,39,.3)';ctx.lineWidth=1.5;ctx.stroke();
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
    var stage=document.getElementById('lp-stage');
    if(!stage||!cv)return;
    size=stage.offsetWidth;cv.width=size;cv.height=size;draw(angle);
  });
})();`

export default function Home() {
  return (
    <>
      <Head>
        <title>Esmy — Soyez #1 sur Google Maps</title>
        <meta name="description" content="Esmy multiplie vos avis Google grâce à la gamification et répond automatiquement à chaque commentaire avec l'IA." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      <script dangerouslySetInnerHTML={{ __html: SCRIPTS }} />
    </>
  )
}
