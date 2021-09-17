import { useDispatch } from "react-redux";
import { logOut } from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';

export default function UserMenu({ userMail }) {
    const dispatch = useDispatch();
    const onBtnClick = e => {
        dispatch(logOut());
    }
    return (
        <div>
            <p>Hello, {userMail}</p>
            {/* <Button variant="primary">Primary</Button> */}
            {/* <button type='button' onClick={onBtnClick}>Log out</button> */}
            <Button variant="outline-primary" onClick={onBtnClick}>Log out</Button>
            {/* <button type='button' onClick={()=>dispatch(logOut())}>Log out</button> */}

        </div>
    )
}
