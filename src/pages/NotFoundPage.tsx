import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Compass, ArrowRight, Home, Phone } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 — Página no encontrada | Golden Coast Property Advisory"
        description="La página que busca no existe o ha sido trasladada. Regrese al inicio o explore nuestra asesoría inmobiliaria en Costa Dorada y Garraf."
        canonicalPath="/404"
        noindex={true}
      />

      <section className="min-h-[75vh] flex items-center justify-center bg-[#F5F2EA] py-24 px-6 sm:px-10 border-b border-[#E8E2D5]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EFECE3] border border-[#E8E2D5] text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.22em] mb-6">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Error 404 · Dirección no encontrada</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-tight tracking-tight mb-6">
            Esta propiedad en la web no está disponible
          </h1>

          {/* Explanation */}
          <p className="text-base sm:text-lg text-[#5A554E] font-sans font-light leading-relaxed max-w-xl mx-auto mb-10">
            La dirección que ha introducido no existe o ha cambiado de lugar.
            Le invitamos a regresar a la página principal o consultar directamente
            nuestras secciones y vías de contacto.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#24211D] text-[#F5F2EA] font-sans text-sm font-medium tracking-wide hover:bg-[#38342E] transition-colors duration-200"
            >
              <Home className="w-4 h-4 text-[#D4AF37]" />
              <span>Volver al Inicio</span>
            </Link>

            <Link
              to="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#FAF8F5] border border-[#24211D]/20 text-[#24211D] font-sans text-sm font-medium tracking-wide hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Contactar con Valeria</span>
            </Link>
          </div>

          {/* Quick links */}
          <div className="pt-8 border-t border-[#E8E2D5]/80 text-xs font-sans text-[#7A746B]">
            <span className="uppercase tracking-[0.18em] block mb-3 text-[#24211D]/60 font-semibold">
              Rutas directas
            </span>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/servicios" className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">
                Servicios & Asesoría
              </Link>
              <span className="text-[#D4AF37]">·</span>
              <Link to="/zonas" className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">
                Costa Dorada & Garraf
              </Link>
              <span className="text-[#D4AF37]">·</span>
              <Link to="/sobre-mi" className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">
                Sobre mí (Valeria Reishi)
              </Link>
              <span className="text-[#D4AF37]">·</span>
              <Link to="/faq" className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">
                Preguntas Frecuentes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
