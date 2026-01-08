
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { convertImageToWebP, generateSeoFilename, slugify } from '../../lib/utils';
import { Save, ArrowLeft, Upload, X, Image as ImageIcon } from 'lucide-react';

export function AdminEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        category: '',
        cover_image_url: '',
        language: 'fr',
        seo_title: '',
        seo_description: '',
        published: false
    });

    useEffect(() => {
        if (id) {
            fetchPost(id);
        }
    }, [id]);

    const fetchPost = async (postId: string) => {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', postId)
            .single();

        if (data && !error) {
            setFormData(data as any);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const updates: any = { [name]: value };
            if (name === 'title' && !id) {
                // Auto-generate slug and SEO title on new posts only
                updates.slug = slugify(value);
                updates.seo_title = value;
            }
            return { ...prev, ...updates };
        });
    };

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, slug: slugify(e.target.value) }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        if (!formData.title) {
            alert("Veuillez d'abord donner un titre à l'article pour générer le nom de fichier.");
            return;
        }

        setUploading(true);
        try {
            // 1. Convert to WebP
            const webpBlob = await convertImageToWebP(file);

            // 2. Generate SEO Filename
            const filename = generateSeoFilename(formData.title);

            // 3. Upload to Supabase
            const { error } = await supabase.storage
                .from('blog-images')
                .upload(filename, webpBlob, {
                    contentType: 'image/webp',
                    upsert: false
                });

            if (error) throw error;

            // 4. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filename);

            setFormData(prev => ({ ...prev, cover_image_url: publicUrl }));
        } catch (err: any) {
            console.error('Upload failed:', err);
            alert('Erreur lors de l\'upload : ' + err.message);
        } finally {
            setUploading(false);
        }
    };

    const removeImage = () => {
        setFormData(prev => ({ ...prev, cover_image_url: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const postData = {
                ...formData,
                updated_at: new Date().toISOString()
            };

            let error;
            if (id) {
                const { error: err } = await supabase
                    .from('posts')
                    .update(postData)
                    .eq('id', id);
                error = err;
            } else {
                const { error: err } = await supabase
                    .from('posts')
                    .insert([postData]);
                error = err;
            }

            if (error) throw error;
            navigate('/admin');
        } catch (err: any) {
            alert('Erreur lors de l\'enregistrement : ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between items-center sticky top-0 bg-slate-50 py-4 z-10">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin')}
                        className="text-slate-500 hover:text-slate-800"
                    >
                        <ArrowLeft />
                    </button>
                    <h1 className="text-2xl font-serif font-bold text-slate-900">
                        {id ? 'Modifier l\'article' : 'Nouvel article'}
                    </h1>
                </div>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={formData.published}
                            onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                            className="rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm font-medium text-slate-700">Publié</span>
                    </label>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-primary-700 text-white px-6 py-2 rounded-md hover:bg-primary-800 flex items-center gap-2 disabled:opacity-50"
                    >
                        <Save size={18} />
                        {loading ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Titre</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 outline-none text-lg font-medium"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Contenu</label>
                            {/* Using a simple textarea for now, could be upgraded to Draft.js or Tiptap later */}
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={20}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 outline-none font-mono text-sm"
                                placeholder="Écrivez votre article ici..."
                            />
                            <p className="text-xs text-slate-500 mt-1">Le format HTML est supporté.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <h3 className="font-semibold text-slate-900">SEO & Métadonnées</h3>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Titre SEO (Meta Title)</label>
                            <input
                                type="text"
                                name="seo_title"
                                value={formData.seo_title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description SEO (Meta Description)</label>
                            <textarea
                                name="seo_description"
                                value={formData.seo_description}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">URL Slug</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                                    /blog/
                                </span>
                                <input
                                    type="text"
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleSlugChange}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-r-md focus:ring-2 focus:ring-primary-500 outline-none font-mono text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <h3 className="font-semibold text-slate-900">Image de couverture</h3>

                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                            {formData.cover_image_url ? (
                                <div className="relative group">
                                    <img
                                        src={formData.cover_image_url}
                                        alt="Cover"
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ) : (
                                <div className="py-8">
                                    <ImageIcon className="mx-auto h-12 w-12 text-slate-400" />
                                    <p className="mt-2 text-sm text-slate-500">
                                        Déposez une image ici ou cliquez pour uploader
                                    </p>
                                </div>
                            )}

                            <div className="mt-4">
                                <input
                                    type="file"
                                    id="file-upload"
                                    accept="image/png, image/jpeg, image/jpg"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                    disabled={uploading}
                                />
                                <label
                                    htmlFor="file-upload"
                                    className={`inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-600 hover:bg-slate-700 cursor-pointer ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <Upload size={16} />
                                    {uploading ? 'Conversion...' : 'Uploader une image'}
                                </label>
                                <p className="text-xs text-slate-400 mt-2">
                                    Converti auto. en WebP + Nom SEO friendly
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <h3 className="font-semibold text-slate-900">Organisation</h3>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Langue</label>
                            <select
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
                            >
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Catégorie</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
                            >
                                <option value="">Sélectionner une catégorie</option>
                                <option value="Sanctions internationales">Sanctions internationales</option>
                                <option value="Droit pénal des affaires">Droit pénal des affaires</option>
                                <option value="Investissements internationaux">Investissements internationaux</option>
                                <option value="Compliance">Compliance</option>
                                <option value="Actualités du cabinet">Actualités du cabinet</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Résumé (Excerpt)</label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 outline-none text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
