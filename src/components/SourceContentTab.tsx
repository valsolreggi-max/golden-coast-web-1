import React from 'react';
import { ABOUT_ME_SOURCE } from '../data/sourceContent';
import { Lock, FileCheck, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

export const SourceContentTab: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Binding Source Banner */}
      <div className="bg-emerald-950 text-emerald-50 rounded-xl p-6 sm:p-8 border border-emerald-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-800/80 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-emerald-800/80 text-emerald-200 rounded-lg">
              <Lock className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
                Fuente Vinculante Recibida
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-semibold text-emerald-100">
                Sección: {ABOUT_ME_SOURCE.title}
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 bg-emerald-800 text-emerald-200 text-xs rounded-full font-medium flex items-center gap-1.5 border border-emerald-700">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            100% Texto Literal Registrado
          </span>
        </div>

        <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
          Este contenido ha sido guardado de forma totalmente exacta y literal sin resumir, reescribir ni modificar una sola palabra. Servirá como única fuente autorizada para la maquetación definitiva de la página <strong>Sobre mí</strong>.
        </p>
      </div>

      {/* Verbatim Content Viewer */}
      <div className="bg-ivory border border-sand rounded-xl p-6 sm:p-10 space-y-8 shadow-xs">
        {/* Header Block */}
        <div className="border-b border-sand pb-6">
          <span className="text-xs font-semibold text-terracotta uppercase tracking-wider bg-terracotta-soft px-3 py-1 rounded">
            {ABOUT_ME_SOURCE.subtitle}
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-olive-deep font-bold mt-3">
            {ABOUT_ME_SOURCE.sectionHeader}
          </h1>
        </div>

        {/* Narrative Paragraphs */}
        <div className="prose prose-stone max-w-none space-y-5 text-dark-warm/90 leading-relaxed font-sans text-base sm:text-lg">
          {ABOUT_ME_SOURCE.paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg transition-all ${
                index === ABOUT_ME_SOURCE.paragraphs.length - 2
                  ? 'bg-sand-light/50 border-l-4 border-terracotta italic text-olive-deep font-serif text-lg sm:text-xl'
                  : 'hover:bg-sand-light/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-sand-dark select-none mt-1 shrink-0">
                  P{index + 1}
                </span>
                <p className="m-0">{paragraph}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials and Highlights Grid */}
        <div className="border-t border-sand pt-8 mt-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-olive-soft uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-terracotta" />
            Acreditaciones y Hitos Clave Incorporados
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_ME_SOURCE.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-ivory-warm/60 border border-sand p-5 rounded-lg flex items-start gap-3 hover:border-olive-deep/40 transition-all"
              >
                <div className="p-2 bg-terracotta/10 text-terracotta rounded-md shrink-0 mt-0.5">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-olive-deep font-semibold">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-dark-warm/70 mt-0.5">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
