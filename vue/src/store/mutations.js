import Vue from 'vue';
import { DATA_ENDPOINT } from '../store/';

export const mutations = {
  loadData(state, listings) {
    state.listings = listings;
    state.filteredListings = JSON.parse(JSON.stringify(listings));

    // Used by components to check if data is loaded into state
    state.loading = false;
  },
  filterListings(state, query) {
    state.filteredListings = state.listings.filter(listing => {
      // Search in title and summary
      let search = listing.title.toLowerCase() + listing.summary.toLowerCase();
      return search.indexOf(query.toLowerCase()) !== -1;
    });

    state.filterQuery = query;
  },
  incrementLikes(state, id) {
    // @todo consider moving AJAX call into action, before mutation

    state.listings = state.listings.map(listing =>
      listing.id === id ? { ...listing, likes: listing.likes + 1 } : listing
    );

    // Update filteredListings separately so the filtered list doesn't re-render
    state.filteredListings = state.filteredListings.map(listing =>
      listing.id === id ? { ...listing, likes: listing.likes + 1 } : listing
    );

    // Get the array index for the PUT request
    const index = state.listings.findIndex(listing => listing.id === id);
    Vue.http.put(DATA_ENDPOINT + '/listings/' + index, state.listings[index]);
    /*.then(response => {
        console.log('Likes updated to ' + state.listings[index].likes);
      })
      .catch(error => {
        // @todo handle error: error.statusText
      });*/
  }
};
