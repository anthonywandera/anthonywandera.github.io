import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const modalEl = document.getElementById("modal");

export default function Modal({ children }) {
  const modalRef = useRef();

  useEffect(() => {
    const modal = modalRef.current;

    modal.showModal();
  }, []);

  return createPortal(<dialog ref={modalRef}>{children}</dialog>, modalEl);
}
