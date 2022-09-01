import { IoIosSearch } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import style from './Filter.module.scss';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label className={style.label} htmlFor="">
      {<IoIosSearch />} Find contacts by name
      <input
        className={style.input}
        type="text"
        placeholder="find contact"
        value={filterValue}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
