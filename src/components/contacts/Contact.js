import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  onDeleteClick = async (id, dispatch) => {
    try{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({ type: 'DELETE_CONTACT', payload: id });}
      catch(e){
        dispatch({ type: 'DELETE_CONTACT', payload: id });
      }
  }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContactInfo } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 className="f4 bg-near-black white mv0 pv2 ph3">{name}<i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down pl-2" style={{ cursor: 'pointer' }} /> <i className='fas fa-times' style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.onDeleteClick.bind(this, id, dispatch)}/> 
              <Link to ={`contact/edit/${id}`}>
              <i 
              className="fas fa-pencil-alt"
              style = {{
                cursor:'pointer',
                float: 'right',
                color: 'white',
                marginRight: '1rem'
              }}></i>
              </Link></h4>
              <div className="pa3 bt">
                {showContactInfo ? (<ul className="f6 f5-ns lh-copy measure mv0 list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null}
              </div>
            </div>

          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;