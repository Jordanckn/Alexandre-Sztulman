import { Link } from 'react-router-dom';
import { Language } from '../types';

interface AboutSummaryProps {
  language: Language;
}

export function AboutSummary({ language }: AboutSummaryProps) {
  const content = {
    fr: {
      title: 'Le Cabinet',
      summary: "Le cabinet de Maître Alexandre Sztulman, avocat au Barreau de Paris, accompagne particuliers, entreprises, dirigeants et institutions dans des dossiers à forts enjeux juridiques, en France comme à l'échelle européenne.<br/><br/>Docteur en droit, titulaire d'un LL.M. en droit européen et enseignant à l'Université Paris 1 Panthéon-Sorbonne, Maître Alexandre Sztulman intervient principalement en droit pénal, droit européen, droit administratif, libertés fondamentales et en conseil en activités économiques, avec une expertise reconnue en sanctions internationales et européennes.<br/><br/>Fort d'une expérience acquise au sein de cabinets d'affaires internationaux, de la Cour de justice de l'Union européenne et de l'administration centrale française, le cabinet propose une approche rigoureuse, technique et stratégique, fondée sur la discrétion, l'indépendance et l'exigence juridique.<br/><br/>Installé à Paris 8ᵉ, au 22 avenue Franklin D. Roosevelt, le cabinet intervient sur l'ensemble du territoire français et en Europe, en conseil comme en contentieux, dans le strict respect des règles déontologiques de la profession d'avocat.",
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
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-primary-900 mb-4 md:mb-6">{t.title}</h2>
        <div className="h-1 w-16 md:w-20 bg-primary-700 mb-8 md:mb-12"></div>

        <div className="max-w-4xl">
          <p
            className="text-base md:text-lg text-slate-700 leading-relaxed mb-6 md:mb-8 mobile-justify-hyphens"
            dangerouslySetInnerHTML={{ __html: t.summary }}
          />
          <Link
            to="/about"
            className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors text-sm md:text-base"
          >
            {t.button}
            <svg
              className="ml-2 w-4 h-4 md:w-5 md:h-5"
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
