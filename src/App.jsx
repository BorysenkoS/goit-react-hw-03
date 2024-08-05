import "./App.css";
import usersData from "./users.json";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState(usersData);

  const addUser = (newUser) => {
    const finalProfile = {
      id: nanoid(),
      ...newUser,
    };

    setUsers(() => {
      return [finalProfile, ...users];
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox />
      <ContactList users={users} />
    </>
  );
};

export default App;
