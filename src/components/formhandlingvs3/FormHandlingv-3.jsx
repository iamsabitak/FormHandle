import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UserInformation from "./UserInformation";
import FormComponent from "./FormComponent";

function FormHandling3() {
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
    email: yup.string().email("Invalid email format").required("Email is required"),
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
          <h2 className="text-center mb-4">Sign In</h2>
          <FormComponent
            handleSubmit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
          />
        </div>
      </div>
      <UserInformation control={control} handleSubmit={handleSubmit} />
    </div>
  );
}

export default FormHandling3;
