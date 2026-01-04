import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const content = {
    fr: {
      home: 'Accueil',
      about: 'Le Cabinet',
      sanctions: 'Sanctions Internationales',
      business: 'Droit Pénal des Affaires',
      investments: 'Droit des Investissements',
      blog: 'Publications',
      contact: 'Contact',
      sitemap: 'Plan du site',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      cookies: 'Paramètres des cookies',
      contactInfo: 'Contact',
      address: '22 avenue Franklin D. Roosevelt',
      city: '75008 Paris',
      phone: '+33 6 59 41 09 15',
      email: 'contact@sztulman-avocat.com',
      copyright: '© 2024 Maître Alexandre Sztulman. Tous droits réservés.',
      credit: 'Site réalisé par'
    },
    en: {
      home: 'Home',
      about: 'The Firm',
      sanctions: 'International Sanctions',
      business: 'Business Criminal Law',
      investments: 'International Investment Law',
      blog: 'Publications',
      contact: 'Contact',
      sitemap: 'Sitemap',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings',
      contactInfo: 'Contact',
      address: '22 avenue Franklin D. Roosevelt',
      city: '75008 Paris',
      phone: '+33 6 59 41 09 15',
      email: 'contact@sztulman-avocat.com',
      copyright: '© 2024 Alexandre Sztulman. All rights reserved.',
      credit: 'Website by'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex flex-col gap-1 w-fit hover:opacity-80 transition-opacity">
              <span className="text-base font-bold tracking-wide text-white font-serif uppercase">
                <span className="text-xl font-normal">A</span>LEXANDRE <span className="text-xl font-normal">S</span>ZTULMAN
              </span>
              <span className="text-xs tracking-wider text-white/90 uppercase font-serif">
                Avocat au Barreau de Paris
              </span>
            </Link>
            <p className="text-sm text-white/80 mt-2">{t.address}</p>
            <p className="text-sm text-white/80">{t.city}</p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-sm transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@sztulman-avocat.com"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-sm transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 font-serif">{t.sitemap}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link to="/expertise/sanctions" className="text-white/80 hover:text-white transition-colors">
                  {t.sanctions}
                </Link>
              </li>
              <li>
                <Link to="/expertise/business-criminal" className="text-white/80 hover:text-white transition-colors">
                  {t.business}
                </Link>
              </li>
              <li>
                <Link to="/expertise/investment-disputes" className="text-white/80 hover:text-white transition-colors">
                  {t.investments}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
                  {t.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 font-serif">{t.contactInfo}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+33659410915" className="text-white/80 hover:text-white transition-colors">
                  {t.phone}
                </a>
              </li>
              <li>
                <a href="mailto:contact@sztulman-avocat.com" className="text-white/80 hover:text-white transition-colors">
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 font-serif">Légal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button className="text-white/80 hover:text-white transition-colors">
                  {t.legal}
                </button>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors">
                  {t.privacy}
                </button>
              </li>
              <li>
                <Link to="/cookies" className="text-white/80 hover:text-white transition-colors">
                  {t.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/70">{t.copyright}</p>
            <p className="text-xs text-white/70">
              {t.credit}{' '}
              <a
                href="https://webfityou.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                WebFitYou
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
