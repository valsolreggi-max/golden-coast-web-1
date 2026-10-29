import React from 'react';
import { EditorialTerritorySection } from '../components/public/EditorialTerritorySection';
import { BrandGallerySection } from '../components/public/BrandGallerySection';
import { useConsultation } from '../components/ConsultationContext';
import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { SEOHead } from '../components/SEOHead';

export const ZonasPage: React.FC = () => {
  const { openConsultation } = useConsultation();
  const { currentLanguage } = useLanguage();

  const labels = {
    es: {
      eyebrow: 'CONOCIMIENTO LOCAL · SELECCIÓN DE ENTORNO',
      title: '¿Buscas comprar o alquilar en alguna de estas zonas?',
      subtitle: 'Elegir la zona adecuada es tan importante como elegir la vivienda. Te ayudo a encontrar el lugar que encaja con tus tiempos y estilo de vida.',
      exploreBtn: 'Explorar oportunidades',
      contactBtn: 'Contactar con Valeria',
    },
    en: {
      eyebrow: 'LOCAL EXPERTISE · ENVIRONMENT SELECTION',
      title: 'Looking to purchase or lease in any of these areas?',
      subtitle: 'Selecting the right locality is just as crucial as finding the right property. I guide you to the location that best reflects your rhythm of life.',
      exploreBtn: 'Explore opportunities',
      contactBtn: 'Contact Valeria',
    },
    de: {
      eyebrow: 'LOKALE EXPERTISE · STANDORTWAHL',
      title: 'Möchten Sie in einer dieser Regionen kaufen oder mieten?',
      subtitle: 'Die Wahl des passenden Ortes ist ebenso wesentlich wie die Immobilie selbst. Ich helfe Ihnen, den Lebensraum zu finden, der zu Ihnen passt.',
      exploreBtn: 'Möglichkeiten erkunden',
      contactBtn: 'Kontakt zu Valeria aufnehmen',
    },
    fr: {
      eyebrow: 'EXPERTISE LOCALE · CHOIX DE L’ENVIRONNEMENT',
      title: 'Vous souhaitez acheter ou louer dans l’un de ces secteurs ?',
      subtitle: 'Choisir le bon quartier est aussi déterminant que choisir le logement. Je vous guide vers le lieu en harmonie avec votre mode de vie.',
      exploreBtn: 'Explorer les opportunités',
      contactBtn: 'Contacter Valeria',
    },
  }[currentLanguage] || {
    eyebrow: 'CONOCIMIENTO LOCAL · SELECCIÓN DE ENTORNO',
    title: '¿Buscas comprar o alquilar en alguna de estas zonas?',
    subtitle: 'Elegir la zona adecuada es tan importante como elegir la vivienda. Te ayudo a encontrar el lugar que encaja con tus tiempos y estilo de vida.',
    exploreBtn: 'Explorar oportunidades',
    contactBtn: 'Contactar con Valeria',
  };

  return (
    <div className="pt-20 sm:pt-24">
      <SEOHead
        title="Zonas Costa Dorada & Garraf | Sitges, Vilanova, Cubelles, Cunit y Calafell"
        description="Guía inmobiliaria de la Costa Dorada y el Garraf: Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell. Estilo de vida, conectividad y asesoramiento local."
        canonicalPath="/zonas"
      />
      {/* Main Territory Section with Photo, 6 Destinations & Detailed Localities */}
      <EditorialTerritorySection
        onOpenTerritoryModal={(zone) => openConsultation('territory', zone)}
      />

      {/* Visual Territory Gallery */}
      <BrandGallerySection />

      {/* Action / Consultation Section */}
      <section className="py-16 sm:py-20 bg-[#FBF9F3] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase block">
            {labels.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] max-w-2xl mx-auto leading-tight">
            {labels.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A463F] max-w-xl mx-auto font-sans">
            {labels.subtitle}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openConsultation('buyer')}
              className="px-8 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>{labels.exploreBtn}</span>
            </button>
            <Link
              to="/contacto"
              className="px-8 py-3.5 bg-transparent border border-[#8FA777] text-[#8FA777] text-xs font-semibold tracking-wider uppercase hover:bg-[#8FA777] hover:text-[#FBF9F3] transition-colors"
            >
              {labels.contactBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
