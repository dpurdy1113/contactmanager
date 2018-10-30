import React, { Component } from 'react';
import Contact from './components/Contact'; 
import Header from './components/Header'; // eslint-disable-next-line
import "../node_modules/tachyons/css/tachyons.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
      <Header branding = "Contact Manager"/>
        <Contact name = "John Doe" email = "John.doe@gmail.com" phone = "555-867-5309"/>
        <Contact name = "Karen Smith" email = "karen@gmail.com" phone = "555-512-1334"/>
      </div>
      </div>
    );
  }
}

export default App;
