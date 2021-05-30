import React from "react";

const Person = ({ person, handleDelete }) => (
  <div>
    {person.name}: {person.number}{" "}
   
  </div>
);

export default Person;