import React, { useEffect, useRef, useState } from "react";

function ControlledComponent() {
  // Defined state to hold the input value
  const [name, setName] = useState("");
  const inputRef = useRef();

  // Added event handler to update the state when input changes
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Rendered the input field with controlledvalue by state
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Full Name"
        value={name}
        onChange={handleChange}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default ControlledComponent;
