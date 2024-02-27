import React from "react";
import { Controller, useFieldArray } from "react-hook-form";

const UserInformation = ({ control }) => {
  const { fields, append, remove } = useFieldArray({ control, name: "user" });

  return (
    <div className="container">
      <h2 className="text-center mb-4">User Information</h2>
      {fields.map((field, index) => (
        <form key={field.id} className="card mb-3">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
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
              <div className="col-md-6 mb-3">
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
            </div>
            {/* <div className="row mb-3">
              <div className="col-md-6 mb-3">
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
              <div className="col-md-6 mb-3">
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
              </div> */}
            {/* </div> */}
            <div className="text-center">
              <button
                onClick={() => remove(index)}
                className="btn btn-outline-danger me-2"
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      ))}
      <div className="text-center">
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            append({
              firstName: "DefaultFirstName",
              lastName: "DefaultLastName",
              //   email: "default@example.com",
              //   password: "defaultPassword123",
            })
          }
        >
          Add New Account
        </button>
      </div>
    </div>
  );
};

export default UserInformation;
