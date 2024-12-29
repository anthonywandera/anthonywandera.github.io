import { useState, useRef, useEffect } from "react";
import { loader_svg } from "../../assets/Icons";

export default function Project({ title, image }) {
  const [isLoading, setIsLoading] = useState(true);
  const projectImage = useRef();

  useEffect(() => {
    const targetImage = projectImage.current;

    targetImage.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="project">
      <figure>
        {isLoading && loader_svg}
        <img ref={projectImage} src={image} alt={title} hidden={isLoading} />
      </figure>
      <p className="title">{title}</p>
      <a href="#">Visit site</a>
    </div>
  );
}
