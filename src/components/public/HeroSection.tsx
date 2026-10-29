import React from 'react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { BRAND_IMAGES } from '../../data/images';
import { ShieldCheck, Award, MapPin, Scale, ArrowRight, Sparkles, CheckCircle, ChevronRight, Camera } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section id="hero" className="relative overflow-hidden bg-[#F5F2EA] pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#E6DFD3]">
      {/* Background Soft Mediterranean Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8FA777]/12 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F2A77B]/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#8FA777]/15 text-[#24211D] border border-[#8FA777]/30 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#E76F51] animate-pulse" />
              <span>{t.badge}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] font-bold leading-[1.12] tracking-tight">
              {t.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#24211D]/80 leading-relaxed font-sans max-w-2xl">
              {t.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#E76F51] hover:bg-[#d85d3f] text-[#F5F2EA] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group transform active:scale-98 cursor-pointer"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="bg-white hover:bg-[#E6DFD3]/40 text-[#24211D] border border-[#8FA777]/60 px-7 py-4 rounded-xl font-semibold text-xs uppercase tracking-widest transition-all text-center shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.ctaSecondary}</span>
                <ChevronRight className="w-4 h-4 text-[#8FA777]" />
              </button>
            </div>

            {/* Trust Badges Grid */}
            <div className="pt-8 border-t border-[#E6DFD3] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/70 backdrop-blur-xs p-3.5 rounded-xl border border-[#E6DFD3] flex items-start gap-2.5 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#8FA777] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#24211D] leading-snug">
                  {t.trustPoint1}
                </span>
              </div>

              <div className="bg-white/70 backdrop-blur-xs p-3.5 rounded-xl border border-[#E6DFD3] flex items-start gap-2.5 shadow-2xs">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#24211D] leading-snug">
                  {t.trustPoint2}
                </span>
              </div>

              <div className="bg-white/70 backdrop-blur-xs p-3.5 rounded-xl border border-[#E6DFD3] flex items-start gap-2.5 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#8FA777] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#24211D] leading-snug">
                  {t.trustPoint3}
                </span>
              </div>

              <div className="bg-white/70 backdrop-blur-xs p-3.5 rounded-xl border border-[#E6DFD3] flex items-start gap-2.5 shadow-2xs">
                <Scale className="w-4 h-4 text-[#E76F51] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#24211D] leading-snug">
                  {t.trustPoint4}
                </span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E6DFD3] group">
              
              {/* High-Resolution Mediterranean Villa Imagery */}
              <img
                src={BRAND_IMAGES.mediterraneanVillaLiving}
                alt="Golden Coast Mediterranean Property"
                className="w-full h-[460px] sm:h-[520px] object-cover group-hover:scale-103 transition-transform duration-700"
              />

              {/* Gradient Overlay for Editorial Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/85 via-[#24211D]/20 to-transparent flex flex-col justify-end p-8 text-[#F5F2EA]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E76F51] text-[#F5F2EA] text-[10px] font-mono uppercase tracking-widest font-bold">
                    Garraf & Costa Dorada
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold leading-tight text-[#F5F2EA]">
                  Casas con alma, transacciones con rigor legal
                </h3>
                <p className="text-xs text-[#F5F2EA]/80 mt-1.5 font-sans">
                  Sitges · Vilanova i la Geltrú · Castelldefels · Cunit · Tarragona
                </p>
              </div>
            </div>

            {/* Floating Accreditation Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#8FA777] text-[#F5F2EA] p-4 sm:p-5 rounded-2xl shadow-2xl border border-[#D4AF37]/50 max-w-xs hidden sm:flex items-center gap-3.5 backdrop-blur-md">
              <div className="w-11 h-11 rounded-xl bg-[#D4AF37] text-[#24211D] flex items-center justify-center font-serif font-bold text-sm shrink-0 shadow-xs">
                API
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#F5F2EA]">Oficial API</p>
                <p className="text-[11px] text-[#F5F2EA]/85 mt-0.5">Garantía jurídica y ética profesional</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

