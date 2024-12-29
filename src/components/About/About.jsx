import image from "./img/profile-img.jpg";

export default function About() {
  return (
    <section className="section-about" id="about">
      <img className="image-of-me" src={image} />
      <div className="content">
        <h2>Who Am I</h2>
        <h3>About Me</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio
          voluptatum reiciendis eum doloremque repudiandae porro voluptatem
          delectus. Tempora architecto iste nobis autem excepturi, laudantium
          laborum animi assumenda quas cupiditate.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Anthony Wandera</td>
            </tr>
            <tr>
              <td>Date of birth:</td>
              <td>June 09, 2005</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>Bungoma, Kenya</td>
            </tr>
            <tr>
              <td>Zip code:</td>
              <td>50200</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>email@example.com</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>+254712345678</td>
            </tr>
          </tbody>
        </table>
        <p className="actions">
          <a href="#">DOWNLOAD CV</a>
        </p>
      </div>
    </section>
  );
}
