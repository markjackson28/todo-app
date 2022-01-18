import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { SettingsContext } from '../../context/settings';

const Pages = () => {
  const { setting, setSetting } = useContext(SettingsContext);
  const totalPages = Math.ceil(setting.list.length / setting.maxPageNumber);
  const pages = [...Array(totalPages).keys()].map(item => item + 1);
  return (
    <div>
      {pages ? pages.map((item, index) => <Button className="m-1 center" key={index} onClick={() => setSetting({ ...setting, pageNumber: item })}>{item}</Button>) : null}
    </div>
  )
}

export default Pages;
