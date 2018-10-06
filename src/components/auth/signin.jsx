/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Toaster, Intent } from '@blueprintjs/core';
import { app, facebookProvider } from "../../firebase/firebase";

const signinStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "80px auto",
  border: "1px solid #ddd",
  padding: "10px",
}

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      redirect: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  authWithFacebook = _ => {
    app.auth().signInWithPopup(facebookProvider)
      .then((res, err) => {
        if (err) {
          this.Toaster.show({intent: Intent.DANGER, message: 'Unable to sign in with Facebook'})
        } else {
          this.setState({ redirect: true })
        }
      })    
  }

  authWithEmailPassword = (event) => {
    event.preventDefault();

    const email    = this.emailInput.value;
    const password = this.passwordInput.value;

    app.auth().fetchSignInMethodsForEmail(email)
      .then((providers) => {
        if (providers.length === 0) {
          // create user
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf('password') === -1) {
          // they used Facebook
          this.loginForm.reset();
          alert('You already have an account with facebook')
        } else {
          // sign user in
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if (user) {
          this.loginForm.reset();
          this.setState({redirect: true})
        }
      })
      .catch((error) => {
        alert(error.message)
        console.log(error.message)
      })
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }
    return (
      <div style={signinStyles} >
        <Toaster ref={(element) => { this.toaster = element }} /> 
        <Button color="primary" onClick={() => {this.authWithFacebook() }}>Login With Facebook</Button>
        <hr style={{margin: "10px null"}}/>
        <Alert color="warning">
            If you are not already registered, this form will create an account for you
        </Alert>
        <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }} >
            <div className="container">

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Username" name="email" required ref={(input) => { this.emailInput = input }} />

                <hr style={{ marginTop: '10px', marginBottom: '10px' }} />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required ref={(input) => { this.passwordInput = input }} />

                <input type="submit" value="Login" />
                {/* <p>Dont have an account? <SignUpModal /></p> */}
            </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;