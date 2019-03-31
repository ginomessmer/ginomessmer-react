import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import moment from 'moment';
import Footer from './components/partials/footer';
import PrivacyPolicyPage from './components/pages/privacy';
import { MetaContext } from './common/context/meta-context';
import Meta from './data/meta';

class App extends Component {

  private remoteMeta: Meta = {
    posts: [],
    projects: []
  }

  async componentDidMount() {
    let response = await fetch('https://ginomessmer.blob.core.windows.net/dump/sOpD.txt', {

    });
    if (response.ok) {
      let data = (await response.json()) as Meta;
      this.remoteMeta = data;
    }
  }

  render() {
    return (
      <MetaContext.Provider value={this.remoteMeta}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/privacy" exact component={PrivacyPolicyPage} />
            </Switch>

            <Footer />
          </div>
        </BrowserRouter>
      </MetaContext.Provider>
    );
  }
}

export default App;
