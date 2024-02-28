import React from "react";
function UserCard({ index, remove, children }) {
  return (
    <form key={index} className="card mb-3">
      <div className="card-body">
        {children}
        <div className="text-center">
          <button onClick={() => remove(index)} className="btn btn-danger me-2">
            Delete
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserCard;
