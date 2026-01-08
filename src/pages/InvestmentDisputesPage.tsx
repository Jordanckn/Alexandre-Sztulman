import { Scale, Globe2, FileText, TrendingUp } from 'lucide-react';
import { Language } from '../types';

interface InvestmentDisputesPageProps {
  language: Language;
}

export function InvestmentDisputesPage({ language }: InvestmentDisputesPageProps) {
  const content = {
    fr: {
      title: 'Droit des investissements internationaux',
      subtitle: 'Accompagnement juridique des investissements et opérations internationales',
      intro: 'Le cabinet assiste entreprises et investisseurs dans la structuration et la sécurisation de leurs opérations à l’international. Il intervient sur les projets à forts enjeux (implantations, partenariats stratégiques, acquisitions, financements), en intégrant les contraintes réglementaires, contractuelles et géopolitiques. En cas de difficulté, il accompagne la gestion des différends et des situations de crise, avec une approche stratégique, pragmatique et conduite avec une discrétion constante.',
      services: {
        title: 'Nos services',
        items: [
          {
            icon: TrendingUp,
            title: 'Structuration d’investissements internationaux',
            description: 'Structuration juridique des projets transfrontaliers (implantation, acquisition, partenariat, financement). Sécurisation des schémas d’investissement et des actes clés, avec une approche orientée exécution.'
          },
          {
            icon: Globe2,
            title: 'Conseil stratégique et gestion des risques',
            description: 'Analyse des risques juridiques, réglementaires et géopolitiques (autorités, licences, conformité, sanctions, partenaires). Définition de stratégies de prévention et de sécurisation adaptées aux enjeux du projet.'
          },
          {
            icon: FileText,
            title: 'Contrats internationaux et partenariats',
            description: 'Négociation et rédaction des contrats structurants : joint-ventures, distribution, approvisionnement, construction, prestations. Mise en place de mécanismes de gouvernance, de sortie et de protection des intérêts.'
          },
          {
            icon: Scale,
            title: 'Différends transfrontaliers',
            description: 'Assistance en cas de difficulté : négociation, précontentieux et contentieux devant les juridictions compétentes. Coordination des actions en France et à l’étranger, avec une gestion rigoureuse et discrète.'
          }
        ]
      },
      expertise: {
        title: 'Domaines d\'intervention',
        description: 'Une couverture complète des contentieux internationaux d\'investissement',
        areas: [
          'Protection de l’investissement et risque souverain',
          'Décisions administratives et autorisations',
          'Atteintes à l’investissement et expropriation',
          'Égalité de traitement et non-discrimination',
          'Transferts de capitaux et rapatriement des fonds',
          'Contrats publics, concessions et partenariats',
          'Précontentieux et règlement amiable',
          'Contentieux transfrontaliers et exécution'
        ]
      },
      why: {
        title: 'Pourquoi nous choisir',
        reasons: [
          {
            title: 'Expertise nationale et internationale',
            text: 'Expérience au croisement du droit français et du droit de l’Union, acquise auprès d’institutions européennes, d’autorités françaises et en cabinets d’affaires internationaux. Capacité à piloter des dossiers transfrontaliers complexes.'
          },
          {
            title: 'Lecture géopolitique et réglementaire',
            text: 'Analyse fine des risques souverains, réglementaires et de réputation. Anticipation des contraintes liées aux environnements sensibles et aux cadres de conformité applicables.'
          },
          {
            title: 'Stratégie sur-mesure',
            text: 'Construction de stratégies adaptées aux objectifs du client et aux contraintes opérationnelles : prévention, négociation, précontentieux et contentieux. Approche pragmatique et orientée résultat.'
          },
          {
            title: 'Discrétion et réactivité',
            text: 'Intervention menée avec une discrétion constante, notamment dans les dossiers à forts enjeux. Disponibilité et traitement prioritaire des urgences, avec un suivi direct et personnalisé.'
          }
        ]
      }
    },
    en: {
      title: 'International Investment Law',
      subtitle: 'Legal support for international investments and operations',
      intro: 'The firm assists companies and investors in structuring and securing their international operations. It handles high-stakes projects (establishments, strategic partnerships, acquisitions, financing), integrating regulatory, contractual, and geopolitical constraints. In case of difficulties, it provides support in dispute and crisis management, with a strategic and pragmatic approach conducted with constant discretion.',
      services: {
        title: 'Our Services',
        items: [
          {
            icon: TrendingUp,
            title: 'International Investment Structuring',
            description: 'Legal structuring of cross-border projects (establishment, acquisition, partnership, financing). Securing investment schemes and key acts, with an execution-oriented approach.'
          },
          {
            icon: Globe2,
            title: 'Strategic Advisory and Risk Management',
            description: 'Analysis of legal, regulatory, and geopolitical risks (authorities, licenses, compliance, sanctions, partners). Defining prevention and security strategies adapted to project stakes.'
          },
          {
            icon: FileText,
            title: 'International Contracts and Partnerships',
            description: 'Negotiation and drafting of core contracts: joint ventures, distribution, supply, construction, services. Implementation of governance, exit, and interest protection mechanisms.'
          },
          {
            icon: Scale,
            title: 'Cross-border Disputes',
            description: 'Assistance in case of difficulties: negotiation, pre-litigation, and litigation before competent courts. Coordination of actions in France and abroad, with rigorous and discreet management.'
          }
        ]
      },
      expertise: {
        title: 'Areas of Intervention',
        description: 'Comprehensive coverage of international investment disputes',
        areas: [
          'Investment protection and sovereign risk',
          'Administrative decisions and authorizations',
          'Investment breaches and expropriation',
          'Equal treatment and non-discrimination',
          'Capital transfers and fund repatriation',
          'Public contracts, concessions and partnerships',
          'Pre-litigation and amicable settlement',
          'Cross-border litigation and enforcement'
        ]
      },
      why: {
        title: 'Why Choose Us',
        reasons: [
          {
            title: 'National and International Expertise',
            text: 'Experience at the intersection of French and EU law, gained from European institutions, French authorities, and international business law firms. Ability to manage complex cross-border cases.'
          },
          {
            title: 'Geopolitical and Regulatory Insight',
            text: 'Fine analysis of sovereign, regulatory, and reputational risks. Anticipation of constraints related to sensitive environments and applicable compliance frameworks.'
          },
          {
            title: 'Tailored Strategy',
            text: 'Construction of strategies adapted to client objectives and operational constraints: prevention, negotiation, pre-litigation, and litigation. Pragmatic and result-oriented approach.'
          },
          {
            title: 'Discretion and Responsiveness',
            text: 'Intervention conducted with constant discretion, especially in high-stakes cases. Availability and priority handling of emergencies, with direct and personalized follow-up.'
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
          <h2 className="text-3xl font-serif text-slate-900 mb-12">{t.why.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.why.reasons.map((reason, index) => (
              <div key={index} className="border-l-4 border-primary-700 pl-6 bg-white p-6 rounded-sm">
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
