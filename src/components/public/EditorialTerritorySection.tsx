import React from 'react';
import { ArrowRight, ArrowDown, MapPin } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { TERRITORY_I18N } from '../../data/territoryData';
import { BRAND_IMAGES } from '../../data/images';

interface EditorialTerritorySectionProps {
  onOpenTerritoryModal: (zone?: string) => void;
}

export const EditorialTerritorySection: React.FC<EditorialTerritorySectionProps> = ({
  onOpenTerritoryModal,
}) => {
  const { currentLanguage } = useLanguage();
  const content = TERRITORY_I18N[currentLanguage] || TERRITORY_I18N.es;

  const scrollToLocality = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="zonas" className="py-16 sm:py-24 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            {content.eyebrow}
          </span>
        </div>

        {/* 2-Column Spread: Intro & Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Heading & Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              {content.title}
            </h1>

            <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal pt-2">
              {content.introParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Mediterranean Lifestyle & Architecture Photo */}
          <div className="lg:col-span-6">
            <div className="border border-[#E8E2D5] p-2.5 sm:p-3.5 bg-[#FBF9F3] shadow-xs">
              <img
                src={BRAND_IMAGES.zonasGeneral}
                alt={`${content.title} · Golden Coast`}
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="mt-2.5 text-[11px] font-sans text-[#5C574E] tracking-wider uppercase flex justify-between">
                <span>{content.imageCaptionRight}</span>
                <span>{content.imageCaptionSub}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Zones Symmetrical Grid / Jump Navigation */}
        <div className="border-t border-[#E8E2D5] pt-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{content.exploreBadge}</span>
            </div>
            <span className="text-xs font-sans text-[#5C574E] tracking-wider uppercase">
              {content.directAccess}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.localities.map((loc) => (
              <a
                key={loc.id}
                href={`#${loc.id}`}
                onClick={(e) => scrollToLocality(e, loc.id)}
                className="bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-colors cursor-pointer group flex flex-col justify-between overflow-hidden shadow-xs"
              >
                <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-[#E8E2D5] bg-[#E8E2D5]/30">
                  <img
                    src={loc.image}
                    alt={loc.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#24211D]/80 backdrop-blur-xs text-[#FBF9F3] text-[10px] uppercase font-sans font-semibold tracking-wider px-2.5 py-1">
                    {loc.previewTag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-serif text-[#24211D] group-hover:text-[#8FA777] transition-colors">
                        {loc.name}
                      </h2>
                      <ArrowDown className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#5C574E] leading-relaxed font-sans font-normal">
                      {loc.headline}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E8E2D5]/70 flex items-center justify-between gap-2 text-xs font-sans">
                    <span className="text-[#5C574E] font-medium tracking-wider uppercase inline-flex items-center gap-1.5 group-hover:text-[#8FA777] transition-colors">
                      <span>{content.viewDetails}</span>
                      <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                    </span>
                    <span className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                      {content.exploreDown}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* DESARROLLO DE LAS SEIS LOCALIDADES */}
        <div className="mt-16 sm:mt-24 space-y-12 sm:space-y-16">
          {content.localities.map((loc) => (
            <div
              key={loc.id}
              id={loc.id}
              className="scroll-mt-28 p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] shadow-xs"
            >
              {/* Eyebrow / Town name */}
              <div className="mb-3">
                <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
                  {loc.name}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug tracking-tight mb-8">
                {loc.headline}
              </h2>

              {/* Grid: Left Narrative + Right Zone Photography */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
                {/* Left Column: Narrative paragraphs & Ideal para */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                    {loc.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Ideal para */}
                  <div className="p-5 bg-[#F5F2EA] border border-[#E8E2D5]/80">
                    <p className="text-xs sm:text-sm text-[#24211D] leading-relaxed font-sans font-normal">
                      <strong className="text-[#8FA777] font-semibold">{content.idealForLabel}</strong>{' '}
                      <span className="text-[#4A463F]">{loc.idealPara}</span>
                    </p>
                  </div>
                </div>

                {/* Right Column: Framed Zone Photography */}
                <div className="lg:col-span-5">
                  <div className="border border-[#E8E2D5] p-2.5 sm:p-3 bg-[#F5F2EA] shadow-xs sticky top-28">
                    <img
                      src={loc.image}
                      alt={loc.imageAlt}
                      className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover object-center"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="mt-2.5 text-[11px] font-sans text-[#5C574E] tracking-wider uppercase flex justify-between items-center">
                      <span className="truncate pr-2">{loc.imageCaption}</span>
                      <span className="shrink-0 text-[#D4AF37] font-semibold">{loc.name}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation / Contact Link without replacing access to zone content */}
              <div className="pt-6 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#5C574E] font-serif italic">
                  {content.inquireQuestion}
                </p>
                <button
                  onClick={() => onOpenTerritoryModal(loc.name)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs whitespace-nowrap"
                >
                  <span>{content.inquireButton} {loc.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EL TERRITORIO GOLDEN COAST */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] shadow-xs">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
              {content.territorySummaryEyebrow}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug tracking-tight mb-6">
            {content.territorySummaryTitle}
          </h2>

          <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal max-w-3xl">
            {content.territorySummaryParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <p className="font-serif italic text-lg sm:text-xl text-[#24211D] pt-2">
              {content.territorySummaryQuote}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
