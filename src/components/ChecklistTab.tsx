import React from 'react';
import { REQUIREMENTS_CHECKLIST } from '../data/architectureData';
import { FileUp, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';

export const ChecklistTab: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Rule Notification */}
      <div className="bg-olive-deep text-ivory rounded-xl p-6 border border-olive-soft shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-terracotta text-ivory rounded-lg shrink-0">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold">
              Regla Fundamental de Integridad de Contenido
            </h3>
            <p className="text-xs sm:text-sm text-ivory/90 mt-1 leading-relaxed">
              El contenido de los documentos que proporciones será fuente vinculante. No se inventarán textos, ni se resumirán, corregirán, ni sustituirán por versiones generadas por IA. Las secciones que no tienen texto en Framer están marcadas como pendientes a la espera de tus documentos PDF.
            </p>
          </div>
        </div>
      </div>

      {/* Requirements List */}
      <div className="bg-ivory border border-sand rounded-xl p-6 sm:p-8">
        <div className="border-b border-sand pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-serif text-olive-deep font-semibold">
              Estado de Contenidos y Documentos Requeridos
            </h2>
            <p className="text-sm text-dark-warm/70 mt-1">
              Checklist de los contenidos definitivos a integrar.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full text-xs font-semibold">
              1 Registrado (Sobre mí)
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-200 rounded-full text-xs font-semibold">
              5 Pendientes
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REQUIREMENTS_CHECKLIST.map((req) => {
            const isCompleted = req.status === 'Verificado en Framer';
            return (
              <div
                key={req.id}
                className={`p-5 rounded-lg border transition-all flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : 'bg-ivory-warm/30 border-sand hover:border-olive-deep/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-terracotta uppercase tracking-wider bg-terracotta-soft px-2 py-0.5 rounded">
                      {req.category}
                    </span>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Contenido Recibido
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3 h-3 text-amber-600" /> Pendiente de PDF
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="font-serif text-base text-olive-deep font-semibold mb-1">
                    {req.title}
                  </h4>

                  <p className="text-xs text-dark-warm/80 leading-relaxed">
                    {req.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-sand/50 flex items-center justify-between text-[11px] text-dark-warm/60">
                  <span>
                    {isCompleted ? 'Estado: Texto literal guardado' : 'Acción: Aportar documento PDF'}
                  </span>
                  <span className="text-olive-deep font-medium flex items-center gap-1">
                    {isCompleted ? (
                      <span className="text-emerald-700 font-semibold">✓ Verificado</span>
                    ) : (
                      <>
                        <FileUp className="w-3.5 h-3.5 text-terracotta" /> Preparado para carga
                      </>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
