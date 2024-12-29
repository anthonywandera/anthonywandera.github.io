export default function Skill({ label, value }) {
  return (
    <div className="skill" id={`skill-${label.toLowerCase()}`}>
      <div>
        <h4>{label.toUpperCase()}</h4>
        <span>{value}%</span>
      </div>
      <progress max="100" value={value} data-type={label} data-value={value} />
    </div>
  );
}
