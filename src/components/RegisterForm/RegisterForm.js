import { useState } from 'react';
import s from './RegisterForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
// console.log(register);
// export const RegisterForm = () => {
  export default function RegisterForm () {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setuserPassword] = useState('');

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        // return setUserName(value);
        return setName(value);
      case 'email':
        return setEmail(value);
        // return setUserEmail(value);
      case 'password':
        return setPassword(value);
        // return setuserPassword(value);
      default:
        return;
    }
  };

  const onSubmitRegister = e => {
      e.preventDefault();
    //   dispatch(register({ userName, userEmail, userPassword }));
    dispatch(register({ name, email, password }));
    // console.log(name);
    setName('');
    setEmail('');
    setPassword('');
    // setUserName('');
    // setUserEmail('');
    // setuserPassword('');
  };
  return (
    <div>
      <form onSubmit={onSubmitRegister}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={name}
            // value={userName}
            onChange={onChangeInput}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            // value={userEmail}
            value={email}
            onChange={onChangeInput}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            required
            value={password}
            // value={userPassword}
            onChange={onChangeInput}
          />
              </label>
              <button type='submit'>Registration</button>
      </form>
    </div>
  );
};
