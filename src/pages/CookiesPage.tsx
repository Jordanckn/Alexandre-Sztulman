import { Language } from '../types';

interface CookiesPageProps {
  language: Language;
}

export function CookiesPage({ language }: CookiesPageProps) {
  const content = {
    fr: {
      title: 'Politique de Cookies',
      intro: 'Cette page explique comment nous utilisons les cookies sur notre site web et comment vous pouvez gérer vos préférences.',
      whatAre: 'Qu\'est-ce qu\'un cookie ?',
      whatAreDesc: 'Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences pendant une période donnée.',
      howWeUse: 'Comment nous utilisons les cookies',
      essential: 'Cookies essentiels',
      essentialDesc: 'Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions que vous effectuez, comme la définition de vos préférences de confidentialité.',
      analytics: 'Cookies analytiques',
      analyticsDesc: 'Ces cookies nous permettent de compter les visites et sources de trafic afin de mesurer et améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires.',
      functional: 'Cookies fonctionnels',
      functionalDesc: 'Ces cookies permettent au site de fournir des fonctionnalités améliorées et une personnalisation. Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos pages.',
      yourChoices: 'Vos choix',
      yourChoicesDesc: 'Vous pouvez gérer vos préférences en matière de cookies à tout moment en utilisant les paramètres de votre navigateur. Veuillez noter que la désactivation de certains cookies peut affecter votre expérience sur notre site.',
      manage: 'Gérer les préférences',
      manageDesc: 'Pour modifier vos préférences en matière de cookies, vous pouvez :',
      manageList1: 'Utiliser les paramètres de votre navigateur pour bloquer ou supprimer les cookies',
      manageList2: 'Visiter les sites de désactivation des réseaux publicitaires',
      manageList3: 'Configurer vos préférences lors de votre prochaine visite via notre bannière de cookies',
      contact: 'Contact',
      contactDesc: 'Pour toute question concernant notre utilisation des cookies, veuillez nous contacter à :',
      lastUpdate: 'Dernière mise à jour : Janvier 2024'
    },
    en: {
      title: 'Cookie Policy',
      intro: 'This page explains how we use cookies on our website and how you can manage your preferences.',
      whatAre: 'What is a cookie?',
      whatAreDesc: 'A cookie is a small text file stored on your computer or mobile device when you visit a website. Cookies allow the site to remember your actions and preferences over a period of time.',
      howWeUse: 'How we use cookies',
      essential: 'Essential cookies',
      essentialDesc: 'These cookies are necessary for the site to function and cannot be disabled. They are usually set in response to actions you take, such as setting your privacy preferences.',
      analytics: 'Analytics cookies',
      analyticsDesc: 'These cookies allow us to count visits and traffic sources to measure and improve our site\'s performance. They help us know which pages are most and least popular.',
      functional: 'Functional cookies',
      functionalDesc: 'These cookies enable the site to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.',
      yourChoices: 'Your choices',
      yourChoicesDesc: 'You can manage your cookie preferences at any time using your browser settings. Please note that disabling certain cookies may affect your experience on our site.',
      manage: 'Manage preferences',
      manageDesc: 'To change your cookie preferences, you can:',
      manageList1: 'Use your browser settings to block or delete cookies',
      manageList2: 'Visit advertising network opt-out sites',
      manageList3: 'Configure your preferences on your next visit via our cookie banner',
      contact: 'Contact',
      contactDesc: 'For any questions regarding our use of cookies, please contact us at:',
      lastUpdate: 'Last updated: January 2024'
    }
  };

  const t = content[language];

  const handleResetPreferences = () => {
    localStorage.removeItem('cookieConsent');
    window.location.reload();
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
          {t.title}
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            {t.intro}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              {t.whatAre}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t.whatAreDesc}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6">
              {t.howWeUse}
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.essential}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.essentialDesc}
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.analytics}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.analyticsDesc}
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.functional}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.functionalDesc}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              {t.yourChoices}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t.yourChoicesDesc}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              {t.manage}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {t.manageDesc}
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
              <li>{t.manageList1}</li>
              <li>{t.manageList2}</li>
              <li>{t.manageList3}</li>
            </ul>
            <button
              onClick={handleResetPreferences}
              className="px-6 py-3 bg-primary-700 text-white font-medium rounded-sm hover:bg-primary-600 transition-colors"
            >
              {t.manage}
            </button>
          </section>

          <section className="mb-12 bg-primary-50 p-6 rounded-sm border border-primary-200">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              {t.contact}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-2">
              {t.contactDesc}
            </p>
            <a
              href="mailto:contact@sztulman-avocat.com"
              className="text-primary-700 hover:text-primary-600 font-medium transition-colors"
            >
              contact@sztulman-avocat.com
            </a>
          </section>

          <p className="text-sm text-slate-500 italic">
            {t.lastUpdate}
          </p>
        </div>
      </div>
    </div>
  );
}
