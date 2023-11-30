'use client';

import { useState, PropsWithChildren } from 'react';

import s from './Modal.module.scss';

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        {children}
        <button className={s.closeButton} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
