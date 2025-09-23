import React, { useState } from "react";

function RadioButtons() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <h2>Radio Button Example</h2>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>

      <p>Selected Gender: {gender || "None"}</p>
    </div>
  );
}

export default RadioButtons;
