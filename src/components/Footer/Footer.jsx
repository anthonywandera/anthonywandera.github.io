import {
  twitter_svg,
  instagram_svg,
  whatsapp_svg,
  mail_svg,
} from "../../assets/Icons";

export default function Footer() {
  const year = new Date(Date.now()).getFullYear();
  return (
    <footer className="sect-footer">
      <div className="other-options">
        <ul>
          <li>{twitter_svg}</li>
          <li>{instagram_svg}</li>
          <li>{whatsapp_svg}</li>
          <li>{mail_svg}</li>
        </ul>
        <span className="copyright">Copyright &copy; {year}</span>
      </div>
    </footer>
  );
}
