import React from 'react';
import { Logo } from '../Logo';
import { Language } from '../../data/translations';
import { ShieldCheck, Phone, Mail, MapPin, Globe } from 'lucide-react';

interface BoutiqueFooterProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export const BoutiqueFooter: React.FC<BoutiqueFooterProps> = ({ lang, setLang, onNavigate }) => {
  return (
    <footer className="bg-[#24211D] text-[#F5F2EA] border-t border-[#D4AF37]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="olive" size="md" />
            <p className="text-xs text-[#F5F2EA]/75 leading-relaxed max-w-sm pt-2 font-sans">
              Asesoramiento inmobiliario boutique en la Costa Dorada y el Garraf. Especializados en seguridad jurídica, acompañamiento personalizado y gestión integral.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4 text-[#8FA777]" />
              <span>Agente de la Propiedad Inmobiliaria (API) & Perito Judicial</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#D4AF37] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#F5F2EA]/80 font-medium">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#E76F51] transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#E76F51] transition-colors">
                  Servicios para Propietarios & Compradores
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('zones')} className="hover:text-[#E76F51] transition-colors">
                  Zonas: Sitges, Vilanova, Castelldefels, Cunit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#E76F51] transition-colors text-[#8FA777] font-semibold">
                  Sobre Valeria & Trayectoria
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-[#E76F51] transition-colors">
                  Testimonios & Historias de Éxito
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#E76F51] transition-colors">
                  Contacto Directo
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Multi-language */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#D4AF37] uppercase tracking-wider">
              Contacto & Idiomas
            </h4>
            <div className="space-y-2 text-xs text-[#F5F2EA]/80">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8FA777]" />
                <span>+34 600 000 000</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8FA777]" />
                <span>realtygoldencoast@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8FA777]" />
                <span>Costa Dorada & Garraf, Cataluña, España</span>
              </p>
            </div>

            <div className="pt-4 border-t border-[#F5F2EA]/10">
              <span className="text-[11px] text-[#F5F2EA]/60 uppercase font-mono block mb-2">
                Idioma del sitio web:
              </span>
              <div className="flex items-center gap-2 font-mono text-xs">
                {(['es', 'en', 'fr', 'de'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2 py-1 rounded uppercase font-bold transition-all ${
                      lang === l
                        ? 'bg-[#8FA777] text-[#F5F2EA]'
                        : 'bg-white/10 text-[#F5F2EA]/70 hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Legal Notices */}
        <div className="pt-8 border-t border-[#F5F2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F5F2EA]/60">
          <p>© {new Date().getFullYear()} Golden Coast Property Advisory. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Aviso Legal</span>
            <span className="hover:underline cursor-pointer">Política de Privacidad</span>
            <span className="hover:underline cursor-pointer">Política de Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
