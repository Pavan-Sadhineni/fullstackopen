import React, { useState, useEffect } from "react";

import personService from "./services/persons";

import NewPersonForm from "./components/NewPersonForm";
//import FilterInput from "./components/FilterInput";
import Persons from "./components/Persons";
//import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => console.error(error));
  }, []);

  const addNewPerson = (newPerson) => {
   
    

    personService
      .create(newPerson)
      .then((returnedPerson) => {
        setPersons([...persons, returnedPerson]);
       
       
      })
      .catch((error) => {
        
        console.error(error);
      });
  };

  

  

  return (
    <div>
      <h1>Phonebook</h1>
     
      
      <NewPersonForm addNewPerson={addNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;