import React, { FC, useState, useEffect } from "react";
import "./CustomModal.scss";

interface Props {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}

/**
 * Dynamic multi use case modal
 * @param param0
 * @returns
 * @author will-oracions <oracions.dev@gmail.com>
 */
const CustomModal: FC<Props> = ({
  isOpen,
  onClose,
  children,
  title,
  footer,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <div id="app-custom-modal">
      {isModalOpen && (
        <div
          className={`modal-overlay ${isModalOpen ? "open" : ""}`}
          onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-header-title">{title}</h4>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">{children}</div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModal;
