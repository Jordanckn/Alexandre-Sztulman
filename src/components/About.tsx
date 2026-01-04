import { Language } from '../types';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const content = {
    fr: {
      title: 'Le Cabinet de Maître Alexandre Sztulman',
      sections: [
        {
          text: "Le cabinet de Maître Alexandre Sztulman, avocat individuel au Barreau de Paris, intervient dans des dossiers à forts enjeux juridiques, institutionnels et économiques, en France comme à l'échelle européenne."
        },
        {
          text: "Sa pratique repose sur une approche rigoureuse, technique et stratégique, nourrie par une expertise académique reconnue et une connaissance approfondie du fonctionnement des administrations françaises et européennes."
        },
        {
          text: "Installé à Paris 8ᵉ, le cabinet accompagne particuliers, entreprises, dirigeants et institutions publiques dans des contextes complexes exigeant discrétion absolue, maîtrise normative et efficacité opérationnelle."
        },
        {
          subtitle: "Un parcours académique et institutionnel d'excellence",
          text: "Maître Alexandre Sztulman est Docteur en droit, spécialisé en droit pénal et en droit européen. Il est titulaire d'un LL.M. en droit européen délivré par l'Université de Luxembourg, ainsi que d'un Master en droit pénal international et des affaires obtenu à l'Université Paris 1 Panthéon-Sorbonne. Il a également poursuivi des études à la Higher School of Economics de Moscou, renforçant une formation juridique résolument tournée vers l'international."
        },
        {
          text: "Parallèlement à son activité d'avocat, Maître Alexandre Sztulman enseigne le droit des sanctions internationales et européennes à l'Université Paris 1 Panthéon-Sorbonne. Il intervient également comme chargé d'enseignement en :",
          list: [
            "droit pénal général",
            "procédure pénale",
            "droit des crimes internationaux",
            "libertés fondamentales"
          ]
        },
        {
          subtitle: "Une expérience pratique au cœur des institutions européennes et étatiques",
          text: "Avant de fonder son cabinet, Maître Alexandre Sztulman a exercé au sein de cabinets d'affaires internationaux, où il a acquis une solide expérience des problématiques transfrontalières et des contentieux complexes."
        },
        {
          text: "Il a également travaillé auprès de la Cour de justice de l'Union européenne, participant à l'analyse et au traitement de questions juridiques européennes de premier plan."
        },
        {
          text: "Son parcours institutionnel inclut aussi une expérience au sein de la Direction générale du Trésor, notamment au bureau des sanctions internationales et financières ainsi qu'au bureau de la lutte contre la criminalité financière. Cette immersion au sein de l'administration lui confère une compréhension concrète des mécanismes décisionnels, des contraintes réglementaires et des logiques de contrôle propres aux autorités publiques."
        },
        {
          subtitle: "Une expertise reconnue en droit pénal, droit européen et libertés fondamentales",
          text: "Le cabinet intervient principalement en :",
          list: [
            "Droit pénal, tant en conseil qu'en contentieux",
            "Procédure pénale",
            "Droit administratif",
            "Droit européen",
            "Libertés fondamentales",
            "Conseil en activités économiques, notamment dans des contextes réglementaires sensibles"
          ]
        },
        {
          text: "Une attention particulière est portée aux sanctions internationales et européennes, domaine nécessitant une parfaite maîtrise des normes européennes, des régimes de sanctions, et des interactions entre droit interne, droit de l'Union et droit international."
        },
        {
          subtitle: "Une pratique fondée sur la discrétion, la technicité et l'accessibilité",
          text: "Le cabinet de Maître Alexandre Sztulman se distingue par :",
          list: [
            "Une approche strictement confidentielle, adaptée aux situations sensibles",
            "Une analyse juridique approfondie, fondée sur la doctrine, la jurisprudence et la pratique administrative",
            "Une accessibilité directe de l'avocat, garantissant un suivi personnel de chaque dossier"
          ]
        },
        {
          text: "Chaque intervention est conduite avec une exigence constante de précision, de loyauté et d'indépendance, dans le strict respect des règles déontologiques de la profession d'avocat et du secret professionnel."
        },
        {
          subtitle: "Un accompagnement sur mesure en France et en Europe",
          text: "Le cabinet intervient sur l'ensemble du territoire français ainsi qu'à l'échelle européenne, pour des dossiers nécessitant une compréhension fine des cadres juridiques nationaux et supranationaux."
        },
        {
          text: "Maître Alexandre Sztulman a prêté serment en qualité d'avocat et exerce son activité en toute indépendance, avec pour objectif constant la défense rigoureuse des intérêts qui lui sont confiés."
        },
        {
          subtitle: "Contact et prise de rendez-vous",
          text: "Le cabinet reçoit sur rendez-vous. Pour toute demande d'information ou de consultation, vous pouvez contacter directement le cabinet afin d'échanger sur votre situation en toute confidentialité."
        }
      ]
    },
    en: {
      title: 'The Law Firm of Maître Alexandre Sztulman',
      sections: [
        {
          text: "The law firm of Maître Alexandre Sztulman, a sole practitioner admitted to the Paris Bar, handles cases with significant legal, institutional, and economic stakes, both in France and across Europe."
        },
        {
          text: "His practice is based on a rigorous, technical, and strategic approach, supported by recognized academic expertise and in-depth knowledge of French and European administrative processes."
        },
        {
          text: "Located in Paris 8th arrondissement, the firm assists individuals, businesses, executives, and public institutions in complex contexts requiring absolute discretion, regulatory mastery, and operational efficiency."
        },
        {
          subtitle: "An Outstanding Academic and Institutional Background",
          text: "Maître Alexandre Sztulman holds a Ph.D. in Law, specializing in criminal law and European law. He earned an LL.M. in European Law from the University of Luxembourg, as well as a Master's degree in International and Business Criminal Law from Université Paris 1 Panthéon-Sorbonne. He also pursued studies at the Higher School of Economics in Moscow, strengthening a legal education firmly oriented toward international practice."
        },
        {
          text: "Alongside his practice as an attorney, Maître Alexandre Sztulman teaches international and European sanctions law at Université Paris 1 Panthéon-Sorbonne. He also serves as an instructor in:",
          list: [
            "general criminal law",
            "criminal procedure",
            "international criminal law",
            "fundamental freedoms"
          ]
        },
        {
          subtitle: "Practical Experience at the Heart of European and State Institutions",
          text: "Before founding his firm, Maître Alexandre Sztulman practiced at international business law firms, where he gained solid experience in cross-border issues and complex litigation."
        },
        {
          text: "He also worked at the Court of Justice of the European Union, contributing to the analysis and handling of leading European legal matters."
        },
        {
          text: "His institutional experience also includes time at the Directorate General of the Treasury, particularly in the international and financial sanctions office and the financial crime prevention office. This immersion within the administration provides him with a concrete understanding of decision-making mechanisms, regulatory constraints, and control processes specific to public authorities."
        },
        {
          subtitle: "Recognized Expertise in Criminal Law, European Law, and Fundamental Freedoms",
          text: "The firm primarily operates in:",
          list: [
            "Criminal law, both advisory and litigation",
            "Criminal procedure",
            "Administrative law",
            "European law",
            "Fundamental freedoms",
            "Advisory services for economic activities, particularly in sensitive regulatory contexts"
          ]
        },
        {
          text: "Particular attention is given to international and European sanctions, a field requiring perfect command of European norms, sanctions regimes, and interactions between domestic law, European Union law, and international law."
        },
        {
          subtitle: "A Practice Founded on Discretion, Technical Expertise, and Accessibility",
          text: "The law firm of Maître Alexandre Sztulman is distinguished by:",
          list: [
            "A strictly confidential approach, adapted to sensitive situations",
            "In-depth legal analysis, based on doctrine, case law, and administrative practice",
            "Direct accessibility to the attorney, ensuring personal supervision of each case"
          ]
        },
        {
          text: "Each intervention is conducted with constant requirements of precision, loyalty, and independence, in strict compliance with the ethical rules of the legal profession and professional secrecy."
        },
        {
          subtitle: "Tailored Support in France and Europe",
          text: "The firm operates throughout France and across Europe, handling cases requiring a refined understanding of national and supranational legal frameworks."
        },
        {
          text: "Maître Alexandre Sztulman was sworn in as an attorney and practices independently, with the constant objective of rigorously defending the interests entrusted to him."
        },
        {
          subtitle: "Contact and Appointments",
          text: "The firm receives clients by appointment. For any request for information or consultation, you may contact the firm directly to discuss your situation in complete confidentiality."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-primary-700 mb-12"></div>

        <div className="max-w-4xl space-y-8">
          {t.sections.map((section, index) => (
            <div key={index}>
              {section.subtitle && (
                <h3 className="text-2xl font-serif text-primary-800 mb-4 mt-8">
                  {section.subtitle}
                </h3>
              )}
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                {section.text}
              </p>
              {section.list && (
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-slate-700">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
