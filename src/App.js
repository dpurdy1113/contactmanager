import React, { Component } from 'react';
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
      <div className="App">
      <div className="container">
      <Header branding = "Contact Manager"/>
      <AddContact></AddContact>
        <Contacts />
      </div>
      </div>
      </Provider>
    );
  }
}

export default App;
