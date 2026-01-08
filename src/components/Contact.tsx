import { MapPin, Phone, Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  language: Language;
}



export function Contact({ language }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const content = {
    fr: {
      title: 'Contact',
      intro: 'N\'hésitez pas à contacter le cabinet pour exposer votre situation ou convenir d\'un rendez-vous. Réponse rapide assurée.',
      formName: 'Nom complet',
      formEmail: 'Email',
      formMessage: 'Votre message',
      formButton: 'Envoyer le message',
      formButtonSending: 'Envoi en cours...',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
      hours: 'Horaires',
      hoursText: 'Lundi - Vendredi : 9h00 - 18h00',
      successTitle: 'Message envoyé avec succès !',
      successMessage: 'Merci pour votre message. Maître Sztulman vous répondra dans les plus brefs délais.',
      errorTitle: 'Erreur d\'envoi',
      errorMessage: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement par email.'
    },
    en: {
      title: 'Contact',
      intro: 'Feel free to get in touch to discuss your case or schedule a consultation. Quick response guaranteed.',
      formName: 'Full Name',
      formEmail: 'Email',
      formMessage: 'Your Message',
      formButton: 'Send Message',
      formButtonSending: 'Sending...',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      hoursText: 'Monday - Friday: 9:00 AM - 6:00 PM',
      successTitle: 'Message sent successfully!',
      successMessage: 'Thank you for your message. Me Sztulman will respond to you as soon as possible.',
      errorTitle: 'Sending error',
      errorMessage: 'An error occurred while sending the message. Please try again or contact us directly by email.'
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    // Vérifier que les variables d'environnement sont définies
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing. Please check your .env.local file.');
      setStatus('error');
      setErrorMessage('Configuration error. Please contact the administrator.');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      setStatus('success');

      // Réinitialiser le formulaire après 5 secondes
      setTimeout(() => {
        setFormData({ from_name: '', from_email: '', message: '' });
        setStatus('idle');
      }, 5000);
    } catch (error: any) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage(error.text || 'Unknown error occurred');

      // Réinitialiser le status après 7 secondes pour permettre un nouvel essai
      setTimeout(() => {
        setStatus('idle');
      }, 7000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-primary-700 mb-8"></div>
        <p className="text-slate-600 mb-16 max-w-2xl">{t.intro}</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.formName}
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  value={formData.from_name}
                  onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  value={formData.from_email}
                  onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none transition-all resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full px-8 py-3 bg-primary-700 text-white hover:bg-primary-600 transition-colors rounded-sm font-medium flex items-center justify-center gap-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? t.formButtonSending : t.formButton}
                <Send size={18} className={status === 'sending' ? 'animate-pulse' : ''} />
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">{t.successTitle}</h4>
                    <p className="text-sm text-green-700">{t.successMessage}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3 animate-fade-in">
                  <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-1">{t.errorTitle}</h4>
                    <p className="text-sm text-red-700">{t.errorMessage}</p>
                    {errorMessage && (
                      <p className="text-xs text-red-600 mt-2">Détails: {errorMessage}</p>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-sm shadow-sm space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="text-primary-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t.address}</h3>
                  <a
                    href="https://www.google.com/maps/place/22+Av.+Franklin+Delano+Roosevelt,+75008+Paris/@48.8719455,2.3077161,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fc5df4a15f3:0x250c4ac77930306!8m2!3d48.8719455!4d2.310291!16s%2Fg%2F11nnkqyd14?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-primary-700 transition-colors leading-relaxed block"
                  >
                    22 avenue Franklin D. Roosevelt<br />
                    75008 Paris<br />
                    France
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-primary-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t.phone}</h3>
                  <a href="tel:+33659410915" className="text-slate-600 hover:text-primary-700 transition-colors">
                    +33 6 59 41 09 15
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-primary-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t.email}</h3>
                  <a href="mailto:asztulman@moliere-avocats.fr" className="text-slate-600 hover:text-primary-700 transition-colors break-all">
                    asztulman@moliere-avocats.fr
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Linkedin className="text-primary-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/asztulman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-primary-700 transition-colors"
                  >
                    Alexandre Sztulman
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{t.hours}</h3>
                <p className="text-slate-600">{t.hoursText}</p>
              </div>
            </div>

            <div className="bg-slate-100 h-64 rounded-sm overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.238612198083!2d2.3077161!3d48.8719455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc5df4a15f3%3A0x250c4ac77930306!2s22%20Av.%20Franklin%20Delano%20Roosevelt%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1736362800000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du cabinet - 22 avenue Franklin D. Roosevelt, 75008 Paris"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
