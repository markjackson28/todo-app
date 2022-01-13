import React, { useState } from 'react';

export const SettingContext = React.creatContext();

function Settings(props) {
  const [taskDisplay, setTaskDisplay] = useState(false);

  const state = { 
    taskDisplay,
    setTaskDisplay,
  }

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider>
  )
}

export default Settings;
