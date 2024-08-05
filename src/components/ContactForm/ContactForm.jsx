import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formElem = event.currentTarget.elements;

    const name = formElem.profileName.value;
    const number = formElem.profileNumber.value;

    const profileObj = { name, number };

    onAdd(profileObj);
    event.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <span className={css.formText}>Name</span>
          <input
            className={css.formData}
            type="text"
            name="profileName"
            required
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formText}>Phone</span>
          <input
            className={css.formData}
            type="tel"
            name="profileNumber"
            required
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
