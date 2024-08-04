import "./App.css";
import usersData from "./users.json";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState(...usersData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElem = event.currentTarget.elements;
    console.log(formElem);

    const name = formElem.profileName.value;
    const number = formElem.profileNumber.value;
    const profileObj = { name, number };
    console.log(profileObj);

    const finalProfile = {
      ...profileObj,
      id: nanoid(),
    };
    console.log(finalProfile);

    event.currentTarget.reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox />
      <ContactList usersData={usersData} />
    </>
  );
};

export default App;
