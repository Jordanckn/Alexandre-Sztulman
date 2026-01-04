import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface FAQProps {
  language: Language;
}

export function FAQ({ language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = {
    fr: {
      title: 'Foire aux questions',
      faqs: [
        {
          question: 'Dans quels domaines le cabinet de Maître Alexandre Sztulman intervient-il ?',
          answer: 'Le cabinet intervient principalement en droit pénal, procédure pénale, droit administratif, droit européen, libertés fondamentales ainsi qu\'en conseil en activités économiques, notamment dans des contextes juridiques complexes ou sensibles. Une attention particulière est portée aux sanctions internationales et européennes.'
        },
        {
          question: 'À qui s\'adresse le cabinet ?',
          answer: 'Le cabinet accompagne particuliers, entreprises, dirigeants et institutions publiques. Chaque dossier est traité de manière individualisée, quel que soit le profil du client, dès lors qu\'il soulève des enjeux juridiques sérieux nécessitant une expertise approfondie.'
        },
        {
          question: 'Le cabinet traite-t-il des dossiers à dimension internationale ou européenne ?',
          answer: 'Oui. Le cabinet intervient régulièrement sur des dossiers impliquant le droit de l\'Union européenne, des normes internationales ou des situations transfrontalières, tant en conseil qu\'en contentieux.'
        },
        {
          question: 'Le cabinet assure-t-il un strict respect de la confidentialité ?',
          answer: 'La confidentialité constitue un principe fondamental de la pratique du cabinet. L\'ensemble des échanges, documents et informations confiés sont couverts par le secret professionnel de l\'avocat, dans le strict respect des règles déontologiques.'
        },
        {
          question: 'Maître Alexandre Sztulman assure-t-il personnellement le suivi des dossiers ?',
          answer: 'Oui. En tant qu\'avocat individuel, Maître Alexandre Sztulman assure un suivi direct et personnel de chaque dossier, garantissant une parfaite maîtrise du dossier et une disponibilité constante.'
        },
        {
          question: 'Le cabinet intervient-il uniquement à Paris ?',
          answer: 'Le cabinet est situé à Paris 8ᵉ, mais intervient sur l\'ensemble du territoire français ainsi qu\'à l\'échelle européenne, selon la nature des dossiers.'
        },
        {
          question: 'Le cabinet propose-t-il des consultations de conseil en amont d\'un contentieux ?',
          answer: 'Oui. Le cabinet intervient aussi bien en conseil qu\'en contentieux, notamment pour anticiper les risques juridiques, analyser une situation complexe ou accompagner des décisions stratégiques.'
        },
        {
          question: 'Comment se déroule un premier rendez-vous ?',
          answer: 'Le premier rendez-vous permet d\'exposer la situation juridique, d\'en analyser les enjeux et d\'envisager les options possibles. Il se déroule dans un cadre strictement confidentiel, sur rendez-vous uniquement.'
        },
        {
          question: 'Le cabinet accepte-t-il tous les dossiers ?',
          answer: 'Chaque demande est examinée avec attention. Le cabinet se réserve la possibilité de refuser un dossier lorsqu\'il ne relève pas de son champ d\'expertise ou lorsque les conditions d\'indépendance ne sont pas réunies.'
        },
        {
          question: 'Comment contacter le cabinet ?',
          answer: 'Le cabinet peut être contacté par téléphone ou via le formulaire de contact du site afin de convenir d\'un rendez-vous ou d\'un premier échange confidentiel.'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'In which areas does Maître Alexandre Sztulman\'s office practice?',
          answer: 'The office primarily practices in criminal law, criminal procedure, administrative law, European law, fundamental freedoms, as well as advice on economic activities, particularly in complex or sensitive legal contexts. Special attention is given to international and European sanctions.'
        },
        {
          question: 'Who does the office serve?',
          answer: 'The office assists individuals, companies, executives, and public institutions. Each case is handled individually, regardless of the client\'s profile, as long as it raises serious legal issues requiring in-depth expertise.'
        },
        {
          question: 'Does the office handle international or European cases?',
          answer: 'Yes. The office regularly intervenes on cases involving European Union law, international standards, or cross-border situations, both in advisory matters and litigation.'
        },
        {
          question: 'Does the office ensure strict confidentiality?',
          answer: 'Confidentiality is a fundamental principle of the office\'s practice. All exchanges, documents, and information entrusted are covered by attorney-client privilege, in strict compliance with ethical rules.'
        },
        {
          question: 'Does Maître Alexandre Sztulman personally manage cases?',
          answer: 'Yes. As an individual attorney, Maître Alexandre Sztulman ensures direct and personal management of each case, guaranteeing complete mastery of the file and constant availability.'
        },
        {
          question: 'Does the office operate only in Paris?',
          answer: 'The office is located in Paris 8th arrondissement, but operates throughout France as well as at the European level, depending on the nature of the cases.'
        },
        {
          question: 'Does the office offer advisory consultations before litigation?',
          answer: 'Yes. The office intervenes in both advisory and litigation matters, particularly to anticipate legal risks, analyze complex situations, or support strategic decisions.'
        },
        {
          question: 'How does an initial meeting work?',
          answer: 'The initial meeting allows you to present the legal situation, analyze its stakes, and consider possible options. It takes place in a strictly confidential setting, by appointment only.'
        },
        {
          question: 'Does the office accept all cases?',
          answer: 'Each request is examined carefully. The office reserves the right to decline a case when it falls outside its area of expertise or when the conditions of independence are not met.'
        },
        {
          question: 'How can you contact the office?',
          answer: 'The office can be contacted by phone or via the website contact form to schedule an appointment or have an initial confidential discussion.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-primary-700 mb-12"></div>

        <div className="space-y-3">
          {t.faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-medium text-primary-900 text-lg">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary-700 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
