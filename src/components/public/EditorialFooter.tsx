import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { X, ArrowUp } from 'lucide-react';
import { useLanguage } from '../../i18n';

interface EditorialFooterProps {
  onOpenConsultation?: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = () => {
  const [activeLegalTab, setActiveLegalTab] = useState<'aviso' | 'privacidad' | 'cookies' | null>(null);
  const { messages } = useLanguage();
  const { footer, modal } = messages;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const territoryList = [
    'Sitges',
    'Vilanova i la Geltrú',
    'Cubelles',
    'Cunit',
    'Segur de Calafell',
    'Calafell',
  ];

  return (
    <footer className="bg-[#8FA777] text-[#F5F2EA] border-t border-[#7E9667] relative">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#7E9667]/80 items-start">
          
          {/* Columna 1 */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block">
              <Logo variant="salvia" size="md" />
            </Link>

            <h3 className="font-serif text-lg sm:text-xl text-[#F5F2EA] tracking-wide pt-1">
              GOLDEN COAST · PROPERTY ADVISORY
            </h3>

            <p className="text-sm sm:text-base text-[#F5F2EA]/90 leading-relaxed font-sans font-light max-w-md">
              {footer.col1Desc}
            </p>
          </div>

          {/* Columna 2 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.22em] text-[#D4AF37] font-semibold pb-1 border-b border-[#7E9667]/80">
              {footer.col2Title}
            </h4>
            <ul className="text-sm text-[#F5F2EA]/90 space-y-2.5 font-sans font-normal">
              {territoryList.map((town) => (
                <li key={town} className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <Link
                    to="/zonas"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {town}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="lg:col-span-4 space-y-7">
            {/* Contacto Directo */}
            <div className="space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-[0.22em] text-[#D4AF37] font-semibold pb-1 border-b border-[#7E9667]/80">
                {footer.col3ContactTitle}
              </h4>
              <ul className="text-sm text-[#F5F2EA]/90 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>
                    {footer.col3Tel}:{' '}
                    <a
                      href="https://wa.me/34645695194"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4AF37] underline decoration-[#D4AF37]/50 underline-offset-4 transition-colors"
                    >
                      +34 645 695 194
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>
                    {footer.col3Email}:{' '}
                    <a
                      href="mailto:realtygoldencoast@gmail.com"
                      className="hover:text-[#D4AF37] underline decoration-[#D4AF37]/50 underline-offset-4 transition-colors"
                    >
                      realtygoldencoast@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>{footer.col3Location}</span>
                </li>
              </ul>
            </div>

            {/* Acreditaciones Oficiales */}
            <div className="space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-[0.22em] text-[#D4AF37] font-semibold pb-1 border-b border-[#7E9667]/80">
                {footer.col3CredentialsTitle}
              </h4>
              <ul className="text-sm text-[#F5F2EA]/90 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>{footer.cred1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>{footer.cred2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>{footer.cred3}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Línea Final de Cierre */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F5F2EA]/85">
          <div className="text-center md:text-left leading-relaxed">
            <span>{footer.rights}</span>
            {' | '}
            <button
              type="button"
              onClick={() => setActiveLegalTab('aviso')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer underline md:no-underline md:hover:underline"
            >
              {footer.legalNotice}
            </button>
            {' | '}
            <button
              type="button"
              onClick={() => setActiveLegalTab('privacidad')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer underline md:no-underline md:hover:underline"
            >
              {footer.privacyPolicy}
            </button>
            {' | '}
            <button
              type="button"
              onClick={() => setActiveLegalTab('cookies')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer underline md:no-underline md:hover:underline"
            >
              {footer.cookiePolicy}
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-[#F5F2EA]/80 hover:text-[#D4AF37] transition-colors cursor-pointer shrink-0"
            aria-label="Volver arriba"
          >
            <span>{footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal Informativo para Textos Legales */}
      {activeLegalTab && (
        <div
          className="fixed inset-0 z-50 bg-[#24211D]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FBF9F3] border border-[#E8E2D5] text-[#24211D] max-w-2xl w-full p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto shadow-xl">
            <button
              type="button"
              onClick={() => setActiveLegalTab(null)}
              className="absolute top-5 right-5 text-[#5C574E] hover:text-[#24211D] p-1 cursor-pointer"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalTab === 'aviso' && (
              <div className="space-y-4">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider block">
                  {footer.legalModalEyebrow}
                </span>
                <h3 className="font-serif text-2xl text-[#24211D]">{footer.legalNotice}</h3>
                <div className="text-xs sm:text-sm text-[#4A463F] leading-relaxed space-y-3 font-sans">
                  <p>{footer.legalP1}</p>
                  <p>
                    {footer.col3Email}:{' '}
                    <a href="mailto:realtygoldencoast@gmail.com" className="text-[#24211D] font-medium underline">
                      realtygoldencoast@gmail.com
                    </a>{' '}
                    | Tel / WhatsApp: +34 645 695 194.
                  </p>
                  <p>{footer.legalP3}</p>
                </div>
              </div>
            )}

            {activeLegalTab === 'privacidad' && (
              <div className="space-y-4">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider block">
                  {footer.privacyModalEyebrow}
                </span>
                <h3 className="font-serif text-2xl text-[#24211D]">{footer.privacyPolicy}</h3>
                <div className="text-xs sm:text-sm text-[#4A463F] leading-relaxed space-y-3 font-sans">
                  <p>{footer.privacyP1}</p>
                  <p>
                    {footer.privacyP2}{' '}
                    <a href="mailto:realtygoldencoast@gmail.com" className="text-[#24211D] font-medium underline">
                      realtygoldencoast@gmail.com
                    </a>.
                  </p>
                </div>
              </div>
            )}

            {activeLegalTab === 'cookies' && (
              <div className="space-y-4">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider block">
                  {footer.cookieModalEyebrow}
                </span>
                <h3 className="font-serif text-2xl text-[#24211D]">{footer.cookiePolicy}</h3>
                <div className="text-xs sm:text-sm text-[#4A463F] leading-relaxed space-y-3 font-sans">
                  <p>{footer.cookieP1}</p>
                  <p>{footer.cookieP2}</p>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#E8E2D5] text-right">
              <button
                type="button"
                onClick={() => setActiveLegalTab(null)}
                className="px-5 py-2.5 bg-[#8FA777] text-[#FBF9F3] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#24211D] transition-colors cursor-pointer"
              >
                {modal.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
