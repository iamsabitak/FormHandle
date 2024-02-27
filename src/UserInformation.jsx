import React from "react";
import { Controller, useFieldArray } from "react-hook-form";

const UserInformation = ({ control }) => {
  const { fields, append, remove } = useFieldArray({ control, name: "user" });

  return (
    <>
      <div className="d-grid gap-2 col-3 mx-auto">
        <h2>User Information</h2>
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className="row mb-3">
          <div className="col">
            <Controller
              name={`user.${index}.firstName`}
              control={control}
              defaultValue="DefaultFirstName"
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              name={`user.${index}.lastName`}
              control={control}
              defaultValue="DefaultLastName"
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              name={`user.${index}.email`}
              control={control}
              defaultValue="default@example.com"
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email Address"
                  className="form-control"
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              name={`user.${index}.password`}
              control={control}
              defaultValue="defaultPassword123"
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              )}
            />
          </div>
          <div className="col-auto align-self-center ">
            <button
              onClick={() => remove(index)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <button
        className="btn btn-outline-primary d-grid gap-2 col-6 mx-auto"
        onClick={() =>
          append({
            firstName: "DefaultFirstName",
            lastName: "DefaultLastName",
            email: "default@example.com",
            password: "defaultPassword123",
          })
        }
      >
        Add New Account
      </button>
    </>
  );
};
export default UserInformation;
