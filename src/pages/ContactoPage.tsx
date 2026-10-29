import React from 'react';
import { EditorialContactSection } from '../components/public/EditorialContactSection';
import { SEOHead } from '../components/SEOHead';

export const ContactoPage: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="Contacto Directo — Valeria Reishi | Golden Coast Property Advisory"
        description="Póngase en contacto con Valeria Reishi para una consulta confidencial sobre compra, venta o alquiler en Costa Dorada y Garraf. Teléfono, WhatsApp y formulario."
        canonicalPath="/contacto"
      />
      <EditorialContactSection />
    </div>
  );
};
