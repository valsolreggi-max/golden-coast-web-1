import React from 'react';
import { EditorialHeroSection } from '../components/public/EditorialHeroSection';
import { HomeServicesSummary } from '../components/public/HomeServicesSummary';
import { HomeTerritorySummary } from '../components/public/HomeTerritorySummary';
import { HomeAboutSummary } from '../components/public/HomeAboutSummary';
import { HomeTestimonialFeatured } from '../components/public/HomeTestimonialFeatured';
import { HomeContactCta } from '../components/public/HomeContactCta';
import { useConsultation } from '../components/ConsultationContext';
import { SEOHead } from '../components/SEOHead';

export const HomePage: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <>
      <SEOHead
        title="Golden Coast Property Advisory | Asesoría Inmobiliaria Costa Dorada & Garraf"
        description="Asesoría inmobiliaria boutique en Costa Dorada y Garraf por Valeria Reishi, API colegiada y Perito Judicial Inmobiliario. Acompañamiento honesto e integral en compraventa, inversión y relocation."
        canonicalPath="/"
      />

      {/* 1. Presentación (Hero) */}
      <EditorialHeroSection onOpenConsultation={(type) => openConsultation(type)} />

      {/* 2. Resumen de Servicios (con referencia breve a Relocation y enlace a /servicios) */}
      <HomeServicesSummary />

      {/* 3. Resumen de Zonas (Costa Dorada & Garraf con enlace a /zonas) */}
      <HomeTerritorySummary />

      {/* 4. Resumen de Sobre mí (Valeria, trayectoria y acreditaciones con enlace a /sobre-mi) */}
      <HomeAboutSummary />

      {/* 5. Un testimonio destacado (Diana, Nick & familia con enlace a /testimonios) */}
      <HomeTestimonialFeatured />

      {/* 6. CTA de contacto (enlace a /contacto y consulta directa) */}
      <HomeContactCta />
    </>
  );
};
