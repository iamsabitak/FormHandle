import React, { useState } from "react";

function ControlledComponent() {
  // Defined state to hold the input value
  const [name, setName] = useState("Sabita");

  // Added event handler to update the state when input changes
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Rendered the input field with controlledvalue by state
  return (
    <div>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={handleChange}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default ControlledComponent;
