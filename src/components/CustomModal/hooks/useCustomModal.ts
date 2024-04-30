import React from "react";

export interface CustomModalType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useCustomModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useCustomModal;
