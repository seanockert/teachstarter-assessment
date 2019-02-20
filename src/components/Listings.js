import React from 'react';
import { connect } from 'react-redux';
import { filterList } from '../actions';
import Search from './Search';
import ListingItem from './ListingItem';
import '../assets/styles/listings.scss';

const Listings = ({ dispatch, filteredListings, filter, loading }) => {
	// Map the list items
	const listItems = filteredListings.map(listing => (
		<ListingItem key={listing.id} listing={listing} />
	));

	// @todo test this
	if (loading) {
		return (
			<section>
				<div className="loading">Loading...</div>
			</section>
		);
	}

	return (
		<>
			<Search count={listItems.length} filter={filter} />
			<section>
				<header>
					<h2>The list</h2>
				</header>
				<ul className="ts-listings">
					{listItems.length ? (
						listItems
					) : (
						<li className="ts-no-items">
							No items found.
							<button
								onClick={() => dispatch(filterList(''))}
								className="ts-link-button"
							>
								Clear search
							</button>
						</li>
					)}
				</ul>
			</section>
		</>
	);
};

// Get the listings and filter from global state
function mapStateToProps(state) {
	return {
		filteredListings: state.app.filteredListings,
		filter: state.app.filter,
		loading: state.loading
	};
}

export default connect(mapStateToProps)(Listings);
