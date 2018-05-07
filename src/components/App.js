import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Home, Guide, Write } from 'pages';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <header>

          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/guide" component={Guide} />
            <Route path="/write" component={Write} />
          </main>
        </Fragment>
      </MuiThemeProvider>
    )
  }
};

export default App;