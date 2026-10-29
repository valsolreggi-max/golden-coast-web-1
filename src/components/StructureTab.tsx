import React from 'react';
import { PAGES_INVENTORY } from '../data/architectureData';
import { FileCheck, FileClock, CheckCircle, AlertCircle } from 'lucide-react';

export const StructureTab: React.FC = () => {
  const incorporatedCount = PAGES_INVENTORY.filter((p) => p.status === 'incorporated').length;
  const pendingCount = PAGES_INVENTORY.filter((p) => p.status === 'pending_pdf').length;

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-sand-light/60 border border-sand p-5 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-olive-soft uppercase tracking-wider">
              Total de Páginas
            </span>
            <span className="p-2 bg-olive-deep/10 text-olive-deep rounded-full">
              <FileCheck className="w-4 h-4" />
            </span>
          </div>
          <p className="text-3xl font-serif text-olive-deep mt-2 font-semibold">
            {PAGES_INVENTORY.length}
          </p>
          <p className="text-xs text-dark-warm/70 mt-1">Páginas identificadas en la arquitectura</p>
        </div>

        <div className="bg-emerald-50/60 border border-emerald-200 p-5 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Contenido Oficial Registrado
            </span>
            <span className="p-2 bg-emerald-100 text-emerald-700 rounded-full">
              <CheckCircle className="w-4 h-4" />
            </span>
          </div>
          <p className="text-3xl font-serif text-emerald-900 mt-2 font-semibold">
            {incorporatedCount} Páginas
          </p>
          <p className="text-xs text-emerald-800/80 mt-1">
            Inicio, Servicios, Zonas, Testimonios y <strong>Sobre mí</strong>
          </p>
        </div>

        <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
              Pendientes de PDF Fuente
            </span>
            <span className="p-2 bg-amber-100 text-amber-700 rounded-full">
              <FileClock className="w-4 h-4" />
            </span>
          </div>
          <p className="text-3xl font-serif text-amber-900 mt-2 font-semibold">
            {pendingCount} Páginas
          </p>
          <p className="text-xs text-amber-800/80 mt-1">
            Contacto, FAQ y Legales
          </p>
        </div>
      </div>

      {/* Main Architecture Diagram */}
      <div className="bg-ivory border border-sand rounded-xl p-6 sm:p-8">
        <div className="border-b border-sand pb-4 mb-6">
          <h2 className="text-2xl font-serif text-olive-deep font-semibold">
            Mapa del Sitio y Recorrido del Usuario
          </h2>
          <p className="text-sm text-dark-warm/70 mt-1">
            Estructura general organizada para la nueva versión de Golden Coast Property Advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAGES_INVENTORY.map((page) => (
            <div
              key={page.id}
              className={`p-5 rounded-lg border transition-all ${
                page.status === 'incorporated'
                  ? 'bg-ivory-warm/40 border-sand hover:border-olive-deep/40'
                  : 'bg-amber-50/30 border-amber-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-terracotta bg-terracotta-soft px-2 py-0.5 rounded">
                  {page.path}
                </span>
                <span
                  className={`text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    page.status === 'incorporated'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {page.status === 'incorporated' ? (
                    <>
                      <CheckCircle className="w-3 h-3" /> Contenido Registrado
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3 h-3" /> Pendiente de PDF
                    </>
                  )}
                </span>
              </div>

              <h3 className="text-lg font-serif text-olive-deep font-semibold mb-2">
                {page.title}
              </h3>

              <p className="text-xs text-dark-warm/80 mb-4 line-clamp-2">
                {page.description}
              </p>

              <div className="border-t border-sand/60 pt-3">
                <p className="text-[11px] font-semibold text-olive-soft uppercase tracking-wider mb-2">
                  Secciones Planificadas ({page.sections.length}):
                </p>
                <ul className="space-y-1">
                  {page.sections.map((sec, i) => (
                    <li key={i} className="text-xs text-dark-warm/70 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                      <span className="truncate">{sec.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
