import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import { mutations } from './mutations';

Vue.use(Vuex);

// For connecting to API
export const DATA_ENDPOINT =
	'https://www.jsonstore.io/eaef590d599b7e564025022e098a3f7102a54521295003c303720b68a830ea3c';

// The global store
export default new Vuex.Store({
	state: {
		loading: true,
		listings: {},
		filteredListings: {},
		filterQuery: ''
	},
	actions,
	getters,
	mutations
});
