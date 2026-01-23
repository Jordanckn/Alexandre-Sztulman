
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { supabase } from '../lib/supabase';

interface BlogPageProps {
  language: Language;
}

function PublicationCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % 2);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + 2) % 2);

  return (
    <div className="relative bg-primary-700 h-96 rounded-sm overflow-hidden group">
      {/* Slide 1: Image stylisée */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-white p-8 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'
          }`}
      >
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

      {/* Slide 2: Image réelle du livre */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="bg-white p-3 rounded-sm shadow-xl max-h-full flex items-center justify-center">
          <img
            src="https://qoshuifjdjulpizikemg.supabase.co/storage/v1/object/public/blog-images/publication-EU%20Sanctions-Litigation-Fundamental-Rights-and%20International-Security.jpg"
            alt="EU Sanctions Litigation - Fundamental Rights and International Security"
            className="max-h-[340px] w-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 md:p-2 rounded-full transition-all opacity-70 md:opacity-0 md:group-hover:opacity-100 z-10"
        aria-label="Image précédente"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 md:p-2 rounded-full transition-all opacity-70 md:opacity-0 md:group-hover:opacity-100 z-10"
        aria-label="Image suivante"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  created_at: string;
  slug: string;
  cover_image_url: string | null;
}

export function BlogPage({ language }: BlogPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const content = {
    fr: {
      title: 'Publications & Actualités',
      subtitle: 'Analyses juridiques, publications académiques et actualités du cabinet',
      featured: {
        label: 'Publication majeure',
        title: 'EU Sanctions Litigation: Fundamental Rights and International Security',
        date: '2025',
        description: 'Cet ouvrage examine de manière approfondie l\'approche de la justice de l\'Union européenne (UE) en matière de sanctions internationales, en s\'appuyant sur la jurisprudence récente de la Cour de justice et du Tribunal. Il aborde le cadre procédural régissant le contrôle juridictionnel, ainsi qu\'une évaluation substantielle des mesures restrictives sous l\'angle de leur légalité et de leur conformité aux droits fondamentaux et aux garanties procédurales.\n\nEn tant que pierre angulaire de la politique étrangère et de sécurité commune (PESC) de l\'UE, les mesures restrictives, en particulier les sanctions internationales, constituent le principal outil de l\'Union pour répondre aux actions contraires à ses valeurs fondamentales. Cliquez sur "En savoir plus" pour découvrir la suite.',
        publisher: 'Routledge',
        button: 'En savoir plus',
        thesisTitle: 'Thèse de doctorat',
        thesisLink: 'Consulter la thèse sur theses.fr'
      },
      articles: {
        title: 'Derniers articles'
      },
      teaching: {
        title: 'Enseignement & Conférences',
        description: 'Maître Sztulman enseigne le droit des sanctions internationales à l\'Université Paris 1 Panthéon-Sorbonne.',
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
        description: 'This book comprehensively examines the European Union (EU) judiciary’s approach to international sanctions, drawing on recent case law from the Court of Justice and the General Court. It addresses the procedural framework governing judicial review, alongside a substantive evaluation of restrictive measures in terms of their legality and conformity with fundamental rights and procedural guarantees.\n\nAs a cornerstone of the EU’s Common Foreign and Security Policy (CFSP), restrictive measures, particularly international sanctions, serve as the Union’s primary tool for addressing actions that conflict with its core values. Click on "Learn more" to read the full description.',
        publisher: 'Routledge',
        button: 'Learn more',
        thesisTitle: 'Doctoral Thesis',
        thesisLink: 'View thesis on theses.fr'
      },
      articles: {
        title: 'Latest Articles'
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

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('id, title, excerpt, category, created_at, slug, cover_image_url')
        .eq('published', true)
        .eq('language', language)
        .order('created_at', { ascending: false });

      if (data && !error) {
        setPosts(data);
      }
      setLoading(false);
    }

    fetchPosts();
  }, [language]);

  return (
    <div className="pt-20">
      <section className="bg-primary-700 text-white py-20">
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
          <div className="inline-block bg-primary-700 text-white px-4 py-2 rounded-sm text-sm font-medium mb-6">
            {t.featured.label}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <PublicationCarousel />

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

              <a
                href="https://www.routledge.com/EU-Sanctions-Litigation-Fundamental-Rights-and-International-Security/Sztulman/p/book/9781041019411"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white hover:bg-primary-600 transition-colors rounded-sm font-medium"
              >
                {t.featured.button}
                <ExternalLink size={18} />
              </a>

              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{t.featured.thesisTitle}</h3>
                <a
                  href="https://theses.fr/2021PA100169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium group"
                >
                  {t.featured.thesisLink}
                  <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-slate-900 mb-12">{t.articles.title}</h2>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-8 rounded-sm h-64 animate-pulse"></div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((article) => (
                <article key={article.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-sm text-xs font-medium mb-4 self-start">
                    {article.category}
                  </div>
                  {article.cover_image_url && (
                    <div className="mb-4 -mx-8 -mt-0">
                      <img src={article.cover_image_url} alt={article.title} className="w-full h-48 object-cover" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">{article.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Calendar size={14} />
                    <span>{new Date(article.created_at).getFullYear()}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{article.excerpt}</p>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="flex items-center gap-2 text-slate-800 font-medium hover:gap-3 transition-all mt-auto self-start"
                  >
                    {language === 'fr' ? 'Lire la suite' : 'Read more'}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 italic">
              {language === 'fr' ? 'Aucun article pour le moment.' : 'No articles yet.'}
            </p>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">{t.teaching.title}</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">{t.teaching.description}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.teaching.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 p-6 rounded-sm">
                <div className="w-2 h-2 bg-primary-700 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
