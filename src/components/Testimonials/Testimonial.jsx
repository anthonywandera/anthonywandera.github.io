import { useEffect, useRef, useState } from "react";
import { loader_svg } from "../../assets/Icons";

export default function Testimonial({ image, author, comment, style, render }) {
  const profile = useRef();
  const [isDownloading, setIsDownloading] = useState(true);

  useEffect(() => {
    const profileImg = profile.current;
    profileImg.addEventListener("load", () => {
      setIsDownloading(false);
    });
  }, []);

  console.log(render);

  return (
    <div className="testimonial" style={style}>
      <figure>
        {isDownloading && loader_svg}
        <img
          ref={profile}
          src={image}
          alt={author}
          hidden={isDownloading || !render}
        />
      </figure>
      <article>
        <p className="comment">{comment}</p>
        <p className="author">{author}</p>
      </article>
    </div>
  );
}
