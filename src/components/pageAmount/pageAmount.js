import React, { useContext } from 'react';
import { SettingsContext } from '../../context/settings';
import { Button, Container } from 'react-bootstrap';

const PageAmount = () => {
  const { setting, setSetting } = useContext(SettingsContext);
  return (
    <>
      <Container className="text-center">
        Items Per Page
        <Button className="m-2" variant="secondary" onClick={() => setSetting({ ...setting, maxPageNumber: 3 })}>3</Button>
        <Button variant="secondary" onClick={() => setSetting({ ...setting, maxPageNumber: 5 })}>5</Button>
      </Container>
    </>
  );
}

export default PageAmount;
