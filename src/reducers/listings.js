const dataEndpoint = 'https://www.jsonstore.io/35da602c6c52fa78abdf1617b197ed95d03f1c874966986ca6585ee939620496';

const listings = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_INITIAL_STATE':
      // @todo: move fetch call into here (promise?)
    	return Object.assign({}, state, {
        listings: action.listings,
        filteredListings: action.listings,
        filter: '',
        isFetching: false
      });
    case 'UPDATE_LIKES':
      const updatedListings = state.listings.map(listing =>
        listing.id === action.id ? { ...listing, likes: listing.likes + 1 } : listing
      )

      // Duplicate map to update the current filteredListings as well (so the list doesn't reset when we update the state)
      const updatedFilteredListings = state.filteredListings.map(listing =>
        listing.id === action.id ? { ...listing, likes: listing.likes + 1 } : listing
      )

      // Update the data on the server
      fetch(`${dataEndpoint}/listings/`, {
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(updatedListings)
      })
      .then(response => response.json())
      .then(data => {
        // Data updated on server, update state here?
        console.log('Updated likes');
      });

      // Update state
      return Object.assign({}, state, {
        ...state,
        listings: updatedListings,
        filteredListings: updatedFilteredListings
      });
    case 'FILTER_LIST':
	    let filteredListings = state.listings;
	    filteredListings = filteredListings.filter((listing) => {
	    	// Search in title and summary
	      let search = listing.title.toLowerCase() + listing.summary.toLowerCase()
	      return search.indexOf(
	        action.filter.toLowerCase()) !== -1
	    });

      // Update the filtered listings and the filter query
	    return Object.assign({}, state, {
        filteredListings: filteredListings,
        filter: action.filter
      });
    default:
      return state
  }
}

export default listings