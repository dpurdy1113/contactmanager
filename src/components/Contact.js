import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
render() {
  const {name, email, phone} = this.props
    return (
      <div className="card card-body mb-3">
        <h4 className="f4 bg-near-black white mv0 pv2 ph3">{name}</h4>
        <div className="pa3 bt">
        <ul className ="f6 f5-ns lh-copy measure mv0 list-group">
          <li className ="list-group-item">Email: {email}</li>
          <li className ="list-group-item">Phone: {phone}</li>
        </ul>
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,

}

export default Contact;