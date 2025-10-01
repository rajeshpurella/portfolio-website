import { useEffect } from 'react';
import { personalInfo } from '../data/portfolio';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

export const SEO = ({ 
  title = `${personalInfo.name} - ${personalInfo.role}`,
  description = personalInfo.tagline,
  url = window.location.href 
}: SEOProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Remove existing meta tags
    const existingMeta = document.querySelectorAll('meta[data-react-helmet]');
    existingMeta.forEach(tag => tag.remove());

    // Create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: 'Full Stack Developer, React, Node.js, Python, Web Development, Portfolio' },
      { name: 'author', content: personalInfo.name },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.name = name;
      if (property) meta.setAttribute('property', property);
      meta.content = content;
      meta.setAttribute('data-react-helmet', 'true');
      document.head.appendChild(meta);
    });

    // Structured Data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personalInfo.name,
      jobTitle: personalInfo.role,
      description: personalInfo.bio,
      image: '/image.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'India'
      },
      email: personalInfo.email,
      telephone: personalInfo.phone,
      url: url,
      sameAs: [
        'https://www.linkedin.com/in/rajesh-purella/',
        'https://github.com/rajeshpurella'
      ],
      knowsAbout: [
        'Full Stack Development',
        'React.js',
        'Node.js',
        'Python',
        'MongoDB',
        'Machine Learning',
        'Web Development'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    script.setAttribute('data-react-helmet', 'true');
    document.head.appendChild(script);

  }, [title, description, url]);

  return null;
};