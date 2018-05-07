import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.scss';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}

registerServiceWorker();
