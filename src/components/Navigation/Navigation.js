import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';


export default function Navigation() {
    return (
        <nav>
            <NavLink exact to='/'>Main</NavLink>
            <NavLink to='/contacts'>Phonebook</NavLink>
            <UserMenu/>

        </nav>
    )
}
