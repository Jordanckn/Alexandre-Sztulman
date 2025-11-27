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
      bookDescription: 'Cet ouvrage de 256 pages, publié chez Routledge en 2025, est l\'aboutissement de la thèse de doctorat de Maître Sztulman. Il offre un éclairage unique sur les litiges de sanctions internationales au niveau européen, analysant en profondeur le contrôle juridictionnel des sanctions européennes et l\'équilibre entre sécurité internationale et libertés fondamentales.',
      publisher: 'Routledge, 2025',
      pages: '256 pages',
      buyButton: 'En savoir plus',
      teachingTitle: 'Enseignement',
      teachingText: 'Maître Sztulman enseigne le droit des sanctions internationales à l\'Université Paris 1 Panthéon-Sorbonne (Master 2 Droit pénal international et des affaires), apportant à ses étudiants une expertise pratique et théorique dans ce domaine en constante évolution.'
    },
    en: {
      title: 'Publications & News',
      bookTitle: 'EU Sanctions Litigation: Fundamental Rights and International Security',
      bookDescription: 'This 256-page work, published by Routledge in 2025, is the culmination of Me Sztulman\'s doctoral thesis. It offers a unique perspective on international sanctions litigation at the European level, providing in-depth analysis of judicial review of European sanctions and the balance between international security and fundamental freedoms.',
      publisher: 'Routledge, 2025',
      pages: '256 pages',
      buyButton: 'Learn more',
      teachingTitle: 'Teaching',
      teachingText: 'Me Sztulman teaches international sanctions law at Université Paris 1 Panthéon-Sorbonne (Master\'s program in International Criminal and Business Law), bringing students practical and theoretical expertise in this constantly evolving field.'
    }
  };

  const t = content[language];

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-slate-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-slate-800 mb-16"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-slate-800 h-96 rounded-sm flex items-center justify-center text-white p-8">
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
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-slate-800 text-white hover:bg-slate-700 transition-colors rounded-sm font-medium"
            >
              {t.buyButton}
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t.bookTitle}</h3>
              <div className="space-y-2 mb-4 text-sm text-slate-500">
                <p>{t.publisher}</p>
                <p>{t.pages}</p>
              </div>
              <p className="text-slate-600 leading-relaxed">{t.bookDescription}</p>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t.teachingTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{t.teachingText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
