import React from "react";
import InputField from "./InputField";

function FormComponent({ handleSubmit, errors, register }) {
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="firstName"
        register={register}
        error={errors.firstName}
        placeholder="First Name"
      />
      <InputField
        type="text"
        name="lastName"
        register={register}
        error={errors.lastName}
        placeholder="Last Name"
      />
      <InputField
        type="email"
        name="email"
        register={register}
        error={errors.email}
        placeholder="Email Address"
      />
      <InputField
        type="password"
        name="password"
        register={register}
        error={errors.password}
        placeholder="Password"
      />
      <button type="submit" className="btn btn-primary btn-block">
        Log In
      </button>
    </form>
  );
}

export default FormComponent;
