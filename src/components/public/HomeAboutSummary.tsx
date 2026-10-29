import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_IMAGES } from '../../data/images';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const HomeAboutSummary: React.FC = () => {
  const { messages } = useLanguage();
  const { homeAbout, hero } = messages;

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            {homeAbout.eyebrow}
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="border border-[#E8E2D5] p-2.5 sm:p-3.5 bg-[#FBF9F3] shadow-xs">
              <img
                src={BRAND_IMAGES.valeriaPortrait}
                alt="Valeria - Golden Coast Property Advisory"
                className="w-full h-[400px] sm:h-[460px] object-cover object-top"
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

          {/* Right Column: Brief Narrative & Key Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              {homeAbout.title}
            </h2>

            <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
              <p>{homeAbout.p1}</p>
              <p>{homeAbout.p2}</p>
            </div>

            {/* Official Credentials Box: Exact match with Hero section */}
            <div className="p-5 bg-[#FBF9F3] border border-[#E8E2D5] rounded-none">
              <div className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#D4AF37] font-semibold mb-3">
                {hero.credentialsTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans text-[#24211D]">
                <div className="border-l-2 border-[#D4AF37] pl-3">
                  <div className="font-semibold text-sm">{hero.credApi}</div>
                  <div className="text-[11px] text-[#5C574E] mt-0.5 leading-snug">
                    {hero.credApiSub}
                  </div>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-3">
                  <div className="font-semibold text-sm">{hero.credPerito}</div>
                  <div className="text-[11px] text-[#5C574E] mt-0.5 leading-snug">
                    {hero.credPeritoSub}
                  </div>
                </div>
                <div className="border-l-2 border-[#D4AF37] pl-3">
                  <div className="font-semibold text-sm">{hero.credLau}</div>
                  <div className="text-[11px] text-[#5C574E] mt-0.5 leading-snug">
                    {hero.credLauSub}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/sobre-mi"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 group shadow-xs"
              >
                <span>{homeAbout.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
