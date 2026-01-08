
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Language } from '../types';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BlogArticlePageProps {
    language: Language;
}

interface Post {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    category: string;
    cover_image_url: string;
    created_at: string;
    seo_title: string;
    seo_description: string;
}

export function BlogArticlePage({ language }: BlogArticlePageProps) {
    const { slug } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetchPost(slug);
        }
    }, [slug]);

    const fetchPost = async (slug: string) => {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('slug', slug)
            .eq('published', true)
            .single();

        if (data && !error) {
            setPost(data);
        }
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="pt-32 pb-20 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary-700 border-t-transparent"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-2xl font-serif text-slate-900 mb-4">Article non trouvé</h1>
                <Link to="/blog" className="text-primary-700 hover:underline">Retour au blog</Link>
            </div>
        );
    }

    return (
        <div className="pt-20">
            <Helmet>
                <title>{post.seo_title || post.title}</title>
                <meta name="description" content={post.seo_description || post.excerpt} />
            </Helmet>

            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                {post.cover_image_url && (
                    <div className="absolute inset-0">
                        <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    </div>
                )}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} />
                        {language === 'fr' ? 'Retour aux publications' : 'Back to publications'}
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-slate-300 mb-6">
                        <span className="bg-primary-700/80 px-3 py-1 rounded-full">{post.category}</span>
                        <span className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(post.created_at).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif leading-tight">{post.title}</h1>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div
                    className="prose prose-lg prose-slate max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }} // Using HTML for now as we might use a Rich Text Editor later
                />
                {/* If content is plain text, just render it: <div className="whitespace-pre-wrap">{post.content}</div> */}
            </article>
        </div>
    );
}
