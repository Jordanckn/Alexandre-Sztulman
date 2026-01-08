import { Briefcase, Shield, AlertTriangle, Gavel, Scale } from 'lucide-react';
import { Language } from '../types';

interface BusinessCriminalPageProps {
  language: Language;
}

export function BusinessCriminalPage({ language }: BusinessCriminalPageProps) {
  const content = {
    fr: {
      title: 'Droit Pénal des Affaires',
      subtitle: 'Défense et conseil en droit pénal des affaires',
      intro: 'Le cabinet accompagne dirigeants, cadres et entreprises confrontés à des problématiques de droit pénal économique et financier. Il intervient à tous les stades du dossier, pour anticiper, maîtriser et défendre votre responsabilité pénale. L’approche stratégique et pragmatique, allie expertise juridique et compréhension des enjeux de l’entreprise, avec une attention constante à la confidentialité et à la discrétion.',
      services: {
        title: 'Nos services',
        items: [
          {
            icon: Shield,
            title: 'Défense pénale des dirigeants et entreprises',
            description: 'Défense en droit pénal des affaires, dès les premiers actes d’enquête et jusqu’à l’audience. Pilotage du dossier, protection des intérêts et de la réputation, en toute confidentialité.'
          },
          {
            icon: Gavel,
            title: 'Auditions, perquisitions, garde à vue',
            description: 'Assistance immédiate en situation d’urgence : auditions, perquisitions, convocations, garde à vue. Préparation, présence, sécurisation des droits de la défense, avec discrétion constante.'
          },
          {
            icon: AlertTriangle,
            title: 'Gestion de crise et enquêtes internes',
            description: 'Accompagnement dans les dossiers sensibles : organisation d’enquêtes internes, préservation des preuves, coordination de la stratégie. Objectif : reprendre le contrôle, limiter le risque, sécuriser la suite.'
          },
          {
            icon: Scale,
            title: 'Victimes – constitution de partie civile',
            description: 'Assistance des victimes d’infraction pénale : dépôt de plainte, constitution de partie civile et réparation du préjudice. Stratégie probatoire et suivi de procédure jusqu’à l’indemnisation.'
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
          'Contournement des sanctions internationales',
          'Droit pénal du travail'
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
            text: 'Double expertise nationale et internationale, avec une pratique du contentieux et du conseil en droit français, européen et en contexte international.'
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
      title: 'Business Criminal Law',
      subtitle: 'Defense and advisory in business criminal law',
      intro: 'The firm supports executives, managers, and companies facing economic and financial criminal law issues. It intervenes at all stages of the case to anticipate, manage, and defend your criminal liability. Our strategic and pragmatic approach combines legal expertise with an understanding of corporate stakes, with constant attention to confidentiality and discretion.',
      services: {
        title: 'Our Services',
        items: [
          {
            icon: Shield,
            title: 'Criminal defense for executives and companies',
            description: 'Defense in business criminal law, from the initial investigative acts to the hearing. Management of the case, protection of interests and reputation, with full confidentiality.'
          },
          {
            icon: Gavel,
            title: 'Interviews, searches, police custody',
            description: 'Immediate assistance in emergency situations: interviews, searches, summonses, police custody. Preparation, legal presence, securing defense rights, with constant discretion.'
          },
          {
            icon: AlertTriangle,
            title: 'Crisis management and internal investigations',
            description: 'Support in sensitive cases: organizing internal investigations, preserving evidence, coordinating the strategy. Objective: regain control, limit risk, secure the future.'
          },
          {
            icon: Scale,
            title: 'Victims – civil party status',
            description: 'Assistance for victims of criminal offenses: filing complaints, civil party status, and compensation for damages. Evidence strategy and procedural follow-up until compensation.'
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
          'Circumvention of international sanctions',
          'Labor criminal law'
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
            text: 'Dual national and international expertise, with a practice in litigation and advisory in French, European, and international contexts.'
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
      <section className="bg-primary-700 text-white py-20">
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
                  <div className="w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
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
              <div key={index} className="border-l-4 border-primary-700 pl-6">
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
