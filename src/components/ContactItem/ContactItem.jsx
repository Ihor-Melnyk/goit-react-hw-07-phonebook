import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/itemsSlice';
import style from './ContactItem.module.scss';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContacts(id));
  };
  return (
    <li className={style.item}>
      {name}: <span>{number}</span>
      <button type="button" className={style.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
