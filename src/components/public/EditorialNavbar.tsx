import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { Menu, X } from 'lucide-react';
import { useConsultation } from '../ConsultationContext';
import { useLanguage } from '../../i18n';
import { LanguageSelector } from './LanguageSelector';

export const EditorialNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openConsultation } = useConsultation();
  const { messages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: messages.nav.home, path: '/' },
    { label: messages.nav.services, path: '/servicios' },
    { label: messages.nav.zones, path: '/zonas' },
    { label: messages.nav.about, path: '/sobre-mi' },
    { label: messages.nav.testimonials, path: '/testimonios' },
    { label: messages.nav.faq, path: '/faq' },
    { label: messages.nav.contact, path: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F2EA]/95 backdrop-blur-md py-3.5 border-b border-[#E8E2D5] shadow-xs'
          : 'bg-[#F5F2EA] py-4 sm:py-5 border-b border-[#E8E2D5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Brand Masthead / Centered Logo Lockup */}
        <Link 
          to="/"
          className="cursor-pointer group flex items-center shrink-0"
        >
          <Logo size="md" variant="dark" />
        </Link>

        {/* Editorial Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#24211D]">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors relative py-1 cursor-pointer group whitespace-nowrap ${
                  isActive ? 'text-[#8FA777] font-semibold' : 'text-[#24211D] hover:text-[#8FA777]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#8FA777] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Corner: Language Selector (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Toggle & Mobile Selector */}
          <div className="lg:hidden flex items-center gap-1.5">
            <div className="sm:hidden">
              <LanguageSelector />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#24211D] hover:bg-[#E8E2D5] transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F2EA] border-b border-[#E8E2D5] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-xs font-sans font-medium tracking-widest uppercase text-[#24211D]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left py-2 border-b border-[#E8E2D5]/70 transition-colors ${
                    isActive ? 'text-[#8FA777] font-semibold pl-2' : 'hover:text-[#8FA777]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Language Selector Grid */}
          <LanguageSelector variant="mobile" />

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation('general');
              }}
              className="w-full text-center py-3.5 bg-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer"
            >
              {messages.nav.requestConsultation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
