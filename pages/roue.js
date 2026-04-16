import Head from 'next/head'

const STYLES = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --gold:#C9A84C;--gold-l:#F0D080;--gold-d:#8A6A1A;
  --rose:#E8B4A0;--black:#080808;--deep:#0D0A06;
  --surface:#131008;--text:#F5EDD5;--muted:rgba(245,237,213,.45);
}
html,body{width:100%;min-height:100vh;background:var(--deep);font-family:'Montserrat',sans-serif;color:var(--text);overflow-x:hidden}
body::before{content:'';position:fixed;inset:0;z-index:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");background-size:200px 200px;pointer-events:none;opacity:.6}
.bg-glow{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse 60% 40% at 50% 20%,rgba(201,168,76,.08) 0%,transparent 70%),radial-gradient(ellipse 40% 60% at 20% 80%,rgba(232,180,160,.05) 0%,transparent 60%);pointer-events:none}
.wrap{position:relative;z-index:5;max-width:1100px;margin:0 auto;padding:40px 24px 60px}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(8,8,8,.92);backdrop-filter:blur(16px);border-bottom:1px solid rgba(201,168,76,.1);height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 28px}
.nav-logo{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;font-style:italic;color:var(--gold-l);text-decoration:none;letter-spacing:-.5px}
.nav-back{font-size:12px;color:var(--muted);text-decoration:none;letter-spacing:2px;text-transform:uppercase;transition:color .2s}
.nav-back:hover{color:var(--gold)}
.nav-cta{background:none;border:1px solid rgba(201,168,76,.4);color:var(--gold);font-family:'Montserrat',sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;padding:9px 20px;cursor:pointer;transition:all .3s;text-decoration:none}
.nav-cta:hover{border-color:var(--gold);background:rgba(201,168,76,.08)}

