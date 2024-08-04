import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formElem = event.currentTarget.elements;
    console.log(formElem);

    const name = formElem.profileName.value;
    const phone = formElem.profileNumber.value;
    const profileObj = { name, phone };
    console.log(profileObj);

    event.currentTarget.reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
