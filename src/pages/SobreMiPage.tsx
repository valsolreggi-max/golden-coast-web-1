import React from 'react';
import { BRAND_IMAGES } from '../data/images';
import { useConsultation } from '../components/ConsultationContext';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';
import { SEOHead } from '../components/SEOHead';

export const SobreMiPage: React.FC = () => {
  const { openConsultation } = useConsultation();
  const { messages } = useLanguage();
  const { aboutMePage, footer } = messages;

  // Part 1 (First 6 paragraphs)
  const part1Paragraphs = aboutMePage.paragraphs.slice(0, 6);
  // Part 2 (Remaining paragraphs)
  const part2Paragraphs = aboutMePage.paragraphs.slice(6);

  return (
    <div className="pt-24 sm:pt-28 bg-[#FBF9F3] min-h-screen text-[#24211D]">
      <SEOHead
        title="Sobre Mí — Valeria Reishi | Agente de la Propiedad Inmobiliaria (API)"
        description="Conozca la trayectoria de Valeria Reishi: perito judicial inmobiliario, API colegiada y especialista en LAU con más de 7 años acompañando a familias e inversores en la Costa Dorada y Garraf."
        canonicalPath="/sobre-mi"
        type="profile"
      />
      
      {/* Encabezado Editorial */}
      <header className="border-b border-[#E8E2D5] bg-[#F5F2EA]/80 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
              {aboutMePage.eyebrow}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-[1.12] tracking-tight">
            {aboutMePage.title}
          </h1>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
        
        {/* BLOQUE 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Columna Izquierda */}
          <div className="lg:col-span-6 w-full">
            <div className="border border-[#E8E2D5] p-2.5 sm:p-3.5 bg-[#F5F2EA] shadow-xs">
              <img
                src={BRAND_IMAGES.valeriaPortrait}
                alt="Valeria - Golden Coast Property Advisory"
                className="w-full h-auto max-h-[540px] object-cover object-top block"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="mt-3 pt-2.5 border-t border-[#E8E2D5] px-1 flex items-center justify-between text-xs font-sans text-[#24211D]">
                <span className="font-serif font-semibold tracking-wide">Valeria</span>
                <span className="text-[#D4AF37] font-medium uppercase tracking-wider text-[11px]">
                  Property Advisory
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-tight pb-2">
              {aboutMePage.block1Title}
            </h2>
            <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
              {part1Paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

        </section>

        {/* BLOQUE 2: INSIGNIAS */}
        <section className="my-14 sm:my-16 pt-8 pb-8 border-y border-[#E8E2D5]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            
            {/* Insignia 1: API */}
            <div className="bg-[#F5F2EA] border border-[#D4AF37]/45 p-5 sm:p-6 flex items-center gap-4 shadow-xs transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#F2EFE5]">
              <div className="p-2.5 bg-[#D4AF37]/12 text-[#D4AF37] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg text-[#24211D] font-medium tracking-wide">
                  API
                </h3>
                <p className="text-xs text-[#5C574E] mt-0.5 font-sans leading-snug">
                  {footer.cred1}
                </p>
              </div>
            </div>

            {/* Insignia 2: Perito Judicial */}
            <div className="bg-[#F5F2EA] border border-[#D4AF37]/45 p-5 sm:p-6 flex items-center gap-4 shadow-xs transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#F2EFE5]">
              <div className="p-2.5 bg-[#D4AF37]/12 text-[#D4AF37] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg text-[#24211D] font-medium tracking-wide">
                  {footer.cred2}
                </h3>
                <p className="text-xs text-[#5C574E] mt-0.5 font-sans leading-snug">
                  Inmobiliario
                </p>
              </div>
            </div>

            {/* Insignia 3: Especialista */}
            <div className="bg-[#F5F2EA] border border-[#D4AF37]/45 p-5 sm:p-6 flex items-center gap-4 shadow-xs transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#F2EFE5]">
              <div className="p-2.5 bg-[#D4AF37]/12 text-[#D4AF37] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg text-[#24211D] font-medium tracking-wide">
                  Especialista
                </h3>
                <p className="text-xs text-[#5C574E] mt-0.5 font-sans leading-snug">
                  {footer.cred3}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* BLOQUE 3 */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-tight pb-2">
            {aboutMePage.block2Title}
          </h2>

          <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
            {part2Paragraphs.map((p, idx) => {
              const isAnecdote = idx === 3;
              return (
                <p
                  key={idx}
                  className={
                    isAnecdote
                      ? 'p-6 sm:p-7 bg-[#F5F2EA] border-l-2 border-[#D4AF37] italic font-serif text-lg text-[#24211D] my-6 leading-relaxed'
                      : ''
                  }
                >
                  {p}
                </p>
              );
            })}
          </div>

          {/* Bloque CTA Final */}
          <div className="mt-14 p-8 sm:p-10 bg-[#F5F2EA] border border-[#E8E2D5] text-center space-y-4 max-w-xl mx-auto">
            <h3 className="text-2xl font-serif text-[#24211D]">
              {aboutMePage.ctaTitle}
            </h3>
            <p className="text-sm text-[#4A463F] font-sans">
              {aboutMePage.ctaSubtitle}
            </p>
            <div className="pt-3">
              <button
                onClick={() => openConsultation('general')}
                className="px-8 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
              >
                <span>{aboutMePage.ctaButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
};
