import React, { useState } from "react";

const NewPersonForm = ({ addNewPerson }) => {
  const [newName, setNewName] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newName.trim() === "") return;
    addNewPerson({ name: newName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={({ target }) => setNewName(target.value)}
        />
      </div>
     
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewPersonForm;