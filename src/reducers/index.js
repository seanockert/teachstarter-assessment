import { combineReducers } from 'redux';
import listings from './listings';
import { connectRouter } from 'connected-react-router';

// Combine routers (only one router)
export default (history) => combineReducers({
  router: connectRouter(history),
  listings
});