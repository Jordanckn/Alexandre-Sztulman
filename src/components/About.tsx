import { Language } from '../types';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const content = {
    fr: {
      title: 'Le cabinet',
      text: 'Alexandre Sztulman est Docteur en Droit et Membre du Barreau de Paris. Il enseigne le droit des sanctions internationales et européennes à l\'Université Paris 1 Panthéon-Sorbonne. Il est titulaire d\'un LL.M. en droit européen de l\'Université de Luxembourg, a poursuivi des études à la Higher School of Economics de Moscou, et a obtenu un Master en droit pénal international et des affaires à l\'Université Paris 1. Praticien du contentieux des sanctions européennes et du droit international des investissements, ses recherches examinent comment équilibrer les impératifs de sécurité mondiale avec la protection des libertés fondamentales.'
    },
    en: {
      title: 'The Firm',
      text: 'Alexandre Sztulman is Doctor of Law and is Member of the Paris Bar. He teaches international and European sanctions law at Université Paris 1 Panthéon-Sorbonne. He holds an LLM in European Law from the University of Luxembourg, pursued further studies at the Higher School of Economics in Moscow, and completed a Master\'s in International and Business Criminal Law at Université Paris 1. Practitioner in European sanctions litigation and international investment law, his research examines how to balance global security imperatives with the protection of fundamental freedoms.'
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-primary-700 mb-12"></div>

        <div className="max-w-4xl">
          <p className="text-lg text-slate-700 leading-relaxed">{t.text}</p>
        </div>
      </div>
    </section>
  );
}
