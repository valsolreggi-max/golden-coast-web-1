import React from 'react';
import { useConsultation } from '../components/ConsultationContext';
import { Quote, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';
import { TESTIMONIALS_I18N } from '../data/testimonialsData';
import { SEOHead } from '../components/SEOHead';

export const TestimoniosPage: React.FC = () => {
  const { openConsultation } = useConsultation();
  const { currentLanguage } = useLanguage();
  const content = TESTIMONIALS_I18N[currentLanguage] || TESTIMONIALS_I18N.es;

  return (
    <div className="pt-24 sm:pt-28 bg-[#FBF9F3]">
      <SEOHead
        title="Testimonios & Casos de Éxito | Golden Coast Property Advisory"
        description="Experiencias reales de compradores, vendedores e inversores nacionales e internacionales acompañados por Valeria Reishi en la Costa Dorada y Garraf."
        canonicalPath="/testimonios"
      />
      {/* 1. ENCABEZADO EDITORIAL DE LA PÁGINA */}
      <div className="bg-[#F5F2EA] border-b border-[#E8E2D5] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.24em] uppercase">
              {content.headerEyebrow}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
            {content.headerTitle}
          </h1>
          <p className="text-xl sm:text-2xl font-serif text-[#5C574E] italic mt-2">
            {content.headerSubtitle}
          </p>

          <div className="mt-8 pt-8 border-t border-[#E8E2D5] space-y-4 text-base sm:text-lg text-[#4A463F] leading-relaxed font-sans font-normal max-w-3xl">
            <p>{content.introP1}</p>
            <p>{content.introP2}</p>
          </div>
        </div>
      </div>

      {/* 2. HISTORIAS REALES */}
      <div className="divide-y divide-[#E8E2D5]">
        {content.stories.map((story, sIdx) => {
          const isAltBg = sIdx % 2 !== 0;
          const outerBg = isAltBg ? 'bg-[#F5F2EA]' : 'bg-[#FBF9F3]';
          const innerBg = isAltBg ? 'bg-[#FBF9F3]' : 'bg-[#F5F2EA]';

          return (
            <section key={story.id} id={story.id} className={`py-16 sm:py-24 ${outerBg}`}>
              <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
                <div className={`${innerBg} border border-[#E8E2D5] p-8 sm:p-12 lg:p-14`}>
                  
                  {/* Case Header */}
                  <div className="border-b border-[#E8E2D5] pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-1">
                        {story.number} · {story.tag}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
                        {story.names}
                      </h2>
                    </div>
                    <span className="text-sm text-[#5C574E] font-sans font-medium">
                      {story.roleLocation}
                    </span>
                  </div>

                  {/* Story Narrative */}
                  <div className="space-y-5 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                    {story.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}

                    {/* Optional Quote */}
                    {story.quote && (
                      <div className="my-8 py-5 px-6 sm:px-8 bg-[#F5F2EA] border-l-2 border-[#D4AF37]">
                        <blockquote className="font-serif text-lg sm:text-xl text-[#24211D] italic leading-snug">
                          {story.quote}
                        </blockquote>
                      </div>
                    )}
                  </div>

                  {/* Original text block (if Diana) */}
                  {story.originalText && (
                    <div className="mt-12 pt-8 border-t border-[#E8E2D5]">
                      <span className="text-xs font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-4">
                        {story.originalTextLabel}
                      </span>
                      <div className="bg-[#F5F2EA] border border-[#E8E2D5] p-6 sm:p-8 space-y-4 text-sm text-[#4A463F] leading-relaxed font-sans">
                        {story.originalText.map((origP, oIdx) => (
                          <p key={oIdx}>{origP}</p>
                        ))}
                        <p className="font-medium text-[#24211D] pt-1">Diana Schepmann</p>
                      </div>
                    </div>
                  )}

                  {/* Associated Reviews */}
                  {story.reviews && story.reviews.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-[#E8E2D5] space-y-6">
                      <span className="text-xs font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block">
                        {content.realReviewsEyebrow}
                      </span>

                      <div className={`grid grid-cols-1 ${story.reviews.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
                        {story.reviews.map((rev, rIdx) => (
                          <div
                            key={rIdx}
                            className="bg-[#FBF9F3] border border-[#E8E2D5] p-6 sm:p-7 flex flex-col justify-between"
                          >
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <Quote className="w-5 h-5 text-[#D4AF37]" />
                                <div className="flex text-[#D4AF37] text-xs tracking-wider" aria-label="5 estrellas">
                                  ★★★★★
                                </div>
                              </div>
                              <p className="text-sm text-[#4A463F] font-sans leading-relaxed italic">
                                {rev.text}
                              </p>
                            </div>

                            <div className="pt-5 mt-6 border-t border-[#E8E2D5] flex items-center justify-between">
                              <div>
                                <h4 className="font-serif text-sm font-semibold text-[#24211D]">
                                  {rev.author}
                                </h4>
                                <span className="text-[11px] text-[#5C574E] font-sans">
                                  {rev.source}
                                </span>
                              </div>
                              <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-[#F5F2EA] border border-[#E8E2D5] text-[#5C574E]">
                                {content.verifiedLabel}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. BLOQUE FINAL DE ASESORAMIENTO */}
      <section className="py-20 bg-[#FBF9F3] border-t border-[#E8E2D5]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.24em] uppercase block">
            {content.bottomEyebrow}
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
            {content.bottomTitle}
          </h3>
          <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal">
            {content.bottomDesc}
          </p>
          <div className="pt-4">
            <button
              onClick={() => openConsultation('general')}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer shadow-xs"
            >
              <span>{content.bottomBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
