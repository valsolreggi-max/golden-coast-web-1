import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useConsultation } from '../components/ConsultationContext';
import { useLanguage } from '../i18n';
import { FAQ_I18N } from '../data/faqData';
import { SEOHead } from '../components/SEOHead';

export const FAQPage: React.FC = () => {
  const { openConsultation } = useConsultation();
  const { currentLanguage } = useLanguage();
  const content = FAQ_I18N[currentLanguage] || FAQ_I18N.es;

  // Track opened accordion items
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const openAll = () => {
    const allIds = new Set<number>();
    content.blocks.forEach((b) => b.items.forEach((item) => allIds.add(item.id)));
    setOpenItems(allIds);
  };

  const closeAll = () => {
    setOpenItems(new Set());
  };

  const scrollToBlock = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#FBF9F3]">
      <SEOHead
        title="Preguntas Frecuentes Inmobiliarias | Golden Coast Property Advisory"
        description="Respuestas claras a dudas frecuentes sobre honorarios, proceso de compraventa, documentación, LAU y acompañamiento en Costa Dorada y Garraf."
        canonicalPath="/faq"
      />
      {/* 1. Encabezado General */}
      <div className="bg-[#F5F2EA] border-b border-[#E8E2D5] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.24em] uppercase">
              {content.headerEyebrow}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-tight mb-4">
            {content.headerTitle}
          </h1>
          <p className="text-base sm:text-lg text-[#4A463F] font-sans max-w-2xl mx-auto leading-relaxed">
            {content.headerSubtitle}
          </p>

          {/* Botones de salto a bloques y controles */}
          <div className="mt-8 pt-8 border-t border-[#E8E2D5] flex flex-wrap items-center justify-center gap-3 text-xs font-sans">
            {content.blocks.map((block, idx) => (
              <a
                key={block.blockNumber}
                href={`#bloque-${idx + 1}`}
                onClick={(e) => scrollToBlock(e, `bloque-${idx + 1}`)}
                className="px-4 py-2 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] text-[#24211D] uppercase tracking-wider transition-colors"
              >
                {block.buttonLabel}
              </a>
            ))}
            <div className="w-full sm:w-auto flex items-center justify-center gap-2 mt-2 sm:mt-0">
              <button
                type="button"
                onClick={openAll}
                className="px-3 py-1.5 text-[11px] font-sans text-[#5C574E] hover:text-[#8FA777] uppercase tracking-wider underline cursor-pointer"
              >
                {content.expandAll}
              </button>
              <span className="text-[#E8E2D5]">|</span>
              <button
                type="button"
                onClick={closeAll}
                className="px-3 py-1.5 text-[11px] font-sans text-[#5C574E] hover:text-[#8FA777] uppercase tracking-wider underline cursor-pointer"
              >
                {content.collapseAll}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BLOQUES DE PREGUNTAS */}
      {content.blocks.map((block, bIdx) => {
        const isAlt = bIdx % 2 !== 0;
        const sectionBg = isAlt ? 'bg-[#F5F2EA]' : 'bg-[#FBF9F3]';
        const cardBg = isAlt ? 'bg-[#FBF9F3]' : 'bg-[#F5F2EA]';

        return (
          <section
            key={block.blockNumber}
            id={`bloque-${bIdx + 1}`}
            className={`py-16 sm:py-24 ${sectionBg} border-b border-[#E8E2D5]`}
          >
            <div className="max-w-4xl mx-auto px-6 sm:px-10">
              {/* Cabecera del Bloque */}
              <div className="mb-10 pb-6 border-b border-[#E8E2D5]">
                <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-2">
                  {block.blockNumber}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug">
                  {block.blockTitle}
                </h2>
              </div>

              <div className="space-y-4">
                {block.items.map((item) => (
                  <div key={item.id} className={`${cardBg} border border-[#E8E2D5]`}>
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                      aria-expanded={openItems.has(item.id)}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                          {String(item.id).padStart(2, '0')}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                          {item.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                          openItems.has(item.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openItems.has(item.id) && (
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                        <p className="font-medium text-[#24211D]">{content.answerLabel}</p>

                        {item.calloutTop && (
                          <p className="p-4 bg-[#FBF9F3] border-l-2 border-[#D4AF37] border-y border-r border-[#E8E2D5] text-[#24211D] font-medium">
                            {item.calloutTop}
                          </p>
                        )}

                        {item.answerIntroduction && <p>{item.answerIntroduction}</p>}

                        {item.callout1 && (
                          <div
                            className="p-5 sm:p-6 bg-[#FBF9F3] border-y border-r border-[#E8E2D5] space-y-3"
                            style={{ borderLeftWidth: 2, borderLeftColor: item.callout1.borderCol }}
                          >
                            <p className="font-serif text-[#24211D] font-semibold text-base sm:text-lg leading-snug">
                              {item.callout1.title}
                            </p>
                            <p>{item.callout1.text}</p>
                          </div>
                        )}

                        {item.callout2 && (
                          <div
                            className="p-5 sm:p-6 bg-[#FBF9F3] border-y border-r border-[#E8E2D5] space-y-3"
                            style={{ borderLeftWidth: 2, borderLeftColor: item.callout2.borderCol }}
                          >
                            <p className="font-serif text-[#24211D] font-semibold text-base sm:text-lg leading-snug">
                              {item.callout2.title}
                            </p>
                            <p>{item.callout2.text}</p>
                          </div>
                        )}

                        {item.bulletPoints && item.bulletPoints.length > 0 && (
                          <div className="space-y-3 pt-1">
                            {item.bulletPoints.map((bp, bpIdx) => (
                              <p key={bpIdx} className="pl-4 border-l-2 border-[#D4AF37]">
                                <strong className="text-[#24211D] font-semibold">{bp.bold} </strong>
                                {bp.text}
                              </p>
                            ))}
                          </div>
                        )}

                        {item.concludingText && (
                          <p className="p-4 bg-[#FBF9F3] border border-[#E8E2D5] text-[#24211D]">
                            {item.concludingText}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Bloque de Contacto / Consulta Específica */}
      <section className="py-20 bg-[#F5F2EA] border-t border-[#E8E2D5]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.24em] uppercase block">
            {content.bottomEyebrow}
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
            {content.bottomTitle}
          </h3>
          <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal">
            {content.bottomSubtitle}
          </p>
          <div className="pt-4">
            <button
              type="button"
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
