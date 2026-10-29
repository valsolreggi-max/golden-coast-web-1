import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useConsultation } from '../components/ConsultationContext';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { SERVICES_I18N } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';

export const ServiciosPage: React.FC = () => {
  const { openConsultation } = useConsultation();
  const { currentLanguage } = useLanguage();
  const content = SERVICES_I18N[currentLanguage] || SERVICES_I18N.es;

  return (
    <div className="pt-24 sm:pt-28 bg-[#F5F2EA]">
      <SEOHead
        title="Servicios de Asesoría Inmobiliaria | Propietarios, Compradores y Relocation"
        description="Servicios inmobiliarios de alto nivel en Costa Dorada y Garraf: acompañamiento a propietarios, compradores e inversores con asesoría legal y técnica por API colegiada."
        canonicalPath="/servicios"
      />
      {/* Editorial Page Header */}
      <div className="bg-[#F5F2EA] border-b border-[#E8E2D5] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
              {content.headerEyebrow}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight max-w-4xl">
            {content.headerTitle}
          </h1>
        </div>
      </div>

      {/* BLOQUE 1: PROPIETARIOS */}
      <section className="py-16 sm:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-12 sm:mb-16">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase block mb-3">
              {content.ownerSectionEyebrow}
            </span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {content.ownerServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] shadow-xs"
              >
                {/* Number & Service Title */}
                <div className="mb-4">
                  <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
                    {service.number}. {service.title}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug tracking-tight mb-5">
                  {service.headline}
                </h2>

                {/* Introductory Narrative */}
                <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal max-w-3xl mb-8">
                  {service.intro}
                </p>

                {/* ¿Cómo puedo ayudarte? */}
                <div className="border-t border-[#E8E2D5] pt-6 mb-8">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
                    {content.howCanIHelp}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.steps.map((item) => (
                      <div
                        key={item.step}
                        className="p-5 bg-[#F5F2EA] border border-[#E8E2D5]/80 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-sans font-semibold text-[#8FA777] tracking-wider block mb-2">
                            {item.step} · {item.title}
                          </span>
                          <p className="text-xs sm:text-sm text-[#4A463F] leading-relaxed font-sans font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#E8E2D5]">
                  <p className="text-sm text-[#5C574E] font-serif italic max-w-xl">
                    {service.closing}
                  </p>
                  <button
                    onClick={() => openConsultation(service.consultationType)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs whitespace-nowrap"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 2: COMPRADORES */}
      <section className="py-16 sm:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-12 sm:mb-16">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase block mb-3">
              {content.buyerSectionEyebrow}
            </span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {content.buyerServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] shadow-xs"
              >
                {/* Number & Service Title */}
                <div className="mb-4">
                  <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
                    {service.number}. {service.title}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug tracking-tight mb-5">
                  {service.headline}
                </h2>

                {/* Introductory Narrative */}
                <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal max-w-3xl mb-8">
                  {service.intro}
                </p>

                {/* ¿Cómo puedo ayudarte? */}
                <div className="border-t border-[#E8E2D5] pt-6 mb-8">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
                    {content.howCanIHelp}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.steps.map((item) => (
                      <div
                        key={item.step}
                        className="p-5 bg-[#F5F2EA] border border-[#E8E2D5]/80 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-sans font-semibold text-[#8FA777] tracking-wider block mb-2">
                            {item.step} · {item.title}
                          </span>
                          <p className="text-xs sm:text-sm text-[#4A463F] leading-relaxed font-sans font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 pt-6 border-t border-[#E8E2D5]">
                  <button
                    onClick={() => openConsultation(service.consultationType)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs whitespace-nowrap"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-16 sm:py-20 bg-[#FBF9F3] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase block">
            {content.bottomEyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] max-w-2xl mx-auto leading-tight">
            {content.bottomTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#4A463F] max-w-xl mx-auto font-sans">
            {content.bottomSubtitle}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openConsultation('owner')}
              className="px-8 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer shadow-xs"
            >
              {content.bottomBtnConsult}
            </button>
            <Link
              to="/contacto"
              className="px-8 py-3.5 bg-transparent border border-[#8FA777] text-[#8FA777] text-xs font-semibold tracking-wider uppercase hover:bg-[#8FA777] hover:text-[#FBF9F3] transition-colors"
            >
              {content.bottomBtnContact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
