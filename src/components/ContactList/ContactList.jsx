import Contact from "../Contact/Contact";

const ContactList = ({ users }) => {
  return users.map((user) => {
    return <Contact key={user.id} name={user.name} number={user.number} />;
  });
};

export default ContactList;
