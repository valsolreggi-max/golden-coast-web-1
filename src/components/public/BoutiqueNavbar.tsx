import React, { useState } from 'react';
import { Logo } from '../Logo';
import { Language, TRANSLATIONS } from '../../data/translations';
import { Phone, Menu, X, Globe, MessageCircle } from 'lucide-react';

interface BoutiqueNavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export const BoutiqueNavbar: React.FC<BoutiqueNavbarProps> = ({
  lang,
  setLang,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all">
      {/* Top Advisory Strip */}
      <div className="bg-[#24211D] text-[#F5F2EA] text-[11px] py-2 px-4 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-[#D4AF37] tracking-wider uppercase hidden sm:inline text-[10px]">
              Golden Coast Property Advisory
            </span>
            <span className="text-[#F5F2EA]/70 text-[11px]">
              Sitges · Vilanova i la Geltrú · Castelldefels · Costa Dorada
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/34600000000?text=Hola%20Valeria,%20quisiera%20consultar%20sobre%20asesoramiento%20inmobiliario"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[#F5F2EA]/90 hover:text-[#D4AF37] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E76F51]" />
              <span className="hidden md:inline font-medium">WhatsApp Valeria:</span>
              <span className="font-mono font-bold">+34 600 000 000</span>
            </a>

            {/* Language Switcher Dropdown */}
            <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full font-mono text-[10px] border border-white/10">
              <Globe className="w-3 h-3 text-[#D4AF37]" />
              {(['es', 'en', 'fr', 'de'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-0.2 rounded-full uppercase font-bold transition-all ${
                    lang === l
                      ? 'bg-[#8FA777] text-[#F5F2EA]'
                      : 'text-[#F5F2EA]/60 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#F5F2EA]/90 backdrop-blur-md border-b border-[#E6DFD3] shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <div onClick={() => handleNavClick('hero')} className="cursor-pointer">
            <Logo variant="dark" size="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#24211D]/80">
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-[#E76F51] transition-colors py-1"
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="hover:text-[#E76F51] transition-colors py-1"
            >
              {t.services}
            </button>
            <button
              onClick={() => handleNavClick('zones')}
              className="hover:text-[#E76F51] transition-colors py-1"
            >
              {t.zones}
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="hover:text-[#E76F51] transition-colors py-1 text-[#E76F51]"
            >
              Galería
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#E76F51] transition-colors py-1 text-[#8FA777] font-extrabold"
            >
              {t.about}
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="hover:text-[#E76F51] transition-colors py-1"
            >
              {t.testimonials}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#E76F51] transition-colors py-1"
            >
              {t.contact}
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#E76F51] hover:bg-[#d85d3f] text-[#F5F2EA] px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
            >
              {t.ctaButton}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#24211D] hover:bg-[#E6DFD3] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F2EA] border-b border-[#E6DFD3] px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col gap-3 font-serif text-lg text-[#24211D]">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left hover:text-[#E76F51] py-2 border-b border-[#E6DFD3]/60"
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left hover:text-[#E76F51] py-2 border-b border-[#E6DFD3]/60"
            >
              {t.services}
            </button>
            <button
              onClick={() => handleNavClick('zones')}
              className="text-left hover:text-[#E76F51] py-2 border-b border-[#E6DFD3]/60"
            >
              {t.zones}
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-left hover:text-[#E76F51] py-2 border-b border-[#E6DFD3]/60 text-[#E76F51] font-semibold"
            >
              Galería
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left hover:text-[#E76F51] py-2 border-b border-[#E6DFD3]/60 font-semibold text-[#8FA777]"
            >
              {t.about}
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="text-left hover:text-[#E76F51] py-2 border-b border-[#E6DFD3]/60"
            >
              {t.testimonials}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left hover:text-[#E76F51] py-2 border-b border-[#E6DFD3]/60"
            >
              {t.contact}
            </button>
          </nav>

          <button
            onClick={() => handleNavClick('contact')}
            className="w-full bg-[#E76F51] text-[#F5F2EA] py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-center shadow-md"
          >
            {t.ctaButton}
          </button>
        </div>
      )}
    </header>
  );
};

