import { Helmet } from 'react-helmet-async';
import { Language } from '../types';

interface SEOProps {
  title: string;
  description: string;
  language: Language;
  path?: string;
  type?: string;
  image?: string;
}

export function SEO({
  title,
  description,
  language,
  path = '',
  type = 'website',
  image = 'https://sztulman-avocat.com/og-image.jpg'
}: SEOProps) {
  const siteName = language === 'fr'
    ? 'Maître Alexandre Sztulman - Avocat'
    : 'Alexandre Sztulman - Attorney at Law';

  const fullTitle = title.includes(siteName) || title.length > 50
    ? title
    : `${title} | ${siteName}`;
  const siteUrl = 'https://sztulman-avocat.com';
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@AlexSztulman" />

      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          "name": "Alexandre Sztulman",
          "alternateName": "Maître Alexandre Sztulman",
          "url": siteUrl,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "22 avenue Franklin D. Roosevelt",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          },
          "telephone": "+33659410915",
          "email": "asztulman@moliere-avocats.fr",
          "sameAs": [
            "https://www.linkedin.com/in/asztulman/"
          ],
          "knowsAbout": [
            "EU International Sanctions",
            "Business Criminal Law",
            "International Investment Disputes",
            "Compliance",
            "Anti-Money Laundering"
          ],
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Université Paris 1 Panthéon-Sorbonne"
            },
            {
              "@type": "EducationalOrganization",
              "name": "University of Luxembourg"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
