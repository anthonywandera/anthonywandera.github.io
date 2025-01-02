import Project from "./Project";
import { useState, useRef } from "react";
import { left_svg, loader_svg, right_svg } from "../../assets/Icons";

import { useSelector } from "react-redux";

let totalPages = null;

export default function Projects() {
  const projects = useRef();
  const [curPage, setCurPage] = useState(1);
  const projectList = useSelector((state) => state.projects);
  const isLoading = useSelector((state) => state.isLoading);
  const projectsPerPage = useSelector((state) => state.projectsPerPage);

  let displayData = "";

  if (projectList && projectList.length > 0) {
    projects.current = projectList.map(({ url, ...props }) => {
      return <Project key={url} url={url} {...props} />;
    });

    displayData = projects.current.slice(
      (curPage - 1) * projectsPerPage,
      curPage * projectsPerPage
    );
    totalPages = Math.ceil(projectList.length / projectsPerPage);
  }

  if (projectList && projectList.length === 0) {
    displayData = <p className="status">No Projects to Show</p>;
  }

  function handleClickPrev() {
    setCurPage((prevState) => {
      if (prevState > 1) return prevState - 1;
      return prevState;
    });
  }

  function handleClickNext() {
    setCurPage((prevState) => {
      if (prevState < totalPages) return prevState + 1;
      return prevState;
    });
  }

  return (
    <section className="section-projects" id="projects">
      <h2>What I have done</h2>
      <h3>My Projects</h3>
      <div className="projects">
        {isLoading ? (
          <p className="status" hidden={isLoading}>
            {loader_svg}
          </p>
        ) : (
          displayData
        )}
        {displayData.length >= 1 && !isLoading && (
          <div className="pagination" hidden={isLoading}>
            <button onClick={handleClickPrev}>{left_svg}</button>
            Page {curPage} of {totalPages}
            <button onClick={handleClickNext}>{right_svg}</button>
          </div>
        )}
      </div>
    </section>
  );
}
