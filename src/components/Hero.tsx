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
    <section id="home" className="min-h-screen flex items-stretch pt-20">
      <div className="w-1/2 bg-primary-700 flex items-center">
        <div className="px-12 py-20 space-y-8 w-full">
          <div>
            <h1 className="text-6xl font-serif text-white mb-3">{t.name}</h1>
            <p className="text-2xl text-white/95 font-medium">{t.title}</p>
          </div>

          <div className="h-px bg-white/40 w-24"></div>

          <p className="text-lg text-white/90 leading-relaxed">{t.tagline}</p>

          <div className="flex flex-col gap-4 items-start pt-4">
            <button
              onClick={onContactClick}
              className="px-8 py-3 bg-white text-primary-700 hover:bg-slate-100 transition-colors rounded-sm font-medium"
            >
              {t.contact}
            </button>

            <a href="mailto:contact@sztulman-avocat.com" className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors">
              <Mail size={16} />
              <span>contact@sztulman-avocat.com</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </section>
  );
}
