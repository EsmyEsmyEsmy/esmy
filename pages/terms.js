import Head from 'next/head'
import Link from 'next/link'

export default function TermsFR() {
  return (
    <>
      <Head>
        <title>Conditions Générales d'Utilisation · Esmy</title>
        <meta name="description" content="Conditions Générales d'Utilisation de la plateforme Esmy (esmy.ai)." />
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
            <Link href="/en/terms" className="lang">EN</Link>
          </nav>
        </header>

        <article className="doc">
          <p className="kicker">Esmy · esmy.ai</p>
          <h1>Conditions Générales d'Utilisation</h1>
          <p className="updated">Dernière mise à jour : mai 2026 · Applicable à l'ensemble des utilisateurs d'esmy.ai</p>

          <section>
            <h2>1. Objet</h2>
            <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Esmy (esmy.ai), éditée par Esmy, projet en cours de constitution dont le responsable est domicilié en France. En accédant à la plateforme et en créant un compte, vous acceptez sans réserve les présentes CGU.</p>
          </section>

          <section>
            <h2>2. Description du service</h2>
            <p>Esmy est une plateforme SaaS destinée aux commerçants locaux. Elle permet :</p>
            <ul>
              <li>La collecte d'avis Google via une mécanique de gamification (roue de la chance)</li>
              <li>La génération automatique de réponses aux avis via intelligence artificielle</li>
              <li>La publication des réponses sur Google Business Profile via l'API officielle Google</li>
              <li>Le suivi des performances de réputation via un tableau de bord</li>
            </ul>
          </section>

          <section>
            <h2>3. Inscription et compte</h2>
            <p>L'accès au service nécessite la création d'un compte avec une adresse email valide. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité réalisée sous votre compte.</p>
            <p>Vous devez être une personne morale ou physique agissant dans un cadre professionnel (commerçant, gérant d'établissement) pour utiliser Esmy.</p>
          </section>

          <section>
            <h2>4. Utilisation de l'API Google Business Profile</h2>
            <p>En connectant votre compte Google à Esmy, vous autorisez Esmy à :</p>
            <ul>
              <li>Lire les avis publiés sur votre fiche Google Business</li>
              <li>Publier des réponses à vos avis après votre approbation explicite</li>
            </ul>
            <p>Esmy n'utilise pas l'API pour modifier, supprimer ou masquer des avis. L'accès peut être révoqué à tout moment depuis votre compte Google.</p>
            <p>L'utilisation de l'API par Esmy est conforme à la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, y compris ses exigences de Limited Use, ainsi qu'aux règles relatives aux avis de Google.</p>
          </section>

          <section className="highlight">
            <h2>5. Conformité Google &amp; règles de bonne conduite</h2>
            <p>L'utilisation d'Esmy doit en tout temps rester conforme aux règles de Google concernant les avis. Le non-respect peut entraîner la suspension de votre fiche Google Business.</p>
            <h3>Pratiques interdites via Esmy</h3>
            <ul>
              <li>Conditionner la récompense à la note ou au contenu de l'avis — la récompense est offerte pour toute participation, quelle que soit la note, ou même sans avis si le client choisit de ne pas en laisser</li>
              <li>Dissuader les clients de laisser des avis négatifs</li>
              <li>Publier ou commander des avis faux ou trompeurs</li>
              <li>Utiliser Esmy pour harceler un auteur d'avis</li>
            </ul>
            <h3>Pratiques autorisées et conformes</h3>
            <ul>
              <li>Offrir une récompense dans le cadre d'une expérience client gamifiée — sans obligation de laisser un avis ni de contenu spécifique</li>
              <li>Répondre à des avis avec des réponses générées par IA après vérification humaine</li>
              <li>Inviter les clients via QR code à laisser leur expérience honnête</li>
            </ul>
          </section>

          <section>
            <h2>6. Abonnement et paiement</h2>
            <p>Esmy est proposé sous forme d'abonnement mensuel. Les tarifs en vigueur sont affichés sur la page <a href="https://esmy.ai/#tarifs">esmy.ai/#tarifs</a>. Le paiement est traité par Stripe. Aucune information bancaire n'est stockée par Esmy.</p>
            <h3>Résiliation</h3>
            <p>Vous pouvez résilier votre abonnement à tout moment depuis votre espace client. La résiliation prend effet à la fin de la période d'abonnement en cours. Aucun remboursement prorata n'est effectué sauf obligation légale.</p>
          </section>

          <section>
            <h2>7. Disponibilité du service</h2>
            <p>Esmy s'efforce d'assurer une disponibilité maximale du service (objectif SLA : 99,5 %). Des interruptions peuvent survenir pour maintenance ou en cas de défaillance technique. Esmy ne peut être tenu responsable de l'indisponibilité de l'API Google Business Profile.</p>
          </section>

          <section>
            <h2>8. Propriété intellectuelle</h2>
            <p>La plateforme Esmy, son code, ses interfaces et ses contenus sont la propriété exclusive d'Esmy et protégés par le droit de la propriété intellectuelle. L'utilisateur bénéficie d'un droit d'utilisation personnel, non exclusif et non cessible.</p>
          </section>

          <section>
            <h2>9. Responsabilité liée aux contenus générés par l'IA</h2>
            <p>Esmy met à disposition une fonctionnalité de génération automatique de réponses aux avis via intelligence artificielle. À ce titre :</p>
            <ul>
              <li>L'utilisateur reste seul responsable du contenu qu'il choisit de publier sur sa fiche Google Business Profile, qu'il soit rédigé manuellement ou généré par l'IA d'Esmy.</li>
              <li>Aucune réponse générée par l'IA n'est publiée sans l'approbation explicite et préalable du commerçant. En cliquant sur « Publier », l'utilisateur valide et assume l'entière responsabilité du contenu publié.</li>
              <li>L'utilisateur s'engage à relire et vérifier les réponses générées avant publication. Esmy ne peut être tenu responsable d'erreurs, d'inexactitudes ou de propos inappropriés contenus dans une réponse approuvée et publiée par l'utilisateur.</li>
              <li>L'utilisateur garantit que les contenus publiés via Esmy ne violent aucune loi applicable, aucun droit de tiers, et respectent les règles de conduite de Google Business Profile.</li>
            </ul>
          </section>

          <section>
            <h2>10. Limitation de responsabilité</h2>
            <p>Esmy ne saurait être tenu responsable de :</p>
            <ul>
              <li>Toute perte de classement Google résultant de modifications de l'algorithme Google</li>
              <li>Des avis publiés par vos clients et de leur contenu</li>
              <li>De l'indisponibilité de l'API Google Business Profile</li>
              <li>Des pertes indirectes, pertes de chiffre d'affaires ou préjudices commerciaux</li>
            </ul>
            <p>La responsabilité d'Esmy est limitée au montant des sommes effectivement perçues au cours des 3 derniers mois précédant le dommage.</p>
          </section>

          <section>
            <h2>11. Modification des CGU</h2>
            <p>Esmy se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront notifiés par email au moins 15 jours avant l'entrée en vigueur de modifications substantielles. La poursuite de l'utilisation du service après cette date vaut acceptation des nouvelles CGU.</p>
          </section>

          <section>
            <h2>12. Droit applicable et litiges</h2>
            <p>Les présentes CGU sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord, les tribunaux français compétents seront saisis.</p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>Pour toute question relative aux présentes CGU : <a href="mailto:contact@esmy.ai">contact@esmy.ai</a>.</p>
          </section>

          <footer className="docfoot">
            <Link href="/">← Retour à l'accueil</Link>
            <Link href="/privacy">Politique de confidentialité →</Link>
          </footer>
        </article>
      </main>

      <style jsx>{`
        .legal {
          --creme: #f7f3ea; --creme-soft: #efe9db; --noir: #1a1714; --noir-soft: #4a443c;
          --gold: #a8843e; --gold-soft: #d8c8a3; --hair: #e2dac9;
          min-height: 100vh; background: var(--creme); color: var(--noir);
          font-family: 'EB Garamond', Georgia, serif; animation: fade .6s ease both;
        }
        @keyframes fade { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: none;} }
        .topbar { max-width: 760px; margin: 0 auto; padding: 28px 24px; display: flex; align-items: baseline; justify-content: space-between; border-bottom: 1px solid var(--hair); }
        .wordmark { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; letter-spacing: .06em; color: var(--noir); text-decoration: none; }
        .langnav { font-size: 14px; letter-spacing: .08em; }
        .lang { color: var(--noir-soft); text-decoration: none; }
        .lang.active { color: var(--gold); font-weight: 500; }
        .sep { color: var(--gold-soft); margin: 0 8px; }
        .doc { max-width: 760px; margin: 0 auto; padding: 56px 24px 96px; }
        .kicker { font-family: 'EB Garamond', serif; text-transform: uppercase; letter-spacing: .22em; font-size: 12px; color: var(--gold); margin: 0 0 14px; }
        h1 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(36px, 6.4vw, 56px); line-height: 1.07; margin: 0 0 12px; }
        .updated { color: var(--noir-soft); font-style: italic; margin: 0 0 36px; }
        section { margin: 0 0 40px; }
        section.highlight { background: var(--creme-soft); border: 1px solid var(--hair); border-radius: 4px; padding: 30px 32px 12px; margin: 0 0 44px; }
        h2 { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 27px; margin: 0 0 16px; padding-bottom: 10px; border-bottom: 1px solid var(--hair); }
        h3 { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 20px; margin: 26px 0 10px; color: var(--noir); }
        p { font-size: 17px; line-height: 1.75; margin: 0 0 14px; color: var(--noir); }
        ul { margin: 0 0 16px; padding-left: 22px; }
        li { font-size: 17px; line-height: 1.7; margin: 0 0 8px; }
        a { color: var(--gold); text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
        a:hover { color: var(--noir); }
        .docfoot { margin-top: 64px; padding-top: 28px; border-top: 1px solid var(--hair); display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 15px; }
        .docfoot a { color: var(--noir-soft); text-decoration: none; }
        .docfoot a:hover { color: var(--gold); }
      `}</style>
    </>
  )
}
