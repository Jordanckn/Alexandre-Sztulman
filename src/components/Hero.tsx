import { Mail } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onContactClick: () => void;
}

export function Hero({ language, onContactClick }: HeroProps) {
  const content = {
    fr: {
      name: 'Alexandre Sztulman',
      title: 'Avocat au Barreau de Paris',
      tagline: 'Sanctions internationales – Droit pénal des affaires – Droit des investissements internationaux',
      contact: 'Contactez-nous'
    },
    en: {
      name: 'Alexandre Sztulman',
      title: 'Attorney-at-Law, Paris Bar',
      tagline: 'International Sanctions – Business Criminal Law – International Investment Law',
      contact: 'Contact Us'
    }
  };

  const t = content[language];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-serif text-primary-900 mb-3">{t.name}</h1>
              <p className="text-xl text-slate-600 font-medium">{t.title}</p>
            </div>

            <div className="h-px bg-primary-300 w-24"></div>

            <p className="text-lg text-slate-700 leading-relaxed">{t.tagline}</p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={onContactClick}
                className="px-8 py-3 bg-primary-700 text-white hover:bg-primary-600 transition-colors rounded-sm font-medium"
              >
                {t.contact}
              </button>

              <a href="mailto:contact@sztulman-avocat.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-700 transition-colors px-4 py-3">
                <Mail size={16} />
                <span>contact@sztulman-avocat.com</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-96 h-96 relative">
              <div className="absolute inset-0 bg-primary-700/5 rounded-sm transform rotate-3"></div>
              <div className="absolute inset-0 bg-primary-700/10 rounded-sm transform -rotate-3"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-700 to-primary-900 rounded-sm flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl font-serif mb-4">AS</div>
                    <div className="text-sm opacity-75">Docteur en Droit</div>
                    <div className="text-sm opacity-75">PhD in Law</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
