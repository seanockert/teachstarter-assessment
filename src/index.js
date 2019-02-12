import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Provider } from 'react-redux';
import configureStore, { history } from './store';

import App from './components/App';

ReactDOM.render(
	<Provider store={configureStore()}>
		<ConnectedRouter history={history}>
	    <App />
	  </ConnectedRouter>
  </Provider>
, document.getElementById('app'));

