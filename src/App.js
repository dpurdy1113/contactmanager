import React, { Component } from 'react';
import Contacts from './components/Contacts'; 
import Header from './components/Header'; // eslint-disable-next-line
import "../node_modules/tachyons/css/tachyons.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
      <Header branding = "Contact Manager"/>
        <Contacts />
      </div>
      </div>
    );
  }
}

export default App;
