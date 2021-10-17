import s from "components/ContactList/ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "redux/phoneBook/phoneBook-actions";

const ContactList = ({contacts,filter, onDeleteItem }) => {
  const filtered = contacts.filter((contact) => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
  return (
    <ul className={s.list}>
      {filtered.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.deleteBtn}
              type="button"
              name="delete"
              onClick={()=>onDeleteItem(name)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter:state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onDeleteItem:(name)=>dispatch(deleteContact(name))
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);
