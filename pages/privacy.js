import Head from 'next/head'
import Link from 'next/link'

export default function PrivacyFR() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité · Esmy</title>
        <meta name="description" content="Politique de confidentialité d'Esmy — protection des données des commerçants et conformité à l'API Google Business Profile." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </Head>

      <main className="legal">
        <header className="topbar">
          <Link href="/" className="wordmark">Esmy</Link>
          <nav className="langnav">
            <span className="lang active">FR</span>
            <span className="sep">·</span>
            <Link href="/en/privacy" className="lang">EN</Link>
          </nav>
        </header>

        <article className="doc">
          <p className="kicker">Esmy · esmy.ai</p>
          <h1>Politique de confidentialité</h1>
          <p className="updated">Dernière mise à jour : mai 2026</p>

          <div className="summary">
            <p><strong>En résumé.</strong> Vos données et celles de vos clients ne sont jamais vendues, ni partagées avec des tiers à des fins commerciales. Aucune publicité. Les données issues de Google ne servent qu'à faire fonctionner votre tableau de bord. Vous pouvez révoquer l'accès et demander la suppression de vos données à tout moment.</p>
          </div>

          <section>
            <h2>1. Qui sommes-nous</h2>
            <p>Esmy (esmy.ai) est un projet en cours de constitution dont le responsable est domicilié en France. Le responsable de traitement est le fondateur d'Esmy, joignable à <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a> ou <a href="mailto:contact@esmy.ai">contact@esmy.ai</a>.</p>
          </section>

          <section>
            <h2>2. Données collectées</h2>
            <h3>2.1 Données des commerçants (utilisateurs du tableau de bord)</h3>
            <ul>
              <li>Nom, prénom, adresse email professionnelle</li>
              <li>Nom et adresse de l'établissement</li>
              <li>Token OAuth Google Business Profile (chiffré, jamais exposé au navigateur)</li>
              <li>Données de facturation (traitées par Stripe — non stockées par Esmy)</li>
              <li>Logs d'utilisation de la plateforme</li>
            </ul>
            <h3>2.2 Données des clients finaux (visiteurs de la page de jeu)</h3>
            <ul>
              <li>Adresse email (optionnelle — uniquement si le client la saisit volontairement)</li>
              <li>Résultat du jeu (lot gagné, code de récompense)</li>
              <li>Date et heure de participation</li>
              <li>Aucune donnée de localisation précise n'est collectée</li>
            </ul>
            <h3>2.3 Données issues de l'API Google Business Profile</h3>
            <ul>
              <li>Avis Google publiés (texte, note, pseudo du rédacteur, date)</li>
              <li>Réponses aux avis (publiées uniquement avec votre accord explicite)</li>
              <li>Informations de l'établissement (nom, adresse, catégorie)</li>
            </ul>
            <p>Ces données sont accédées via l'API officielle Google Business Profile, exclusivement après autorisation OAuth explicite du commerçant.</p>
          </section>

          <section className="highlight">
            <h2>3. Intégration de l'API Google Business Profile</h2>

            <p className="limited-use"><strong>Conformité — Limited Use.</strong> L'utilisation et le transfert par Esmy, vers toute autre application, des informations reçues des API Google respectent la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, y compris ses exigences de <em>Limited Use</em>.</p>

            <h3>Périmètre OAuth demandé</h3>
            <p>Esmy demande uniquement le périmètre (scope) suivant :</p>
            <p className="code">https://www.googleapis.com/auth/business.manage</p>

            <h3>Endpoints utilisés</h3>
            <ul>
              <li><span className="mono">accounts.list</span> — identifier le compte Google Business du commerçant</li>
              <li><span className="mono">locations.get</span> — récupérer le nom et l'adresse de l'établissement</li>
              <li><span className="mono">reviews.list</span> — lire les avis publiés (lecture seule)</li>
              <li><span className="mono">reviews.updateReply</span> — publier une réponse (uniquement après approbation du commerçant)</li>
            </ul>

            <h3>Utilisation des données Google</h3>
            <ul>
              <li>Afficher les avis dans le tableau de bord Esmy du commerçant concerné</li>
              <li>Générer puis publier des réponses aux avis, après approbation explicite du commerçant</li>
              <li>Produire des statistiques internes au seul compte de ce commerçant</li>
            </ul>
            <p>Les données issues de l'API Google ne sont <strong>jamais</strong> : partagées entre différents commerçants, vendues ou transférées à des tiers, utilisées à des fins publicitaires, ni utilisées pour entraîner des modèles d'intelligence artificielle généralisés ou indépendants de l'humain.</p>
            <p>Les données d'avis sont supprimées 90 jours après la fin du contrat. Le commerçant peut révoquer l'accès à tout moment depuis son compte Google ou depuis son espace Esmy.</p>
          </section>

          <section>
            <h2>4. Finalités du traitement</h2>
            <ul>
              <li>Fourniture du service Esmy (tableau de bord, réponses IA, gamification)</li>
              <li>Communication relative au compte (alertes, notifications)</li>
              <li>Facturation et gestion du compte</li>
              <li>Amélioration du service (données agrégées et anonymisées)</li>
            </ul>
            <p>Base légale : exécution du contrat (Art. 6.1.b RGPD) et intérêt légitime (Art. 6.1.f RGPD) pour l'amélioration du service.</p>
          </section>

          <section>
            <h2>5. Conservation des données</h2>
            <ul>
              <li>Données de compte commerçant : durée de l'abonnement + 3 ans (obligations légales)</li>
              <li>Données d'avis Google : 90 jours après résiliation du contrat</li>
              <li>Données clients finaux (email optionnel) : 12 mois glissants</li>
              <li>Logs techniques : 6 mois</li>
            </ul>
          </section>

          <section>
            <h2>6. Sécurité</h2>
            <ul>
              <li>Chiffrement des données au repos : AES-256</li>
              <li>Chiffrement des communications : TLS 1.3</li>
              <li>Tokens OAuth stockés de manière chiffrée — jamais exposés au frontend</li>
              <li>Accès aux données limité aux seuls membres de l'équipe Esmy qui en ont besoin</li>
            </ul>
          </section>

          <section>
            <h2>7. Vos droits (RGPD)</h2>
            <p>Vous disposez des droits suivants sur vos données personnelles :</p>
            <ul>
              <li><strong>Accès</strong> — obtenir une copie de vos données</li>
              <li><strong>Rectification</strong> — corriger des données inexactes</li>
              <li><strong>Effacement</strong> — demander la suppression de vos données</li>
              <li><strong>Portabilité</strong> — recevoir vos données dans un format structuré</li>
              <li><strong>Opposition</strong> — vous opposer à certains traitements</li>
            </ul>
            <p>Pour exercer ces droits : <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>. Réponse sous 30 jours. Vous pouvez également saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).</p>
          </section>

          <section>
            <h2>8. Suppression des données et révocation d'accès</h2>
            <p>À tout moment, vous pouvez :</p>
            <ul>
              <li>Révoquer l'accès d'Esmy à votre fiche Google depuis <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a> ;</li>
              <li>Supprimer votre compte et l'ensemble de vos données depuis votre espace Esmy, ou en écrivant à <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>.</li>
            </ul>
            <p>La suppression entraîne l'effacement des données associées sous 30 jours, hors obligations légales de conservation.</p>
          </section>

          <section>
            <h2>9. Cookies</h2>
            <p>Esmy utilise uniquement des cookies strictement nécessaires au fonctionnement de la plateforme (session, authentification). Aucun cookie publicitaire ou de tracking tiers n'est utilisé.</p>
          </section>

          <section>
            <h2>10. Sous-traitants</h2>
            <ul>
              <li><strong>Stripe</strong> — traitement des paiements (conforme PCI-DSS)</li>
              <li><strong>Vercel</strong> — hébergement de la plateforme web</li>
              <li><strong>Supabase</strong> — base de données et authentification (hébergé dans l'Union Européenne)</li>
              <li><strong>Resend</strong> — envoi des emails transactionnels</li>
              <li><strong>Anthropic</strong> — API d'IA pour la génération des réponses aux avis. Les données transmises via l'API ne sont pas utilisées pour entraîner les modèles d'Anthropic.</li>
            </ul>
            <p>Tous les sous-traitants sont liés par un accord de traitement des données (DPA) conforme au RGPD.</p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>Pour toute question relative à cette politique : <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>.</p>
          </section>

          <footer className="docfoot">
            <Link href="/">← Retour à l'accueil</Link>
            <Link href="/terms">Conditions Générales d'Utilisation →</Link>
          </footer>
        </article>
      </main>

      <style jsx>{`
        .legal {
          --creme: #f7f3ea;
          --creme-soft: #efe9db;
          --noir: #1a1714;
          --noir-soft: #4a443c;
          --gold: #a8843e;
          --gold-soft: #d8c8a3;
          --hair: #e2dac9;
          min-height: 100vh;
          background: var(--creme);
          color: var(--noir);
          font-family: 'EB Garamond', Georgia, serif;
          animation: fade .6s ease both;
        }
        @keyframes fade { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: none;} }
        .topbar {
          max-width: 760px;
          margin: 0 auto;
          padding: 28px 24px;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          border-bottom: 1px solid var(--hair);
        }
        .wordmark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          letter-spacing: .06em;
          color: var(--noir);
          text-decoration: none;
        }
        .langnav { font-size: 14px; letter-spacing: .08em; }
        .lang { color: var(--noir-soft); text-decoration: none; }
        .lang.active { color: var(--gold); font-weight: 500; }
        .sep { color: var(--gold-soft); margin: 0 8px; }
        .doc { max-width: 760px; margin: 0 auto; padding: 56px 24px 96px; }
        .kicker {
          font-family: 'EB Garamond', serif;
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 12px;
          color: var(--gold);
          margin: 0 0 14px;
        }
        h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          font-size: clamp(38px, 7vw, 60px);
          line-height: 1.05;
          margin: 0 0 12px;
        }
        .updated { color: var(--noir-soft); font-style: italic; margin: 0 0 36px; }
        .summary {
          background: var(--creme-soft);
          border-left: 3px solid var(--gold);
          padding: 22px 26px;
          margin: 0 0 48px;
          border-radius: 2px;
        }
        .summary p { margin: 0; font-size: 18px; line-height: 1.65; }
        section { margin: 0 0 40px; }
        section.highlight {
          background: var(--creme-soft);
          border: 1px solid var(--hair);
          border-radius: 4px;
          padding: 30px 32px 12px;
          margin: 0 0 44px;
        }
        h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 27px;
          margin: 0 0 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--hair);
        }
        h3 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 20px;
          margin: 26px 0 10px;
          color: var(--noir);
        }
        p { font-size: 17px; line-height: 1.75; margin: 0 0 14px; color: var(--noir); }
        ul { margin: 0 0 16px; padding-left: 22px; }
        li { font-size: 17px; line-height: 1.7; margin: 0 0 8px; }
        a { color: var(--gold); text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
        a:hover { color: var(--noir); }
        .limited-use {
          background: #fff;
          border: 1px solid var(--gold-soft);
          border-left: 3px solid var(--gold);
          padding: 18px 22px;
          border-radius: 2px;
          font-size: 16.5px;
        }
        .code {
          font-family: ui-monospace, 'SF Mono', Menlo, monospace;
          font-size: 14.5px;
          background: var(--noir);
          color: var(--creme);
          padding: 12px 16px;
          border-radius: 4px;
          overflow-x: auto;
          margin: 0 0 18px;
        }
        .mono { font-family: ui-monospace, 'SF Mono', Menlo, monospace; font-size: 14.5px; color: var(--noir-soft); }
        .docfoot {
          margin-top: 64px;
          padding-top: 28px;
          border-top: 1px solid var(--hair);
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 15px;
        }
        .docfoot a { color: var(--noir-soft); text-decoration: none; }
        .docfoot a:hover { color: var(--gold); }
      `}</style>
    </>
  )
}
