import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Section from '../Section/Section';
import TechInfo from '../TechInfo/TechInfo';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import Navigation from '../Navigation/Navigation';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import {
  getIsCurrentUser,
  getError,
  getIsLoading,
} from '../../redux/auth/auth-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import ContactsPage from '../../views/ContactsPage';

export default function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(getIsCurrentUser);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {currentUser ? (
        <Section title={'Phonebook'}></Section>
      ) : (
        <>
          <Navigation />
          <Switch>
            <PublicRoute exact path="/">
              <Section title={'Welcome to your wonderful phonebook'}></Section>
            </PublicRoute>
            <PublicRoute exact path="/register" restricted redirectTo="/contacts">
              <Section title={'Registration'}>
                <RegisterForm />
                {isLoading && <TechInfo message={'Loading'} />}
                {error && <TechInfo message={error} />}
              </Section>
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <Section title={'Login'}>
                <LoginForm />
                {isLoading && <TechInfo message={'Loading'} />}
                {error && <TechInfo message={error} />}
              </Section>
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              {isLoading ? <TechInfo message={'Loading'} /> : <ContactsPage />}
            </PrivateRoute>
          </Switch>
        </>
      )}
    </>
  );
}
