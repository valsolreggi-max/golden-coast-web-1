import React from 'react';
import { Outlet } from 'react-router-dom';
import { EditorialNavbar } from '../public/EditorialNavbar';
import { EditorialFooter } from '../public/EditorialFooter';
import { EditorialModal } from '../public/EditorialModal';
import { ScrollToTop } from './ScrollToTop';
import { useConsultation } from '../ConsultationContext';

export const EditorialLayout: React.FC = () => {
  const { modalState, closeConsultation } = useConsultation();

  return (
    <div className="min-h-screen bg-[#F5F2EA] text-[#24211D] selection:bg-[#D4AF37] selection:text-[#24211D] flex flex-col justify-between font-sans">
      <ScrollToTop />
      
      {/* Top Fixed Masthead & Navigation */}
      <EditorialNavbar />

      {/* Dynamic Route Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Bottom Editorial Masthead & Colophon */}
      <EditorialFooter />

      {/* Global Interactive Consultation / Detail Modal */}
      <EditorialModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        selectedZone={modalState.selectedZone}
        onClose={closeConsultation}
      />
    </div>
  );
};
