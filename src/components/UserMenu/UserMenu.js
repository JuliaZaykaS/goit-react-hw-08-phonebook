import { useDispatch } from "react-redux";
import { logOut } from '../../redux/auth/auth-operations';

export default function UserMenu({ userMail }) {
    const dispatch = useDispatch();
    const onBtnClick = e => {
        dispatch(logOut());
    }
    return (
        <div>
            <p>Hello, {userMail}</p>
            <button type='button' onClick={onBtnClick}>Log out</button>
            {/* <button type='button' onClick={()=>dispatch(logOut())}>Log out</button> */}

        </div>
    )
}
