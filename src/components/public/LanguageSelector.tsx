import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, AVAILABLE_LANGUAGES, Language } from '../../i18n';

interface LanguageSelectorProps {
  className?: string;
  variant?: 'navbar' | 'mobile';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = '',
  variant = 'navbar',
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = AVAILABLE_LANGUAGES.find((l) => l.code === language) || AVAILABLE_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className={`pt-3 border-t border-[#E8E2D5] ${className}`}>
        <div className="flex items-center gap-2 mb-2 text-xs font-sans font-semibold tracking-wider text-[#D4AF37] uppercase">
          <Globe className="w-3.5 h-3.5" />
          <span>Idioma / Language</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {AVAILABLE_LANGUAGES.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center justify-between px-3 py-2 border text-xs font-sans transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#8FA777] text-[#FBF9F3] border-[#8FA777] font-medium'
                    : 'bg-[#FBF9F3] text-[#24211D] border-[#E8E2D5] hover:border-[#D4AF37]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider shrink-0 ${
                    isSelected ? 'text-[#FBF9F3]' : 'text-[#8FA777]'
                  }`}>
                    {lang.code.toUpperCase()}
                  </span>
                  <span>{lang.nativeLabel}</span>
                </span>
                {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Seleccionar idioma"
        className="flex items-center gap-2 py-1.5 px-2.5 sm:px-3 rounded-none border border-[#E8E2D5] bg-[#FBF9F3] hover:bg-[#F5F2EA] hover:border-[#D4AF37] text-[#24211D] text-xs font-sans tracking-wider transition-all duration-200 cursor-pointer shadow-2xs group"
      >
        <Globe className="w-3.5 h-3.5 text-[#8FA777] group-hover:text-[#D4AF37] transition-colors shrink-0" />
        <span className="font-bold text-[11px] uppercase tracking-wider text-[#8FA777] leading-none">
          {currentLang.code.toUpperCase()}
        </span>
        <span className="text-xs text-[#24211D] font-medium leading-none">
          {currentLang.nativeLabel}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-[#5C574E] transition-transform duration-200 shrink-0 ml-0.5 ${
            isOpen ? 'rotate-180 text-[#D4AF37]' : ''
          }`}
        />
      </button>

      {/* Floating Menu Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 bg-[#FBF9F3] border border-[#E8E2D5] shadow-md py-1 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
          <div className="px-3.5 py-1.5 border-b border-[#E8E2D5]/70 text-[10px] font-sans font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
            Idioma / Language
          </div>
          <div className="py-1">
            {AVAILABLE_LANGUAGES.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-sans text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#8FA777]/15 text-[#24211D] font-semibold'
                      : 'text-[#4A463F] hover:bg-[#F5F2EA] hover:text-[#24211D]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8FA777] shrink-0 w-6">
                      {lang.code.toUpperCase()}
                    </span>
                    <span className="leading-tight font-medium">{lang.nativeLabel}</span>
                  </span>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#8FA777] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
