import { Container, Navbar } from 'react-bootstrap';
import AuthForm from '../Auth/AuthForm';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <AuthForm />
      </Container>
    </Navbar>
  );
};

export default Header;
