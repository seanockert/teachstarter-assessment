import { combineReducers } from 'redux';
import app from './app';
import { connectRouter } from 'connected-react-router';

// Combine routers (only one router)
export default history =>
	combineReducers({
		router: connectRouter(history),
		app
	});
