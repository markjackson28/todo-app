import { createContext, useState } from 'react';
const axios = require('axios');

const testUsers = {
  admin: {
    password: "password",
    name: "Administrator",
    role: "admin",
    capabilities: ["create", "read", "update", "delete"]
  },
  editor: {
    password: "password",
    name: "Editor",
    role: "editor",
    capabilities: ["read", "update"]
  },
  writer: {
    password: "password",
    name: "Writer",
    role: "writer",
    capabilities: ["create"]
  }
};

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [capabilities, setCapabilities] = useState([]);
  const [role, setRole] = useState('');
  console.log('Caps', capabilities);

  const login = async (username, password) => {
    await axios.post('http://localhost:3001/signin', {}, {
      auth: {
        username: username,
        password: password
      }
    }).then((res) => {
      if (res) {
        // console.log(res.data.user.capabilities);
        setloggedIn(true);
        setCapabilities(res.data.user.capabilities);
        setRole(res.data.user.role);
      }
    }).catch((error) => {
      console.log('Error on Authentication', error);
    });
  };

  const logout = () => {
    // on logout, reset state variables
    setloggedIn(false);
  };

  const can = (capability) => {
    return capabilities.includes(capability);
  };

  const state = {
    loggedIn,
    capabilities,
    role,
    login,
    logout,
    can
  };

  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}
