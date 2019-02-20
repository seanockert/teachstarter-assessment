// API endpoint used for fetch calls
const dataEndpoint =
  'https://www.jsonstore.io/35da602c6c52fa78abdf1617b197ed95d03f1c874966986ca6585ee939620496';

const app = (state = { loading: true }, action) => {
  switch (action.type) {
    case 'FETCH_INITIAL_STATE':
      // Populate the data from a JSON endpoint before component mounts
      return fetch(dataEndpoint, {
        headers: { 'Content-type': 'application/json' },
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          // Use the asyncDispatch middleware to dispatch another action cf. Elm architecture
          action.asyncDispatch({
            type: 'UPDATE_STATE',
            value: data.result.listings
          });
        });
    case 'UPDATE_STATE':
      // Update the state. Called from FETCH_INITIAL_STATE
      return Object.assign({}, state, {
        listings: action.value,
        filteredListings: action.value,
        filter: '',
        loading: false,
        direction: 'slide-left'
      });
    case 'SET_ROUTER_DIRECTION':
      return Object.assign({}, state, {
        direction: action.direction
      });
    case 'UPDATE_LIKES':
      // Get the array index for the PUT request
      // @todo simplify this
      const index = state.listings.findIndex(
        listing => listing.id === action.id
      );

      const updatedListings = state.listings.map(listing =>
        listing.id === action.id
          ? { ...listing, likes: listing.likes + 1 }
          : listing
      );

      // Duplicate map to update the current filteredListings as well (so the list doesn't reset when we update the state)
      const updatedFilteredListings = state.filteredListings.map(listing =>
        listing.id === action.id
          ? { ...listing, likes: listing.likes + 1 }
          : listing
      );

      // Update the data on the server
      fetch(`${dataEndpoint}/listings/${action.id}/likes`, {
        headers: { 'Content-type': 'application/json' },
        method: 'PUT',
        body: updatedListings[index].likes
      })
        .then(data => {
          // Data updated on server, update state here?
          console.log('Updated likes');
        })
        .catch(function() {
          // @todo give visual feedback if update fails
          console.log('Handle error');
        });

      // Update state
      return Object.assign({}, state, {
        ...state,
        listings: updatedListings,
        filteredListings: updatedFilteredListings
      });
    case 'FILTER_LIST':
      let filteredListings = state.listings;
      filteredListings = filteredListings.filter(listing => {
        // Search in title and summary
        let search =
          listing.title.toLowerCase() + listing.summary.toLowerCase();
        return search.indexOf(action.filter.toLowerCase()) !== -1;
      });

      // Update the filtered listings and the filter query
      return Object.assign({}, state, {
        filteredListings: filteredListings,
        filter: action.filter
      });
    default:
      return state;
  }
};

export default app;
