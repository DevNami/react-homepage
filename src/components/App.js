import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from 'components/Menu';
import { Home, About, Posts } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
      </div>
    )
  }
};

export default App;