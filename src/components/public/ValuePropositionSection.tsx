import React from 'react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { Check, X, Shield, Users, Lock, Compass } from 'lucide-react';

interface ValuePropositionSectionProps {
  lang: Language;
}

export const ValuePropositionSection: React.FC<ValuePropositionSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].valueProp;

  return (
    <section className="py-16 sm:py-20 bg-[#F5F2EA] border-b border-[#E6DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FA777]/15 text-[#8FA777] font-semibold text-xs uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] font-bold">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#24211D]/80 mt-3 font-sans leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Real Estate Column (Gray/Discouraged) */}
          <div className="bg-[#EFE8DC]/60 border border-[#E6DFD3] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD3]">
                <h3 className="font-serif text-xl font-bold text-[#24211D]/70">
                  {t.tradTitle}
                </h3>
                <span className="px-2.5 py-1 rounded bg-rose-100 text-rose-800 text-[11px] font-bold uppercase">
                  Masivo
                </span>
              </div>

              <ul className="space-y-4 mt-6 text-xs sm:text-sm text-[#24211D]/70">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Comerciales rotativos:</strong> Atendido por agentes junior con alta rotación sin formación jurídica específica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Volumen sobre calidad:</strong> Prioridad en la comisión rápida y en la firma inmediata sin análisis profundo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Trato impersonal:</strong> Eres un número de catálogo o una referencia de portal inmobiliario.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Abandono tras la firma:</strong> Escaso o nulo acompañamiento en la postventa o en la gestión continuada del alquiler.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white/40 rounded-xl text-xs text-[#24211D]/60 italic border border-[#E6DFD3]">
              "Sensación de prisa comercial y desprotección ante cláusulas complejas o imprevistos de la Ley de Arrendamientos Urbanos."
            </div>
          </div>

          {/* Golden Coast Boutique Advisory Column (Olive & Sunset Gold - Highlighted) */}
          <div className="bg-white border-2 border-[#8FA777] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#8FA777] text-[#F5F2EA] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-xs">
              Exclusivo & Acompañado
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD3] pr-12">
                <h3 className="font-serif text-2xl font-bold text-[#8FA777]">
                  {t.boutiqueTitle}
                </h3>
              </div>

              <ul className="space-y-4 mt-6 text-xs sm:text-sm text-[#24211D]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8FA777] shrink-0 mt-0.5 font-bold" />
                  <span><strong>Asesoría directa con Valeria (API & Perito):</strong> Trato personal de principio a fin sin intermediarios ni sorpresas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8FA777] shrink-0 mt-0.5 font-bold" />
                  <span><strong>Rigurosidad Jurídica & LAU:</strong> Redacción meticulosa de contratos, verificación registral y tasación judicial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8FA777] shrink-0 mt-0.5 font-bold" />
                  <span><strong>Acompañamiento Internacional:</strong> Idiomas (ES, EN, FR, DE) y orientación paso a paso para familias que llegan a España.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#8FA777] shrink-0 mt-0.5 font-bold" />
                  <span><strong>Relación Duradera:</strong> Asistencia continua en reformas, home staging, gestión de alquiler vacacional o residencial.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-[#8FA777]/10 rounded-xl text-xs text-[#24211D] border border-[#8FA777]/30 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#E76F51] shrink-0" />
              <span>
                <strong>Tranquilidad Garantizada:</strong> Sabiendo exactamente quién gestiona tus llaves y quién protege tu patrimonio.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
