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
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-stretch pt-20">
      {/* Image - Première sur mobile, à droite sur desktop */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-0 md:order-2 relative">
        <img
          src={heroImage}
          alt={t.name}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* Texte - Deuxième sur mobile, à gauche sur desktop */}
      <div className="w-full md:w-1/2 bg-primary-700 flex items-center md:order-1">
        <div className="px-6 py-12 md:px-12 md:py-20 space-y-6 md:space-y-8 w-full">
          <div>
            <h1 className="text-3xl md:text-6xl font-serif text-white mb-2 md:mb-3 leading-tight">{t.name}</h1>
            <p className="text-lg md:text-2xl text-white/95 font-medium">{t.title}</p>
          </div>

          <div className="h-px bg-white/40 w-16 md:w-24"></div>

          <p className="text-sm md:text-lg text-white/90 leading-relaxed">{t.tagline}</p>

          <div className="flex flex-col gap-3 md:gap-4 items-start pt-2 md:pt-4">
            <button
              onClick={onContactClick}
              className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-primary-700 hover:bg-slate-100 transition-colors rounded-sm font-medium text-sm md:text-base"
            >
              {t.contact}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
