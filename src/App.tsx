import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import moment from 'moment';
import Footer from './components/partials/footer';
import PrivacyPolicyPage from './components/pages/privacy';
import { MetaContext } from './common/context/meta-context';
import Meta from './data/meta';
import { getMetaData } from './common/services/remote-service';
import ImprintPage from './components/pages/imprint';

interface AppState {
  meta: Meta;
}

class App extends Component<{ }, AppState> {
  constructor() {
    super({});

    this.state = {
      meta: {
        posts: [],
        projects: []
      }
    }
  }

  async componentDidMount() {
    let data = (await getMetaData()) as Meta;
    console.log(data)

    if (data !== null) {
      this.setState({meta: data});
    }
  }

  render() {
    return (
      <MetaContext.Provider value={this.state.meta}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/privacy" exact component={PrivacyPolicyPage} />
              <Route path="/imprint" exact component={ImprintPage} />
            </Switch>

            <Footer />
          </div>
        </BrowserRouter>
      </MetaContext.Provider>
    );
  }
}

export default App;
