import React from "react";

function AddUserButton({ append }) {
  return (
    <div className="text-center">
      <button
        className="btn btn-primary"
        onClick={() =>
          append({
            firstName: "DefaultFirstName",
            lastName: "DefaultLastName",
          })
        }
      >
        Add New Account
      </button>
    </div>
  );
}

export default AddUserButton;
