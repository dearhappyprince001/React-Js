import React, { useState } from "react";

function Dropdown() {
  const [country, setCountry] = useState("");

  return (
    <div>
      <h2>Dropdown Example</h2>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">-- Select Country --</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <p>Selected Country: {country || "None"}</p>
    </div>
  );
}

export default Dropdown;
