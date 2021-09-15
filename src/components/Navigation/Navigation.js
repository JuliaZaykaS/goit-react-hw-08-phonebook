import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn, getUserName } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userEmail = useSelector(getUserName);

  return (
    <nav>
      <NavLink exact to="/">
        Main
      </NavLink>

      {isLoggedIn ? (
        <>
          <UserMenu userMail={userEmail} />
          <NavLink to="/contacts">Phonebook</NavLink>
        </>
      ) : (
        <>
          <NavLink exact to="/login">
            LogIn
          </NavLink>
          <NavLink to="/register">Registration</NavLink>
        </>
      )}
    </nav>
  );
}
