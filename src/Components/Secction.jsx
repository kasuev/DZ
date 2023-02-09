import React from "react";

const Secction = ({ users }) => {
  return (
    <>
      {users.map((item) => {
        return (
          <ul>
            <li>{item.name}</li>
            <li>{item.lastName}</li>
            <li>{item.age}</li>
            <li>{item.id}</li>
          </ul>
        );
      })}
    </>
  );
};
export default Secction;
