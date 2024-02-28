import React from "react";
import { Controller } from "react-hook-form";

function UserEmailAndPassword({ index, control }) {
  return (
    <div className="row mb-3">
      <div className="col-md-6 mb-3">
        <Controller
          name={`user.${index}.email`}
          control={control}
          defaultValue=""
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
          defaultValue=""
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
    </div>
  );
}

export default UserEmailAndPassword;
