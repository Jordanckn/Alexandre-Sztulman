import { Mail, Phone } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onContactClick: () => void;
}

export function Hero({ language, onContactClick }: HeroProps) {
  const content = {
    fr: {
      name: 'Maître Alexandre Sztulman',
      title: 'Avocat au Barreau de Paris',
      tagline: 'Sanctions internationales – Droit pénal des affaires – Contentieux internationaux',
      description: 'Avocat bilingue expert en sanctions européennes et en droit pénal des affaires, accompagnant entreprises et particuliers dans leurs litiges internationaux.',
      contact: 'Contactez-nous'
    },
    en: {
      name: 'Alexandre Sztulman',
      title: 'Attorney-at-Law, Paris Bar',
      tagline: 'International Sanctions – Business Criminal Law – International Disputes',
      description: 'Bilingual lawyer specialized in EU sanctions and business criminal law, assisting corporations and individuals in international disputes.',
      contact: 'Contact Us'
    }
  };

  const t = content[language];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-serif text-slate-900 mb-3">{t.name}</h1>
              <p className="text-xl text-slate-600 font-medium">{t.title}</p>
            </div>

            <div className="h-px bg-slate-300 w-24"></div>

            <p className="text-lg text-slate-700 leading-relaxed">{t.tagline}</p>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">{t.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onContactClick}
                className="px-8 py-3 bg-slate-800 text-white hover:bg-slate-700 transition-colors rounded-sm font-medium"
              >
                {t.contact}
              </button>

              <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-600">
                <a href="tel:+33142963240" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                  <Phone size={16} />
                  <span>+33 1 42 96 32 40</span>
                </a>
                <a href="mailto:asztulman@moliere-avocats.fr" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                  <Mail size={16} />
                  <span>asztulman@moliere-avocats.fr</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-96 h-96 relative">
              <div className="absolute inset-0 bg-slate-800/5 rounded-sm transform rotate-3"></div>
              <div className="absolute inset-0 bg-slate-800/10 rounded-sm transform -rotate-3"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-slate-700 to-slate-900 rounded-sm flex items-center justify-center">
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
