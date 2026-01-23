import { BookOpen, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface PublicationsProps {
  language: Language;
}

export function Publications({ language }: PublicationsProps) {
  const content = {
    fr: {
      title: 'Publications & Actualités',
      bookTitle: 'EU Sanctions Litigation: Fundamental Rights and International Security',
      bookDescription: 'Cet ouvrage examine de manière approfondie l\'approche de la justice de l\'Union européenne (UE) en matière de sanctions internationales, en s\'appuyant sur la jurisprudence récente de la Cour de justice et du Tribunal. Il aborde le cadre procédural régissant le contrôle juridictionnel, ainsi qu\'une évaluation substantielle des mesures restrictives sous l\'angle de leur légalité et de leur conformité aux droits fondamentaux et aux garanties procédurales.\n\nEn tant que pierre angulaire de la politique étrangère et de sécurité commune (PESC) de l\'UE, les mesures restrictives, en particulier les sanctions internationales, constituent le principal outil de l\'Union pour répondre aux actions contraires à ses valeurs fondamentales. Cliquez sur "En savoir plus" pour découvrir la suite.',
      publisher: 'Routledge, 2025',
      buyButton: 'En savoir plus',
      teachingTitle: 'Enseignement',
      teachingText: 'Maître Sztulman enseigne le droit des sanctions internationales à l\'Université Paris 1 Panthéon-Sorbonne, apportant à ses étudiants une expertise pratique et théorique dans ce domaine en constante évolution.',
      thesisTitle: 'Thèse de doctorat',
      thesisLink: 'Consulter la thèse sur theses.fr'
    },
    en: {
      title: 'Publications & News',
      bookTitle: 'EU Sanctions Litigation: Fundamental Rights and International Security',
      bookDescription: 'This book comprehensively examines the European Union (EU) judiciary’s approach to international sanctions, drawing on recent case law from the Court of Justice and the General Court. It addresses the procedural framework governing judicial review, alongside a substantive evaluation of restrictive measures in terms of their legality and conformity with fundamental rights and procedural guarantees.\n\nAs a cornerstone of the EU’s Common Foreign and Security Policy (CFSP), restrictive measures, particularly international sanctions, serve as the Union’s primary tool for addressing actions that conflict with its core values. Click on "Learn more" to read the full description.',
      publisher: 'Routledge, 2025',
      buyButton: 'Learn more',
      teachingTitle: 'Teaching',
      teachingText: 'Me Sztulman teaches international sanctions law at Université Paris 1 Panthéon-Sorbonne (Master\'s program in International Criminal and Business Law), bringing students practical and theoretical expertise in this constantly evolving field.',
      thesisTitle: 'Doctoral Thesis',
      thesisLink: 'View thesis on theses.fr'
    }
  };

  const t = content[language];

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-primary-700 mb-16"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-primary-700 h-96 rounded-sm flex items-center justify-center text-white p-8">
              <div className="text-center">
                <BookOpen size={64} className="mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-serif mb-2">EU Sanctions Litigation</h3>
                <p className="text-sm opacity-75 mb-4">Fundamental Rights and International Security</p>
                <div className="text-xs opacity-60">
                  <p>Alexandre Sztulman</p>
                  <p className="mt-1">Routledge 2025</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.routledge.com/EU-Sanctions-Litigation-Fundamental-Rights-and-International-Security/Sztulman/p/book/9781041019411"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-700 text-white hover:bg-primary-600 transition-colors rounded-sm font-medium"
            >
              {t.buyButton}
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-4">{t.bookTitle}</h3>
              <div className="space-y-2 mb-4 text-sm text-slate-500">
                <p>{t.publisher}</p>
              </div>
              <p className="text-slate-600 leading-relaxed">{t.bookDescription}</p>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">{t.teachingTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{t.teachingText}</p>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">{t.thesisTitle}</h3>
              <a
                href="https://theses.fr/2021PA100169"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium group"
              >
                {t.thesisLink}
                <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
