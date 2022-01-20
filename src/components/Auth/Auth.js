import { Form, FormControl, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const state = useContext(AuthContext);

  const handleChange = (e) => {
    setUsername(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    state.login(username)
  }

  let loginDisplay = state.loggedIn ? (
    <Button onClick={state.logout}></Button>
  ) : (
    <>
      <Form>
        <FormControl
          type="email"
          placeHolder="Username"
          className="me-2"
          onChange={handleChange}
        />
      </Form>
      <Form>
        <FormControl
          type="password"
          placeHolder="Password"
          className="me-2"
        />
      </Form>
      <Button variant="secondary">Login</Button>
    </>
  );


  return (
    <>
      {loginDisplay}
    </>
  );
};

export default AuthForm;
