import image from "./img/hero.png";

export default function Content() {
  return (
    <div className="content">
      <div className="description">
        <p className="greeting">Hello!</p>
        <p className="introduction">
          {"I'm"} <span className="names">Anthony Wandera</span>
        </p>
        <p className="profession">UI/UX Frontend Web Developer</p>
        <menu className="actions">
          <button href="#">Hire Me</button>
          <button href="#">My Work</button>
        </menu>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
