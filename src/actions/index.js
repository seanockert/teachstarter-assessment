export const fetchInitialState = () => ({
	type: 'FETCH_INITIAL_STATE'
});

export const updateState = listings => ({
	type: 'UPDATE_STATE',
	listings
});

export const updateLikes = id => ({
	type: 'UPDATE_LIKES',
	id
});

export const filterList = filter => ({
	type: 'FILTER_LIST',
	filter
});

export const setRouterDirection = direction => ({
	type: 'SET_ROUTER_DIRECTION',
	direction
});
