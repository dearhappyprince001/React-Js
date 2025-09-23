import React, { useState } from "react";

function Checkboxes() {
  const [skills, setSkills] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div>
      <h2>Checkbox Example</h2>
      <input
        type="checkbox"
        value="React"
        checked={skills.includes("React")}
        onChange={handleCheckboxChange}
      />
      React
      <input
        type="checkbox"
        value="Java"
        checked={skills.includes("Java")}
        onChange={handleCheckboxChange}
      />
      Java
      <input
        type="checkbox"
        value="Python"
        checked={skills.includes("Python")}
        onChange={handleCheckboxChange}
      />
      Python
      <p>Selected Skills: {skills.join(", ") || "None"}</p>
    </div>
  );
}

export default Checkboxes;
