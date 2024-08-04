import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={css.contact}>
      <div>
        <p className={css.contactText}>{name}</p>
        <p className={css.contactText}>{number}</p>
      </div>
      <button className={css.contactBtn} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
