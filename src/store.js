import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers/';

export const history = createBrowserHistory()

export default function configureStore(initialState={}) {
  return createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(routerMiddleware(history), thunk)
  );
}