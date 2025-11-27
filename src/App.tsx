import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SanctionsPage } from './pages/SanctionsPage';
import { BusinessCriminalPage } from './pages/BusinessCriminalPage';
import { InvestmentDisputesPage } from './pages/InvestmentDisputesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
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
      switch(path) {
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
            title: 'Droit Pénal des Affaires & Compliance',
            description: 'Défense pénale des entreprises et dirigeants. Corruption, fraude, blanchiment, programmes de conformité.'
          };
        case '/expertise/investment-disputes':
          return {
            title: 'Contentieux International des Investissements',
            description: 'Arbitrage investisseur-État, protection des investissements transfrontaliers. Expertise CIRDI et CNUDCI.'
          };
        case '/blog':
          return {
            title: 'Publications & Actualités',
            description: 'Publications académiques, analyses juridiques et actualités du cabinet. EU Sanctions Litigation (Routledge, 2025).'
          };
        case '/contact':
          return {
            title: 'Contact',
            description: 'Contactez le cabinet. 22 avenue Franklin D. Roosevelt, 75008 Paris. Tél: +33 1 42 96 32 40.'
          };
        default:
          return {
            title: 'Avocat Sanctions Internationales',
            description: 'Cabinet d\'avocat spécialisé en sanctions internationales, droit pénal des affaires et contentieux internationaux.'
          };
      }
    } else {
      switch(path) {
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
            title: 'Business Criminal Law & Compliance',
            description: 'Corporate criminal defense. Corruption, fraud, money laundering, compliance programs.'
          };
        case '/expertise/investment-disputes':
          return {
            title: 'International Investment Disputes',
            description: 'Investor-State arbitration, cross-border investment protection. ICSID and UNCITRAL expertise.'
          };
        case '/blog':
          return {
            title: 'Publications & News',
            description: 'Academic publications, legal analysis and firm news. EU Sanctions Litigation (Routledge, 2025).'
          };
        case '/contact':
          return {
            title: 'Contact',
            description: 'Contact the firm. 22 avenue Franklin D. Roosevelt, 75008 Paris. Tel: +33 1 42 96 32 40.'
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
        <Header language={language} onLanguageChange={setLanguage} />
        <Routes>
          <Route path="/" element={<HomePage language={language} onContactClick={handleContactClick} />} />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route path="/expertise/sanctions" element={<SanctionsPage language={language} />} />
          <Route path="/expertise/business-criminal" element={<BusinessCriminalPage language={language} />} />
          <Route path="/expertise/investment-disputes" element={<InvestmentDisputesPage language={language} />} />
          <Route path="/blog" element={<BlogPage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
        </Routes>
        <Footer language={language} />
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
