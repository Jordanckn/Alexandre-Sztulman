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
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-serif text-white mb-3">{t.name}</h1>
              <p className="text-2xl text-white/90 font-medium">{t.title}</p>
            </div>

            <div className="h-px bg-white/40 w-24"></div>

            <p className="text-lg text-white/80 leading-relaxed">{t.tagline}</p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={onContactClick}
                className="px-8 py-3 bg-primary-700 text-white hover:bg-primary-600 transition-colors rounded-sm font-medium"
              >
                {t.contact}
              </button>

              <a href="mailto:contact@sztulman-avocat.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors px-4 py-3">
                <Mail size={16} />
                <span>contact@sztulman-avocat.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