/* HERO */
.hero{padding:100px 0 40px;text-align:center}
.eyebrow{font-size:9px;letter-spacing:6px;color:var(--gold);text-transform:uppercase;display:block;margin-bottom:10px}
.hero h1{font-family:'Playfair Display',serif;font-size:clamp(32px,5vw,56px);font-weight:900;font-style:italic;background:linear-gradient(135deg,var(--gold-d) 0%,var(--gold-l) 45%,var(--rose) 80%,var(--gold) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1.1;letter-spacing:-1px;margin-bottom:10px}
.hero-sub{font-size:13px;color:var(--muted);letter-spacing:1.5px;max-width:480px;margin:0 auto;line-height:1.7}

/* MAIN GRID */
.main-grid{display:grid;grid-template-columns:1fr 380px;gap:48px;align-items:start;margin-top:48px}

/* WHEEL SECTION */
.wheel-section{display:flex;flex-direction:column;align-items:center}
.wheel-stage{position:relative;width:min(440px,90vw);height:min(440px,90vw);margin-bottom:32px}
.wheel-stage::before{content:'';position:absolute;inset:-20px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(201,168,76,.15) 0%,rgba(201,168,76,.05) 50%,transparent 70%);animation:breathe 3s ease-in-out infinite;pointer-events:none}
@keyframes breathe{0%,100%{transform:scale(1);opacity:.7}50%{transform:scale(1.05);opacity:1}}
.wheel-ring{position:absolute;inset:-6px;border-radius:50%;background:conic-gradient(from 0deg,var(--gold-d),var(--gold-l),var(--gold),var(--gold-d),var(--gold-l),var(--gold),var(--gold-d),var(--gold-l),var(--gold),var(--gold-d),var(--gold-l),var(--gold),var(--gold-d));padding:2.5px;box-shadow:0 0 40px rgba(201,168,76,.3),0 0 80px rgba(201,168,76,.1)}
.wheel-ring-inner{width:100%;height:100%;border-radius:50%;background:var(--deep)}
#wheel-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:50%;filter:drop-shadow(0 0 20px rgba(201,168,76,.2));transition:filter .3s}
#wheel-canvas.spinning{filter:drop-shadow(0 0 40px rgba(201,168,76,.5))}
.wheel-boss{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:52px;height:52px;border-radius:50%;background:radial-gradient(circle at 35% 35%,var(--gold-l),var(--gold-d));border:3px solid var(--gold);box-shadow:0 0 20px rgba(201,168,76,.4),inset 0 0 10px rgba(0,0,0,.3);z-index:20;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .2s,box-shadow .2s}
.wheel-boss:hover{transform:translate(-50%,-50%) scale(1.08);box-shadow:0 0 30px rgba(201,168,76,.6),inset 0 0 10px rgba(0,0,0,.3)}
.wheel-pointer{position:absolute;top:-16px;left:50%;transform:translateX(-50%);z-index:25;filter:drop-shadow(0 4px 8px rgba(201,168,76,.5))}
.spin-btn{position:relative;background:none;border:none;cursor:pointer;overflow:hidden;transition:transform .2s;margin-top:8px}
.spin-btn:active{transform:scale(.97)}
.spin-btn-inner{position:relative;padding:16px 56px;background:linear-gradient(135deg,var(--gold-d) 0%,var(--gold) 50%,var(--gold-l) 100%);color:var(--deep);font-family:'Playfair Display',serif;font-size:13px;font-weight:700;letter-spacing:4px;text-transform:uppercase;clip-path:polygon(12px 0%,calc(100% - 12px) 0%,100% 50%,calc(100% - 12px) 100%,12px 100%,0% 50%);transition:all .3s}
.spin-btn:hover .spin-btn-inner{background:linear-gradient(135deg,var(--gold) 0%,var(--gold-l) 50%,#FFE8A0 100%);box-shadow:0 0 40px rgba(201,168,76,.5)}
.spin-btn:disabled .spin-btn-inner{opacity:.4;cursor:not-allowed}
.result-display{margin-top:20px;min-height:50px;text-align:center;opacity:0;transform:translateY(10px);transition:all .5s ease}
.result-display.show{opacity:1;transform:translateY(0)}
.result-label{font-size:9px;letter-spacing:5px;color:var(--gold);text-transform:uppercase;margin-bottom:5px}
.result-value{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;font-style:italic;background:linear-gradient(135deg,var(--gold-l),var(--rose));-webkit-background-clip:text;-webkit-text-fill-color:transparent}

/* CONFIG PANEL */
.config-panel{display:flex;flex-direction:column;gap:16px}
.panel-title{font-size:9px;letter-spacing:5px;color:var(--gold);text-transform:uppercase;margin-bottom:4px;display:flex;align-items:center;gap:12px}
.panel-title::after{content:'';flex:1;height:1px;background:linear-gradient(to right,rgba(201,168,76,.4),transparent)}
.card-dark{background:rgba(201,168,76,.04);border:1px solid rgba(201,168,76,.12);padding:20px}
.field-label{font-size:9px;letter-spacing:3px;color:var(--muted);text-transform:uppercase;margin-bottom:6px;display:block}
.field-input{width:100%;background:rgba(201,168,76,.06);border:1px solid rgba(201,168,76,.2);color:var(--text);font-family:'Montserrat',sans-serif;font-size:13px;padding:10px 12px;outline:none;transition:border-color .2s}
.field-input:focus{border-color:rgba(201,168,76,.5)}
.field-input::placeholder{color:var(--muted)}
.prize-list{display:flex;flex-direction:column;gap:8px;max-height:280px;overflow-y:auto;padding-right:4px}
.prize-list::-webkit-scrollbar{width:3px}
.prize-list::-webkit-scrollbar-thumb{background:rgba(201,168,76,.3)}
.prize-item{display:grid;grid-template-columns:1fr 60px 36px;gap:6px;align-items:center}
.prize-item input{background:rgba(201,168,76,.06);border:1px solid rgba(201,168,76,.15);color:var(--text);font-family:'Montserrat',sans-serif;font-size:12px;padding:7px 10px;outline:none;width:100%}
.prize-item input:focus{border-color:rgba(201,168,76,.4)}
.del-btn{background:none;border:1px solid rgba(201,168,76,.15);color:var(--muted);cursor:pointer;padding:7px;font-size:12px;transition:all .2s;width:36px;text-align:center}
.del-btn:hover{border-color:rgba(232,90,90,.4);color:rgba(232,90,90,.8)}
.add-btn{background:none;border:1px solid rgba(201,168,76,.25);color:var(--gold);font-family:'Montserrat',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:10px;cursor:pointer;width:100%;margin-top:8px;transition:all .3s}
.add-btn:hover{background:rgba(201,168,76,.08);border-color:rgba(201,168,76,.5)}
.apply-btn{background:linear-gradient(135deg,var(--gold-d),var(--gold));color:var(--deep);border:none;font-family:'Playfair Display',serif;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:14px;cursor:pointer;width:100%;transition:all .3s;margin-top:4px}
.apply-btn:hover{background:linear-gradient(135deg,var(--gold),var(--gold-l));box-shadow:0 0 30px rgba(201,168,76,.3)}
.cta-section{background:rgba(201,168,76,.04);border:1px solid rgba(201,168,76,.15);padding:28px;text-align:center;margin-top:16px}
.cta-eyebrow{font-size:9px;letter-spacing:5px;color:var(--gold);text-transform:uppercase;margin-bottom:10px}
.cta-title{font-family:'Playfair Display',serif;font-size:22px;font-style:italic;background:linear-gradient(135deg,var(--gold-l),var(--rose));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px}
.cta-sub{font-size:11px;color:var(--muted);margin-bottom:16px;line-height:1.7}
.cta-link{display:inline-block;background:linear-gradient(135deg,var(--gold-d),var(--gold));color:var(--deep);text-decoration:none;font-family:'Playfair Display',serif;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:13px 28px;transition:all .3s}
.cta-link:hover{box-shadow:0 0 30px rgba(201,168,76,.4)}
.divider-gold{height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,.4),transparent);margin:24px 0}
@media(max-width:900px){.main-grid{grid-template-columns:1fr}}
@media(max-width:480px){.wrap{padding:20px 16px 40px}.hero{padding:80px 0 24px}}
`

const BODY = `
<div class="bg-glow"></div>

