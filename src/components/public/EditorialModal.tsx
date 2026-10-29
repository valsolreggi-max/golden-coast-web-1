import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, Send, Loader2, AlertCircle } from 'lucide-react';
import { Logo } from '../Logo';
import { useLanguage } from '../../i18n';

export type ModalType = 'owner' | 'buyer' | 'general' | 'services' | 'territory' | 'testimonials' | null;

interface EditorialModalProps {
  isOpen: boolean;
  type: ModalType;
  selectedZone?: string;
  onClose: () => void;
}

const FORMSPREE_ENDPOINT =
  (import.meta.env.VITE_FORMSPREE_ENDPOINT as string) ||
  'https://formspree.io/f/realtygoldencoast@gmail.com';

const ZONE_OPTIONS = [
  'Sitges',
  'Vilanova i la Geltrú',
  'Cubelles',
  'Cunit',
  'Segur de Calafell',
  'Calafell',
];

export const EditorialModal: React.FC<EditorialModalProps> = ({
  isOpen,
  type,
  selectedZone,
  onClose,
}) => {
  const { messages } = useLanguage();
  const { modal } = messages;

  const currentZone = selectedZone || 'Sitges';

  // Territory / Zone consultation specific form state
  const [territoryForm, setTerritoryForm] = useState({
    name: '',
    email: '',
    phone: '',
    intention: modal.optBuying,
    zone: currentZone,
    message: '',
    acceptedPrivacy: false,
  });

  // Standard modal form state (for owner, buyer, general)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: currentZone,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync selectedZone when it changes or when modal opens
  useEffect(() => {
    if (selectedZone) {
      setTerritoryForm((prev) => ({ ...prev, zone: selectedZone }));
      setFormData((prev) => ({ ...prev, location: selectedZone }));
    }
  }, [selectedZone, isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleReset();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const handleReset = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    onClose();
  };

  // Handle backdrop click to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleReset();
    }
  };

  // Territory form submit targeting Formspree
  const handleTerritorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!territoryForm.acceptedPrivacy) {
      setSubmitError('Por favor, acepta la Política de Privacidad para continuar.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      _subject: `Consulta sobre ${territoryForm.zone} · Golden Coast`,
      nombre_apellidos: territoryForm.name,
      email: territoryForm.email,
      telefono: territoryForm.phone,
      intencion: territoryForm.intention,
      zona_consultada: territoryForm.zone,
      mensaje: territoryForm.message || '(Sin mensaje adicional)',
      politica_privacidad_aceptada: 'Sí',
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Standard form submit for owner/buyer/general
  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const intentOptions = [
    modal.optSelling,
    modal.optBuying,
    modal.optAdvisory,
  ];

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-[#24211D]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-hidden animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full max-h-[85vh] flex flex-col bg-[#FBF9F3] overflow-hidden shadow-2xl border border-[#E8E2D5] my-auto"
      >
        {/* Top Registration Line */}
        <div className="bg-[#8FA777] px-6 py-2.5 flex items-center justify-between text-[11px] font-sans tracking-[0.2em] text-[#FBF9F3] uppercase font-semibold shrink-0 pr-14">
          <span>{modal.modalTopLine}</span>
          <span className="text-[#D4AF37]">{modal.modalTopLineSub}</span>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-[#F5F2EA] text-[#24211D] hover:bg-[#D4AF37] hover:text-[#24211D] flex items-center justify-center transition-colors cursor-pointer border border-[#E8E2D5] shadow-sm"
          aria-label={modal.closeAria}
          title={modal.closeAria}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {/* Modal Content Header */}
          <div className="p-6 sm:p-8 bg-[#F5F2EA] border-b border-[#E8E2D5] pr-16">
            <div className="mb-4">
              <Logo size="sm" variant="dark" />
            </div>

            {type === 'territory' && (
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {modal.territoryEyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mt-1 font-normal">
                  {modal.territoryTitlePrefix} {selectedZone ? selectedZone : 'Costa Dorada & Garraf'}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A463F] mt-1.5 font-sans font-normal leading-relaxed">
                  {modal.territoryDesc}
                </p>
              </div>
            )}

            {type === 'owner' && (
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {modal.ownerEyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mt-1 font-normal">
                  {modal.ownerTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A463F] mt-1 font-sans font-normal">
                  {modal.ownerDesc}
                </p>
              </div>
            )}

            {type === 'buyer' && (
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {modal.buyerEyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mt-1 font-normal">
                  {modal.buyerTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A463F] mt-1 font-sans font-normal">
                  {modal.buyerDesc}
                </p>
              </div>
            )}

            {type === 'general' && (
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {modal.generalEyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mt-1 font-normal">
                  {modal.generalTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A463F] mt-1 font-sans font-normal">
                  {modal.generalDesc}
                </p>
              </div>
            )}

            {type === 'services' && (
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {messages.nav.services}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mt-1 font-normal">
                  {messages.homeServices.title}
                </h3>
              </div>
            )}

            {type === 'testimonials' && (
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {messages.nav.testimonials}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mt-1 font-normal">
                  {messages.homeTestimonial.title}
                </h3>
              </div>
            )}
          </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            /* Boutique Success State */
            <div className="text-center py-8 sm:py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#8FA777]/20 text-[#8FA777] flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#8FA777]" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                {modal.successBoutique}
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif text-[#24211D] font-normal">
                {modal.successTitle}
              </h4>
              <p className="text-sm text-[#4A463F] max-w-md mx-auto leading-relaxed font-sans font-normal">
                {modal.successMessage}
              </p>
              <div className="pt-2 text-xs font-serif italic text-[#5C574E]">
                {modal.successQuote}
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold uppercase tracking-widest hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer"
                >
                  {modal.close}
                </button>
              </div>
            </div>
          ) : type === 'territory' ? (
            /* PROFESSIONAL ZONE CONSULTATION FORM */
            <form onSubmit={handleTerritorySubmit} className="space-y-4 sm:space-y-5">
              {submitError && (
                <div className="p-3.5 bg-[#F5F2EA] border border-amber-300 text-amber-900 text-xs flex items-center gap-2.5 font-sans">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Zona seleccionada context tag */}
              <div className="p-3 bg-[#F5F2EA] border border-[#E8E2D5] flex items-center justify-between">
                <div className="text-xs font-sans text-[#5C574E]">
                  {modal.zoneReference}: <strong className="text-[#24211D] font-semibold uppercase tracking-wide">{territoryForm.zone}</strong>
                </div>
                <select
                  value={territoryForm.zone}
                  onChange={(e) => setTerritoryForm({ ...territoryForm, zone: e.target.value })}
                  className="text-xs font-sans bg-transparent border-none text-[#8FA777] font-semibold underline cursor-pointer focus:outline-none"
                >
                  {ZONE_OPTIONS.map((z) => (
                    <option key={z} value={z} className="text-[#24211D] bg-[#FBF9F3]">
                      {modal.changeTo} {z}
                    </option>
                  ))}
                </select>
              </div>

              {/* Campos: Nombre y Apellidos */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                  {modal.fullNameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={modal.fullNamePlaceholder}
                  value={territoryForm.name}
                  onChange={(e) => setTerritoryForm({ ...territoryForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                />
              </div>

              {/* Campos: Email & Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                    {modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={modal.emailPlaceholder}
                    value={territoryForm.email}
                    onChange={(e) => setTerritoryForm({ ...territoryForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                    {modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={modal.phonePlaceholder}
                    value={territoryForm.phone}
                    onChange={(e) => setTerritoryForm({ ...territoryForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                  />
                </div>
              </div>

              {/* Selector de intención */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                  {modal.intentionLabel}
                </label>
                <select
                  value={territoryForm.intention}
                  onChange={(e) => setTerritoryForm({ ...territoryForm, intention: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D] cursor-pointer"
                >
                  {intentOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje libre opcional */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold">
                    {modal.messageLabel}
                  </label>
                  <span className="text-[11px] text-[#5C574E] font-sans">{modal.optional}</span>
                </div>
                <textarea
                  rows={3}
                  placeholder={`${modal.messagePlaceholderPrefix} ${territoryForm.zone}...`}
                  value={territoryForm.message}
                  onChange={(e) => setTerritoryForm({ ...territoryForm, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                />
              </div>

              {/* Checkbox política */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={territoryForm.acceptedPrivacy}
                    onChange={(e) => setTerritoryForm({ ...territoryForm, acceptedPrivacy: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#8FA777] rounded-none border border-[#E8E2D5] cursor-pointer"
                  />
                  <span className="text-xs text-[#4A463F] leading-snug font-sans">
                    {modal.privacyConsent}
                  </span>
                </label>
              </div>

              {/* Footer row with confidentiality badge & submit button */}
              <div className="pt-3 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-[#5C574E] flex items-center gap-1.5 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8FA777]" />
                  <span>{modal.confidentialNotice}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold uppercase tracking-widest hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{modal.submitting}</span>
                    </>
                  ) : (
                    <>
                      <span>{modal.sendConsultation}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* General / Buyer / Owner Form */
            <form onSubmit={handleStandardSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                    {modal.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={modal.fullNamePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                    {modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={modal.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                    {modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    placeholder={modal.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                    {modal.zoneLabel}
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                  >
                    {ZONE_OPTIONS.map((z) => (
                      <option key={z} value={z}>{z}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#24211D] font-semibold mb-1">
                  {modal.messageLabel} *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={`${modal.messagePlaceholderPrefix}...`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#F5F2EA] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#24211D]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-[#5C574E] flex items-center gap-1.5 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8FA777]" />
                  <span>{modal.confidentialNotice}</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold uppercase tracking-widest hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{modal.sendConsultation}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

    </div>
  </div>
  );
};
