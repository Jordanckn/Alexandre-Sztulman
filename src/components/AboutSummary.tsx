import { Link } from 'react-router-dom';
import { Language } from '../types';

interface AboutSummaryProps {
  language: Language;
}

export function AboutSummary({ language }: AboutSummaryProps) {
  const content = {
    fr: {
      title: 'Le Cabinet',
      summary: "Le cabinet de Maître Alexandre Sztulman, avocat individuel au Barreau de Paris, intervient dans des dossiers à <strong>forts enjeux juridiques, institutionnels et économiques</strong>, en France comme à l'échelle européenne. Sa pratique repose sur une <strong>approche rigoureuse, technique et stratégique</strong>, nourrie par une <strong>expertise académique reconnue</strong> et une connaissance approfondie du fonctionnement des administrations françaises et européennes.",
      button: 'En savoir plus'
    },
    en: {
      title: 'The Firm',
      summary: "The law firm of Maître Alexandre Sztulman, a sole practitioner admitted to the Paris Bar, handles cases with <strong>significant legal, institutional, and economic stakes</strong>, both in France and across Europe. His practice is based on a <strong>rigorous, technical, and strategic approach</strong>, supported by <strong>recognized academic expertise</strong> and in-depth knowledge of French and European administrative processes.",
      button: 'Learn more'
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-primary-700 mb-12"></div>

        <div className="max-w-4xl">
          <p
            className="text-lg text-slate-700 leading-relaxed mb-8 text-justify"
            dangerouslySetInnerHTML={{ __html: t.summary }}
          />
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors"
          >
            {t.button}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
