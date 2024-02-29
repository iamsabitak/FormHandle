import React, { useEffect, useState } from "react";

function GetApi() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setUser(data);
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {user.map((data) => (
        <>
          {" "}
          <ul key={data.id}>
            <li>Name:{data.name}</li>
            <li>Email:{data.email}</li>
          </ul>
        </>
      ))}
    </div>
  );
}

export default GetApi;
