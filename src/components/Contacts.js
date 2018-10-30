import React, { Component } from 'react'
import Contact from './Contact';


class Contacts extends Component {
state = {
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
  deleteContact =(id) => {
    const {contacts} = this.state;
    const newContacts  = contacts.filter(contact => contact.id !== id)
    this.setState({
      contacts:newContacts
    })
  }

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
         <Contact key = {contact.id} contact = {contact} deleteClickHandler= {this.deleteContact.bind(this, contact.id)} />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;
