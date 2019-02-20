<template>
	<header>
		<div>
			<label htmlFor="filter">
				Filter list ({{ listingCount }} {{ listingCount | pluralize('item') }})
			</label>
			<div>
				<input
					type="text"
					id="filter"
					placeholder="eg. boom"
					:value="filterQuery"
					@input="updateFilter"
					autocorrect="off"
					autocapitalize="none"
				/>
				<SearchIcon />
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';
import SearchIcon from '../assets/images/icon-search.svg';
const debounce = require('lodash.debounce');

export default {
	name: 'Search',
	components: {
		SearchIcon
	},
	methods: {
		updateFilter: debounce(function(e) {
			this.$store.dispatch('filterListings', e.target.value);
		}, 150)
	},
	computed: mapGetters(['listingCount', 'filterQuery']),
	filters: {
		pluralize(value, args) {
			return value !== undefined ? args + (value === 1 ? '' : 's') : '...';
		}
	}
};
</script>

<style lang="scss" scoped>
header {
	background-color: $color-light-green;
}

label {
	color: $color-green;
	font-size: 1rem;
	font-weight: bold;
	margin: 0;
}

div {
	position: relative;
}

input {
	border: 1px solid $color-green;
	font-size: 1.2rem;
	margin-top: $base-padding/2;
	padding: $base-padding;
	padding-left: $base-padding * 3.5;
	width: 100%;
}

svg {
	left: $base-padding;
	opacity: 0.5;
	position: absolute;
	top: 1.2rem;
}
</style>
