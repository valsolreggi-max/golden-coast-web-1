import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Key, Calendar, Compass, MoveRight } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const HomeServicesSummary: React.FC = () => {
  const { messages } = useLanguage();
  const { homeServices } = messages;

  const services = [
    {
      num: '01',
      title: homeServices.s1Title,
      desc: homeServices.s1Desc,
      icon: Home,
    },
    {
      num: '02',
      title: homeServices.s2Title,
      desc: homeServices.s2Desc,
      icon: Calendar,
    },
    {
      num: '03',
      title: homeServices.s3Title,
      desc: homeServices.s3Desc,
      icon: Key,
    },
    {
      num: '04',
      title: homeServices.s4Title,
      desc: homeServices.s4Desc,
      icon: Compass,
    },
    {
      num: '05',
      title: homeServices.s5Title,
      desc: homeServices.s5Desc,
      icon: MoveRight,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            {homeServices.eyebrow}
          </span>
        </div>

        {/* Headline Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              {homeServices.title}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal">
              {homeServices.subtitle}
            </p>
          </div>
        </div>

        {/* 5 Compact Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="p-6 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans font-semibold text-[#D4AF37] tracking-widest uppercase">
                      {service.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#8FA777] group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  <h3 className="text-lg font-serif text-[#24211D] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#5C574E] leading-relaxed font-sans font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full Services Page */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E8E2D5]">
          <span className="text-xs text-[#5C574E] font-sans">
            {homeServices.footerNote}
          </span>

          <Link
            to="/servicios"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 group shadow-xs"
          >
            <span>{homeServices.viewAll}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
