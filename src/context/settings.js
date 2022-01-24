import { createContext, useState } from 'react';
export const SettingsContext = createContext({});

export default function SettingsProvider(props) {
  const [setting, setSetting] = useState({
    list: [],
    incomplete: [],
    pageNumber: 1,
    maxPageNumber: 3,
  })

  const state = {
    setting,
    setSetting,
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}


