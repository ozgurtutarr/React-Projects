import { useState } from 'react';
import './ModalPopup.css';

const ModalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modal-container">
      <h2>Modal Popup</h2>
      <button onClick={toggleModal} className="open-modal-btn">
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Hello!</h3>
              <button onClick={toggleModal} className="close-modal-btn">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>This is a simple modal popup.</p>
              <p>
                You can close it by clicking the X button, or clicking outside
                the modal content.
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={toggleModal} className="close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPopup;
