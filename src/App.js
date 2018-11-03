import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts'; 
import AddContact from './components/contacts/AddContact'; 


import {Provider} from './context';

import Header from './components/layout/Header'; // eslint-disable-next-line
import "../node_modules/tachyons/css/tachyons.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
      <div className="App">
      <div className="container">goit
      <Header branding = "Contact Manager"/>
      <AddContact></AddContact>
        <Contacts />
      </div>
      </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
