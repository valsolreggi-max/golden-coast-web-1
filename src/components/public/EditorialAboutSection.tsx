import React from 'react';
import { BRAND_IMAGES } from '../../data/images';
import { ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';

export const EditorialAboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            SOBRE MÍ · VALERIA
          </span>
        </div>

        {/* 2-Column Symmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Portrait & Details */}
          <div className="lg:col-span-5">
            <div className="border border-[#E8E2D5] p-2.5 sm:p-3.5 bg-[#FBF9F3] shadow-xs">
              <img
                src={BRAND_IMAGES.valeriaPortrait}
                alt="Valeria - Golden Coast Property Advisory"
                className="w-full h-[460px] sm:h-[520px] object-cover object-top"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="mt-3 px-1 flex items-center justify-between text-xs font-sans text-[#24211D]">
                <span className="font-semibold">Valeria</span>
                <span className="text-[#D4AF37] font-medium uppercase tracking-wider text-[11px]">
                  Property Advisory
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              Un asesoramiento que continúa después de cada operación.
            </h2>

            <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
              <p>
                Detrás de Golden Coast está mi forma de entender este trabajo: con rigor, cercanía y una vocación real de acompañar a cada persona en una de las decisiones patrimoniales y personales más importantes de su vida.
              </p>
              <p>
                Mi trayectoria me ha llevado a especializarme como Agente de la Propiedad Inmobiliaria (API), Perito Judicial Inmobiliario y especialista en la Ley de Arrendamientos Urbanos (LAU). Pero más allá de las titulaciones, lo que define mi trabajo es el compromiso con cada cliente: escuchar, analizar con criterio, proteger sus intereses y estar presente cuando más se necesita.
              </p>
              <p>
                Estar bien asesorado no es solo una cuestión de contratos; es la tranquilidad de saber que alguien con conocimiento y empatía cuida de tu proyecto como si fuera propio.
              </p>
            </div>

            {/* 4 Professional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E2D5]">
              <div className="p-4 bg-[#FBF9F3] border border-[#E8E2D5]">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <h4 className="text-base font-serif font-medium text-[#24211D]">Rigor y Seguridad Jurídica</h4>
                </div>
                <p className="text-xs text-[#5C574E] font-sans">
                  Especialista en LAU y peritaje judicial para proteger cada operación.
                </p>
              </div>

              <div className="p-4 bg-[#FBF9F3] border border-[#E8E2D5]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Heart className="w-4 h-4 text-[#D4AF37]" />
                  <h4 className="text-base font-serif font-medium text-[#24211D]">Cercanía y Empatía</h4>
                </div>
                <p className="text-xs text-[#5C574E] font-sans">
                  Atención personalizada y trato directo sin intermediarios.
                </p>
              </div>

              <div className="p-4 bg-[#FBF9F3] border border-[#E8E2D5]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <h4 className="text-base font-serif font-medium text-[#24211D]">Conocimiento Local</h4>
                </div>
                <p className="text-xs text-[#5C574E] font-sans">
                  Dominio profundo de la Costa Dorada y el Garraf.
                </p>
              </div>

              <div className="p-4 bg-[#FBF9F3] border border-[#E8E2D5]">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <h4 className="text-base font-serif font-medium text-[#24211D]">Acompañamiento Continuo</h4>
                </div>
                <p className="text-xs text-[#5C574E] font-sans">
                  La relación y el soporte continúan después de la firma.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
