import React, { useState, useEffect } from "react";

import personService from "./services/persons";

import NewPersonForm from "./components/NewPersonForm";
import FilterInput from "./components/FilterInput";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => console.error(error));
  }, []);

  const addNewPerson = (newPerson) => {
    const namesMatch = (person1, person2) =>
      person1.toLowerCase() === person2.toLowerCase();

    const person = persons.find((person) =>
      namesMatch(person.name, newPerson.name)
    );

    if (person) {
      if (
        window.confirm(
          `${newPerson.name} is already added to the phonebook. `
        )
      ) 
      return;
    }

    personService
      .create(newPerson)
      .then((returnedPerson) => {
        setPersons([...persons, returnedPerson]);
        setMessage({
          text: `Added ${returnedPerson.name}`,
          type: "success",
        });
        setTimeout(() => setMessage(null), 5000);
      })
      .catch((error) => {
        setMessage({ text: error.response.data.error, type: "error" });
        setTimeout(() => setMessage(null), 5000);
        console.error(error);
      });
  };

  

  const personsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <label>Search: </label>
      <FilterInput setFilter={setFilter} />
      <h2>Add new</h2>
      <NewPersonForm addNewPerson={addNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;