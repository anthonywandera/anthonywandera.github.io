import { send_svg } from "../../assets/Icons";

export default function Contact() {
  return (
    <section className="section-contact centered" id="contact">
      <div>
        <h2>Talk to me</h2>
        <h3>Contact Me</h3>
      </div>
      <div className="contact-options">
        <form className="write-to-me">
          <input
            className="input-firstname"
            id="firstName"
            type="text"
            name="firstName"
            minLength="5"
            placeholder="First Name"
            required
          />

          <input
            className="input-lastname"
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />

          <input
            className="input-email"
            id="clientEmail"
            type="email"
            name="clientEmail"
            placeholder="Email"
            required
          />

          <input
            className="input-subject"
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <div className="input-msg">
            <textarea
              id="clientMsg"
              name="clientMsg"
              placeholder="Message"
              required
            />
            <button className="submit-btn" type="button">
              {send_svg}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
