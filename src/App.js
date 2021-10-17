import PhoneForm from "components/PhoneForm/PhoneForm";
import FilterContacts from "components/FilterContacts/FilterContacts";
import ContactList from "components/ContactList/ContactList";
import MainContainer from "components/MainContainer/MainContainer";
import {
  addToContacts,
  deleteContact,
  setFilterField,
} from "./redux/phoneBook/phoneBook-actions";
import { connect } from "react-redux";
import "./App.css";

function App({ value, filter, addContact, onDeleteItem, filterFieldHandler }) {
  localStorage.setItem("items", JSON.stringify(value));
  return (
    <>
      <MainContainer>
        <h1>Phonebook</h1>
        <PhoneForm />
        <h2>Contacts:</h2>
        <FilterContacts />
        <ContactList />
      </MainContainer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (value) => dispatch(addToContacts(value)),
    onDeleteItem: (value) => dispatch(deleteContact(value)),
    filterFieldHandler: (data) => dispatch(setFilterField(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
