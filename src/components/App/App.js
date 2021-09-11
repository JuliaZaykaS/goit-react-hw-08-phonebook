import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import TechInfo from '../TechInfo/TechInfo';
import {
  getFilteredContacts,
  getFilter,
  getError,
  getIsLoading,
} from '../../redux/selectors';
import { fetchContacts, deleteContacts } from '../../redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getFilteredContacts);
  const filteredContacts = useSelector(getFilter);
  const errorMessage = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const onDeleteContact = id => dispatch(deleteContacts(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const findName = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <Section title={'Phonebook'}>
        <ContactForm />
        <h2>Contacts</h2>

        <Filter value={filteredContacts} onFindName={findName} />
        {errorMessage && <TechInfo message={errorMessage} />}
        {isLoading && <TechInfo message={'Loading...'} />}
        {contactsList.length !== 0 && (
          <ContactList contacts={contactsList} onBtnClick={onDeleteContact} />
        )}
      </Section>
    </div>
  );
}
