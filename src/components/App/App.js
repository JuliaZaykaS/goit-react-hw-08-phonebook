import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contact-actions';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import TechInfo from '../TechInfo/TechInfo';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import Navigation from '../Navigation/Navigation';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import {
  getFilteredContacts,
  getFilter,
  getError,
  getIsLoading,
} from '../../redux/contacts/contact-selectors';
import { fetchContacts, deleteContacts } from '../../redux/contacts/contact-operations';

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
    <>
      <PublicRoute exact path='/'>
        <Navigation />
      </PublicRoute>
      <PublicRoute exact path='register' restricted>
        <Section title={'Registration'}>
          <RegisterForm />
        </Section>
      </PublicRoute>
      <PublicRoute exact path='/login' restricted>
        <Section title={'Login'}>
          <LoginForm />
        </Section>
      </PublicRoute>
      <PrivateRoute path="/contacts">
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
      </PrivateRoute>
    </>
  );
}
