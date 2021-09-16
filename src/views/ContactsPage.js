import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import TechInfo from '../components/TechInfo/TechInfo';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilteredContacts,
  getFilter,
  getError,
  getIsLoading,
} from '../redux/contacts/contact-selectors';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContacts,
} from '../redux/contacts/contact-operations';
import { filterContacts } from '../redux/contacts/contact-actions';

export default function ContactsPage() {
  const contactsList = useSelector(getFilteredContacts);
  const filteredContacts = useSelector(getFilter);
  const errorMessage = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  const onDeleteContact = id => dispatch(deleteContacts(id));
  const findName = e => {
    dispatch(filterContacts(e.target.value));
  };


  return (
    <>
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
    </>
  );
}
