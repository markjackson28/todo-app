import ToDo from './components/Todo/Todo.js';
import Header from './components/Header/Header';
import SettingsProvider from './context/settings';
import AuthProvider from './context/authContext.js';
// import Auth from './components/Auth/Auth';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <SettingsProvider>
        <Header />
        {/* <Auth capability="delete"> */}
          <ToDo />
        {/* </Auth> */}
      </SettingsProvider>
    </AuthProvider>
  );
}

export default App;
