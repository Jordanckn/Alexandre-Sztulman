import { Shield, Briefcase, Scale } from 'lucide-react';
import { Language } from '../types';

interface ExpertiseProps {
  language: Language;
}

export function Expertise({ language }: ExpertiseProps) {
  const content = {
    fr: {
      title: 'Domaines d\'expertise',
      areas: [
        {
          icon: Shield,
          title: 'Sanctions Internationales de l\'UE',
          titleEn: 'EU International Sanctions',
          description: 'Conseil et représentation dans les affaires de mesures restrictives européennes (gel des avoirs, embargos sectoriels). Contestation de sanctions devant les juridictions de l\'Union européenne. Assistance en conformité vis-à-vis des règlements européens de sanctions.',
          descriptionEn: 'Legal advice and litigation regarding EU restrictive measures (asset freezes, sectoral embargoes). Challenging sanctions before EU courts. Compliance advice regarding EU sanctions regulations.'
        },
        {
          icon: Briefcase,
          title: 'Droit Pénal des Affaires & Compliance',
          titleEn: 'Business Criminal Law & Compliance',
          description: 'Défense en droit pénal des entreprises : corruption, fraude, abus de biens sociaux. Assistance en lutte contre le blanchiment de capitaux. Conseil en conformité et mise en place de programmes de compliance internationaux.',
          descriptionEn: 'Corporate criminal defense: corruption, fraud, misuse of corporate assets. Anti-money laundering assistance. Compliance advice and implementation of international compliance programs.'
        },
        {
          icon: Scale,
          title: 'Contentieux International des Investissements',
          titleEn: 'International Investment Disputes',
          description: 'Accompagnement dans les différends investisseurs-États. Arbitrage international en matière d\'investissement. Conseil sur les traités bilatéraux d\'investissement et les questions de droit international public.',
          descriptionEn: 'Counsel in investor-state disputes. International investment arbitration. Advice on bilateral investment treaties and public international law matters.'
        }
      ]
    },
    en: {
      title: 'Practice Areas',
      areas: [
        {
          icon: Shield,
          title: 'EU International Sanctions',
          titleEn: 'EU International Sanctions',
          description: 'Legal advice and litigation regarding EU restrictive measures (asset freezes, sectoral embargoes). Challenging sanctions before EU courts. Compliance advice regarding EU sanctions regulations.',
          descriptionEn: 'Legal advice and litigation regarding EU restrictive measures (asset freezes, sectoral embargoes). Challenging sanctions before EU courts. Compliance advice regarding EU sanctions regulations.'
        },
        {
          icon: Briefcase,
          title: 'Business Criminal Law & Compliance',
          titleEn: 'Business Criminal Law & Compliance',
          description: 'Corporate criminal defense: corruption, fraud, misuse of corporate assets. Anti-money laundering assistance. Compliance advice and implementation of international compliance programs.',
          descriptionEn: 'Corporate criminal defense: corruption, fraud, misuse of corporate assets. Anti-money laundering assistance. Compliance advice and implementation of international compliance programs.'
        },
        {
          icon: Scale,
          title: 'International Investment Disputes',
          titleEn: 'International Investment Disputes',
          description: 'Counsel in investor-state disputes. International investment arbitration. Advice on bilateral investment treaties and public international law matters.',
          descriptionEn: 'Counsel in investor-state disputes. International investment arbitration. Advice on bilateral investment treaties and public international law matters.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-slate-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-slate-800 mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.areas.map((area, index) => {
            const Icon = area.icon;
            const displayTitle = language === 'fr' ? area.title : area.titleEn;
            const displayDescription = language === 'fr' ? area.description : area.descriptionEn;

            return (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-800 rounded-sm flex items-center justify-center mb-6">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{displayTitle}</h3>
                <p className="text-slate-600 leading-relaxed">{displayDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
