import React from 'react';
import ToDo from './components/todo/todo.js';
import Settings from './context/settings';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Settings>
          <ToDo />
        </Settings>
      </React.Fragment>
    );
  }
}
