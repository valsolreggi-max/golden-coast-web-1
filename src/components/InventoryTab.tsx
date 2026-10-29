import React, { useState } from 'react';
import { PAGES_INVENTORY } from '../data/architectureData';
import { AlertTriangle } from 'lucide-react';

export const InventoryTab: React.FC = () => {
  const [selectedPageId, setSelectedPageId] = useState<string>('home');
  const currentPage = PAGES_INVENTORY.find((p) => p.id === selectedPageId) || PAGES_INVENTORY[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Page Selection Sidebar */}
      <div className="lg:col-span-4 space-y-3">
        <h3 className="text-xs font-semibold text-olive-soft uppercase tracking-wider px-1">
          Seleccionar Página para Inspeccionar
        </h3>
        <div className="space-y-2">
          {PAGES_INVENTORY.map((page) => (
            <button
              key={page.id}
              onClick={() => setSelectedPageId(page.id)}
              className={`w-full text-left p-4 rounded-lg border transition-all flex items-start justify-between ${
                selectedPageId === page.id
                  ? 'bg-olive-deep text-ivory border-olive-deep shadow-xs'
                  : 'bg-ivory border-sand hover:bg-sand-light/50 text-olive-deep'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-medium text-base">{page.title}</span>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    selectedPageId === page.id ? 'text-ivory/80' : 'text-dark-warm/60'
                  }`}
                >
                  {page.path}
                </p>
              </div>

              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  page.status === 'incorporated'
                    ? selectedPageId === page.id
                      ? 'bg-emerald-900 text-emerald-200'
                      : 'bg-emerald-100 text-emerald-800'
                    : selectedPageId === page.id
                    ? 'bg-amber-900 text-amber-200'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {page.status === 'incorporated' ? 'OK Registrado' : 'Pendiente PDF'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Page Content Details */}
      <div className="lg:col-span-8 bg-ivory border border-sand rounded-xl p-6 sm:p-8 space-y-6">
        <div className="border-b border-sand pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-terracotta bg-terracotta-soft px-2.5 py-1 rounded">
              {currentPage.path}
            </span>
            <h2 className="text-2xl font-serif text-olive-deep font-semibold mt-2">
              {currentPage.title}
            </h2>
          </div>
          <div className="text-xs text-dark-warm/70">
            {currentPage.sections.length} secciones identificadas
          </div>
        </div>

        <p className="text-sm text-dark-warm/80 bg-sand-light/40 p-4 rounded-lg border border-sand/60">
          {currentPage.description}
        </p>

        {/* Section List */}
        <div className="space-y-6">
          {currentPage.sections.map((section, idx) => (
            <div key={idx} className="bg-ivory-warm/40 border border-sand rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-lg text-olive-deep font-semibold">
                  {idx + 1}. {section.title}
                </h4>
                <span
                  className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
                    section.source === 'framer'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  Fuente: {section.source === 'framer' ? 'Oficial / Framer' : 'Pendiente PDF'}
                </span>
              </div>

              {section.items && section.items.length > 0 && (
                <ul className="space-y-2 mt-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-dark-warm/90 flex items-start gap-2">
                      <span className="text-terracotta shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.notes && (
                <div className="mt-3 text-xs text-amber-900 bg-amber-50 p-3 rounded border border-amber-200 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{section.notes}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
