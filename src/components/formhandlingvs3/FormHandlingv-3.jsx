import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserInformation from "./UserInformation";
import FormComponent from "./FormComponent";
import useValidations from "./useValidations";

function FormHandling3() {
  const schema = useValidations();

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
