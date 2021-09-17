import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn, getUserName } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import { Navbar, Container, Nav, } from 'react-bootstrap';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userEmail = useSelector(getUserName);

  return (
    <>
    <Navbar bg="primary" variant="dark" sticky='top' className={s.navigation}>
    <Container>
    <Navbar.Brand exact='true' to="/">Phonebook</Navbar.Brand>
    <Nav className="me-auto">
            {/* <Nav.Link exact to="/">Home</Nav.Link> */}
            <Nav.Link exact='true' href="/">Home</Nav.Link>
            {isLoggedIn ? (
              <>
                {/* <Nav.Link to="/contacts">Phonebook</Nav.Link> */}
                <Nav.Link href="/contacts">Phonebook</Nav.Link>
                <UserMenu userMail={userEmail} />
              </>
            ) : (
              <>
                {/* <Nav.Link exact to="/login">LogIn</Nav.Link> */}
                <Nav.Link exact='true' href="/login">LogIn</Nav.Link>
                {/* <Nav.Link to="/register">Registration</Nav.Link> */}
                <Nav.Link href="/register">Registration</Nav.Link>
              </>
            )}
    </Nav>
    </Container>
      </Navbar>
      </>
    // <nav>
    //   <NavLink exact to="/">
    //     Main
    //   </NavLink>

    //   {isLoggedIn ? (
    //     <>
    //       <UserMenu userMail={userEmail} />
    //       <NavLink to="/contacts">Phonebook</NavLink>
    //     </>
    //   ) : (
    //     <>
    //       <NavLink exact to="/login">
    //         LogIn
    //       </NavLink>
    //       <NavLink to="/register">Registration</NavLink>
    //     </>
    //   )}
    // </nav>
  );
}
