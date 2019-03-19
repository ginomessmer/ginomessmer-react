import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import moment from 'moment';
import Footer from './components/partials/footer';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route to="/" component={HomePage}/>
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
