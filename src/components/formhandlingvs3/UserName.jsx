import React from "react";
import { Controller } from "react-hook-form";

function UserName({ index, control }) {
  return (
    <div className="row mb-3">
      <div className="col-md-6 mb-3">
        <Controller
          name={`user.${index}.firstName`}
          control={control}
          defaultValue="defaultFirstName"
          render={({ field }) => (
            <input
              {...field}
              type="firstName"
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
          defaultValue="defaultlastName"
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
  );
}

export default UserName;
