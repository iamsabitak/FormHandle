import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "./FormInput";
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .matches(/^[^\d]{2,}$/, "Name must not contain numbers")
    .required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      "Invalid password format"
    )
    .required("Password is required"),
});

function FormHandling2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Name:"
          type="text"
          id="name"
          placeholder="Enter your name"
          register={register("name")}
        />
        <ErrorMessage message={errors.name?.message} />

        <FormInput
          label="Email:"
          type="email"
          id="email"
          placeholder="Enter your email"
          register={register("email")}
        />
        <ErrorMessage message={errors.email?.message} />

        <FormInput
          label="Password:"
          type="password"
          id="password"
          placeholder="Enter your password"
          register={register("password")}
        />
        <ErrorMessage message={errors.password?.message} />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormHandling2;
