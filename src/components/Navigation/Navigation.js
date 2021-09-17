import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn, getUserName } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap';
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userEmail = useSelector(getUserName);

  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top" className={s.navigation}>
        <Container>
          <Navbar.Brand exact="true" to="/">
            Phonebook
          </Navbar.Brand>
          <Nav className="me-auto">
            <div className={s.navigationBar}>
              <Nav.Link exact="true" href="/" className={s.home}>
                Home
              </Nav.Link>
              {isLoggedIn ? (
                <div className={s.greetingsBox}>
                  <Nav.Link href="/contacts" className={s.phonebook}>
                    Phonebook
                  </Nav.Link>
                  <UserMenu userMail={userEmail} className={s.userMenu} />
                </div>
              ) : (
                <div className={s.entrance}>
                  <Nav.Link exact="true" href="/login">
                    LogIn
                  </Nav.Link>
                  <Nav.Link href="/register">Registration</Nav.Link>
                </div>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
