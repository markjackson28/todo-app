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

// const secret = "oreo";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [capabilities, setcapabilities] = useState([]);
  const [role, setRole] = useState('');

  const login = async (username, password) => {
    let userInfo = {
      username: username,
      password: password
    }
    let res = await axios.post('http://localhost:3001/signin', userInfo);
    console.log('res', res.data);
    if (testUsers[username]) {
      setloggedIn(true);
      setcapabilities(testUsers[username].capabilities);
      setRole(testUsers[username].role);
    } else {
      console.log('Login Error');
    }
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
    login: login,
    logout: logout,
    can: can
  };

  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}
