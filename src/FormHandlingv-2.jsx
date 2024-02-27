import React from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

function FormHandling() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[^\d]{2,}$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  // const schema = yup
  //   .object({
  //     name: yup.string(2).min(2).required(),
  //     email: yup.string().email().required(),
  //     password: yup
  //       .min(8)
  //       .max(32)
  //       .required("password")
  //       .matches(passwordRegex),
  //   })
  //   .required();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .matches(nameRegex, "Name must not contain numbers")
      .required("Name is required"),
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
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  //   console.log(watch("name", "email", "password"));
  // const style = {
  //   color: "black",
  //   border: "1px solid grey",
  //   width: "200px",
  //   fontFamily: "roboto",
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register("name", { pattern: nameRegex })}
          placeholder="Enter your name"
        />

        {errors.name && <span>{errors.name?.message}</span>}

        <br />
        <label htmlFor="email">Email:</label>
        <input
        type="email"
        id="email"
          {...register("email", { pattern: emailRegex })}
          placeholder="Enter your email"
        />

        {errors.email && <span>{errors.email?.message}</span>}

        <br />
        <label htmlFor="password">Password:</label>
        <input
        type="password"
        id="password"
          {...register("password", { pattern: passwordRegex })}
          placeholder="Enter your password"
        />

        {errors.password && <span>{errors.password?.message}</span>}

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormHandling;

// 1 fieldarray
// 2 controller
