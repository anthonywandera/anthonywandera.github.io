import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import {
  twitter_svg,
  instagram_svg,
  whatsapp_svg,
  mail_svg,
  send_svg,
} from "../../assets/Icons";

export default function Contact() {
  return (
    <section className="section-contact" id="contact">
      <h2>Talk to me</h2>
      <h3>Contact Me</h3>
      <div className="contact-options">
        <form className="write-to-me">
          <p className="input-1">
            <label htmlFor="clientName">Name</label>
            <input
              id="clientName"
              type="text"
              name="clientName"
              minLength="5"
              required
            />
          </p>
          <p className="input-2">
            <label htmlFor="clientEmail">Email</label>
            <input id="clientEmail" type="email" name="clientEmail" required />
          </p>
          <div className="input-3">
            <label htmlFor="clientMsg">Write to Me</label>
            <div>
              <textarea id="clientMsg" name="clientMsg" required />
              <button className="submit-btn" type="button">
                {send_svg}
              </button>
            </div>
          </div>
        </form>
        <div className="other-options">
          <h2>Reach me Through</h2>
          <ul>
            <li>{twitter_svg}Twitter</li>
            <li>{instagram_svg}Instagram</li>
            <li>{whatsapp_svg}Whatsapp</li>
            <li>{mail_svg}Email</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
