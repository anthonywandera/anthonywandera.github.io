import { useRef, useEffect } from "react";

import {
  close_svg,
  instagram_svg,
  linkedin_svg,
  menu_svg,
  twitter_svg,
} from "../../assets/Icons";

export default function Navigation() {
  const links = useRef();

  useEffect(() => {
    const linksEl = links.current;

    linksEl.addEventListener("click", (e) => {
      e.preventDefault();
      const targetEl = e.target;

      if (!targetEl.closest("a")) return;

      const href = targetEl.getAttribute("href");
      const targetDestination = document.querySelector(href);

      targetDestination.scrollIntoView({
        behavior: "smooth",
      });
    });
  }, []);

  function handleClick(e) {
    const navBarEl = e.target.closest(".navigation-bar");
    navBarEl.classList.toggle("show");
  }

  return (
    <nav className="navigation-bar centered">
      <h1 className="initials">AW.</h1>
      <button className="menu-drop-icon" onClick={handleClick}>
        <span className="open-menu">{menu_svg}</span>
        <span className="close-menu">{close_svg}</span>
      </button>
      <ul ref={links}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="contact-links">
          <a>{instagram_svg}</a>
          <a>{twitter_svg}</a>
          <a>{linkedin_svg}</a>
        </li>
      </ul>
    </nav>
  );
}
