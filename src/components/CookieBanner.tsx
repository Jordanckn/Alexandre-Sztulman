import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language } from '../types';

interface CookieBannerProps {
  language: Language;
  onClose?: () => void;
}

export function CookieBanner({ language, onClose }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const content = {
    fr: {
      title: 'Ce site utilise des cookies',
      description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. En cliquant sur "Accepter", vous consentez à notre utilisation des cookies.',
      learnMore: 'En savoir plus',
      accept: 'Accepter',
      decline: 'Refuser',
      customize: 'Personnaliser'
    },
    en: {
      title: 'This site uses cookies',
      description: 'We use cookies to improve your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.',
      learnMore: 'Learn more',
      accept: 'Accept',
      decline: 'Decline',
      customize: 'Customize'
    }
  };

  const t = content[language];

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    onClose?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-serif font-semibold text-slate-900 mb-2">
              {t.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.description}{' '}
              <Link
                to="/cookies"
                className="text-primary-700 hover:text-primary-600 underline transition-colors"
              >
                {t.learnMore}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-sm transition-colors"
            >
              {t.decline}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 text-sm font-medium text-white bg-primary-700 hover:bg-primary-600 rounded-sm transition-colors"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
