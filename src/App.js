import React, { useState } from 'react';
import ToDo from './components/Todo/Todo.js';
import Header from './components/Header/Header';
import { SettingsContext } from './context/settings';
import AuthProvider from './context/authContext.js';
import Auth from './components/Auth/Auth';

const App = () => {
  const [setting, setSetting] = useState({
    list: [],
    incomplete: [],
    pageNumber: 1,
    maxPageNumber: 3,
  })

  return (
    <AuthProvider>
      <SettingsContext.Provider value={{ setting, setSetting }}>
        <Header />
        <Auth>
          <ToDo />
        </Auth>
      </SettingsContext.Provider>
   </AuthProvider>
  );
}

export default App;
