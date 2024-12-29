import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const modalEl = document.getElementById("modal");

export default function Modal({ children, open, handleClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const modal = modalRef.current;

    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={modalRef} onClose={handleClose}>
      <button className="closeModal" onClick={handleClose}>
        X
      </button>
      {children}
    </dialog>,
    modalEl
  );
}
