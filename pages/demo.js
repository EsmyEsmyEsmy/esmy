import Head from 'next/head'

const STYLES = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--slate:#111827;--orange:#F97316;--cream:#FAFAF6;--g200:#E8E8E2;--g600:#5A5A50;--sub:#5A6478;--green:#16A34A}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--cream);color:var(--slate);line-height:1.6}
.container{max-width:1060px;margin:0 auto;padding:0 24px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(17,24,39,.96);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:1060px;margin:0 auto;padding:0 24px}
.logo{display:flex;align-items:center;gap:10px;color:white;text-decoration:none;font-weight:800;font-size:20px}
.logo-icon{width:32px;height:32px;background:var(--orange);border-radius:8px;display:flex;align-items:center;justify-content:center}
.nav-links a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;margin-left:24px;font-weight:500}
.lang-toggle{display:flex;gap:4px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:100px;padding:4px}
.lang-btn{padding:5px 12px;border-radius:100px;font-size:12.5px;font-weight:700;cursor:pointer;border:none;background:transparent;color:rgba(255,255,255,.5);transition:all .2s}
.lang-btn.active{background:var(--orange);color:white}
.lang-btn:hover:not(.active){color:white}
.page-hero{background:linear-gradient(145deg,#111827 0%,#1a2538 100%);padding:130px 0 70px;text-align:center}
.eyebrow{font-size:12px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.page-hero h1{font-size:clamp(26px,4.5vw,46px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:14px;line-height:1.1}
.page-hero p{font-size:16px;color:rgba(255,255,255,.6);max-width:580px;margin:0 auto;line-height:1.7}
.compliance-row{display:flex;justify-content:center;gap:10px;margin-top:24px;flex-wrap:wrap}
.cp-tag{background:rgba(22,163,74,.15);border:1px solid rgba(22,163,74,.3);border-radius:100px;padding:5px 14px;font-size:12.5px;color:#4ADE80;font-weight:600}
section{padding:72px 0}
.steps-header{text-align:center;margin-bottom:52px}
.steps-header h2{font-size:clamp(24px,3.5vw,36px);font-weight:800;letter-spacing:-1px;margin-bottom:10px}
.steps-header p{font-size:15px;color:var(--sub);max-width:480px;margin:0 auto}
.step-block{display:grid;grid-template-columns:200px 1fr;gap:40px;align-items:start;margin-bottom:32px;padding:36px;background:white;border:1px solid var(--g200);border-radius:20px;box-shadow:0 2px 12px rgba(17,24,39,.06)}
.step-left{text-align:center}
.step-num-big{width:56px;height:56px;background:var(--slate);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;margin:0 auto 12px}
.step-block:nth-child(2) .step-num-big{background:var(--orange)}
.step-block:nth-child(3) .step-num-big{background:var(--green)}
.step-block:nth-child(4) .step-num-big{background:#7C3AED}
.step-block:nth-child(5) .step-num-big{background:#0891B2}
.step-ico{font-size:32px;margin-bottom:8px}
.step-label{font-size:11px;color:var(--sub);font-weight:600;text-transform:uppercase;letter-spacing:.08em;line-height:1.4}
.step-title{font-size:20px;font-weight:800;margin-bottom:10px;letter-spacing:-.4px}
.step-desc{font-size:15px;color:var(--sub);line-height:1.7;margin-bottom:18px}
.step-details{display:flex;flex-direction:column;gap:8px}
.step-detail{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:var(--g600)}
.step-detail::before{content:'✓';color:var(--orange);font-weight:700;flex-shrink:0;margin-top:1px}
.endpoint-tag{display:inline-flex;align-items:center;gap:6px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:600;color:var(--green);margin-top:12px;font-family:monospace}
.demo-visual{background:var(--slate);padding:56px 0}
.demo-visual-inner{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.demo-visual h2{color:white;font-size:clamp(22px,3vw,32px);font-weight:800;letter-spacing:-.8px;margin-bottom:12px}
.demo-visual p{color:rgba(255,255,255,.6);font-size:15px;line-height:1.7}
.flow-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px}
.flow-step{display:flex;align-items:center;gap:12px;padding:12px 14px;background:rgba(255,255,255,.04);border-radius:10px;margin-bottom:8px}
.flow-step:last-child{margin-bottom:0}
.flow-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.fi-1{background:rgba(249,115,22,.2)}.fi-2{background:rgba(22,163,74,.2)}.fi-3{background:rgba(124,58,237,.2)}.fi-4{background:rgba(8,145,178,.2)}
.flow-text{font-size:13px;color:rgba(255,255,255,.75)}
.flow-code{font-size:11px;color:rgba(255,255,255,.4);font-family:monospace;margin-top:2px}
footer{background:var(--slate);padding:36px 0 22px}
.footer-inner{display:flex;align-items:center;justify-content:space-between}
.footer-inner p{font-size:13px;color:rgba(255,255,255,.35)}
.footer-links a{font-size:13px;color:rgba(255,255,255,.35);text-decoration:none;margin-left:20px}
@media(max-width:900px){.step-block{grid-template-columns:1fr}.step-left{text-align:left;display:flex;align-items:center;gap:14px}.step-num-big{margin:0}.demo-visual-inner{grid-template-columns:1fr}}`

const BODY = `<nav>
  <div class="nav-inner">
    <a href="/" class="logo">
      <div class="logo-icon"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" stroke-width="1.5" fill="none"/><path d="M9 2L10.2 6H14.5L11.1 8.4 12.3 12.5 9 10.2 5.7 12.5 6.9 8.4 3.5 6H7.8Z" fill="white"/></svg></div>
      esmy
    </a>
    <div style="display:flex;align-items:center;gap:20px">
      <div class="nav-links">
        <a href="/" data-fr="Accueil" data-en="Home">Accueil</a>
        <a href="/#tarifs">Tarifs</a>
        <a href="/about" data-fr="À propos" data-en="About">À propos</a>
      </div>
      <div class="lang-toggle">
        <button class="lang-btn" id="btn-fr" onclick="setLang('fr')">🇫🇷 FR</button>
        <button class="lang-btn active" id="btn-en" onclick="setLang('en')">🇬🇧 EN</button>
      </div>
    </div>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <div class="eyebrow" data-fr="API Google Business Profile — Documentation" data-en="Google Business Profile API — Documentation">API Google Business Profile — Documentation</div>
    <h1 data-fr="Comment Esmy s'intègre avec<br>Google Business Profile" data-en="How Esmy integrates with<br>Google Business Profile">Comment Esmy s'intègre avec<br>Google Business Profile</h1>
    <p data-fr="Esmy a soumis une demande d'accès formelle à l'API Google Business Profile. Cette page documente de manière transparente la façon dont nous intégrons votre fiche Google — en toute sécurité et conformément aux politiques de Google." data-en="Esmy has submitted a formal access request to the Google Business Profile API. This page transparently documents how we intend to integrate with your Google listing — securely and in full compliance with Google's policies.">Esmy a soumis une demande d'accès formelle à l'API Google Business Profile.</p>
    <div class="compliance-row">
      <span class="cp-tag" data-fr="Demande d'accès soumise" data-en="API Access Request Submitted">Demande d'accès soumise</span>
      <span class="cp-tag">✓ OAuth 2.0</span>
      <span class="cp-tag" data-fr="✓ Conforme RGPD" data-en="✓ GDPR Compliant">✓ Conforme RGPD</span>
      <span class="cp-tag" data-fr="✓ Lecture seule sauf publication" data-en="✓ Read-only unless you publish">✓ Lecture seule sauf publication</span>
    </div>
  </div>
</div>

<section>
  <div class="container">
    <div class="steps-header">
      <div style="font-size:12px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px" data-fr="Flux d'intégration" data-en="Integration flow">Flux d'intégration</div>
      <h2 data-fr="5 étapes — de l'inscription au live" data-en="5 steps — from onboarding to live">5 étapes — de l'inscription au live</h2>
      <p data-fr="Le flux est entièrement transparent, réversible, et sous votre contrôle à tout moment." data-en="The entire flow is transparent, reversible, and under your control at all times.">Le flux est entièrement transparent, réversible, et sous votre contrôle.</p>
    </div>

    <div class="step-block">
      <div class="step-left"><div class="step-ico">🔐</div><div class="step-num-big">1</div><div class="step-label" data-fr="Autorisation commerçant" data-en="Merchant Authorization">Autorisation commerçant</div></div>
      <div class="step-right">
        <div class="step-title" data-fr="Vous autorisez Esmy via Google" data-en="You authorize Esmy via Google">Vous autorisez Esmy via Google</div>
        <div class="step-desc" data-fr="Lors de l'inscription, vous cliquez sur « Connecter Google Business ». Vous êtes redirigé vers l'écran de consentement OAuth officiel de Google. Esmy ne voit jamais votre mot de passe Google." data-en="During onboarding, you click 'Connect Google Business'. You are redirected to Google's official OAuth consent screen. Esmy never sees your Google password.">Lors de l'inscription, vous cliquez sur « Connecter Google Business ».</div>
        <div class="step-details">
          <div class="step-detail" data-fr="Flux OAuth 2.0 Google standard — aucun identifiant partagé" data-en="Standard Google OAuth 2.0 — no credentials shared">Flux OAuth 2.0 Google standard — aucun identifiant partagé</div>
          <div class="step-detail" data-fr="Vous choisissez exactement quel établissement connecter" data-en="You select exactly which Business Profile to connect">Vous choisissez exactement quel établissement connecter</div>
          <div class="step-detail" data-fr="Révocable à tout moment depuis votre compte Google" data-en="Revocable at any time from your Google Account">Révocable à tout moment depuis votre compte Google</div>
          <div class="step-detail" data-fr="Esmy stocke uniquement un refresh token chiffré" data-en="Esmy stores only an encrypted refresh token">Esmy stocke uniquement un refresh token chiffré</div>
        </div>
        <div class="endpoint-tag">→ accounts.list · locations.get</div>
      </div>
    </div>

    <div class="step-block">
      <div class="step-left"><div class="step-ico">📋</div><div class="step-num-big">2</div><div class="step-label" data-fr="Lecture des avis" data-en="Review Fetching">Lecture des avis</div></div>
      <div class="step-right">
        <div class="step-title" data-fr="Esmy lit vos avis entrants" data-en="Esmy reads your incoming reviews">Esmy lit vos avis entrants</div>
        <div class="step-desc" data-fr="Toutes les 15 minutes, Esmy interroge l'API pour récupérer les nouveaux avis. Ils apparaissent dans votre tableau de bord avec des suggestions de réponses IA. Aucun avis n'est modifié ni filtré." data-en="Every 15 minutes, Esmy polls the API to fetch new reviews. They appear in your dashboard with AI-generated reply suggestions. No reviews are altered or filtered.">Toutes les 15 minutes, Esmy interroge l'API pour récupérer les nouveaux avis.</div>
        <div class="step-details">
          <div class="step-detail" data-fr="Toutes les notes (1★ à 5★) affichées sans exception" data-en="All ratings (1★ to 5★) displayed — no exceptions">Toutes les notes (1★ à 5★) affichées sans exception</div>
          <div class="step-detail" data-fr="Aucun avis masqué, retardé ou filtré selon la note" data-en="No reviews hidden, delayed, or filtered based on rating">Aucun avis masqué, retardé ou filtré selon la note</div>
          <div class="step-detail" data-fr="Lecture seule — Esmy ne modifie jamais vos avis" data-en="Read-only — Esmy never modifies your reviews">Lecture seule — Esmy ne modifie jamais vos avis</div>
          <div class="step-detail" data-fr="Chiffrement AES-256 au repos" data-en="AES-256 encryption at rest">Chiffrement AES-256 au repos</div>
        </div>
        <div class="endpoint-tag">→ reviews.list (READ ONLY)</div>
      </div>
    </div>

    <div class="step-block">
      <div class="step-left"><div class="step-ico">🤖</div><div class="step-num-big">3</div><div class="step-label" data-fr="Génération IA" data-en="AI Reply Generation">Génération IA</div></div>
      <div class="step-right">
        <div class="step-title" data-fr="L'IA rédige une réponse — vous approuvez" data-en="AI drafts a reply — you approve">L'IA rédige une réponse — vous approuvez</div>
        <div class="step-desc" data-fr="Pour chaque nouvel avis, l'IA génère une réponse personnalisée dans le ton de votre commerce. La réponse vous est soumise pour approbation. Rien n'est publié sans votre action explicite." data-en="For each new review, AI generates a personalized reply in your brand voice. The reply is shown for your approval. Nothing is published without your explicit action.">Pour chaque nouvel avis, l'IA génère une réponse personnalisée.</div>
        <div class="step-details">
          <div class="step-detail" data-fr="Réponse adaptée au contenu de l'avis et à vos préférences" data-en="Reply adapted to review content and your preferences">Réponse adaptée au contenu de l'avis et à vos préférences</div>
          <div class="step-detail" data-fr="Vous pouvez modifier, regénérer ou rejeter la suggestion" data-en="You can edit, regenerate, or discard the suggestion">Vous pouvez modifier, regénérer ou rejeter la suggestion</div>
          <div class="step-detail" data-fr="Alertes immédiates pour les avis négatifs urgents" data-en="Immediate alerts for urgent negative reviews">Alertes immédiates pour les avis négatifs urgents</div>
          <div class="step-detail" data-fr="Approbation en un clic depuis le dashboard" data-en="One-click approval from the dashboard">Approbation en un clic depuis le dashboard</div>
        </div>
        <div class="endpoint-tag" data-fr="→ Traitement IA — aucun appel API à cette étape" data-en="→ AI processing only — no API call at this step">→ Traitement IA — aucun appel API à cette étape</div>
      </div>
    </div>

    <div class="step-block">
      <div class="step-left"><div class="step-ico">✅</div><div class="step-num-big">4</div><div class="step-label" data-fr="Publication" data-en="Reply Publishing">Publication</div></div>
      <div class="step-right">
        <div class="step-title" data-fr="Vous publiez — en un clic" data-en="You publish — one click">Vous publiez — en un clic</div>
        <div class="step-desc" data-fr="Quand vous cliquez « Publier », Esmy appelle l'API pour poster votre réponse sur Google. L'auto-publication est disponible mais toujours opt-in, jamais par défaut." data-en="When you click 'Publish', Esmy calls the API to post your response on Google. Auto-publish is available but always opt-in, never the default.">Quand vous cliquez « Publier », Esmy appelle l'API pour poster votre réponse.</div>
        <div class="step-details">
          <div class="step-detail" data-fr="Réponse publiée uniquement après votre approbation explicite" data-en="Reply only published after your explicit approval">Réponse publiée uniquement après votre approbation explicite</div>
          <div class="step-detail" data-fr="Via l'API Google officielle — pas de bots" data-en="Via official Google API — not bots">Via l'API Google officielle — pas de bots</div>
          <div class="step-detail" data-fr="Apparaît sur Google sous votre nom en quelques secondes" data-en="Appears on Google under your name within seconds">Apparaît sur Google sous votre nom en quelques secondes</div>
          <div class="step-detail" data-fr="Journal d'audit complet de chaque réponse publiée" data-en="Full audit log of every reply published">Journal d'audit complet de chaque réponse publiée</div>
        </div>
        <div class="endpoint-tag">→ reviews.updateReply (WRITE — only after approval)</div>
      </div>
    </div>

    <div class="step-block">
      <div class="step-left"><div class="step-ico">📊</div><div class="step-num-big">5</div><div class="step-label" data-fr="Analytics" data-en="Analytics & Ranking">Analytics</div></div>
      <div class="step-right">
        <div class="step-title" data-fr="Suivez votre progression sur Google" data-en="Track your Google ranking progression">Suivez votre progression sur Google</div>
        <div class="step-desc" data-fr="Votre tableau de bord affiche l'évolution de vos avis, votre note moyenne, votre taux de réponse et votre position estimée dans le Local Pack Google." data-en="Your dashboard shows your review count evolution, average rating, response rate, and estimated Local Pack position over time.">Votre tableau de bord affiche l'évolution de vos avis et votre classement Google.</div>
        <div class="step-details">
          <div class="step-detail" data-fr="Graphiques d'évolution hebdomadaire" data-en="Weekly evolution charts">Graphiques d'évolution hebdomadaire</div>
          <div class="step-detail" data-fr="Taux de réponse suivi — signal clé pour Google" data-en="Response rate tracked — key Google ranking signal">Taux de réponse suivi — signal clé pour Google</div>
          <div class="step-detail" data-fr="Vue multi-établissements" data-en="Multi-location view">Vue multi-établissements</div>
          <div class="step-detail" data-fr="Déconnectez à tout moment — vos avis vous appartiennent" data-en="Disconnect anytime — your reviews are always yours">Déconnectez à tout moment — vos avis vous appartiennent</div>
        </div>
        <div class="endpoint-tag" data-fr="→ Dashboard analytics · Aucun appel API supplémentaire" data-en="→ Dashboard analytics · No additional API calls">→ Dashboard analytics · Aucun appel API supplémentaire</div>
      </div>
    </div>
  </div>
</section>

<div class="demo-visual">
  <div class="container">
    <div class="demo-visual-inner">
      <div>
        <div style="font-size:12px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:2px;margin-bottom:12px" data-fr="Résumé" data-en="API Flow Summary">Résumé</div>
        <h2 data-fr="Ce qu'Esmy fait — et ce qu'il ne fait jamais" data-en="What Esmy does — and what it never does">Ce qu'Esmy fait — et ce qu'il ne fait jamais</h2>
        <p style="margin-top:0;margin-bottom:20px" data-fr="4 endpoints uniquement. Chaque action est transparente et sous contrôle du commerçant." data-en="4 endpoints only. Every action is transparent and under merchant control.">4 endpoints uniquement. Chaque action est transparente et sous contrôle du commerçant.</p>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.7)"><span style="color:#4ADE80">✓</span><span data-fr="Lit les avis (accounts.list, locations.get)" data-en="Reads reviews (accounts.list, locations.get)">Lit les avis (accounts.list, locations.get)</span></div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.7)"><span style="color:#4ADE80">✓</span><span data-fr="Récupère les nouveaux avis toutes les 15 min (reviews.list)" data-en="Fetches new reviews every 15 min (reviews.list)">Récupère les nouveaux avis toutes les 15 min (reviews.list)</span></div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.7)"><span style="color:#4ADE80">✓</span><span data-fr="Publie les réponses approuvées (reviews.updateReply)" data-en="Publishes merchant-approved replies (reviews.updateReply)">Publie les réponses approuvées (reviews.updateReply)</span></div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.55)"><span style="color:#EF4444">✗</span><span data-fr="Ne supprime ni ne signale jamais d'avis" data-en="Never deletes or flags reviews">Ne supprime ni ne signale jamais d'avis</span></div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.55)"><span style="color:#EF4444">✗</span><span data-fr="Ne publie jamais sans approbation" data-en="Never publishes without approval">Ne publie jamais sans approbation</span></div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.55)"><span style="color:#EF4444">✗</span><span data-fr="N'incite jamais à des notes spécifiques" data-en="Never incentivizes specific ratings">N'incite jamais à des notes spécifiques</span></div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.55)"><span style="color:#EF4444">✗</span><span data-fr="Ne partage jamais vos données avec des tiers" data-en="Never shares your data with third parties">Ne partage jamais vos données avec des tiers</span></div>
        </div>
      </div>
      <div>
        <div class="flow-card">
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px" data-fr="Flux en direct" data-en="Live API Flow">Flux en direct</div>
          <div class="flow-step"><div class="flow-icon fi-1">🔐</div><div><div class="flow-text" data-fr="Commerçant connecte via Google OAuth" data-en="Merchant connects via Google OAuth">Commerçant connecte via Google OAuth</div><div class="flow-code">accounts.list → locations.get</div></div></div>
          <div class="flow-step"><div class="flow-icon fi-2">📋</div><div><div class="flow-text" data-fr="Nouvel avis → alerte dashboard" data-en="New review → dashboard alert">Nouvel avis → alerte dashboard</div><div class="flow-code">reviews.list · every 15 min</div></div></div>
          <div class="flow-step"><div class="flow-icon fi-3">🤖</div><div><div class="flow-text" data-fr="L'IA génère une réponse" data-en="AI generates reply suggestion">L'IA génère une réponse</div><div class="flow-code">Internal · Claude API processing</div></div></div>
          <div class="flow-step"><div class="flow-icon fi-4">✅</div><div><div class="flow-text" data-fr="Commerçant approuve → publié sur Google" data-en="Merchant approves → published on Google">Commerçant approuve → publié sur Google</div><div class="flow-code">reviews.updateReply · after approval</div></div></div>
        </div>
        <div style="margin-top:14px;padding:14px;background:rgba(22,163,74,.12);border:1px solid rgba(22,163,74,.25);border-radius:10px">
          <div style="font-size:12.5px;color:#4ADE80;font-weight:600;margin-bottom:4px" data-fr="✓ Conformité totale aux règles Google" data-en="✓ Full compliance with Google's review policies">✓ Conformité totale aux règles Google</div>
          <div style="font-size:12px;color:rgba(255,255,255,.5);line-height:1.5" data-fr="Récompenses offertes pour toute note (1★–5★). Jamais d'incitation à des avis positifs spécifiquement. Aucun filtrage des avis négatifs." data-en="Rewards given for any rating (1★–5★). We never incentivize positive reviews specifically. No filtering of negative reviews.">Récompenses offertes pour toute note (1★–5★). Jamais d'incitation à des avis positifs spécifiquement.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<section style="background:white;padding:56px 0;text-align:center">
  <div class="container">
    <h2 style="margin-bottom:12px" data-fr="Des questions sur notre intégration Google ?" data-en="Questions about our Google integration?">Des questions sur notre intégration Google ?</h2>
    <p style="font-size:15px;color:var(--sub);margin-bottom:24px" data-fr="Notre équipe répond à toute question technique ou de conformité de la part de l'équipe Google ou de nos commerçants." data-en="Our team is happy to answer any technical or compliance question from Google's review team or our merchants.">Notre équipe répond à toute question technique ou de conformité.</p>
    <a href="mailto:contact@esmy.ai" style="display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:white;padding:13px 26px;border-radius:100px;font-size:14px;font-weight:700;text-decoration:none">contact@esmy.ai</a>
    <div style="margin-top:20px;font-size:13px;color:var(--sub)"><a href="/privacy" style="color:var(--orange)" data-fr="Confidentialité" data-en="Privacy Policy">Confidentialité</a> · <a href="/terms" style="color:var(--orange)">CGU / Terms</a></div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-inner">
      <p>© 2026 Esmy · contact@esmy.ai</p>
      <div class="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/privacy">Confidentialité</a>
        <a href="/terms">CGU</a>
      </div>
    </div>
  </div>
</footer>

<script>
let currentLang = 'en';
function setLang(lang) {
  currentLang = lang;
  document.getElementById('btn-fr').className = 'lang-btn' + (lang === 'fr' ? ' active' : '');
  document.getElementById('btn-en').className = 'lang-btn' + (lang === 'en' ? ' active' : '');
  document.querySelectorAll('[data-fr][data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val) el.innerHTML = val;
  });
  document.title = lang === 'en'
    ? 'Esmy — Google Business Profile API Documentation'
    : 'Esmy — Documentation API Google Business Profile';
}
setLang('en');
</script>`

export default function Page() {
  return (
    <>
      <Head>
        <title>Esmy — Google Business Profile API Documentation</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
