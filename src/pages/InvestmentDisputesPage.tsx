import { Scale, Globe2, FileText, TrendingUp } from 'lucide-react';
import { Language } from '../types';

interface InvestmentDisputesPageProps {
  language: Language;
}

export function InvestmentDisputesPage({ language }: InvestmentDisputesPageProps) {
  const content = {
    fr: {
      title: 'Contentieux International des Investissements',
      subtitle: 'Arbitrage investisseur-État et protection des investissements transfrontaliers',
      intro: 'Le cabinet conseille et représente les investisseurs dans leurs différends avec les États, ainsi que dans les litiges d\'arbitrage commercial international liés aux investissements. Une expertise reconnue en droit international des investissements.',
      services: {
        title: 'Nos services',
        items: [
          {
            icon: Scale,
            title: 'Arbitrage investisseur-État (ISDS)',
            description: 'Représentation dans les arbitrages CIRDI, CNUDCI et autres instances, fondés sur des traités bilatéraux d\'investissement (TBI) ou le Traité sur la Charte de l\'énergie.'
          },
          {
            icon: Globe2,
            title: 'Conseil stratégique pré-contentieux',
            description: 'Analyse de la protection offerte par les TBI, structuration des investissements, évaluation des risques politiques et juridiques, négociations avec les États.'
          },
          {
            icon: FileText,
            title: 'Arbitrage commercial international',
            description: 'Représentation dans les arbitrages CCI, LCIA, Swiss Arbitration concernant des litiges d\'investissement, joint-ventures, contrats de construction et d\'approvisionnement.'
          },
          {
            icon: TrendingUp,
            title: 'Contentieux post-arbitral',
            description: 'Reconnaissance et exécution des sentences arbitrales, annulation et révision, procédures devant les juridictions nationales.'
          }
        ]
      },
      expertise: {
        title: 'Domaines d\'intervention',
        description: 'Une couverture complète des contentieux internationaux d\'investissement',
        areas: [
          'Traités bilatéraux d\'investissement (TBI)',
          'Traité sur la Charte de l\'énergie',
          'Expropriation directe et indirecte',
          'Traitement juste et équitable (TJE)',
          'Protection contre la discrimination',
          'Clause de la nation la plus favorisée',
          'Transferts de capitaux et rapatriement',
          'Standards de protection CIRDI/CNUDCI'
        ]
      },
      sectors: {
        title: 'Secteurs d\'activité',
        description: 'Intervention dans tous les secteurs économiques stratégiques',
        list: [
          'Énergie et ressources naturelles',
          'Infrastructure et construction',
          'Télécommunications',
          'Banque et finance',
          'Industrie manufacturière',
          'Immobilier et tourisme',
          'Technologies et innovation',
          'Transports et logistique'
        ]
      },
      why: {
        title: 'Pourquoi nous choisir',
        reasons: [
          {
            title: 'Expertise académique et pratique',
            text: 'Formation internationale pointue (Luxembourg, Moscou) et recherches doctorales sur les interactions entre droit des investissements et sécurité internationale.'
          },
          {
            title: 'Compréhension géopolitique',
            text: 'Analyse fine des enjeux politiques et économiques, anticipation des risques souverains, stratégie adaptée au contexte régional.'
          },
          {
            title: 'Réseau international',
            text: 'Collaboration avec des correspondants dans toutes les grandes juridictions, coordination d\'équipes multidisciplinaires et multilingues.'
          },
          {
            title: 'Approche sur-mesure',
            text: 'Stratégie contentieuse personnalisée, analyse coûts-bénéfices, recherche de solutions négociées quand pertinent.'
          }
        ]
      }
    },
    en: {
      title: 'International Investment Disputes',
      subtitle: 'Investor-State arbitration and cross-border investment protection',
      intro: 'The firm advises and represents investors in their disputes with States, as well as in international commercial arbitration related to investments. Recognized expertise in international investment law.',
      services: {
        title: 'Our Services',
        items: [
          {
            icon: Scale,
            title: 'Investor-State Dispute Settlement (ISDS)',
            description: 'Representation in ICSID, UNCITRAL and other arbitrations, based on bilateral investment treaties (BITs) or the Energy Charter Treaty.'
          },
          {
            icon: Globe2,
            title: 'Pre-Dispute Strategic Advice',
            description: 'Analysis of BIT protection, investment structuring, assessment of political and legal risks, negotiations with States.'
          },
          {
            icon: FileText,
            title: 'International Commercial Arbitration',
            description: 'Representation in ICC, LCIA, Swiss Arbitration proceedings concerning investment disputes, joint ventures, construction and supply contracts.'
          },
          {
            icon: TrendingUp,
            title: 'Post-Award Proceedings',
            description: 'Recognition and enforcement of arbitral awards, annulment and revision, proceedings before national courts.'
          }
        ]
      },
      expertise: {
        title: 'Areas of Intervention',
        description: 'Comprehensive coverage of international investment disputes',
        areas: [
          'Bilateral Investment Treaties (BITs)',
          'Energy Charter Treaty',
          'Direct and indirect expropriation',
          'Fair and Equitable Treatment (FET)',
          'Protection against discrimination',
          'Most Favored Nation clause',
          'Capital transfers and repatriation',
          'ICSID/UNCITRAL protection standards'
        ]
      },
      sectors: {
        title: 'Industry Sectors',
        description: 'Intervention in all strategic economic sectors',
        list: [
          'Energy and natural resources',
          'Infrastructure and construction',
          'Telecommunications',
          'Banking and finance',
          'Manufacturing',
          'Real estate and tourism',
          'Technology and innovation',
          'Transport and logistics'
        ]
      },
      why: {
        title: 'Why Choose Us',
        reasons: [
          {
            title: 'Academic and Practical Expertise',
            text: 'Advanced international training (Luxembourg, Moscow) and doctoral research on interactions between investment law and international security.'
          },
          {
            title: 'Geopolitical Understanding',
            text: 'Refined analysis of political and economic issues, anticipation of sovereign risks, strategy adapted to regional context.'
          },
          {
            title: 'International Network',
            text: 'Collaboration with correspondents in all major jurisdictions, coordination of multidisciplinary and multilingual teams.'
          },
          {
            title: 'Tailored Approach',
            text: 'Personalized litigation strategy, cost-benefit analysis, pursuit of negotiated solutions when relevant.'
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Scale size={48} />
            <h1 className="text-4xl md:text-5xl font-serif">{t.title}</h1>
          </div>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">{t.subtitle}</p>
          <p className="text-base text-slate-200 leading-relaxed max-w-4xl">{t.intro}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-slate-900 mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-sm">
                  <Icon size={32} className="text-slate-700 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">{t.expertise.title}</h2>
          <p className="text-slate-600 mb-8">{t.expertise.description}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.expertise.areas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm">
                <p className="text-slate-700 font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">{t.sectors.title}</h2>
          <p className="text-slate-600 mb-8">{t.sectors.description}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {t.sectors.list.map((sector, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-sm border-l-4 border-slate-800">
                <p className="text-slate-700 font-medium">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-slate-900 mb-12">{t.why.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.why.reasons.map((reason, index) => (
              <div key={index} className="border-l-4 border-slate-800 pl-6 bg-white p-6 rounded-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
