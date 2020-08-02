import React from 'react';

import CreateElementContainer from './components/CreateElementContainer';
import Component from './components/Component';
import FunctionalComponent from './components/FunctionalComponent';
import PureComponent from './components/PureComponent';
import './App.scss';
import logo from './logo.svg';

const HelloWorld = () => <h1>Hello World</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />

        <img src={logo} className="App-logo" alt="logo" />

        <CreateElementContainer />
        <Component />
        <PureComponent />
        <FunctionalComponent />
      </header>
    </div>
  );
}

export default App;
