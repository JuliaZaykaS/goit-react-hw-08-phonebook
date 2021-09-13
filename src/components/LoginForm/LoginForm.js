import {useState} from 'react';
import s from './LoginForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';


export default function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        return setUserEmail(value);
      case 'password':
        return setuserPassword(value);
      default:
        return;
    }
  }

  const onSubmitLogin = e => {
    e.preventDefault();
    setUserEmail('');
    setuserPassword('');
    dispatch(logIn({userEmail,userPassword}))
  }

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <label>
          Email
          <input
            type="email"
            name='email'
            required
            value={userEmail}
            onChange={onChangeInput}
          />
        </label>
        <label>
          Password
          <input
            type="password"
           name='password'
            required
            value={userPassword}
            onChange={onChangeInput}
          />
        </label>
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}
