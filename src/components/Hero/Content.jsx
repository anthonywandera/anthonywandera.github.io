import { useState } from "react";

import Modal from "../Modal/Modal";
import image from "./img/hero.png";

export default function Content() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  const modalContent = (
    <main className="hire-me-dialog">
      <h2>Get my services through</h2>
      <ul className="freelance-accounts">
        <a href="https://www.upwork.com/freelancers/~0155756560a990066d?mp_source=share">
          <li>Upwork</li>
        </a>
        <a href="">
          <li>Fiverr</li>
        </a>
        <a href="">
          <li>LinkedIn</li>
        </a>
      </ul>
    </main>
  );

  function handleScrollTo(e) {
    const btnEl = e.target;
    const targetDestination = document.querySelector(btnEl.dataset.dest);

    targetDestination.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="content">
      {openModal && (
        <Modal open={openModal} handleClose={handleCloseModal}>
          {modalContent}
        </Modal>
      )}
      <div className="description">
        <p className="greeting">Hello!</p>
        <p className="introduction">
          {"I'm"} <span className="names">Anthony Wandera</span>
        </p>
        <p className="profession">UI/UX Frontend Web Developer</p>
        <menu className="actions">
          <button onClick={handleOpenModal}>Hire Me</button>
          <button data-dest="#projects" onClick={handleScrollTo}>
            My Work
          </button>
        </menu>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
