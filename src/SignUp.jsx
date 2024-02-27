import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import UserInformation from "./UserInformation";

function SignUp() {
  const nameRegex = /^[^\d]{2,}$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .matches(nameRegex, "First Name must not contain numbers")
      .required("First Name is required"),
    lastName: yup
      .string()
      .min(2, "Last Name must be at least 2 characters")
      .matches(nameRegex, "Last Name must not contain numbers")
      .required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8)
      .matches(passwordRegex, "Invalid password format")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="d-grid gap-2 col-3 mx-auto">
        <h2>Basic Information</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            />
            {errors.firstName && (
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last Name"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email?.message}</div>
            )}
          </div>
          <div className="col">
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password?.message}</div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto"
        >
          Create New Account
        </button>
      </form>
      <UserInformation control={control} />
    </>
  );
}

export default SignUp;




