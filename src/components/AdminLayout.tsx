
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LayoutDashboard, PenSquare, LogOut, Home } from 'lucide-react';

export function AdminLayout() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                navigate('/admin/login');
            }
            setLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                navigate('/admin/login');
            }
        });

        return () => subscription.unsubscribe();
    }, [navigate]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Chargement...</div>;
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:block">
                <div className="p-6">
                    <h1 className="text-xl font-serif font-bold">Administration Blog</h1>
                    <p className="text-xs text-slate-400 mt-1">Gérer vos publications</p>
                </div>
                <nav className="mt-6 px-4 space-y-2">
                    <Link
                        to="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        <LayoutDashboard size={20} />
                        Tableau de bord
                    </Link>
                    <Link
                        to="/admin/new"
                        className="flex items-center gap-3 px-4 py-3 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        <PenSquare size={20} />
                        Nouvel article
                    </Link>
                    <Link
                        to="/blog"
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-3 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        <Home size={20} />
                        Voir le blog
                    </Link>
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-red-300 hover:bg-red-900/20 hover:text-red-200 transition-colors mt-8"
                    >
                        <LogOut size={20} />
                        Déconnexion
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center">
                    <span className="font-serif font-bold">Administration Blog</span>
                    <button onClick={handleSignOut}><LogOut size={20} /></button>
                </div>
                <div className="p-8 max-w-5xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
