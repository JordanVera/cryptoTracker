/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Toaster, Intent } from '@blueprintjs/core';
import { app, facebookProvider } from "../../firebase/firebase";

const holdCoinStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "80px auto",
  border: "1px solid #ddd",
  padding: "10px",
}

class HoldCoin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    };
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }
    return (
      <div style={holdCoinStyles}>

        <h3>Add To Your Coinfolio</h3>
        <hr style={{ marginTop: '10px', marginBottom: '10px' }} />

        <form onSubmit={(e) => {e.preventDefault(); this.setState({redirect: true})}}>
            <div className="container">
                <label htmlFor="shares"><b>shares</b></label>
                <input type="number" name="shares" required /> 

                <label htmlFor="buyPrice"><b>buy price</b></label>
                <input type="number" step="any" name="buyPrice" required  />

                <input type="submit" value="submit" />
            </div>
        </form>
      </div>
    );
  }
}

export default HoldCoin;