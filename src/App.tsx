import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import moment from 'moment';
import Footer from './components/partials/footer';
import PrivacyPolicyPage from './components/pages/privacy';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/privacy" exact component={PrivacyPolicyPage} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
