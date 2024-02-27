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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                {...register("firstName")}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
              />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                {...register("lastName")}
                placeholder="Last Name"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
              {errors.lastName && (
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="Email Address"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email?.message}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                {...register("password")}
                placeholder="Password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Create New Account
            </button>
          </form>
        </div>
      </div>
      <UserInformation control={control} handleSubmit={handleSubmit} />
    </div>
  );
}

export default SignUp;
