/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';
import { Button, Alert, Jumbotron, Row, Col, Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { app, facebookProvider } from "../../firebase/firebase";
import axios from 'axios';
import PortfolioHeader from './portfolioHeader';
import './portfolio.css';
import OwnedCoins from './ownedcoins';


class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      portfolio: []
    };
  }

  componentDidMount = _ => {
    
     // axios post request
     axios.get(`/api/users/${this.props.uid}`)
    .then( response => {
      console.log("Getting portfolio data");
      console.log(response.data[0].portfolio);
      const portf = response.data[0].portfolio;
      this.setState({ portfolio: portf });
    })
    .catch( error => {
      console.log(error);
    });
  }


  render() {
    return (
        <div>
          <Container>
            <Jumbotron>
              <Row>
                <Col>
                  <h3>$1,200</h3>
                  <h3>Current Portfolio Value </h3>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col xs={12} sm={4}>
                  <h3>$444</h3>
                  <h3>Total Cost</h3>
                </Col>
          
                <Col xs={12} sm={4}>
                  <h3>$888</h3>
                  <h3>Total Profit</h3>
                </Col>

                <Col xs={12} sm={4}>
                  <h3>220%</h3>
                  <h3>Total Profit</h3>
                </Col>
              </Row>
            </Jumbotron>
            {/* {trade.ticker} {trade.shares} {trade.buyPrice} */}
            {/* <PortfolioHeader /> */}
            { this.state.portfolio.map(trade => 
            <li className="indivCoin">
              <p>ticker</p>
              <p id="ticker">{trade.ticker}</p>
            
            </li>)}
            </Container>
        </div>
    );
  }
}

export default Portfolio;