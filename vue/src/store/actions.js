import Vue from 'vue';
import { DATA_ENDPOINT } from '../store/';

export default {
  loadData({ commit }) {
    // Get data from the API
    Vue.http
      .get(DATA_ENDPOINT)
      .then(response => {
        // Send it to mutation to update state
        commit('loadData', response.body.result.listings);
      })
      .catch(error => {
        // @todo handle error: error.statusText
      });
  },
  filterListings({ commit }, query) {
    commit('filterListings', query);
  },
  incrementLikes({ commit }, id) {
    commit('incrementLikes', id);
  }
};
