import React, { useState } from 'react';
import { EditorialNavbar } from './EditorialNavbar';
import { EditorialHeroSection } from './EditorialHeroSection';
import { EditorialOwnerSection } from './EditorialOwnerSection';
import { EditorialBuyerSection } from './EditorialBuyerSection';
import { EditorialTerritorySection } from './EditorialTerritorySection';
import { BrandGallerySection } from './BrandGallerySection';
import { EditorialAboutSection } from './EditorialAboutSection';
import { EditorialTestimonialsSection } from './EditorialTestimonialsSection';
import { EditorialContactSection } from './EditorialContactSection';
import { EditorialFooter } from './EditorialFooter';
import { EditorialModal, ModalType } from './EditorialModal';

export const MainWebsiteView: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: ModalType;
    zone?: string;
  }>({
    isOpen: false,
    type: null,
  });

  const openConsultation = (type: 'owner' | 'buyer' | 'general') => {
    setModalState({
      isOpen: true,
      type,
    });
  };

  const openServicesModal = () => {
    setModalState({
      isOpen: true,
      type: 'services',
    });
  };

  const openBuyerModal = () => {
    setModalState({
      isOpen: true,
      type: 'buyer',
    });
  };

  const openTerritoryModal = (zone?: string) => {
    setModalState({
      isOpen: true,
      type: 'territory',
      zone,
    });
  };

  const openTestimonialsModal = () => {
    setModalState({
      isOpen: true,
      type: 'testimonials',
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F2EA] text-[#24211D] selection:bg-[#D4AF37] selection:text-[#24211D]">
      {/* 1. Symmetrical Editorial Navigation (7 tabs) */}
      <EditorialNavbar onOpenConsultation={openConsultation} />

      {/* Main Architectural Magazine Flow */}
      <main>
        {/* 1. INICIO (#inicio) */}
        <EditorialHeroSection onOpenConsultation={openConsultation} />

        {/* 2. SERVICIOS (#servicios) - Propietarios & Compradores */}
        <EditorialOwnerSection
          onOpenConsultation={openConsultation}
          onOpenServicesModal={openServicesModal}
        />
        <EditorialBuyerSection
          onOpenConsultation={openConsultation}
          onOpenBuyerModal={openBuyerModal}
        />

        {/* 3. ZONAS (#zonas) - Territorio Garraf & Costa Dorada */}
        <EditorialTerritorySection
          onOpenTerritoryModal={openTerritoryModal}
        />

        {/* 4. GALERÍA (#galeria) - Archivo Visual & Arquitectura */}
        <BrandGallerySection />

        {/* 5. SOBRE MÍ (#sobre-mi) - Valeria & Propósito */}
        <EditorialAboutSection />

        {/* 6. TESTIMONIOS (#testimonios) - Historias de Confianza */}
        <EditorialTestimonialsSection
          onOpenTestimonialsModal={openTestimonialsModal}
        />

        {/* 7. CONTACTO (#contacto) - Formulario & Canales Directos */}
        <EditorialContactSection />
      </main>

      {/* Editorial Footer */}
      <EditorialFooter onOpenConsultation={() => openConsultation('general')} />

      {/* Interactive Modal */}
      <EditorialModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        selectedZone={modalState.zone}
        onClose={closeModal}
      />
    </div>
  );
};

