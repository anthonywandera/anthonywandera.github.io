import Skill from "./Skill";
import { skillData } from "../../dummy-api";

export default function Skills() {
  return (
    <section className="section-skills" id="skills">
      <h2>What can I do</h2>
      <h3>My Skills</h3>
      <div className="skills">
        {skillData.map(({ label, value }) => {
          return <Skill key={label} label={label} value={value} />;
        })}
      </div>
    </section>
  );
}
