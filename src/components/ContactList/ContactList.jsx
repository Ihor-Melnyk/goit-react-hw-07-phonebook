import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import style from './Contact.module.scss';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const normalizedFilter = filter.toLowerCase();
  const contactsByFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <ul className={style.list}>
      {contactsByFilter.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
export default ContactList;
