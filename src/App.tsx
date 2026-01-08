import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { SEO } from './components/SEO';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SanctionsPage } from './pages/SanctionsPage';
import { BusinessCriminalPage } from './pages/BusinessCriminalPage';
import { InvestmentDisputesPage } from './pages/InvestmentDisputesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { ContactPage } from './pages/ContactPage';
import { CookiesPage } from './pages/CookiesPage';
import { AdminLayout } from './components/AdminLayout';
import { AdminLoginPage } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminEditor } from './pages/admin/Editor';
import { Language } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [language, setLanguage] = useState<Language>('fr');
  const location = useLocation();

  const getSEOContent = () => {
    const path = location.pathname;

    if (language === 'fr') {
      switch (path) {
        case '/':
          return {
            title: 'Avocat Sanctions Internationales & Droit Pénal des Affaires',
            description: 'Cabinet d\'avocat spécialisé en sanctions internationales de l\'UE, droit pénal des affaires et contentieux des investissements. Maître Alexandre Sztulman, Docteur en Droit, Barreau de Paris.'
          };
        case '/about':
          return {
            title: 'À propos',
            description: 'Maître Alexandre Sztulman, Docteur en Droit, avocat au Barreau de Paris. Enseignant à la Sorbonne, expert en sanctions internationales et droit pénal des affaires.'
          };
        case '/expertise/sanctions':
          return {
            title: 'Sanctions Internationales de l\'UE',
            description: 'Expert en contentieux des sanctions européennes. Représentation devant les juridictions de l\'UE, conseil en conformité, gestion de crise.'
          };
        case '/expertise/business-criminal':
          return {
            title: 'Droit Pénal des Affaires',
            description: 'Défense pénale des entreprises et dirigeants. Corruption, fraude, blanchiment, défense devant les juridictions pénales.'
          };
        case '/expertise/investment-disputes':
          return {
            title: 'Droit des investissements internationaux',
            description: 'Conseil et contentieux en droit international des investissements et opérations transfrontalières.'
          };
        case '/blog':
          return {
            title: 'Publications & Actualités',
            description: 'Publications académiques, analyses juridiques et actualités du cabinet. EU Sanctions Litigation (Routledge, 2025).'
          };
        case '/contact':
          return {
            title: 'Contact',
            description: 'Contactez le cabinet. 22 avenue Franklin D. Roosevelt, 75008 Paris. Tél: +33 6 59 41 09 15.'
          };
        case '/cookies':
          return {
            title: 'Politique de Cookies',
            description: 'Informations sur l\'utilisation des cookies sur notre site et comment gérer vos préférences.'
          };
        default:
          return {
            title: 'Avocat Sanctions Internationales',
            description: 'Cabinet d\'avocat spécialisé en sanctions internationales, droit pénal des affaires et contentieux internationaux.'
          };
      }
    } else {
      switch (path) {
        case '/':
          return {
            title: 'Attorney International Sanctions & Business Criminal Law',
            description: 'Law firm specialized in EU international sanctions, business criminal law and investment disputes. Alexandre Sztulman, PhD in Law, Paris Bar.'
          };
        case '/about':
          return {
            title: 'About',
            description: 'Alexandre Sztulman, PhD in Law, attorney at the Paris Bar. Professor at the Sorbonne, expert in international sanctions and business criminal law.'
          };
        case '/expertise/sanctions':
          return {
            title: 'EU International Sanctions',
            description: 'Expert in European sanctions litigation. Representation before EU courts, compliance advice, crisis management.'
          };
        case '/expertise/business-criminal':
          return {
            title: 'Business Criminal Law',
            description: 'Corporate criminal defense. Corruption, fraud, money laundering, defense before criminal courts.'
          };
        case '/expertise/investment-disputes':
          return {
            title: 'International Investment Law',
            description: 'Counsel and litigation in international investment law and cross-border operations.'
          };
        case '/blog':
          return {
            title: 'Publications & News',
            description: 'Academic publications, legal analysis and firm news. EU Sanctions Litigation (Routledge, 2025).'
          };
        case '/contact':
          return {
            title: 'Contact',
            description: 'Contact the firm. 22 avenue Franklin D. Roosevelt, 75008 Paris. Tel: +33 6 59 41 09 15.'
          };
        case '/cookies':
          return {
            title: 'Cookie Policy',
            description: 'Information about cookie usage on our site and how to manage your preferences.'
          };
        default:
          return {
            title: 'Attorney International Sanctions',
            description: 'Law firm specialized in international sanctions, business criminal law and international disputes.'
          };
      }
    }
  };

  const seoContent = getSEOContent();

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <SEO
        title={seoContent.title}
        description={seoContent.description}
        language={language}
        path={location.pathname}
      />

      <div className="min-h-screen bg-white">
        {!location.pathname.startsWith('/admin') && (
          <Header language={language} onLanguageChange={setLanguage} />
        )}
        <Routes>
          <Route path="/" element={<HomePage language={language} onContactClick={handleContactClick} />} />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route path="/expertise/sanctions" element={<SanctionsPage language={language} />} />
          <Route path="/expertise/business-criminal" element={<BusinessCriminalPage language={language} />} />
          <Route path="/expertise/investment-disputes" element={<InvestmentDisputesPage language={language} />} />
          <Route path="/blog" element={<BlogPage language={language} />} />
          <Route path="/blog/:slug" element={<BlogArticlePage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
          <Route path="/cookies" element={<CookiesPage language={language} />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="new" element={<AdminEditor />} />
            <Route path="edit/:id" element={<AdminEditor />} />
          </Route>
        </Routes>
        {!location.pathname.startsWith('/admin') && (
          <Footer language={language} />
        )}
        <CookieBanner language={language} />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
