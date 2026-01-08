import { Shield, Scale, FileText, Users } from 'lucide-react';
import { Language } from '../types';

interface SanctionsPageProps {
  language: Language;
}

export function SanctionsPage({ language }: SanctionsPageProps) {
  const content = {
    fr: {
      title: 'Sanctions Internationales de l\'UE',
      subtitle: 'Expertise en contentieux des mesures restrictives européennes',
      intro: 'Le cabinet accompagne les entreprises, institutions financières et particuliers confrontés aux régimes de sanctions de l’Union européenne, tant en phase de conformité que dans le cadre de procédures contentieuses complexes. S’appuyant sur son expertise académique et sa pratique du contentieux, Maître Sztulman assure un conseil juridique et une représentation contentieuse, en tenant compte des enjeux économiques et institutionnels propres à chaque dossier.',
      services: {
        title: 'Nos services',
        items: [
          {
            icon: Scale,
            title: 'Contentieux devant les juridictions européennes',
            description: 'Représentation devant le Tribunal de l\'Union européenne et la Cour de justice pour contester l\'inscription sur les listes de sanctions, obtenir la radiation et réparation.'
          },
          {
            icon: FileText,
            title: 'Conseil en conformité',
            description: 'Analyse des obligations découlant des règlements de sanctions, mise en place de procédures de contrôle, formation des équipes compliance.'
          },
          {
            icon: Shield,
            title: 'Gestion de crise',
            description: 'Assistance immédiate en cas de gel d\'avoirs, conseil stratégique sur les démarches à entreprendre, coordination avec les autorités nationales compétentes.'
          },
          {
            icon: Users,
            title: 'Licences et dérogations',
            description: 'Assistance dans la préparation et le dépôt de demandes d’autorisation (licences/dérogations) auprès des autorités nationales et européennes compétentes afin d’obtenir le déblocage de fonds gelés ou la réalisation d’opérations soumises à restriction. Prise en charge des autorisations de transaction et des formalités de notification liées aux régimes de sanctions.'
          }
        ]
      },
      expertise: {
        title: 'Domaines d\'intervention',
        description: 'Le cabinet intervient dans tous les aspects du droit des sanctions internationales',
        areas: [
          'Sanctions territoriales',
          'Sanctions individuelles (gel d\'avoirs, interdictions de voyage)',
          'Embargos sectoriels (énergie, défense, finance)',
          'Contrôle des exportations de biens à double usage',
          'Violation et contournement des sanctions de l\'Union européenne et infractions pénales',
          'Protection des droits fondamentaux',
          'Contentieux en réparation',
          'Coopération avec les autorités de supervision'
        ]
      },
      why: {
        title: 'Pourquoi nous choisir',
        reasons: [
          {
            title: 'Expertise académique reconnue',
            text: (
              <>
                Auteur d’une thèse sur le contrôle juridictionnel des mesures restrictives en droit de l'Union européenne.
                Auteur de l’ouvrage de référence : <a href="https://www.routledge.com/EU-Sanctions-Litigation-Fundamental-Rights-and-International-Security/Sztulman/p/book/9781041019411" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">EU Sanctions Litigation : Fundamental Rights and International Security</a>.
                Enseignant à l’<a href="https://www.pantheonsorbonne.fr/" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">Université Paris 1 Panthéon Sorbonne</a> en droit des sanctions.
                Chercheur invité à l’<a href="https://www.nyu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">Université de New York</a>.
              </>
            )
          },
          {
            title: 'Expérience internationale',
            text: 'Formation en France, au Luxembourg et en Russie, complétée par une expérience au sein de la Cour de justice de l’Union européenne, en cabinets d’affaires internationaux et auprès de la direction générale du Trésor du ministère de l’Économie. Compréhension concrète des enjeux juridiques et géopolitiques, au service de la sécurisation des opérations et de la conformité dans des environnements réglementaires complexes.'
          },
          {
            title: 'Approche sur-mesure',
            text: 'Mise en œuvre de stratégies contentieuses et de défense adaptées aux contraintes institutionnelles, en droit pénal, droit européen et libertés fondamentales. Intervention menée avec une discrétion constante à toutes les étapes, en phases précontentieuse comme contentieuse, notamment dans les dossiers sensibles et à forts enjeux. Accompagnement en conseil et en contentieux devant les juridictions nationales et européennes, en matière de protection des droits et libertés fondamentaux et de conformité aux régimes de sanctions européennes.'
          },
          {
            title: 'Réactivité',
            text: 'Disponibilité en cas d’urgence et traitement prioritaire des situations critiques. Réponse rapide aux demandes de conseil, avec une intervention menée avec discrétion et confidentialité à chaque étape.'
          }
        ]
      }
    },
    en: {
      title: 'EU International Sanctions',
      subtitle: 'Leading expertise in EU restrictive measures litigation',
      intro: 'The firm assists companies, financial institutions and individuals facing EU sanctions regimes, both in the compliance phase and in the context of complex litigation proceedings. Drawing on his academic expertise and litigation practice, Me Sztulman provides legal counsel and litigation representation, taking into account the economic and institutional challenges specific to each case.',
      services: {
        title: 'Our Services',
        items: [
          {
            icon: Scale,
            title: 'Litigation before EU Courts',
            description: 'Representation before the General Court and Court of Justice of the EU to challenge listing decisions, obtain delisting and compensation.'
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
            description: 'Assistance in the preparation and filing of authorization requests (licenses/derogations) with national and European authorities to unfreeze funds or conduct restricted operations. Handling of transaction authorizations and notification formalities related to sanctions regimes.'
          }
        ]
      },
      expertise: {
        title: 'Areas of Intervention',
        description: 'The firm handles all aspects of international sanctions law',
        areas: [
          'Territorial sanctions',
          'Individual sanctions (asset freezes, travel bans)',
          'Sectoral embargoes (energy, defense, finance)',
          'Dual-use goods export controls',
          'Violation and circumvention of EU sanctions and criminal offenses',
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
            text: (
              <>
                Author of a thesis on the judicial review of restrictive measures in EU law.
                Author of the reference book: <a href="https://www.routledge.com/EU-Sanctions-Litigation-Fundamental-Rights-and-International-Security/Sztulman/p/book/9781041019411" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">EU Sanctions Litigation : Fundamental Rights and International Security</a>.
                Lecturer at <a href="https://www.pantheonsorbonne.fr/" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">Paris 1 Panthéon Sorbonne University</a> in sanctions law.
                Visiting researcher at <a href="https://www.nyu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">New York University</a>.
              </>
            )
          },
          {
            title: 'International Experience',
            text: 'Trained in France, Luxembourg and Russia, complemented by experience at the Court of Justice of the European Union, in international law firms and at the French Treasury (direction générale du Trésor) of the Ministry of Economy. Concrete understanding of legal and geopolitical issues, serving to secure operations and ensure compliance in complex regulatory environments.'
          },
          {
            title: 'Tailored Approach',
            text: 'Implementation of litigation and defense strategies adapted to institutional constraints, in criminal law, European law and fundamental rights. Intervention conducted with constant discretion throughout all stages, both pre-litigation and litigation, particularly in sensitive cases with high institutional stakes. Support in advisory and litigation before national and European courts, regarding the protection of fundamental rights and freedoms and compliance with European sanctions regimes.'
          },
          {
            title: 'Responsiveness',
            text: 'Availability in case of emergency and priority handling of critical situations. Rapid response to advisory requests, with intervention conducted with discretion and confidentiality at every stage.'
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
