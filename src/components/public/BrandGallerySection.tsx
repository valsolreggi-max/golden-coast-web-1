import React, { useState } from 'react';
import { GALLERY_PHOTOS, BrandPhoto } from '../../data/images';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const BrandGallerySection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<BrandPhoto | null>(null);

  const labels = {
    es: {
      eyebrow: 'GALERÍA · ARQUITECTURA & MEDITERRÁNEO',
      title: 'La mirada visual de Golden Coast.',
      subtitle: 'Atmósferas, luz natural y arquitectura entre el Garraf y la Costa Dorada.',
      categories: [
        { id: 'all', label: 'Todo el archivo' },
        { id: 'interior', label: 'Interiores & Arquitectura' },
        { id: 'coast', label: 'Mar & Litoral' },
        { id: 'lifestyle', label: 'Estilo de Vida' },
        { id: 'territory', label: 'Territorio' },
      ],
      zoom: 'Ampliar',
      viewPhoto: 'Ver foto',
      close: 'Cerrar',
    },
    en: {
      eyebrow: 'GALLERY · ARCHITECTURE & MEDITERRANEAN',
      title: 'The visual aesthetic of Golden Coast.',
      subtitle: 'Atmospheres, natural light, and architectural grace between Garraf and Costa Dorada.',
      categories: [
        { id: 'all', label: 'Entire archive' },
        { id: 'interior', label: 'Interiors & Architecture' },
        { id: 'coast', label: 'Coast & Sea' },
        { id: 'lifestyle', label: 'Lifestyle' },
        { id: 'territory', label: 'Territory' },
      ],
      zoom: 'Enlarge',
      viewPhoto: 'View photo',
      close: 'Close',
    },
    de: {
      eyebrow: 'GALERIE · ARCHITEKTUR & MITTELMEER',
      title: 'Der visuelle Blick von Golden Coast.',
      subtitle: 'Stimmungen, natürliches Licht und Architektur zwischen Garraf und Costa Dorada.',
      categories: [
        { id: 'all', label: 'Gesamtes Archiv' },
        { id: 'interior', label: 'Interieur & Architektur' },
        { id: 'coast', label: 'Küste & Meer' },
        { id: 'lifestyle', label: 'Lebensart' },
        { id: 'territory', label: 'Region' },
      ],
      zoom: 'Vergrößern',
      viewPhoto: 'Foto ansehen',
      close: 'Schließen',
    },
    fr: {
      eyebrow: 'GALERIE · ARCHITECTURE & MÉDITERRANÉE',
      title: 'Le regard visuel de Golden Coast.',
      subtitle: 'Atmosphères, lumière naturelle et architecture entre le Garraf et la Costa Dorada.',
      categories: [
        { id: 'all', label: 'Toutes les archives' },
        { id: 'interior', label: 'Intérieurs & Architecture' },
        { id: 'coast', label: 'Mer & Littoral' },
        { id: 'lifestyle', label: 'Art de Vivre' },
        { id: 'territory', label: 'Territoire' },
      ],
      zoom: 'Agrandir',
      viewPhoto: 'Voir photo',
      close: 'Fermer',
    },
  }[currentLanguage] || {
    eyebrow: 'GALERÍA · ARQUITECTURA & MEDITERRÁNEO',
    title: 'La mirada visual de Golden Coast.',
    subtitle: 'Atmósferas, luz natural y arquitectura entre el Garraf y la Costa Dorada.',
    categories: [
      { id: 'all', label: 'Todo el archivo' },
      { id: 'interior', label: 'Interiores & Arquitectura' },
      { id: 'coast', label: 'Mar & Litoral' },
      { id: 'lifestyle', label: 'Estilo de Vida' },
      { id: 'territory', label: 'Territorio' },
    ],
    zoom: 'Ampliar',
    viewPhoto: 'Ver foto',
    close: 'Cerrar',
  };

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedCategory);

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex(p => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex(p => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[prevIndex]);
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            {labels.eyebrow}
          </span>
        </div>

        {/* Header Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              {labels.title}
            </h2>
            <p className="text-base text-[#4A463F] font-sans mt-3">
              {labels.subtitle}
            </p>
          </div>

          {/* Categories Bar */}
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
            {labels.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-sans transition-colors cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-[#8FA777] text-[#FBF9F3] border-[#8FA777]'
                    : 'bg-[#FBF9F3] text-[#5C574E] border-[#E8E2D5] hover:border-[#D4AF37] hover:text-[#24211D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Symmetrical 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.slice(0, 9).map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="p-3 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-colors cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#EAE4D7]">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#24211D]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 bg-[#F5F2EA] text-[#24211D] text-xs font-sans font-semibold tracking-wider uppercase flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{labels.zoom}</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 pb-1 flex items-baseline justify-between text-xs font-sans">
                <span className="font-serif text-sm text-[#24211D] font-medium">{photo.title}</span>
                <span className="text-[#D4AF37] text-[11px] uppercase tracking-wider">{labels.viewPhoto}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-[#24211D]/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-4xl w-full bg-[#FBF9F3] border border-[#E8E2D5] overflow-hidden flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-[#8FA777] text-[#FBF9F3] hover:bg-[#D4AF37] hover:text-[#24211D] transition-colors cursor-pointer"
              title={labels.close}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[75vh] overflow-hidden bg-[#24211D] flex items-center justify-center">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
              
              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#FBF9F3]/80 hover:bg-[#FBF9F3] text-[#24211D] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#FBF9F3]/80 hover:bg-[#FBF9F3] text-[#24211D] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-4 bg-[#F5F2EA] border-t border-[#E8E2D5] flex items-center justify-between text-xs font-sans">
              <span className="font-serif text-base text-[#24211D]">{activePhoto.title}</span>
              <span className="text-[#5C574E] uppercase tracking-wider">{activePhoto.category}</span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
