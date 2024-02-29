import React from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "./FormInput";
import ErrorMessage from "./ErrorMessage";

import useValidation from "./useValidation"; 

function FormHandling2() {
  const schema = useValidation();

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
