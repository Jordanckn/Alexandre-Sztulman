import { GraduationCap, Scale, Globe2, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const content = {
    fr: {
      title: 'À propos',
      intro: 'Maître Alexandre Sztulman est un avocat au Barreau de Paris, titulaire d\'un Doctorat en Droit et enseignant en droit des sanctions internationales à l\'Université Paris 1 Panthéon-Sorbonne.',
      paragraphs: [
        'Docteur en Droit de l\'Université Paris 1 Panthéon-Sorbonne, Maître Sztulman dispose d\'une formation internationale approfondie avec un LL.M. en droit européen de l\'Université de Luxembourg et des études à la Higher School of Economics de Moscou. Il est également titulaire d\'un Master 2 en droit pénal international et des affaires.',
        'Sa double compétence, académique et pratique, lui permet d\'offrir à ses clients une expertise pointue dans des domaines juridiques complexes et en constante évolution. Son enseignement à l\'Université Paris 1 et ses recherches doctorales témoignent de sa maîtrise des enjeux géopolitiques et juridiques contemporains.',
        'Inscrit au Barreau de Paris, Maître Sztulman met son expertise au service d\'une clientèle professionnelle exigeante, qu\'il accompagne avec rigueur, confidentialité et un souci constant de la défense des droits fondamentaux.'
      ],
      values: [
        { icon: Scale, title: 'Expertise Juridique', text: 'Double compétence pratique et académique en droit international' },
        { icon: Globe2, title: 'Pratique Bilingue', text: 'Français et anglais, au service d\'une clientèle internationale' },
        { icon: GraduationCap, title: 'Formation d\'Excellence', text: 'Doctorat et diplômes internationaux prestigieux' },
        { icon: BookOpen, title: 'Veille Académique', text: 'Enseignant à la Sorbonne, auteur d\'ouvrages de référence' }
      ]
    },
    en: {
      title: 'About',
      intro: 'Alexandre Sztulman is an attorney at the Paris Bar, holds a PhD in Law, and teaches international sanctions law at Université Paris 1 Panthéon-Sorbonne.',
      paragraphs: [
        'PhD in Law from Université Paris 1 Panthéon-Sorbonne, Me Sztulman has extensive international training with an LL.M. in European Law from the University of Luxembourg and studies at the Higher School of Economics in Moscow. He also holds a Master\'s degree in International Criminal and Business Law.',
        'His dual expertise, both academic and practical, enables him to offer clients specialized knowledge in complex and constantly evolving legal fields. His teaching at Université Paris 1 and his doctoral research demonstrate his mastery of contemporary geopolitical and legal issues.',
        'Registered to the Paris Bar, Me Sztulman places his expertise at the service of demanding professional clients, whom he assists with rigor, confidentiality, and a constant commitment to defending fundamental rights.'
      ],
      values: [
        { icon: Scale, title: 'Legal Expertise', text: 'Dual practical and academic competence in international law' },
        { icon: Globe2, title: 'Bilingual Practice', text: 'French and English, serving an international clientele' },
        { icon: GraduationCap, title: 'Excellence in Education', text: 'PhD and prestigious international degrees' },
        { icon: BookOpen, title: 'Academic Vigilance', text: 'Professor at the Sorbonne, author of reference works' }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-slate-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-slate-800 mb-12"></div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed font-medium">{t.intro}</p>
            {t.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base text-slate-600 leading-relaxed">{paragraph}</p>
            ))}
          </div>

          <div className="space-y-6">
            {t.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center">
                      <Icon size={24} className="text-slate-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{value.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
