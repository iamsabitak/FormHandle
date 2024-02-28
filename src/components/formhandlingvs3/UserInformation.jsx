import React from "react";
import { useFieldArray } from "react-hook-form";
import UserCard from "./UserCard";
import AddUserButton from "./AddUserButton";
import UserEmailAndPassword from "./UserEmailAndPassword";

function UserInformation({ control }) {
  const { fields, append, remove } = useFieldArray({ control, name: "user" });

  return (
    <div className="container">
      <h2 className="text-center mb-4">User Information</h2>
      {fields.map((_, index) => (
        <UserCard key={index} index={index} control={control} remove={remove}>
          <UserEmailAndPassword index={index} control={control} />
        </UserCard>
      ))}
      <AddUserButton append={append} />
    </div>
  );
}

export default UserInformation;
