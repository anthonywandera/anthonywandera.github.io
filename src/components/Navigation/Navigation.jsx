import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import { instagram_svg, linkedin_svg, twitter_svg } from "../../assets/Icons";

export default function Navigation() {
  return (
    <nav className="navigation-bar">
      <h1 className="initials">AW.</h1>
      <ul>
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
