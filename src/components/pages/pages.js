import { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { SettingsContext } from '../../context/settings';

const Pages = () => {
  const { setting, setSetting } = useContext(SettingsContext);
  const totalPages = Math.ceil(setting.list.length / setting.maxPageNumber);
  const pages = [...Array(totalPages).keys()].map(item => item + 1);
  return (
    <Container className='text-center'>
      {pages ? pages.map((item, index) =>
          <Button className="m-1" key={index} onClick={() => setSetting({ ...setting, pageNumber: item })}>{item}</Button>
          ) : null}
    </Container>
    
  )
}

export default Pages;
