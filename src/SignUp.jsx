import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

function SignUp() {
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[^\d]{2,}$/;

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .matches(nameRegex, "FirstName must not contain numbers")
      .required("FirstName is required"),
    lastName: yup
      .string()
      .min(2, "LastName must be at least 2 characters")
      .matches(nameRegex, "LastName must not contain numbers")
      .required("LastName is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().min(8).required("Password is Required"),
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
      <h2>Basic Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Enter Your First name"
            {...register("firstName")}
          />
          {errors.firstName && <span>{errors.firstName?.message}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Last name"
            {...register("lastName")}
          />
          {errors.lastName && <span>{errors.lastName?.message}</span>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Your E-mail Address"
            {...register("email")}
          />
          {errors.email && <span>{errors.email?.message}</span>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password?.message}</span>}
        </div>
        <UserInformation
          register={register}
          control={control}
          handleSubmit={handleSubmit}
        />
        <br />
        <button type="submit">Create New Account</button>
      </form>
    </>
  );
}

export default SignUp;

const UserInformation = ({ register, control }) => {
  const { append, remove, fields } = useFieldArray({
    control,
    name: "user",
  });

  return (
    <>
      <h2>User Information</h2>
      {fields.map((index, item) => (
        <div key={index.id}>
          <input
            id="firstName"
            type="text"
            placeholder="Enter Your First name"
            {...register(`user.${index}.firstName`)}
          />

          <input
            id="lastName"
            type="text"
            placeholder="Enter Your Last name"
            {...register(`user.${index}.lastName`)}
          />

          <button onClick={() => remove(index)}>delete</button>
        </div>
      ))}
      <button
        onClick={() => append({ firstName: "Sabita", lastName: "Khadka" })}
      >
        Add New Account
      </button>
    </>
  );
};
