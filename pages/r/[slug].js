import { createClient } from '@supabase/supabase-js'
import Head from 'next/head'

export async function getServerSideProps({ params }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const { data, error } = await supabase
    .from('wheel_configs')
    .select('*')
    .eq('slug', params.slug)
    .eq('active', true)
    .single()

  if (error || !data) return { notFound: true }
  return { props: { config: data } }
}

export default function WheelPage({ config }) {
  const prizes = config.prizes || []

  const COLORS = ['#F97316','#111827','#374151','#F59E0B','#16A34A','#7C3AED','#EF4444','#0891B2']

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    html{background:#f0eeff}
    body{font-family:'Nunito',sans-serif;background:#f0eeff;min-height:100vh;display:flex;justify-content:center;padding:0 0 40px}
    .phone{width:100%;max-width:400px;min-height:100vh;background:#fff;display:flex;flex-direction:column;box-shadow:0 0 80px rgba(0,0,0,.1);position:relative;overflow:hidden}
    .top-bar{padding:22px 22px 0;display:flex;align-items:center;justify-content:space-between}
    .brand{display:flex;align-items:center;gap:10px}
    .brand-mark{width:38px;height:38px;border-radius:10px;background:#111827;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
    .brand-name{font-size:16px;font-weight:800;color:#111827;letter-spacing:-.3px}
    .brand-sub{font-size:11px;color:#9ca3af;margin-top:1px}
    .step-pill{font-size:11px;color:#6b7280;background:#f3f4f6;border-radius:20px;padding:5px 12px;font-weight:600}
    .step-pill span{color:#111827}
    .divider{height:1px;background:#f3f4f6;margin:18px 22px 0}
    .screen{display:none;flex:1;flex-direction:column;padding:28px 22px 32px}
    .screen.on{display:flex;animation:up .35s ease}
    @keyframes up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
    .eyebrow{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9ca3af;text-align:center;margin-bottom:10px}
    .hero-title{font-size:32px;font-weight:800;color:#111827;text-align:center;line-height:1.15;margin-bottom:8px;letter-spacing:-.5px}
    .hero-title span{color:#F97316;font-style:italic}
    .hero-sub{font-size:14px;color:#6b7280;text-align:center;line-height:1.65;margin-bottom:28px}
    .prize-teaser{border:1px solid #f3f4f6;border-radius:16px;padding:18px;margin-bottom:24px;display:flex;gap:14px;align-items:center;background:#fff;box-shadow:0 2px 12px rgba(0,0,0,.05)}
    .pt-icon{font-size:28px;width:50px;height:50px;background:#f9f5ff;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .pt-eyebrow{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#9ca3af;margin-bottom:4px}
    .pt-name{font-size:17px;font-weight:700;color:#111827;line-height:1.25}
    .steps-list{display:flex;flex-direction:column;margin-bottom:28px}
    .step-item{display:flex;align-items:flex-start;gap:13px;padding:13px 0;border-bottom:1px solid #f3f4f6}
    .step-item:last-child{border-bottom:none}
    .step-num{width:24px;height:24px;border-radius:50%;border:1.5px solid #111827;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;margin-top:1px}
    .step-txt{font-size:13.5px;font-weight:600;color:#111827}
    .step-desc{font-size:12px;color:#9ca3af;margin-top:2px}
    .btn-google{width:100%;background:#111827;color:#fff;border:none;border-radius:12px;padding:16px;font-family:'Nunito';font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:all .2s;margin-bottom:10px}
    .btn-google:hover{background:#333}
    .g-badge{width:22px;height:22px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#4285f4;flex-shrink:0}
    .already-done{text-align:center;font-size:13px;color:#9ca3af;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
    .already-done:hover{color:#F97316}
    .wheel-eyebrow{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9ca3af;text-align:center;margin-bottom:6px}
    .wheel-title{font-size:26px;font-weight:800;color:#111827;text-align:center;margin-bottom:4px;letter-spacing:-.3px}
    .wheel-hint{font-size:13px;color:#9ca3af;text-align:center;margin-bottom:22px}
    .wheel-wrap{position:relative;width:290px;height:290px;margin:0 auto 22px;flex-shrink:0}
    .wheel-ring{position:absolute;inset:-6px;border-radius:50%;border:1px solid #e5e7eb;pointer-events:none}
    .wheel-ring2{position:absolute;inset:-13px;border-radius:50%;border:1px solid #f3f4f6;pointer-events:none}
    .wheel-pointer{position:absolute;top:-18px;left:50%;transform:translateX(-50%);z-index:10;display:flex;flex-direction:column;align-items:center}
    .wp-line{width:1.5px;height:16px;background:#111827}
    .wp-dot{width:8px;height:8px;background:#111827;border-radius:50%;margin-top:-1px}
    canvas#wheel{border-radius:50%;display:block;box-shadow:0 8px 40px rgba(0,0,0,.1)}
    .btn-spin-wrap{width:100%;max-width:220px;margin:0 auto}
    .btn-spin{width:100%;background:#F97316;color:#fff;border:none;border-radius:12px;padding:15px;font-family:'Nunito';font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;text-transform:uppercase;letter-spacing:.04em}
    .btn-spin:hover{background:#EA6C0A}
    .btn-spin:disabled{opacity:.4;cursor:not-allowed}
    .result-top{text-align:center;margin-bottom:28px}
    .result-check{width:56px;height:56px;border-radius:50%;border:1.5px solid #111827;display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 18px;animation:popIn .4s cubic-bezier(.175,.885,.32,1.275)}
    @keyframes popIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
    .result-eyebrow{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px}
    .result-title{font-size:32px;font-weight:800;color:#111827;line-height:1.1;margin-bottom:6px;letter-spacing:-.5px}
    .result-title em{font-style:italic;color:#F97316}
    .result-card{background:#111827;border-radius:16px;padding:22px;margin-bottom:14px;color:#fff;display:flex;align-items:center;gap:16px}
    .rc-icon{font-size:28px;width:52px;height:52px;background:rgba(255,255,255,.08);border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .rc-eyebrow{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);margin-bottom:4px}
    .rc-name{font-size:20px;font-weight:700;line-height:1.2}
    .rc-desc{font-size:12px;color:rgba(255,255,255,.5);margin-top:3px}
    .result-code{border:1px solid #f3f4f6;border-radius:12px;padding:14px 18px;margin-bottom:22px;display:flex;align-items:center;justify-content:space-between;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.04)}
    .rcode-label{font-size:10.5px;text-transform:uppercase;letter-spacing:.1em;color:#9ca3af}
    .rcode-val{font-size:18px;font-weight:700;color:#111827;letter-spacing:.18em}
    .btn-save{width:100%;background:transparent;color:#111827;border:1.5px solid #111827;border-radius:12px;padding:14px;font-family:'Nunito';font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;margin-bottom:10px}
    .btn-save:hover{background:#111827;color:#fff}
    .result-note{font-size:12px;color:#9ca3af;text-align:center;line-height:1.6}
    .cf{position:fixed;pointer-events:none;z-index:999;animation:cffall linear forwards}
    @keyframes cffall{to{transform:translateY(110vh) rotate(540deg);opacity:0}}
    .esmy-badge{text-align:center;padding:16px;font-size:12px;color:#9ca3af;border-top:1px solid #f3f4f6;margin-top:auto}
    .esmy-badge a{color:#F97316;text-decoration:none;font-weight:600}
    .form-section{background:#f9fafb;border:1px solid #f3f4f6;border-radius:14px;padding:18px;margin-bottom:16px}
    .form-title{font-size:14px;font-weight:700;color:#111827;margin-bottom:4px}
    .form-sub{font-size:12px;color:#9ca3af;margin-bottom:14px;line-height:1.5}
    .form-field{margin-bottom:10px}
    .form-label{font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;display:block}
    .form-input{width:100%;padding:11px 13px;border:1px solid #e5e7eb;border-radius:9px;font-family:'Nunito';font-size:14px;color:#111827;outline:none;background:#fff;transition:border-color .15s}
    .form-input:focus{border-color:#F97316}
    .form-input::placeholder{color:#d1d5db}
    .form-check{display:flex;gap:10px;align-items:flex-start;margin-top:12px;margin-bottom:14px}
    .form-check input{margin-top:3px;accent-color:#F97316;width:16px;height:16px;flex-shrink:0;cursor:pointer}
    .form-check label{font-size:12px;color:#6b7280;line-height:1.55;cursor:pointer}
    .form-check a{color:#F97316;text-decoration:none}
    .btn-claim{width:100%;background:#F97316;color:#fff;border:none;border-radius:12px;padding:15px;font-family:'Nunito';font-size:14px;font-weight:700;cursor:pointer;transition:background .2s;margin-bottom:8px}
    .btn-claim:hover{background:#EA6C0A}
    .btn-skip{width:100%;background:transparent;color:#9ca3af;border:none;font-family:'Nunito';font-size:13px;cursor:pointer;padding:4px;text-decoration:underline;text-underline-offset:3px}
    .confirmed-box{background:#f0fdf4;border:1px solid #86efac;border-radius:12px;padding:14px;text-align:center;margin-bottom:14px}
    .confirmed-box .cf-icon{font-size:24px;margin-bottom:6px}
    .confirmed-box .cf-txt{font-size:13px;color:#15803d;font-weight:600}
  `

  const prizesList = JSON.stringify(prizes)
  const bizName = config.business_name
  const bizEmoji = config.business_emoji
  const googleUrl = config.google_maps_url || '#'

  const topPrizes = prizes.slice(0, 3).map(p => p.name).join(', ') + (prizes.length > 3 ? ' & plus' : '')

  return (
    <>
      <Head>
        <title>{bizName} — Gagnez un cadeau !</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="phone">
        <div className="top-bar">
          <div className="brand">
            <div className="brand-mark">{bizEmoji}</div>
            <div>
              <div className="brand-name">{bizName}</div>
              <div className="brand-sub">Votre avis compte !</div>
            </div>
          </div>
          <div className="step-pill">Étape <span id="step-num">1</span> / 2</div>
        </div>
        <div className="divider"></div>

        {/* Screen 1 — Welcome, wheel first */}
        <div className="screen on" id="s1">
          <div className="eyebrow">Offre exclusive</div>
          <div className="hero-title">Tentez votre<br /><span>chance !</span></div>
          <p className="hero-sub">Merci de votre visite — en guise de remerciement, nous vous offrons un tour de roue gratuit pour tenter de gagner l'un de nos lots.</p>

          <div className="prize-teaser">
            <div className="pt-icon">🎁</div>
            <div>
              <div className="pt-eyebrow">Lots à gagner</div>
              <div className="pt-name">{topPrizes}</div>
            </div>
          </div>

          <button className="btn-google" style={{background:'#F97316',marginTop:'8px'}} onClick={() => { if (typeof goToWheel !== "undefined") goToWheel(); }}>
            🎡 Tourner la roue
          </button>
          <div className="already-done" style={{marginTop:'16px',fontSize:'12px',color:'#9ca3af'}}>Votre lot est offert sans aucune condition.</div>
        </div>

        {/* Screen 2 - Wheel */}
        <div className="screen" id="s2" style={{alignItems:'center'}}>
          <div className="wheel-eyebrow">À vous de jouer</div>
          <div className="wheel-title">Tournez la roue !</div>
          <div className="wheel-hint">Votre lot vous attend 🤞</div>
          <div className="wheel-wrap">
            <div className="wheel-ring"></div>
            <div className="wheel-ring2"></div>
            <div className="wheel-pointer"><div className="wp-line"></div><div className="wp-dot"></div></div>
            <canvas id="wheel" width="290" height="290"></canvas>
          </div>
          <div className="btn-spin-wrap">
            <button className="btn-spin" id="btn-spin" onClick={() => { if (typeof spin !== "undefined") spin(); }}>Tourner la roue</button>
          </div>
        </div>

        {/* Screen 3 - Result */}
        {/* Screen 3a — Result + Form */}
        <div className="screen" id="s3">
          <div className="result-top" style={{marginBottom:'16px'}}>
            <div className="result-check">🎉</div>
            <div className="result-eyebrow">Félicitations</div>
            <div className="result-title">Vous avez<br />gagné <em id="r-val"></em> !</div>
          </div>
          <div className="result-card">
            <div className="rc-icon" id="r-ico">🎁</div>
            <div>
              <div className="rc-eyebrow">Votre lot</div>
              <div className="rc-name" id="r-name">-</div>
              <div className="rc-desc" id="r-desc">-</div>
            </div>
          </div>

          {/* Customer data form */}
          <div className="form-section">
            <div className="form-title">Recevoir votre lot</div>
            <div className="form-sub">Laissez vos coordonnées pour que le commerce puisse vous contacter — tout est optionnel.</div>
            <div className="form-field">
              <label className="form-label">Prénom et nom</label>
              <input className="form-input" type="text" placeholder="Marie Dupont" id="f-name" />
            </div>
            <div className="form-field">
              <label className="form-label">Téléphone</label>
              <input className="form-input" type="tel" placeholder="06 12 34 56 78" id="f-phone" />
            </div>
            <div className="form-field">
              <label className="form-label">Date de naissance <span style={{color:'#d1d5db',fontWeight:400}}>(optionnel)</span></label>
              <input className="form-input" type="date" id="f-dob" />
            </div>
            <div className="form-check">
              <input type="checkbox" id="f-consent" />
              <label htmlFor="f-consent">J'accepte d'être contacté(e) par <strong id="f-biz-name"></strong> pour recevoir mon lot et des offres personnalisées. <a href="/privacy" target="_blank">Politique de confidentialité</a></label>
            </div>
            <button className="btn-claim" onClick={() => { if (typeof claimPrize !== 'undefined') claimPrize(); }}>Recevoir mon lot →</button>
            <button className="btn-skip" onClick={() => { if (typeof skipForm !== 'undefined') skipForm(); }}>Non merci, juste le code</button>
          </div>
        </div>

        {/* Screen 3b — Optional Google review invitation (shown after prize claim) */}
        <div className="screen" id="s-review">
          <div style={{textAlign:'center',marginBottom:'20px'}}>
            <div style={{fontSize:'48px',marginBottom:'10px'}}>⭐</div>
            <div className="result-eyebrow">Une dernière chose...</div>
            <div className="result-title" style={{fontSize:'24px',marginTop:'8px'}}>Vous avez aimé votre visite ?</div>
          </div>
          <p style={{fontSize:'14px',color:'#6b7280',textAlign:'center',lineHeight:'1.65',marginBottom:'24px'}}>
            Si vous souhaitez partager votre expérience — positive ou constructive — nous vous serions reconnaissants.
            C'est entièrement optionnel et n'a <strong>aucun lien avec votre lot déjà gagné</strong>.
          </p>
          <button className="btn-google" onClick={() => { if (typeof openGoogleOptional !== "undefined") openGoogleOptional(); }}>
            <div className="g-badge">G</div>
            Partager mon expérience sur Google
          </button>
          <div className="already-done" onClick={() => { if (typeof skipReview !== "undefined") skipReview(); }} style={{marginTop:'12px'}}>Continuer sans laisser d'avis →</div>
        </div>

        {/* Screen 3b — Confirmed */}
        <div className="screen" id="s3b">
          <div style={{textAlign:'center',marginBottom:'20px'}}>
            <div style={{fontSize:'52px',marginBottom:'12px'}}>✅</div>
            <div className="result-eyebrow">Votre lot est confirmé</div>
            <div className="result-title" style={{fontSize:'26px'}}>À bientôt chez<br /><em id="r-biz-final"></em> !</div>
          </div>
          <div className="result-card">
            <div className="rc-icon" id="r-ico-b">🎁</div>
            <div>
              <div className="rc-eyebrow">Votre lot</div>
              <div className="rc-name" id="r-name-b">-</div>
              <div className="rc-desc" id="r-desc-b">-</div>
            </div>
          </div>
          <div className="result-code" style={{marginBottom:'14px'}}>
            <div><div className="rcode-label">Votre code</div><div className="rcode-val" id="r-code-b">-</div></div>
          </div>
          <div className="confirmed-box">
            <div className="cf-icon">📱</div>
            <div className="cf-txt">Faites une capture d'écran<br />et présentez ce code en caisse</div>
          </div>
          <div className="result-note">Valable lors de votre prochaine visite.</div>
        </div>

        <div className="esmy-badge">Propulsé par <a href="https://esmy.ai" target="_blank">Esmy</a></div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
const prizes = ${prizesList};
const COLORS = ${JSON.stringify(COLORS)};
const googleUrl = ${JSON.stringify(googleUrl)};
const bizName = ${JSON.stringify(bizName)};

function setStep(n) { document.getElementById('step-num').textContent = n; }
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
}
function openGoogleOptional() {
  if (googleUrl && googleUrl !== '#') window.open(googleUrl, '_blank');
}
function skipReview() { showConfirmed(); }
function goToWheel() { setStep(2); show('s2'); setTimeout(initWheel, 60); }

let wCtx, spinning = false, angle = 0;
function initWheel() {
  wCtx = document.getElementById('wheel').getContext('2d');
  drawWheel(0);
}
function drawWheel(a) {
  const c = wCtx, W = 290, cx = 145, cy = 145, R = 138;
  c.clearRect(0,0,W,W);
  const n = prizes.length, arc = (2*Math.PI)/n;
  prizes.forEach((p,i) => {
    const s = a+i*arc-Math.PI/2, e = s+arc;
    c.beginPath(); c.moveTo(cx,cy); c.arc(cx,cy,R,s,e); c.closePath();
    c.fillStyle = COLORS[i%COLORS.length]; c.fill();
    c.beginPath(); c.moveTo(cx,cy);
    c.lineTo(cx+Math.cos(s)*R, cy+Math.sin(s)*R);
    c.strokeStyle='rgba(255,255,255,.25)'; c.lineWidth=1; c.stroke();
    c.save(); c.translate(cx,cy); c.rotate(s+arc/2);
    c.font='16px serif'; c.textAlign='center'; c.textBaseline='middle';
    c.fillText(p.ico, R*.72, -8); c.restore();
    c.save(); c.translate(cx,cy); c.rotate(s+arc/2);
    c.font='500 10px Nunito,sans-serif'; c.textAlign='center'; c.textBaseline='middle';
    c.fillStyle='rgba(255,255,255,.9)';
    const lbl = p.name.length>10?p.name.slice(0,9)+'…':p.name;
    c.fillText(lbl, R*.72, 8); c.restore();
  });
  const hub = c.createRadialGradient(cx-4,cy-4,2,cx,cy,22);
  hub.addColorStop(0,'#fff'); hub.addColorStop(1,'#e5e7eb');
  c.beginPath(); c.arc(cx,cy,22,0,Math.PI*2); c.fillStyle=hub; c.fill();
  c.beginPath(); c.arc(cx,cy,22,0,Math.PI*2); c.strokeStyle='rgba(0,0,0,.1)'; c.lineWidth=1.5; c.stroke();
  c.beginPath(); c.arc(cx,cy,4,0,Math.PI*2); c.fillStyle='#111827'; c.fill();
}
function pickPrize() {
  const tot = prizes.reduce((a,p)=>a+p.weight,0);
  let r = Math.random()*tot;
  for(const p of prizes){ r-=p.weight; if(r<=0) return p; }
  return prizes[prizes.length-1];
}
function spin() {
  if(spinning) return;
  spinning=true;
  const btn=document.getElementById('btn-spin');
  btn.disabled=true; btn.textContent='…';
  const prize=pickPrize(), idx=prizes.indexOf(prize);
  const n=prizes.length, arc=(2*Math.PI)/n;
  const target=Math.PI*2*6+(Math.PI*2-(idx*arc+arc/2));
  const dur=4400, t0=performance.now(), a0=angle;
  (function frame(now){
    const p=Math.min((now-t0)/dur,1), ep=1-Math.pow(1-p,4);
    angle=a0+target*ep; drawWheel(angle);
    if(p<1){requestAnimationFrame(frame);}
    else{spinning=false;setTimeout(()=>showResult(prize),300);}
  })(performance.now());
}
let currentCode = '';
let currentPrizeObj = null;

function showResult(prize) {
  setStep(2);
  currentPrizeObj = prize;
  currentCode = 'E-'+Math.random().toString(36).substring(2,7).toUpperCase();
  // Fill result card in s3
  const rVal = document.getElementById('r-val');
  const rIco = document.getElementById('r-ico');
  const rName = document.getElementById('r-name');
  const rDesc = document.getElementById('r-desc');
  const fBiz = document.getElementById('f-biz-name');
  if(rVal) rVal.textContent = prize.name;
  if(rIco) rIco.textContent = prize.ico;
  if(rName) rName.textContent = prize.name;
  if(rDesc) rDesc.textContent = prize.desc || 'Valable chez nous';
  if(fBiz) fBiz.textContent = bizName;
  show('s3');
  doConfetti();
}

function showConfirmed() {
  const p = currentPrizeObj;
  if(!p) return;
  const icoB = document.getElementById('r-ico-b');
  const nameB = document.getElementById('r-name-b');
  const descB = document.getElementById('r-desc-b');
  const codeB = document.getElementById('r-code-b');
  const bizFinal = document.getElementById('r-biz-final');
  if(icoB) icoB.textContent = p.ico;
  if(nameB) nameB.textContent = p.name;
  if(descB) descB.textContent = p.desc || 'Valable chez nous';
  if(codeB) codeB.textContent = currentCode;
  if(bizFinal) bizFinal.textContent = bizName;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('on'));
  const s3b = document.getElementById('s3b');
  if(s3b) { s3b.classList.add('on'); }
}

function claimPrize() {
  // Save contact data here if needed, then offer optional Google review
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('on'));
  document.getElementById('s-review').classList.add('on');
}
function skipForm() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('on'));
  document.getElementById('s-review').classList.add('on');
}
function doConfetti() {
  const cols=['#F97316','#111827','#F59E0B','#16A34A','#7C3AED','#EF4444'];
  for(let i=0;i<50;i++){
    const c=document.createElement('div'); c.className='cf';
    const sz=5+Math.random()*7;
    c.style.cssText=\`left:\${Math.random()*100}vw;top:-10px;background:\${cols[i%6]};width:\${sz}px;height:\${sz}px;border-radius:\${Math.random()>.5?'50%':'2px'};animation-duration:\${1.6+Math.random()*2}s;animation-delay:\${Math.random()*.6}s\`;
    document.body.appendChild(c); setTimeout(()=>c.remove(),4500);
  }
}
      `}} />
    </>
  )
}
