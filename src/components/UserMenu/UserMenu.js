import { useDispatch } from "react-redux";
import { logOut } from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import s from './UserMenu.module.css';

export default function UserMenu({ userMail }) {
    const dispatch = useDispatch();
    const onBtnClick = e => {
        dispatch(logOut());
    }
    return (
        <div className={s.navGreetings}>
            <p className={s.greetings}>Hello, {userMail}</p>
            {/* <Button variant="primary">Primary</Button> */}
            {/* <button type='button' onClick={onBtnClick}>Log out</button> */}
            <Button variant="outline-light" onClick={onBtnClick} className={s.button}>Log out</Button>
            {/* <button type='button' onClick={()=>dispatch(logOut())}>Log out</button> */}

        </div>
    )
}
