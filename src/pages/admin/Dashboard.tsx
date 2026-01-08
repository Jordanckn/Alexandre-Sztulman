
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Edit2, Trash2, Eye, Plus } from 'lucide-react';

interface Post {
    id: string;
    title: string;
    slug: string;
    created_at: string;
    published: boolean;
    category: string;
}

export function AdminDashboard() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Session actuelle:', session ? 'Connecté as ' + session.user.email : 'Non connecté');

        const { data, error } = await supabase
            .from('posts')
            .select('id, title, slug, created_at, published, category')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Erreur lors de la récupération des articles:', error);
        } else if (data) {
            setPosts(data);
        }
        setLoading(false);
    };

    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        console.log('Tentative de suppression de l\'article:', id);
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
            setIsDeleting(id);
            try {
                // 1. Récupérer les infos de l'article pour avoir l'image
                const { data: post } = await supabase
                    .from('posts')
                    .select('cover_image_url')
                    .eq('id', id)
                    .single();

                // 2. Supprimer l'article de la DB
                const { error: deleteError } = await supabase.from('posts').delete().eq('id', id);
                if (deleteError) throw deleteError;

                // 3. Supprimer l'image du bucket si elle existe
                if (post?.cover_image_url) {
                    const filename = post.cover_image_url.split('/').pop();
                    if (filename) {
                        await supabase.storage.from('blog-images').remove([filename]);
                    }
                }

                console.log('Suppression réussie');
                alert('L\'article a été supprimé avec succès.');
                await fetchPosts();
            } catch (err: any) {
                console.error('Erreur lors de la suppression:', err);
                alert('Erreur lors de la suppression : ' + (err.message || 'Erreur inconnue'));
            } finally {
                setIsDeleting(null);
            }
        }
    };

    if (loading) return <div>Chargement...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif font-bold text-slate-900">Articles</h1>
                <Link
                    to="/admin/new"
                    className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-800 flex items-center gap-2"
                >
                    <Plus size={20} />
                    Nouvel article
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Titre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Catégorie</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Statut</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {posts.map((post) => (
                            <tr key={post.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-slate-900">{post.title}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800">
                                        {post.category || 'Non classé'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}
                                    >
                                        {post.published ? 'Publié' : 'Brouillon'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                    {new Date(post.created_at).toLocaleDateString('fr-FR')}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end gap-2 items-center">
                                        <Link
                                            to={`/admin/edit/${post.id}`}
                                            className="text-primary-600 hover:text-primary-900 p-2 rounded-md hover:bg-primary-50 transition-colors"
                                            title="Modifier l'article"
                                        >
                                            <Edit2 size={18} />
                                        </Link>
                                        <button
                                            type="button"
                                            disabled={isDeleting === post.id}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(post.id);
                                            }}
                                            className={`text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-red-50 transition-colors ${isDeleting === post.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            title="Supprimer l'article"
                                        >
                                            <Trash2 size={18} className={isDeleting === post.id ? 'animate-pulse' : ''} />
                                        </button>
                                        {post.published && (
                                            <Link
                                                to={`/blog/${post.slug}`}
                                                target="_blank"
                                                className="text-slate-400 hover:text-slate-600 p-2 rounded-md hover:bg-slate-100 transition-colors"
                                                title="Voir l'article"
                                            >
                                                <Eye size={18} />
                                            </Link>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                    Aucun article pour le moment.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
