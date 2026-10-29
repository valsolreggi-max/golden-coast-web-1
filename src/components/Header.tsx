import React from 'react';
import { Compass, FileText, CheckCircle2, Shield, User } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="border-b border-sand bg-ivory sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-terracotta uppercase mb-1">
              <Shield className="w-4 h-4" />
              Documento de Arquitectura y Análisis de Contenido
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-olive-deep font-semibold">
              Golden Coast Property Advisory
            </h1>
            <p className="text-sm text-dark-warm/70 mt-1">
              Referencia de Framer + Registro Literal de Documentos Fuente Vinculantes
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-sand-light text-olive-deep border border-sand">
              Fuente de Referencia: Framer
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> "Sobre mí" Recibido
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-2 sm:gap-4 mt-6 border-t border-sand/60 pt-4 overflow-x-auto">
          {[
            { id: 'structure', label: 'Estructura & Mapa del Sitio', icon: Compass },
            { id: 'source', label: '📄 Contenido Vinculante: Sobre Mí', icon: User },
            { id: 'inventory', label: 'Inventario de Contenidos', icon: FileText },
            { id: 'checklist', label: 'Documentos Pendientes (PDF)', icon: CheckCircle2 },
            { id: 'visual', label: 'Dirección Visual & Colores', icon: Shield },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-olive-deep text-ivory shadow-xs'
                    : 'text-olive-deep/70 hover:text-olive-deep hover:bg-sand-light/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
