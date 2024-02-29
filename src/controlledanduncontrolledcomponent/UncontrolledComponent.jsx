import React, { useEffect, useRef } from "react";

function UncontrolledComponent() {
  // Created a ref to hold a reference to the input DOM element
  const inputRef = useRef(null);

  // Event handler to access input value directly from the DOM
  const handleClick = () => {
    alert("Hello" + inputRef.current.value);
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Rendered the input field without controlling its value via state
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Full Name</button>
    </div>
  );
}

export default UncontrolledComponent;
