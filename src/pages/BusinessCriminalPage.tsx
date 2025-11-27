import { Briefcase, Shield, FileSearch, AlertTriangle } from 'lucide-react';
import { Language } from '../types';

interface BusinessCriminalPageProps {
  language: Language;
}

export function BusinessCriminalPage({ language }: BusinessCriminalPageProps) {
  const content = {
    fr: {
      title: 'Droit Pénal des Affaires & Compliance',
      subtitle: 'Défense et conseil en droit pénal économique et programmes de conformité',
      intro: 'Le cabinet intervient dans la défense des dirigeants et entreprises confrontés à des poursuites pénales, ainsi qu\'en matière de prévention et de conformité. Une approche globale combinant expertise juridique et compréhension des enjeux business.',
      services: {
        title: 'Nos services',
        items: [
          {
            icon: Shield,
            title: 'Défense pénale des entreprises',
            description: 'Représentation des personnes morales et de leurs dirigeants dans les affaires de corruption, fraude, abus de biens sociaux, délit d\'initié, manipulation de marché.'
          },
          {
            icon: FileSearch,
            title: 'Lutte anti-blanchiment (LCB-FT)',
            description: 'Conseil sur les obligations AML/CFT, mise en place de dispositifs de vigilance, formation des équipes, assistance lors de contrôles TRACFIN/ACPR.'
          },
          {
            icon: Briefcase,
            title: 'Programmes de compliance',
            description: 'Conception et implémentation de programmes de conformité anticorruption (Loi Sapin II), cartographie des risques, formation des collaborateurs.'
          },
          {
            icon: AlertTriangle,
            title: 'Gestion de crise et enquêtes internes',
            description: 'Accompagnement lors de perquisitions, auditions, mise en place d\'enquêtes internes, conseil stratégique en phase d\'investigation.'
          }
        ]
      },
      expertise: {
        title: 'Domaines d\'intervention',
        description: 'Une expertise complète en droit pénal des affaires et compliance',
        areas: [
          'Corruption et trafic d\'influence',
          'Fraude fiscale et escroquerie',
          'Abus de biens sociaux',
          'Blanchiment de capitaux',
          'Financement du terrorisme',
          'Délit d\'initié et abus de marché',
          'Contrefaçon et propriété intellectuelle',
          'Droit pénal du travail et environnemental'
        ]
      },
      approach: {
        title: 'Notre approche',
        description: 'Une défense stratégique et personnalisée à chaque étape de la procédure',
        steps: [
          {
            title: 'Phase préventive',
            text: 'Audit de conformité, identification des risques, mise en place de procédures internes, formation continue des équipes.'
          },
          {
            title: 'Phase d\'enquête',
            text: 'Assistance lors des contrôles et perquisitions, préparation aux auditions, stratégie de défense dès les premiers actes.'
          },
          {
            title: 'Phase judiciaire',
            text: 'Représentation devant les juridictions pénales, négociation de CJIP (Convention Judiciaire d\'Intérêt Public), plaidoiries et recours.'
          },
          {
            title: 'Gestion post-crise',
            text: 'Reconstruction de la réputation, révision des procédures internes, accompagnement dans la durée.'
          }
        ]
      },
      why: {
        title: 'Pourquoi nous choisir',
        reasons: [
          {
            title: 'Double expertise nationale et internationale',
            text: 'Maîtrise du droit français et des standards internationaux (FCPA, UK Bribery Act, conventions OCDE).'
          },
          {
            title: 'Approche business-oriented',
            text: 'Compréhension des enjeux économiques et opérationnels, solutions pragmatiques et efficaces.'
          },
          {
            title: 'Confidentialité absolue',
            text: 'Gestion discrète des dossiers sensibles, protection de la réputation de l\'entreprise et des dirigeants.'
          },
          {
            title: 'Réactivité 24/7',
            text: 'Disponibilité immédiate en cas de perquisition ou de garde à vue, intervention rapide sur tout le territoire.'
          }
        ]
      }
    },
    en: {
      title: 'Business Criminal Law & Compliance',
      subtitle: 'Defense and advisory in white-collar crime and compliance programs',
      intro: 'The firm represents executives and companies facing criminal proceedings, and advises on prevention and compliance matters. A comprehensive approach combining legal expertise and business understanding.',
      services: {
        title: 'Our Services',
        items: [
          {
            icon: Shield,
            title: 'Corporate Criminal Defense',
            description: 'Representation of corporations and their executives in corruption, fraud, misuse of corporate assets, insider trading, and market manipulation cases.'
          },
          {
            icon: FileSearch,
            title: 'Anti-Money Laundering (AML/CFT)',
            description: 'Advice on AML/CFT obligations, implementation of due diligence systems, team training, assistance during regulatory inspections.'
          },
          {
            icon: Briefcase,
            title: 'Compliance Programs',
            description: 'Design and implementation of anti-corruption compliance programs, risk mapping, employee training.'
          },
          {
            icon: AlertTriangle,
            title: 'Crisis Management & Internal Investigations',
            description: 'Assistance during searches and interviews, internal investigations, strategic advice during investigation phase.'
          }
        ]
      },
      expertise: {
        title: 'Areas of Intervention',
        description: 'Comprehensive expertise in business criminal law and compliance',
        areas: [
          'Corruption and influence peddling',
          'Tax fraud and embezzlement',
          'Misuse of corporate assets',
          'Money laundering',
          'Terrorist financing',
          'Insider trading and market abuse',
          'Counterfeiting and IP crimes',
          'Labor and environmental criminal law'
        ]
      },
      approach: {
        title: 'Our Approach',
        description: 'Strategic and personalized defense at every stage of proceedings',
        steps: [
          {
            title: 'Prevention Phase',
            text: 'Compliance audit, risk identification, implementation of internal procedures, ongoing team training.'
          },
          {
            title: 'Investigation Phase',
            text: 'Assistance during inspections and searches, preparation for interviews, defense strategy from the outset.'
          },
          {
            title: 'Judicial Phase',
            text: 'Representation before criminal courts, negotiation of deferred prosecution agreements, pleadings and appeals.'
          },
          {
            title: 'Post-Crisis Management',
            text: 'Reputation rebuilding, revision of internal procedures, long-term support.'
          }
        ]
      },
      why: {
        title: 'Why Choose Us',
        reasons: [
          {
            title: 'Dual National and International Expertise',
            text: 'Mastery of French law and international standards (FCPA, UK Bribery Act, OECD conventions).'
          },
          {
            title: 'Business-Oriented Approach',
            text: 'Understanding of economic and operational challenges, pragmatic and effective solutions.'
          },
          {
            title: 'Absolute Confidentiality',
            text: 'Discreet handling of sensitive cases, protection of company and executive reputation.'
          },
          {
            title: '24/7 Responsiveness',
            text: 'Immediate availability in case of searches or custody, rapid intervention nationwide.'
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
            <Briefcase size={48} />
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
          <h2 className="text-3xl font-serif text-slate-900 mb-4">{t.approach.title}</h2>
          <p className="text-slate-600 mb-12">{t.approach.description}</p>
          <div className="grid md:grid-cols-2 gap-8">
            {t.approach.steps.map((step, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.text}</p>
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
              <div key={index} className="border-l-4 border-slate-800 pl-6">
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
