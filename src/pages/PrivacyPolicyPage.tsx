import { Language } from '../types';
import { Link } from 'react-router-dom';

interface PrivacyPolicyPageProps {
    language: Language;
}

export function PrivacyPolicyPage({ language }: PrivacyPolicyPageProps) {
    const content = {
        fr: {
            title: 'Politique de Confidentialité',
            intro: 'Le cabinet de Maître Alexandre Sztulman accorde une grande importance à la protection de vos données personnelles et s\'engage à respecter votre vie privée conformément au RGPD.',
            dataController: 'Responsable du traitement',
            dataControllerDesc: 'Le responsable du traitement des données est Maître Alexandre Sztulman, avocat au Barreau de Paris, dont le cabinet est situé au 22 avenue Franklin D. Roosevelt, 75008 Paris.',
            dataCollected: 'Données collectées',
            dataCollectedDesc: 'Nous collectons les données que vous nous fournissez via le formulaire de contact (nom, email, message) ainsi que les données de navigation anonymisées via des cookies.',
            purposes: 'Finalités du traitement',
            purposesDesc: 'Vos données sont collectées pour répondre à vos demandes de contact, gérer nos relations professionnelles et améliorer l\'expérience utilisateur sur notre site.',
            retention: 'Durée de conservation',
            retentionDesc: 'Les données collectées via le formulaire de contact sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées conformément aux règles déontologiques de la profession d\'avocat.',
            rights: 'Vos droits',
            rightsDesc: 'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, de suppression et d\'opposition au traitement de vos données. Vous pouvez exercer ces droits en nous contactant par email.',
            cookies: 'Cookies',
            cookiesDesc: 'Notre site utilise des cookies pour améliorer votre navigation. Pour plus de détails, consultez notre ',
            cookiesLink: 'Politique de Cookies',
            lastUpdate: 'Dernière mise à jour : Janvier 2024'
        },
        en: {
            title: 'Privacy Policy',
            intro: 'The law firm of Maître Alexandre Sztulman attaches great importance to the protection of your personal data and is committed to respecting your privacy in accordance with the GDPR.',
            dataController: 'Data Controller',
            dataControllerDesc: 'The data controller is Maître Alexandre Sztulman, attorney at the Paris Bar, whose office is located at 22 avenue Franklin D. Roosevelt, 75008 Paris.',
            dataCollected: 'Data Collected',
            dataCollectedDesc: 'We collect data that you provide via the contact form (name, email, message) as well as anonymized browsing data via cookies.',
            purposes: 'Purposes of Processing',
            purposesDesc: 'Your data is collected to respond to your contact requests, manage our professional relationships, and improve the user experience on our site.',
            retention: 'Retention Period',
            retentionDesc: 'Data collected via the contact form is kept for the time necessary to process your request, and then archived in accordance with the ethical rules of the legal profession.',
            rights: 'Your Rights',
            rightsDesc: 'In accordance with the GDPR, you have the right to access, rectify, delete, and object to the processing of your data. You can exercise these rights by contacting us by email.',
            cookies: 'Cookies',
            cookiesDesc: 'Our site uses cookies to improve your browsing experience. For more details, see our ',
            cookiesLink: 'Cookie Policy',
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
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {t.intro}
                    </p>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.dataController}
                        </h2>
                        <p className="text-slate-600">
                            {t.dataControllerDesc}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.dataCollected}
                        </h2>
                        <p className="text-slate-600">
                            {t.dataCollectedDesc}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.purposes}
                        </h2>
                        <p className="text-slate-600">
                            {t.purposesDesc}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.retention}
                        </h2>
                        <p className="text-slate-600">
                            {t.retentionDesc}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.rights}
                        </h2>
                        <p className="text-slate-600">
                            {t.rightsDesc}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                            {t.cookies}
                        </h2>
                        <p className="text-slate-600">
                            {t.cookiesDesc}
                            <Link to="/cookies" className="text-primary-700 hover:text-primary-600 font-medium underline">
                                {t.cookiesLink}
                            </Link>.
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
