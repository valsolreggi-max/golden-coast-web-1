import React from 'react';
import { PALETTE_TOKENS } from '../data/architectureData';
import { Sparkles, Check, X } from 'lucide-react';

export const VisualDirectionTab: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Visual Direction Intro */}
      <div className="bg-ivory border border-sand rounded-xl p-6 sm:p-8">
        <div className="border-b border-sand pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-terracotta uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            Nueva Dirección Estética
          </div>
          <h2 className="text-2xl font-serif text-olive-deep font-semibold">
            Mediterránea, Editorial & Boutique
          </h2>
          <p className="text-sm text-dark-warm/80 mt-1 leading-relaxed">
            Una propuesta sobria, cálida, profesional y distinguida, totalmente desligada del diseño Framer original y de la estética de inmobiliaria tradicional.
          </p>
        </div>

        {/* Color Palette Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-olive-soft uppercase tracking-wider">
            Paleta Conceptual Solicitada
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PALETTE_TOKENS.map((token) => (
              <div key={token.hex} className="border border-sand rounded-lg overflow-hidden bg-ivory">
                <div
                  className={`h-24 ${token.class} flex items-end p-3 border-b border-sand/40`}
                  style={{ backgroundColor: token.hex }}
                >
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded font-medium ${
                      ['#2B382D', '#221F1B'].includes(token.hex)
                        ? 'bg-white/20 text-white'
                        : 'bg-black/10 text-dark-warm'
                    }`}
                  >
                    {token.hex}
                  </span>
                </div>
                <div className="p-3">
                  <h4 className="font-serif font-semibold text-olive-deep text-sm">
                    {token.name}
                  </h4>
                  <p className="text-[11px] text-dark-warm/70 mt-1 leading-tight">
                    {token.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Desired Values */}
        <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-6">
          <div className="flex items-center gap-2 text-emerald-900 font-serif font-semibold text-lg mb-4">
            <Check className="w-5 h-5 text-emerald-700" />
            Valores de Marca a Transmitir
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 mt-1.5" />
              <span><strong>CONFIANZA & SEGURIDAD:</strong> Sensación de protección y rigor profesional.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 mt-1.5" />
              <span><strong>ASESORAMIENTO INTEGRAL:</strong> Acompañamiento cercano en cada fase.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 mt-1.5" />
              <span><strong>EXPERIENCIA & CRITERIO:</strong> Conocimiento profundo del territorio Garraf-Costa Dorada.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 mt-1.5" />
              <span><strong>TRATO PERSONAL:</strong> Relación humana duradera más allá de la firma.</span>
            </li>
          </ul>
        </div>

        {/* Prohibited Visual Clichés */}
        <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-6">
          <div className="flex items-center gap-2 text-rose-900 font-serif font-semibold text-lg mb-4">
            <X className="w-5 h-5 text-rose-700" />
            Estilos y Patrones a Evitar Totalmente
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
              <span>Sin azul corporativo inmobiliario o estética de portal tradicional.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
              <span>Sin apariencia de plantilla genérica ni diseño SaaS frío.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
              <span>Sin bloques planos masivos ni tipografías diminutas o apretadas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
              <span>Sin recargamiento visual ni artificios de diseño no justificados.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
