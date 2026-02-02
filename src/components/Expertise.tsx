import { Link } from 'react-router-dom';
import { Language } from '../types';

interface ExpertiseProps {
  language: Language;
}

export function Expertise({ language }: ExpertiseProps) {
  const content = {
    fr: {
      title: 'Expertises',
      areas: [
        {
          title: 'Sanctions Internationales de l\'UE',
          description: 'Intervention devant les juridictions de l\'Union européenne pour contester les sanctions internationales et européennes, ainsi que devant les juridictions nationales pour les questions d\'application en France.\n\nAssistance aux entreprises, investisseurs, et personnes visées par les sanctions dans leurs démarches auprès des autorités compétentes (autorisations, dérogations, dégel), et dans la mise en conformité afin de sécuriser leurs opérations et limiter les risques.',
          link: '/expertise/sanctions',
          linkLabel: 'En savoir plus'
        },
        {
          title: 'Droit Pénal des Affaires',
          description: 'Défense en droit pénal des affaires des personnes mises en cause dans des dossiers économiques et financiers (corruption, abus de biens sociaux, escroquerie, détournement de fonds, blanchiment, fraude, etc.), y compris dans des contextes internationaux.\n\n Maître Alexandre Sztulman assiste également les victimes de criminalité économique : dépôt de plainte, constitution de partie civile, stratégie probatoire et réparation du préjudice, à toutes les étapes de la procédure.',
          link: '/expertise/business-criminal',
          linkLabel: 'En savoir plus'
        },
        {
          title: 'Droit des Investissements Internationaux',
          description: 'Accompagnement des entreprises dans leurs projets de développement économique, en France comme à l\'international : structuration et sécurisation juridique des opérations, négociation et rédaction contractuelle, gestion des risques (réglementaires, conformité, partenaires), et assistance en cas de différend (précontentieux, contentieux). L\'objectif est de permettre un développement maîtrisé, durable et sécurisé.',
          link: '/expertise/investment-disputes',
          linkLabel: 'En savoir plus'
        }
      ]
    },
    en: {
      title: 'Practice Areas',
      areas: [
        {
          title: 'EU International Sanctions',
          description: 'Representation before the European Union courts to challenge international and European sanctions, as well as before national courts for implementation issues in France.\n\nAssistance to companies, investors, and individuals targeted by sanctions in their dealings with competent authorities (authorizations, exemptions, unfreezing), and in compliance to secure their operations and limit risks.',
          link: '/expertise/sanctions',
          linkLabel: 'Learn more'
        },
        {
          title: 'Business Criminal Law',
          description: 'Defense in business criminal law for individuals implicated in economic and financial cases (corruption, misuse of corporate assets, fraud, embezzlement, money laundering, etc.), including in international contexts. Maître Alexandre Sztulman also assists victims of economic crime: filing complaints, civil party constitution, evidentiary strategy and damages recovery, at all stages of proceedings.',
          link: '/expertise/business-criminal',
          linkLabel: 'Learn more'
        },
        {
          title: 'International Investment Law',
          description: 'Support for companies in their economic development projects, in France and internationally: structuring and legal securitization of operations, negotiation and contract drafting, risk management (regulatory, compliance, partners), and assistance in case of disputes (pre-litigation, litigation). The objective is to enable controlled, sustainable and secure development.',
          link: '/expertise/investment-disputes',
          linkLabel: 'Learn more'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-primary-900 mb-4 md:mb-6">{t.title}</h2>
        <div className="h-1 w-16 md:w-20 bg-primary-700 mb-12 md:mb-16"></div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.areas.map((area, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary-700 flex flex-col h-full">
              <h3 className="text-lg md:text-xl font-semibold text-primary-900 mb-3 md:mb-4">{area.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed whitespace-pre-line">{area.description}</p>
              {area.link ? (
                <div className="mt-auto pt-6">
                  <Link
                    to={area.link}
                    className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-primary-700 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors text-sm md:text-base"
                    aria-label={`${area.linkLabel}: ${area.title}`}
                  >
                    {area.linkLabel}
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
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
