import { createContext, useState } from "react";
import jwt from "jsonwebtoken";

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

const secret = "oreo";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [capabilities, setcapabilities] = useState([]);
  const [token, setToken] = useState();

  const login = (username, password) => {
    if (testUsers[username]) {
      setloggedIn(true);
      setcapabilities(testUsers[username].capabilities);
      const token = jwt.sign(username, secret);
      // validateToken(token);
      setToken(token);
      console.log("Token", token);
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
