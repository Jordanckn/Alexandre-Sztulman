import { Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const location = useLocation();

  const menuItems = {
    fr: [
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/about' },
      {
        name: 'Expertise',
        submenu: [
          { name: 'Sanctions Internationales', path: '/expertise/sanctions' },
          { name: 'Droit Pénal des Affaires', path: '/expertise/business-criminal' },
          { name: 'Contentieux des Investissements', path: '/expertise/investment-disputes' }
        ]
      },
      { name: 'Publications', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      {
        name: 'Practice Areas',
        submenu: [
          { name: 'International Sanctions', path: '/expertise/sanctions' },
          { name: 'Business Criminal Law', path: '/expertise/business-criminal' },
          { name: 'Investment Disputes', path: '/expertise/investment-disputes' }
        ]
      },
      { name: 'Publications', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ]
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="text-xl font-serif text-slate-800 hover:text-slate-600 transition-colors"
          >
            Me Alexandre Sztulman
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {menuItems[language].map((item) => {
              if (item.submenu) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setExpertiseOpen(true)}
                    onMouseLeave={() => setExpertiseOpen(false)}
                  >
                    <button className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2">
                      {item.name}
                    </button>
                    {expertiseOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-sm min-w-[250px] py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <button
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label={language === 'fr' ? 'Switch to English' : 'Passer au français'}
            >
              <Languages size={18} />
              <span className="text-sm font-medium uppercase">{language === 'fr' ? 'EN' : 'FR'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-1 text-slate-600"
              aria-label={language === 'fr' ? 'Switch to English' : 'Passer au français'}
            >
              <Languages size={18} />
              <span className="text-sm font-medium uppercase">{language === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {menuItems[language].map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name} className="py-2">
                    <div className="font-medium text-slate-900 px-2 py-2">{item.name}</div>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-3 px-2 text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
