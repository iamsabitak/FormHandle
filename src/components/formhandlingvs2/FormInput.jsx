import React from "react";

function FormInput({ label, type, id, placeholder, register }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}

export default FormInput;
