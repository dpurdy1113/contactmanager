import React, { Component } from 'react'
import Contact from './Contact';


class Contacts extends Component {
constructor(){
  super();
  this.state = {
    contacts: [
      {
        id : 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        phone: '555-867-5309'
      },
      {
        id : 2,
        name: 'Karen Smith',
        email: 'ksmith@gmail.com',
        phone: '555-512-1334'
      },
      {id : 3,
        name: 'Robert Parker',
        email: 'robertparker@gmail.com',
        phone: '502-222-9813'
      }
    ]

  }
}

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
         <Contact key = {contact.id} name ={ contact.name} email = { contact.email } phone = { contact.phone } />
        ))}
      </div>
    )
  }
}

export default Contacts;
