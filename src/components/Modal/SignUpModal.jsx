/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './SignInModal.css';
import axios from 'axios';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleChange = (event) => {
    let change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('sign-up-form, username: ');
    console.log(this.state.username);
    console.log('sign-up-form, password: ');
    console.log(this.state.password);
    // Request to server
    axios.post('/api/users', {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      console.log(response)
      if (response.data) {
        console.log('Successful signup BITCH 🐑🐑🐑🐑🐑')
        this.setState({
          redirectTo: '/login'
        })
      } else {
        console.log('Sign up error')
      }
    }).catch(error => {
      console.log('Signup server error:')
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} size="sm">Sign Up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <form>
              <div className="container">
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleChange} required />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />

                <button type="submit" onClick={this.handleSubmit}>Create Account</button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            {/* insert copyright info */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;