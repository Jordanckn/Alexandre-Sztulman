import { MapPin, Phone, Mail, Linkedin, Send } from 'lucide-react';
import { Language } from '../types';
import { useState } from 'react';

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const content = {
    fr: {
      title: 'Contact',
      intro: 'N\'hésitez pas à contacter le cabinet pour exposer votre situation ou convenir d\'un rendez-vous. Réponse rapide assurée.',
      formName: 'Nom complet',
      formEmail: 'Email',
      formMessage: 'Votre message',
      formButton: 'Envoyer',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
      hours: 'Horaires',
      hoursText: 'Lundi - Vendredi : 9h00 - 18h00',
      successMessage: 'Merci pour votre message. Nous vous répondrons dans les plus brefs délais.'
    },
    en: {
      title: 'Contact',
      intro: 'Feel free to get in touch to discuss your case or schedule a consultation. Quick response guaranteed.',
      formName: 'Full Name',
      formEmail: 'Email',
      formMessage: 'Your Message',
      formButton: 'Send',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      hoursText: 'Monday - Friday: 9:00 AM - 6:00 PM',
      successMessage: 'Thank you for your message. We will respond as soon as possible.'
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary-900 mb-6">{t.title}</h2>
        <div className="h-1 w-20 bg-primary-700 mb-8"></div>
        <p className="text-slate-600 mb-16 max-w-2xl">{t.intro}</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.formName}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.formEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.formMessage}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-slate-800 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary-700 text-white hover:bg-primary-600 transition-colors rounded-sm font-medium flex items-center justify-center gap-2"
              >
                {t.formButton}
                <Send size={18} />
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-sm text-green-800 text-sm">
                  {t.successMessage}
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
                  <p className="text-slate-600 leading-relaxed">
                    22 avenue Franklin D. Roosevelt<br />
                    75008 Paris<br />
                    France
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-primary-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t.phone}</h3>
                  <a href="tel:+33142963240" className="text-slate-600 hover:text-primary-700 transition-colors">
                    +33 1 42 96 32 40
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-primary-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t.email}</h3>
                  <a href="mailto:contact@sztulman-avocat.com" className="text-slate-600 hover:text-primary-700 transition-colors break-all">
                    contact@sztulman-avocat.com
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
                    href="https://www.linkedin.com/in/alexandre-sztulman"
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

            <div className="bg-slate-100 h-64 rounded-sm flex items-center justify-center text-slate-500">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Paris, 8e arrondissement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
