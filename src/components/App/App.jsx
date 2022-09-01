import ContactList from '../ContactList/ContactList';
import Filter from '../Filter';
import ContactForm from '../Form/Form';
import style from './App.module.scss';

export const App = () => {
  return (
    <div className={style.container}>
      <div className={style.img}></div>
      <h1 className={style.titlePrimary}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.titleSecondary}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
