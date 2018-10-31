import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) =>  {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
      default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        phone: '555-867-5309'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'ksmith@gmail.com',
        phone: '555-512-1334'
      },
      {
        id: 3,
        name: 'Robert Parker',
        email: 'robertparker@gmail.com',
        phone: '502-222-9813'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;