import { useSelector } from "react-redux";

export default function Stats() {
  const projects = useSelector((state) => {
    return state.projects;
  });

  return (
    <div className="stats">
      <ul>
        <li>
          <span className="numbers">280+</span> Direct Clients
        </li>
        <li>
          <span className="numbers">{projects.length}</span> Total Projects
        </li>
        <li>
          <span className="numbers">12</span> Digital Products
        </li>
        <li>
          <span className="numbers">16+ M</span> Lines of Code
        </li>
      </ul>
    </div>
  );
}
