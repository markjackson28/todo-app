import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="text-center" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
