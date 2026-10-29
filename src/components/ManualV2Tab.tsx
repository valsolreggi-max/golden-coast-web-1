import React from 'react';
import { OFFICIAL_BRAND_COLORS, MANUAL_V2_SECTIONS } from '../data/manualV2Data';
import { BookOpen, ShieldCheck, Sparkles, CheckCircle, Palette } from 'lucide-react';

export const ManualV2Tab: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Official Manual Header Banner */}
      <div className="bg-[#8FA777] text-[#F5F2EA] rounded-xl p-6 sm:p-8 shadow-sm border border-[#8FA777]/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F5F2EA]/20 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] bg-black/10 px-3 py-1 rounded-full w-max mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Documento Oficial de Dirección Visual
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F2EA]">
              Manual de Dirección Visual y Experiencia Web — V2.0
            </h1>
          </div>
          <span className="px-3 py-1.5 bg-[#D4AF37] text-[#24211D] font-bold text-xs rounded-md shadow-xs self-start md:self-auto">
            Versión Consolidada V2.0
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#F5F2EA]/90 leading-relaxed">
          Este manual traduce las definiciones del <strong>Documento Maestro de Valeria</strong> a criterios concretos de dirección de arte, sistema cromático oficial, fotografía y experiencia UX.
        </p>
      </div>

      {/* Official Colors Grid */}
      <div className="bg-[#F5F2EA] border border-[#E6DFD3] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-[#E6DFD3] pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8FA777] uppercase tracking-wider">
            <Palette className="w-4 h-4 text-[#E76F51]" />
            Códigos de Color Oficiales del Isotipo
          </div>
          <span className="text-xs text-[#24211D]/60 font-mono">5 Tonos Armónicos</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {OFFICIAL_BRAND_COLORS.map((color) => (
            <div
              key={color.hex}
              className="border border-[#E6DFD3] rounded-lg overflow-hidden bg-white shadow-xs"
            >
              <div
                className="h-28 flex items-end p-3 border-b border-[#E6DFD3]"
                style={{ backgroundColor: color.hex }}
              >
                <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-black/20 text-white backdrop-blur-xs">
                  {color.hex}
                </span>
              </div>
              <div className="p-3">
                <h4 className="font-serif font-bold text-[#24211D] text-sm">
                  {color.name}
                </h4>
                <p className="text-[11px] text-[#24211D]/70 mt-1 leading-tight">
                  {color.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Rules Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MANUAL_V2_SECTIONS.map((sec) => (
          <div
            key={sec.code}
            className="bg-white border border-[#E6DFD3] rounded-xl p-6 space-y-4 shadow-xs"
          >
            <div className="flex items-center gap-2 border-b border-[#E6DFD3] pb-3">
              <span className="w-6 h-6 rounded-full bg-[#8FA777] text-[#F5F2EA] text-xs font-bold flex items-center justify-center font-mono">
                {sec.code}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#24211D]">
                {sec.title}
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#24211D]/90">
              {sec.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E76F51] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
