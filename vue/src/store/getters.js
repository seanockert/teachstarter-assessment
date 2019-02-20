export default {
  filteredListings(state) {
    return state.filteredListings;
  },
  filterQuery(state) {
    return state.filterQuery;
  },
  listingCount(state) {
    return state.filteredListings.length;
  },
  likesCount(state) {
    return id => state.listings.find(listing => listing.id === id).likes;
  },
  fetchListing(state) {
    return id => state.listings.find(listing => listing.id === id);
  }
};
