import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  onDeleteClick = () => {
    this.props.deleteClickHandler()
  }

  render() {
    const { name, email, phone } = this.props.contact
    const {showContactInfo} = this.state
    return (
      <div className="card card-body mb-3">
        <h4 className="f4 bg-near-black white mv0 pv2 ph3">{name}<i onClick={()=> this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down pl-2" style = {{cursor : 'pointer'}} /> <i className = 'fas fa-times' style ={{ cursor: 'pointer', float:'right', color: 'red'}} onClick = {this.onDeleteClick}></i></h4>
        <div className="pa3 bt">
        {showContactInfo ? (<ul className="f6 f5-ns lh-copy measure mv0 list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>):null }
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;