<nav class="nav">
  <a href="/" class="nav-logo">esmy.</a>
  <span class="nav-back">← Retour</span>
  <a href="/login" class="nav-cta">Démarrer</a>
</nav>

<div class="wrap">
  <div class="hero">
    <span class="eyebrow">Esmy · Roue de fortune</span>
    <h1>Votre roue en temps réel</h1>
    <p class="hero-sub">Personnalisez vos lots et visualisez exactement ce que verront vos clients. Testez les probabilités avant de déployer.</p>
  </div>

  <div class="main-grid">

    <!-- ROUE -->
    <div class="wheel-section">
      <div class="wheel-stage" id="wheel-stage">
        <div class="wheel-ring"><div class="wheel-ring-inner"></div></div>
        <canvas id="wheel-canvas"></canvas>
        <div class="wheel-pointer">
          <svg width="20" height="28" viewBox="0 0 20 28">
            <polygon points="10,0 20,28 10,20 0,28" fill="#C9A84C"/>
            <polygon points="10,4 16,24 10,17 4,24" fill="#F0D080"/>
          </svg>
        </div>
        <div class="wheel-boss" onclick="spinWheel()" id="boss-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D0A06" stroke-width="2.5">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </div>
      </div>

      <button class="spin-btn" id="spin-btn" onclick="spinWheel()">
        <div class="spin-btn-inner" id="spin-btn-text">Tourner la roue</div>
      </button>

      <div class="result-display" id="result-display">
        <div class="result-label">Lot gagné</div>
        <div class="result-value" id="result-value">—</div>
      </div>
    </div>

    <!-- CONFIG -->
    <div class="config-panel">
      <div class="panel-title">Configuration des lots</div>

      <div class="card-dark">
        <label class="field-label">Nom de votre commerce</label>
        <input class="field-input" id="cfg-name" placeholder="La Pizza du Soleil" value="La Pizza du Soleil">
      </div>

      <div class="card-dark">
        <label class="field-label">Lots & probabilités (%)</label>
        <div class="prize-list" id="prize-list"></div>
        <button class="add-btn" onclick="addPrize()">+ Ajouter un lot</button>
      </div>

      <button class="apply-btn" onclick="applyConfig()">Appliquer les modifications</button>

      <div class="divider-gold"></div>

      <div class="cta-section">
        <div class="cta-eyebrow">Prêt à déployer ?</div>
        <div class="cta-title">Activez votre roue pour vos clients</div>
        <p class="cta-sub">Créez votre compte Esmy et obtenez votre QR code en 10 minutes. Vos clients jouent, laissent leur avis, et reviennent.</p>
        <a href="/login" class="cta-link">Créer mon compte gratuit</a>
      </div>
    </div>

  </div>
