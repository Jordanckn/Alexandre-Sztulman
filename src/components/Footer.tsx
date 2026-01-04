import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const content = {
    fr: {
      copyright: '© 2024 Maître Alexandre Sztulman - Avocat au Barreau de Paris. Tous droits réservés.',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      credit: 'Site réalisé par'
    },
    en: {
      copyright: '© 2024 Alexandre Sztulman - Attorney-at-Law, Paris Bar. All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
      credit: 'Website by'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-primary-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm">{t.copyright}</p>
            <p className="text-xs text-white/80">
              {t.credit}{' '}
              <a
                href="https://webfityou.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors underline"
              >
                WebFitYou
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <button className="hover:text-white/80 transition-colors">{t.legal}</button>
            <button className="hover:text-white/80 transition-colors">{t.privacy}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
