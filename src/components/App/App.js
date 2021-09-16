import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contact-actions';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import TechInfo from '../TechInfo/TechInfo';
// import { RegisterForm } from '../RegisterForm/RegisterForm';
import RegisterForm from '../RegisterForm/RegisterForm';
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
import {
  fetchContacts,
  deleteContacts,
} from '../../redux/contacts/contact-operations';
import { getIsCurrentUser } from '../../redux/auth/auth-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getFilteredContacts);
  const filteredContacts = useSelector(getFilter);
  const errorMessage = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const currentUser = useSelector(getIsCurrentUser);

  const onDeleteContact = id => dispatch(deleteContacts(id));

  useEffect(() => {
    // dispatch(fetchContacts());
    dispatch(getCurrentUser());
  }, [dispatch]);

  const findName = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      {currentUser ? (
        <>
        <Section title={'Phonebook'}></Section>
          {/* <Navigation /> */}
          </>
      ) : (
        <>
          <Navigation />
          <Switch>
            <PublicRoute exact path="/">
              <Section title={'Welcome to your wonderful phonebook'}></Section>
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <Section title={'Registration'}>
                <RegisterForm />
              </Section>
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <Section title={'Login'}>
                <LoginForm />
              </Section>
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <Section title={'Phonebook'}>
                <ContactForm />
                <h2>Contacts</h2>
                <Filter value={filteredContacts} onFindName={findName} />
                {errorMessage && <TechInfo message={errorMessage} />}
                {isLoading && <TechInfo message={'Loading...'} />}
                {contactsList.length !== 0 && (
                  <ContactList
                    contacts={contactsList}
                    onBtnClick={onDeleteContact}
                  />
                )}
              </Section>
            </PrivateRoute>
          </Switch>
        </>
      )}
    </>
  );
}
