import React, { useState } from 'react';
import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import { SettingsContext } from './context/settings';

const App = () => {
  const [setting, setSetting] = useState({
    list: [],
    incomplete: [],
    pageNumber: 1,
    maxPageNumber: 3,
  })

  return (
    <SettingsContext.Provider value={{ setting, setSetting }}>
      <Header />
      <ToDo />
    </SettingsContext.Provider>
  );
}

export default App;
