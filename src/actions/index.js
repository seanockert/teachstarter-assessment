export const fetchInitialState = listings => ({
  type: 'FETCH_INITIAL_STATE',
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


