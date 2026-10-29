import React, { createContext, useContext, useState } from 'react';
import { ModalType } from './public/EditorialModal';

interface ConsultationContextType {
  openConsultation: (type?: ModalType, zone?: string) => void;
  closeConsultation: () => void;
  modalState: {
    isOpen: boolean;
    type: ModalType;
    selectedZone?: string;
  };
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: ModalType;
    selectedZone?: string;
  }>({
    isOpen: false,
    type: null,
    selectedZone: undefined,
  });

  const openConsultation = (type: ModalType = 'general', zone?: string) => {
    setModalState({
      isOpen: true,
      type,
      selectedZone: zone,
    });
  };

  const closeConsultation = () => {
    setModalState({
      isOpen: false,
      type: null,
      selectedZone: undefined,
    });
  };

  return (
    <ConsultationContext.Provider value={{ openConsultation, closeConsultation, modalState }}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};
