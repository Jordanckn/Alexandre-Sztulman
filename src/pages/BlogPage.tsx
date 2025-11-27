import { BookOpen, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface BlogPageProps {
  language: Language;
}

export function BlogPage({ language }: BlogPageProps) {
  const content = {
    fr: {
      title: 'Publications & Actualités',
      subtitle: 'Analyses juridiques, publications académiques et actualités du cabinet',
      featured: {
        label: 'Publication majeure',
        title: 'EU Sanctions Litigation: Fundamental Rights and International Security',
        date: '2025',
        description: 'Cet ouvrage de 256 pages, publié chez Routledge en 2025, est l\'aboutissement de la thèse de doctorat de Maître Sztulman. Il offre un éclairage unique sur les litiges de sanctions internationales au niveau européen, analysant en profondeur le contrôle juridictionnel des sanctions européennes et l\'équilibre entre sécurité internationale et libertés fondamentales.',
        publisher: 'Routledge',
        pages: '256 pages',
        isbn: 'ISBN: 9781041019411',
        button: 'En savoir plus'
      },
      articles: {
        title: 'Derniers articles',
        items: [
          {
            title: 'Le contrôle juridictionnel des sanctions de l\'UE : entre effectivité et respect des droits fondamentaux',
            date: '2024',
            excerpt: 'Analyse approfondie de la jurisprudence récente de la CJUE en matière de sanctions et des tensions entre impératifs de sécurité internationale et protection des droits individuels.',
            category: 'Sanctions internationales'
          },
          {
            title: 'Lutte anti-blanchiment : les nouveaux défis de la conformité bancaire',
            date: '2024',
            excerpt: 'Tour d\'horizon des évolutions réglementaires récentes en matière de LCB-FT et des meilleures pratiques pour les établissements financiers.',
            category: 'Compliance'
          },
          {
            title: 'Arbitrage investisseur-État : impact du Traité sur la Charte de l\'énergie',
            date: '2023',
            excerpt: 'Étude des implications du TCE pour les investisseurs dans le secteur de l\'énergie et analyse des contentieux récents.',
            category: 'Investissements internationaux'
          }
        ]
      },
      teaching: {
        title: 'Enseignement & Conférences',
        description: 'Maître Sztulman enseigne le droit des sanctions internationales à l\'Université Paris 1 Panthéon-Sorbonne (Master 2 Droit pénal international et des affaires).',
        items: [
          'Cours magistral : Droit des sanctions internationales de l\'UE',
          'Séminaire : Contentieux européen des mesures restrictives',
          'Interventions régulières dans des colloques internationaux',
          'Formation continue pour avocats et juristes d\'entreprise'
        ]
      }
    },
    en: {
      title: 'Publications & News',
      subtitle: 'Legal analysis, academic publications and firm news',
      featured: {
        label: 'Major Publication',
        title: 'EU Sanctions Litigation: Fundamental Rights and International Security',
        date: '2025',
        description: 'This 256-page work, published by Routledge in 2025, is the culmination of Me Sztulman\'s doctoral thesis. It offers a unique perspective on international sanctions litigation at the European level, providing in-depth analysis of judicial review of European sanctions and the balance between international security and fundamental freedoms.',
        publisher: 'Routledge',
        pages: '256 pages',
        isbn: 'ISBN: 9781041019411',
        button: 'Learn more'
      },
      articles: {
        title: 'Latest Articles',
        items: [
          {
            title: 'Judicial Review of EU Sanctions: Between Effectiveness and Fundamental Rights',
            date: '2024',
            excerpt: 'In-depth analysis of recent CJEU case law on sanctions and tensions between international security imperatives and individual rights protection.',
            category: 'International Sanctions'
          },
          {
            title: 'Anti-Money Laundering: New Challenges in Banking Compliance',
            date: '2024',
            excerpt: 'Overview of recent regulatory developments in AML/CFT and best practices for financial institutions.',
            category: 'Compliance'
          },
          {
            title: 'Investor-State Arbitration: Impact of the Energy Charter Treaty',
            date: '2023',
            excerpt: 'Study of ECT implications for investors in the energy sector and analysis of recent disputes.',
            category: 'International Investments'
          }
        ]
      },
      teaching: {
        title: 'Teaching & Conferences',
        description: 'Me Sztulman teaches international sanctions law at Université Paris 1 Panthéon-Sorbonne (Master\'s program in International Criminal and Business Law).',
        items: [
          'Main course: EU International Sanctions Law',
          'Seminar: European Litigation on Restrictive Measures',
          'Regular interventions at international conferences',
          'Continuing education for lawyers and corporate counsel'
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
            <BookOpen size={48} />
            <h1 className="text-4xl md:text-5xl font-serif">{t.title}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-slate-800 text-white px-4 py-2 rounded-sm text-sm font-medium mb-6">
            {t.featured.label}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-800 h-96 rounded-sm flex items-center justify-center text-white p-8">
              <div className="text-center">
                <BookOpen size={80} className="mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-serif mb-3">EU Sanctions Litigation</h3>
                <p className="text-sm opacity-75 mb-4">Fundamental Rights and International Security</p>
                <div className="text-xs opacity-60">
                  <p>Alexandre Sztulman</p>
                  <p className="mt-1">Routledge 2025</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-slate-900">{t.featured.title}</h2>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {t.featured.date}
                </span>
                <span>{t.featured.publisher}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{t.featured.description}</p>
              <div className="space-y-1 text-sm text-slate-500">
                <p>{t.featured.pages}</p>
                <p>{t.featured.isbn}</p>
              </div>
              <a
                href="https://www.routledge.com/EU-Sanctions-Litigation-Fundamental-Rights-and-International-Security/Sztulman/p/book/9781041019411"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white hover:bg-slate-700 transition-colors rounded-sm font-medium"
              >
                {t.featured.button}
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-slate-900 mb-12">{t.articles.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.articles.items.map((article, index) => (
              <article key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-sm text-xs font-medium mb-4">
                  {article.category}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">{article.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">{article.excerpt}</p>
                <button className="flex items-center gap-2 text-slate-800 font-medium hover:gap-3 transition-all">
                  {language === 'fr' ? 'Lire la suite' : 'Read more'}
                  <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">{t.teaching.title}</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">{t.teaching.description}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.teaching.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 p-6 rounded-sm">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
