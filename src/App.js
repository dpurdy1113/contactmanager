import React, { Component } from 'react';
import Contact from './components/Contact'; // eslint-disable-next-line
import tachyons from "../node_modules/tachyons/css/tachyons.min.css";



class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="tc bg-black white grow">Contact Manager</h1>
       <Contact></Contact>
      </div>
    );
  }
}

export default App;
