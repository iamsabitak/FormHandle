import React from "react";

function InputField({ type, name, register, error, placeholder }) {
  return (
    <div className="mb-3">
      <input
        type={type}
        name={name}
        {...register(name)}
        placeholder={placeholder}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  );
}

export default InputField;
