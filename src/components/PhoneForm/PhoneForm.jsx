import { useState } from "react";
import { connect } from "react-redux";
import { addToContacts } from "redux/phoneBook/phoneBook-actions";
import s from "components/PhoneForm/PhoneForm.module.css";
import { v4 as uuidv4 } from "uuid";

function PhoneForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (e) => {
    const data = e.currentTarget.value;
    switch (e.currentTarget.name) {
      case "name":
        setName(data);
        break;
      case "number":
        setNumber(data);
        break;
      default:
        return;
    }
  };

  const addToContactsList = (e) => {
    e.preventDefault();
    const data = { id: `${uuidv4()}`, name, number };
    addContact(data);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={addToContactsList} className={s.form}>
      <label className={s.formLabel}>
        Name
        <input
          className={s.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={s.formLabel}>
        Number
        <input
          className={s.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button className={s.addToContacts} type="submit">
        Add to contacts
      </button>
    </form>
  );
}
const mapDispatchToProps = dispatch => ({
  addContact: (data) => dispatch(addToContacts(data))
})
export default connect(null,mapDispatchToProps )(PhoneForm);
