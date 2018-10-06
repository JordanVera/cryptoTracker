import React, { Component } from 'react';
import RootRoutes from './components/RootRoutes';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Helmet from 'react-helmet';
import { APP_TITLE_PREFFIX } from './constans';
import ThemeProvider, { ThemeConsumer } from './components/theme/Theme';
import Layout from './components/common/Layout';
import { app, base } from './firebase/firebase';
import 'babel-polyfill';
import './assets/main.css';
import './assets/bootstrap.css';

class App extends Component {
constructor(props) {
    super(props)
    this.state = {
      authenticated: false,
      loading: true
    };
  }


componentWillMount = _ => {
  this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid)
      this.setState({
        authenticated: true,
        uid: user.uid,
        loading: false
      })
    } else {
      this.setState({
        authenticated: false,
        uid: null,
        loading: false
      })
    }
  })
}

componentWillUnmount = _ => {
  this.removeAuthListener()
}

  render() {
    return (
      <ThemeProvider>
        <ThemeConsumer>
          <Layout>
            <Helmet titleTemplate={`%s | ${APP_TITLE_PREFFIX}`} />
            <Header authenticated={this.state.authenticated} />
            <RootRoutes />
            <Footer />
          </Layout>
        </ThemeConsumer>
      </ThemeProvider>
    );
  }
}

export default App;
