import Project from "./Project";
import { projectData } from "../../dummy-api";
import { useEffect, useState } from "react";
import { left_svg, loader_svg, right_svg } from "../../assets/Icons";

const ApiData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(projectData);
  }, 5000);
});

let projects = [];
let projectsPerPage = 6;
let totalPages = null;

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectList, setProjectList] = useState();
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    async function getApiData() {
      projects = await ApiData;
      totalPages = Math.ceil(projects.length / projectsPerPage);

      const x = projects.slice(
        (curPage - 1) * projectsPerPage,
        curPage * projectsPerPage
      );

      setProjectList(x);
      setIsLoading(false);
    }

    getApiData();
  }, [curPage]);

  let displayData = "";

  if (projectList && projectList.length > 0) {
    displayData = projectList.map(({ title, image }) => {
      return <Project key={title} title={title} image={image} />;
    });
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
