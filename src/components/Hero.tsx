import { Mail } from 'lucide-react';
import { Language } from '../types';
import heroImage from '../assets/pexels-maria-20711682-11001707.webp';

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
            <div className="w-full max-w-lg">
              <img
                src={heroImage}
                alt="Palais de Justice"
                className="w-full h-auto rounded-sm shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
