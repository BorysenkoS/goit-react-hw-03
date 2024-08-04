import Contact from "../Contact/Contact";

const ContactList = ({ usersData }) => {
  return usersData.map((user) => {
    return <Contact key={user.id} name={user.name} number={user.number} />;
  });
};

export default ContactList;
