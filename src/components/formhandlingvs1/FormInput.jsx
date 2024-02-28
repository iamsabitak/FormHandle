import React from "react";

function FormInput({ label, type, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={`Enter your ${name}`}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
