import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
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

  console.log('**', state)

  let loginDisplay = state.loggedIn ? (
    <Button onClick={state.logout}>Logout</Button>
  ) : (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <FormControl
          // type="email"
          placeHolder="Username"
          className="me-2"
          onChange={handleChange}
        />
      {/* </Form> */}
      {/* <Form> */}
      {/* <FormControl
          type="password"
          placeHolder="Password"
          className="me-2"
        /> */}
      <Button type="submit" variant="secondary">Login</Button>
      </Form>
    </Container>
  );


  return (
    <>
      <div>{loginDisplay}</div>
    </>
  );
};

export default AuthForm;
