import { useState, useRef, useEffect } from "react";
import { loader_svg } from "../../assets/Icons";

export default function Project({ title, image, url, description, skills }) {
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
      <div className="about-project">
        <div className="project-info">
          <p className="project-description">{description}</p>
          <a href={url} target="_blank">
            Visit site
          </a>
          <p className="project-skills">
            {skills.map((skill) => {
              return (
                <span className="project-skill" key={skill}>
                  {skill}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