</div>
`

const SCRIPTS = `
let segments = [
  {label:'Café offert',weight:40,color:'#1a0d00',textColor:'#F0D080'},
  {label:'Pizza offerte',weight:20,color:'#0a1200',textColor:'#C9A84C'},
  {label:'Bon 10€',weight:20,color:'#0a0a1a',textColor:'#E8B4A0'},
  {label:'Dessert offert',weight:10,color:'#1a0a0d',textColor:'#F0D080'},
  {label:'Week-end spa',weight:5,color:'#050a14',textColor:'#C9A84C'},
  {label:'Réduction 15%',weight:5,color:'#0d1a0d',textColor:'#E8B4A0'},
];

let isSpinning = false;
let currentAngle = 0;
const canvas = document.getElementById('wheel-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const stage = document.getElementById('wheel-stage');
  const size = stage.offsetWidth;
  canvas.width = size; canvas.height = size;
  drawWheel(currentAngle);
}

function drawWheel(angle) {
  const w = canvas.width, h = canvas.height;
  const cx = w/2, cy = h/2, r = w/2 - 4;
  ctx.clearRect(0,0,w,h);
  const total = segments.reduce((s,seg)=>s+(seg.weight||1),0);
  let sa = angle - Math.PI/2;
  segments.forEach(seg=>{
    const slice = (seg.weight||1)/total * Math.PI*2;
    const ea = sa + slice;
    const mid = sa + slice/2;
    ctx.beginPath(); ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r-2,sa,ea); ctx.closePath();
    ctx.fillStyle = seg.color; ctx.fill();
    const grad = ctx.createRadialGradient(cx,cy,0,cx,cy,r);
    grad.addColorStop(0,'rgba(255,255,255,0.04)');
    grad.addColorStop(0.6,'rgba(0,0,0,0)');
    grad.addColorStop(1,'rgba(0,0,0,0.3)');
    ctx.fillStyle = grad; ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx,cy);
    ctx.lineTo(cx+r*Math.cos(sa), cy+r*Math.sin(sa));
    ctx.strokeStyle='rgba(201,168,76,0.5)'; ctx.lineWidth=1.5; ctx.stroke();
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(mid);
    ctx.textAlign='right'; ctx.fillStyle=seg.textColor||'#F0D080';
    const fs = Math.max(9,Math.min(13,r*0.07));
    ctx.font='600 '+fs+'px Montserrat,sans-serif';
    ctx.shadowColor='rgba(0,0,0,0.9)'; ctx.shadowBlur=5;
    ctx.fillText(seg.label, r-14, fs*0.38, r*0.65);
    ctx.restore();
    sa = ea;
  });
  ctx.beginPath(); ctx.arc(cx,cy,r-2,0,Math.PI*2);
  ctx.strokeStyle='rgba(201,168,76,0.6)'; ctx.lineWidth=2; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx,cy,r*0.13,0,Math.PI*2);
  ctx.fillStyle='rgba(10,7,3,0.95)'; ctx.fill();
  ctx.strokeStyle='rgba(201,168,76,0.4)'; ctx.lineWidth=1; ctx.stroke();
}

