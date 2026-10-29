import React from 'react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].testimonials;

  const clientStories = [
    {
      client: 'Familia Lindqvist',
      location: 'Sitges · Compradores de Suecia',
      story: 'Venir desde Estocolmo para comprar en Sitges daba vértigo por el desconocimiento legal. Valeria fue nuestra luz: revisó cada carga registral, nos acompañó en la notaría e incluso nos ayudó a contratar los suministros. Un trato humano incalculable.',
      rating: 5,
      tag: 'Compra Internacional'
    },
    {
      client: 'Marc & Elena',
      location: 'Vilanova i la Geltrú · Propietarios',
      story: 'Queríamos alquilar nuestro piso de Vilanova en modalidad temporal pero temíamos los impagos. Valeria realizó un estudio pericial de solvencia impecable. Los inquilinos cuidan el piso como suyo y cobramos puntualmente cada mes.',
      rating: 5,
      tag: 'Alquiler Temporal'
    },
    {
      client: 'Jean-Luc Dupont',
      location: 'Castelldefels · Inversor Francés',
      story: 'Valeria es el ejemplo perfecto de rigor técnico y cercanía. Habla francés perfectamente, comprende el mercado del Garraf como nadie y negoció un precio excelente para nuestra villa.',
      rating: 5,
      tag: 'Personal Shopper'
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#EFE8DC]/30 border-b border-[#E6DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E76F51] uppercase tracking-widest bg-[#E76F51]/10 px-3 py-1 rounded-full">
            Historias Reales
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] font-bold mt-3">
            La Confianza de Nuestros Clientes
          </h2>
          <p className="text-sm text-[#24211D]/80 mt-2 font-sans">
            Experiencias auténticas de familias e inversores que han confiado su hogar o patrimonio a Valeria.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientStories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E6DFD3] rounded-2xl p-6 sm:p-8 shadow-xs relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/40 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded bg-[#8FA777]/15 text-[#8FA777] text-[10px] font-bold uppercase">
                  {story.tag}
                </span>

                <p className="text-xs sm:text-sm text-[#24211D]/90 italic leading-relaxed font-sans">
                  "{story.story}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E6DFD3] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#8FA777] text-[#F5F2EA] flex items-center justify-center font-serif font-bold text-xs shrink-0">
                  {story.client.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#24211D]">
                    {story.client}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#24211D]/60">
                    <MapPin className="w-3 h-3 text-[#E76F51]" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
