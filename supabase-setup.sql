-- Créer la table posts
CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    cover_image_url TEXT,
    category TEXT,
    author TEXT DEFAULT 'Alexandre Sztulman',
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Créer un bucket de stockage pour les images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Politiques de sécurité pour la table posts
-- Permettre la lecture publique des articles publiés
CREATE POLICY "Public can read published posts" ON posts
    FOR SELECT
    USING (published = true);

-- Permettre aux utilisateurs authentifiés de tout lire
CREATE POLICY "Authenticated users can read all posts" ON posts
    FOR SELECT
    TO authenticated
    USING (true);

-- Permettre aux utilisateurs authentifiés de créer des articles
CREATE POLICY "Authenticated users can insert posts" ON posts
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Permettre aux utilisateurs authentifiés de modifier des articles
CREATE POLICY "Authenticated users can update posts" ON posts
    FOR UPDATE
    TO authenticated
    USING (true);

-- Permettre aux utilisateurs authentifiés de supprimer des articles
CREATE POLICY "Authenticated users can delete posts" ON posts
    FOR DELETE
    TO authenticated
    USING (true);

-- Activer RLS (Row Level Security)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Politiques de stockage pour les images
-- Permettre la lecture publique des images
CREATE POLICY "Public can read blog images" ON storage.objects
    FOR SELECT
    USING (bucket_id = 'blog-images');

-- Permettre aux utilisateurs authentifiés d'uploader des images
CREATE POLICY "Authenticated users can upload blog images" ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (bucket_id = 'blog-images');

-- Permettre aux utilisateurs authentifiés de supprimer des images
CREATE POLICY "Authenticated users can delete blog images" ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'blog-images');

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger pour mettre à jour updated_at automatiquement
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