function spinWheel() {
  if(isSpinning) return;
  isSpinning = true;
  canvas.classList.add('spinning');
  document.getElementById('spin-btn').disabled = true;
  document.getElementById('result-display').classList.remove('show');
  const total = segments.reduce((s,seg)=>s+(seg.weight||1),0);
  const rand = Math.random()*total;
  let acc=0, targetIdx=0;
  for(let i=0;i<segments.length;i++){acc+=segments[i].weight||1;if(rand<acc){targetIdx=i;break;}}
  const slices = segments.map(s=>(s.weight||1)/total*Math.PI*2);
  let sliceStart = slices.slice(0,targetIdx).reduce((a,b)=>a+b,0);
  let targetAngle = sliceStart + slices[targetIdx]/2;
  const fullRot = 6*Math.PI*2;
  const toAngle = fullRot + (Math.PI*1.5 - targetAngle);
  const start = currentAngle, end = start+toAngle;
  const dur = 5000, t0 = performance.now();
  function ease(t){return 1-Math.pow(1-t,4);}
  function frame(now){
    const t = Math.min((now-t0)/dur,1);
    currentAngle = start+(end-start)*ease(t);
    drawWheel(currentAngle);
    if(t<1){requestAnimationFrame(frame);}
    else{
      currentAngle = end%(Math.PI*2);
      drawWheel(currentAngle);
      isSpinning=false;
      canvas.classList.remove('spinning');
      document.getElementById('spin-btn').disabled=false;
      document.getElementById('result-value').textContent = segments[targetIdx].label;
      document.getElementById('result-display').classList.add('show');
    }
  }
  requestAnimationFrame(frame);
}

function renderPrizeList() {
  const list = document.getElementById('prize-list');
  list.innerHTML = '';
  segments.forEach((seg,i)=>{
    const row = document.createElement('div');
    row.className = 'prize-item';
    row.innerHTML =
      '<input type="text" value="'+seg.label+'" placeholder="Nom du lot" oninput="segments['+i+'].label=this.value">'+
      '<input type="number" value="'+seg.weight+'" min="1" max="100" oninput="segments['+i+'].weight=parseInt(this.value)||1" style="text-align:center">'+
      '<button class="del-btn" onclick="delPrize('+i+')">✕</button>';
    list.appendChild(row);
  });
}

function addPrize() {
  segments.push({label:'Nouveau lot',weight:10,color:'#0a0a14',textColor:'#F0D080'});
  renderPrizeList(); drawWheel(currentAngle);
}

function delPrize(i) {
  if(segments.length<=2){alert('Minimum 2 lots requis');return;}
  segments.splice(i,1); renderPrizeList(); drawWheel(currentAngle);
}

function applyConfig() {
  drawWheel(currentAngle);
  const btn = document.getElementById('spin-btn');
  const orig = document.getElementById('spin-btn-text').textContent;
  document.getElementById('spin-btn-text').textContent = 'Mis à jour ✓';
  setTimeout(()=>{document.getElementById('spin-btn-text').textContent=orig;},1500);
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', ()=>{ resizeCanvas(); renderPrizeList(); });
`

export default function Roue() {
  return (
    <>
      <Head>
        <title>Roue de fortune — Esmy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,wght@0,600;0,700;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      <script dangerouslySetInnerHTML={{ __html: SCRIPTS }} />
    </>
  )
}
