const Skills = () => {
    const skills = [
      { skill: "Laravel Framework" },
      { skill: "Django Framework" },
      { skill: "React" },
      { skill: "PHP" },
      { skill: "MySQL" },
      { skill: "TypeScript" },
      { skill: "JavaScript" },
      { skill: "Python" },
    ];
  
    return (
      <>
        <h1 className="mb-3 text-white">Skills</h1>
        <ul className="list-group list-group-flush">
          {skills.map((skill, index) => (
            <li key={index} className="list-group-item bg-dark text-light">
              {skill.skill}
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default Skills;