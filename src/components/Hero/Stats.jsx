import { useSelector } from "react-redux";

export default function Stats() {
  const projects = useSelector((state) => {
    return state.projects;
  });

  const clients = projects.reduce((client, project) => {
    client.push(project.client);
    return client;
  }, []);

  const absClients = new Set(clients);

  return (
    <div className="stats">
      <ul>
        <li>
          <span className="numbers">{absClients.size}</span> Direct Client
          {absClients.size === 1 ? "" : "s"}
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
