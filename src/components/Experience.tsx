const Experience = () => {
  const rolesInFl = [
    {
      role: "R6 Competitive Booster",
    },
    {
      role: "Made houses using Java",
    },
    {
      role: "Valorant Account Booster",
    },
  ];

  return (
    <>
      <h1 className="mb-3 text-white">Work Experience</h1>
      <h4 className="mb-2 text-light">
        Freelancer | 2020 - Present
      </h4>
      <ul className="list-group list-group-flush">
        {rolesInFl.map((roleInFl, index) => (
          <li key={index} className="list-group-item bg-dark text-light">
            {roleInFl.role}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Experience;