import { Shield, Scale, FileText, Users } from 'lucide-react';
import { Language } from '../types';

interface SanctionsPageProps {
  language: Language;
}

export function SanctionsPage({ language }: SanctionsPageProps) {
  const content = {
    fr: {
      title: 'Sanctions Internationales de l\'UE',
      subtitle: 'Expertise de pointe en contentieux des mesures restrictives européennes',
      intro: 'Le cabinet accompagne les entreprises, institutions financières et particuliers confrontés aux régimes de sanctions de l\'Union européenne. Avec une expertise académique et pratique unique, Maître Sztulman offre un conseil stratégique et une représentation contentieuse de premier plan.',
      services: {
        title: 'Nos services',
        items: [
          {
            icon: Scale,
            title: 'Contentieux devant les juridictions européennes',
            description: 'Représentation devant le Tribunal de l\'Union européenne et la Cour de justice pour contester l\'inscription sur les listes de sanctions, obtenir la radiation ou des dommages-intérêts.'
          },
          {
            icon: FileText,
            title: 'Conseil en conformité',
            description: 'Analyse des obligations découlant des règlements de sanctions, mise en place de procédures de contrôle, formation des équipes compliance.'
          },
          {
            icon: Shield,
            title: 'Gestion de crise',
            description: 'Assistance immédiate en cas de gel d\'avoirs, conseil stratégique sur les démarches à entreprendre, coordination avec les autorités compétentes.'
          },
          {
            icon: Users,
            title: 'Licences et dérogations',
            description: 'Demandes d\'autorisations spécifiques auprès des autorités nationales et européennes pour débloquer des fonds gelés ou réaliser des opérations interdites.'
          }
        ]
      },
      expertise: {
        title: 'Domaines d\'intervention',
        description: 'Le cabinet intervient dans tous les aspects du droit des sanctions internationales',
        areas: [
          'Sanctions territoriales (Russie, Iran, Syrie, etc.)',
          'Sanctions individuelles (gel d\'avoirs, interdictions de voyage)',
          'Embargos sectoriels (énergie, défense, finance)',
          'Contrôle des exportations de biens à double usage',
          'Violations et sanctions pénales',
          'Protection des droits fondamentaux',
          'Contentieux en indemnisation',
          'Coopération avec les autorités de supervision'
        ]
      },
      why: {
        title: 'Pourquoi nous choisir',
        reasons: [
          {
            title: 'Expertise académique reconnue',
            text: 'Auteur du livre de référence "EU Sanctions Litigation" (Routledge, 2025) et enseignant à la Sorbonne en droit des sanctions.'
          },
          {
            title: 'Expérience internationale',
            text: 'Formation en France, au Luxembourg et en Russie, compréhension approfondie des enjeux géopolitiques.'
          },
          {
            title: 'Approche sur-mesure',
            text: 'Stratégie contentieuse adaptée à chaque situation, défense rigoureuse des droits fondamentaux.'
          },
          {
            title: 'Réactivité',
            text: 'Disponibilité immédiate en cas d\'urgence, réponse rapide aux demandes de conseil.'
          }
        ]
      }
    },
    en: {
      title: 'EU International Sanctions',
      subtitle: 'Leading expertise in EU restrictive measures litigation',
      intro: 'The firm assists companies, financial institutions and individuals facing EU sanctions regimes. With unique academic and practical expertise, Me Sztulman provides strategic counsel and top-tier litigation representation.',
      services: {
        title: 'Our Services',
        items: [
          {
            icon: Scale,
            title: 'Litigation before EU Courts',
            description: 'Representation before the General Court and Court of Justice of the EU to challenge listing decisions, obtain delisting or damages.'
          },
          {
            icon: FileText,
            title: 'Compliance Advice',
            description: 'Analysis of obligations under sanctions regulations, implementation of control procedures, compliance team training.'
          },
          {
            icon: Shield,
            title: 'Crisis Management',
            description: 'Immediate assistance in case of asset freezes, strategic advice on steps to take, coordination with competent authorities.'
          },
          {
            icon: Users,
            title: 'Licenses and Derogations',
            description: 'Applications for specific authorizations from national and EU authorities to unfreeze funds or conduct prohibited operations.'
          }
        ]
      },
      expertise: {
        title: 'Areas of Intervention',
        description: 'The firm handles all aspects of international sanctions law',
        areas: [
          'Territorial sanctions (Russia, Iran, Syria, etc.)',
          'Individual sanctions (asset freezes, travel bans)',
          'Sectoral embargoes (energy, defense, finance)',
          'Dual-use goods export controls',
          'Violations and criminal sanctions',
          'Protection of fundamental rights',
          'Compensation litigation',
          'Cooperation with supervisory authorities'
        ]
      },
      why: {
        title: 'Why Choose Us',
        reasons: [
          {
            title: 'Recognized Academic Expertise',
            text: 'Author of the reference book "EU Sanctions Litigation" (Routledge, 2025) and professor at the Sorbonne in sanctions law.'
          },
          {
            title: 'International Experience',
            text: 'Trained in France, Luxembourg and Russia, with deep understanding of geopolitical issues.'
          },
          {
            title: 'Tailored Approach',
            text: 'Litigation strategy adapted to each situation, rigorous defense of fundamental rights.'
          },
          {
            title: 'Responsiveness',
            text: 'Immediate availability in case of emergency, rapid response to advisory requests.'
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
            <Shield size={48} />
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
