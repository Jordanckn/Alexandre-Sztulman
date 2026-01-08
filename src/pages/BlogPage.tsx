
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { supabase } from '../lib/supabase';

interface BlogPageProps {
  language: Language;
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
        description: 'Ouvrage de référence publié chez Routledge en 2025, il propose une analyse approfondie du contentieux des sanctions internationales au niveau de l’Union européenne, en examinant le contrôle juridictionnel des mesures restrictives et l’articulation entre impératifs de sécurité internationale et protection des libertés fondamentales.',
        publisher: 'Routledge',
        pages: '256 pages',
        isbn: 'ISBN: 9781041019411',
        button: 'En savoir plus'
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
        description: 'A reference work published by Routledge in 2025, it offers an in-depth analysis of international sanctions litigation at the European Union level, examining judicial review of restrictive measures and the interplay between international security imperatives and the protection of fundamental freedoms.',
        publisher: 'Routledge',
        pages: '256 pages',
        isbn: 'ISBN: 9781041019411',
        button: 'Learn more'
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
            <div className="bg-primary-700 h-96 rounded-sm flex items-center justify-center text-white p-8">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white hover:bg-primary-600 transition-colors rounded-sm font-medium"
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
