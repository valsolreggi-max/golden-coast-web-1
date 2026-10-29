import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_IMAGES } from '../../data/images';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const HomeTerritorySummary: React.FC = () => {
  const { messages } = useLanguage();
  const { homeTerritory } = messages;

  const zoneTargets = [
    { name: 'Sitges', id: 'sitges', subtitle: homeTerritory.sitgesSub },
    { name: 'Vilanova i la Geltrú', id: 'vilanova-i-la-geltru', subtitle: homeTerritory.vilanovaSub },
    { name: 'Cubelles', id: 'cubelles', subtitle: homeTerritory.cubellesSub },
    { name: 'Cunit', id: 'cunit', subtitle: homeTerritory.cunitSub },
    { name: 'Segur de Calafell', id: 'segur-de-calafell', subtitle: homeTerritory.segurSub },
    { name: 'Calafell', id: 'calafell', subtitle: homeTerritory.calafellSub },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            {homeTerritory.eyebrow}
          </span>
        </div>

        {/* 2-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          
          {/* Left Column: Narrative Summary & 6 Towns Preview */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              {homeTerritory.title}
            </h2>

            <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
              <p>{homeTerritory.p1}</p>
              <p>{homeTerritory.p2}</p>
            </div>

            {/* 6 Zones List Grid - Direct Navigation to Zone Details in /zonas */}
            <div className="pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {zoneTargets.map((zone) => (
                  <Link
                    key={zone.id}
                    to={`/zonas#${zone.id}`}
                    className="p-3 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] text-left transition-colors cursor-pointer group block shadow-2xs"
                  >
                    <div className="font-serif text-base text-[#24211D] group-hover:text-[#8FA777] font-medium leading-snug transition-colors">
                      {zone.name}
                    </div>
                    <div className="text-[10px] text-[#D4AF37] font-sans uppercase tracking-wider mt-1 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>{homeTerritory.viewDetails}</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/zonas"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 group shadow-xs"
              >
                <span>{homeTerritory.discoverAll}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Mediterranean Lifestyle Image */}
          <div className="lg:col-span-6">
            <Link to="/zonas" className="block border border-[#E8E2D5] p-2.5 sm:p-3.5 bg-[#FBF9F3] shadow-xs group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={BRAND_IMAGES.zonasGeneral}
                  alt={homeTerritory.imageAlt}
                  className="w-full h-[360px] sm:h-[420px] lg:h-[450px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2.5 text-[11px] font-sans text-[#5C574E] tracking-wider uppercase flex justify-between items-center">
                <span>{homeTerritory.imageCaption}</span>
                <span className="text-[#8FA777] font-semibold group-hover:text-[#D4AF37] transition-colors">
                  {homeTerritory.imageCta}
                </span>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
