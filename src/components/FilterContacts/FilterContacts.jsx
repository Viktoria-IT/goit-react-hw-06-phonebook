import s from "components/FilterContacts/FilterContacts.module.css";
import { setFilterField } from "redux/phoneBook/phoneBook-actions";
import { connect } from "react-redux";


function FilterContacts({ setFilter, filter }) {
  return (
    <form className={s.findForm}>
      <label className={s.findFormLabel}>
        Find contacts by name
        <input type="text" name="filter" autoComplete="off" value={filter}
          onChange={event => {
            const data = event.target.value;
            setFilter(data);
          }
        } />
      </label>
    </form>
  );
}

const mapStateToProps = state => ({
  filter: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  setFilter: (data) => dispatch(setFilterField(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
