import {useState} from 'react';
import s from './LoginForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import { Form, Button } from 'react-bootstrap';


export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }

  const onSubmitLogin = e => {
    e.preventDefault();
    dispatch(logIn({email,password}))
    setEmail('');
    setPassword('');
  }

  return (

    <>
      <Form onSubmit={onSubmitLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email'
            required
            value={email}
            onChange={onChangeInput} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label >Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" name='password'
            required
            value={password}
            onChange={onChangeInput} />
  </Form.Group>
  
  <Button variant="outline-primary" type="submit">
    Log In
  </Button>
</Form>
      {/* <form onSubmit={onSubmitLogin}>
        <label>
          Email
          <input
            type="email"
            name='email'
            required
            value={email}
            onChange={onChangeInput}
          />
        </label>
        <label>
          Password
          <input
            type="password"
           name='password'
            required
            value={password}
            onChange={onChangeInput}
          />
        </label>
        <button type='submit'>Log In</button>
      </form> */}
    </>
  );
}
