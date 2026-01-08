import { Language } from '../types';

interface LegalNoticePageProps {
    language: Language;
}

export function LegalNoticePage({ language }: LegalNoticePageProps) {
    const content = {
        fr: {
            title: 'Mentions Légales',
            publisher: 'Éditeur du site',
            publisherDesc1: 'Maître Alexandre Sztulman',
            publisherDesc2: 'Avocat au Barreau de Paris',
            publisherDesc3: 'SIRET : [À COMPLÉTER]',
            address: 'Adresse : 22 avenue Franklin D. Roosevelt, 75008 Paris',
            phone: 'Téléphone : +33 6 59 41 09 15',
            email: 'Email : asztulman@moliere-avocats.fr',
            host: 'Hébergeur',
            hostDesc: 'Le site est hébergé par Netlify, Inc., situé au 2325 3rd Street, Suite 215, San Francisco, California 94107, États-Unis.',
            intellectual: 'Propriété intellectuelle',
            intellectualDesc: 'L\'ensemble de ce site relève de la législation française et internationale sur le droit d\'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.',
            responsibility: 'Responsabilité',
            responsibilityDesc: 'L\'éditeur du site met tout en œuvre pour assurer l\'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut en garantir l\'exhaustivité ou l\'absence de modification par un tiers.',
            lastUpdate: 'Dernière mise à jour : Janvier 2024'
        },
        en: {
            title: 'Legal Notice',
            publisher: 'Site Publisher',
            publisherDesc1: 'Maître Alexandre Sztulman',
            publisherDesc2: 'Attorney-at-Law, Paris Bar',
            publisherDesc3: 'SIRET: [TO BE COMPLETED]',
            address: 'Address: 22 avenue Franklin D. Roosevelt, 75008 Paris',
            phone: 'Phone: +33 6 59 41 09 15',
            email: 'Email: asztulman@moliere-avocats.fr',
            host: 'Host',
            hostDesc: 'The site is hosted by Netlify, Inc., located at 2325 3rd Street, Suite 215, San Francisco, California 94107, USA.',
            intellectual: 'Intellectual Property',
            intellectualDesc: 'The entire site is subject to French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.',
            responsibility: 'Responsibility',
            responsibilityDesc: 'The site publisher makes every effort to ensure the accuracy and updating of the information disseminated on this site, but cannot guarantee its completeness or the absence of modification by a third party.',
            lastUpdate: 'Last updated: January 2024'
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen pt-32 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
                    {t.title}
                </h1>

                <div className="prose prose-slate max-w-none space-y-12">
                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.publisher}
                        </h2>
                        <div className="text-slate-600 space-y-1">
                            <p className="font-medium">{t.publisherDesc1}</p>
                            <p>{t.publisherDesc2}</p>
                            <p>{t.publisherDesc3}</p>
                            <p>{t.address}</p>
                            <p>{t.phone}</p>
                            <p>{t.email}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.host}
                        </h2>
                        <p className="text-slate-600">
                            {t.hostDesc}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.intellectual}
                        </h2>
                        <p className="text-slate-600">
                            {t.intellectualDesc}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.responsibility}
                        </h2>
                        <p className="text-slate-600">
                            {t.responsibilityDesc}
                        </p>
                    </section>

                    <p className="text-sm text-slate-500 italic pt-8 border-t border-slate-100">
                        {t.lastUpdate}
                    </p>
                </div>
            </div>
        </div>
    );
}
