import React from 'react';
import Search from './Search';
import ListingItem from './ListingItem';
import '../assets/styles/listings.scss';

const Listings = props => {
	const { filteredListings, clearSearch, filter } = props;

  // Map the list items
  const listItems = filteredListings.map(listing => (
  	<ListingItem key={listing.id} listing={listing} />
  ));

  return (
  	<React.Fragment>
	  	<Search count={listItems.length} filter={filter} />
		  <section>
		  	<header>
		  		<h2>The list</h2>
		  	</header>
	      <ul className="ts-listings">
	      	{listItems.length ? listItems : <li className="ts-no-items">No items found. <button onClick={clearSearch} className="ts-link-button">Clear search</button></li>}
	      </ul>
		  </section>
	  </React.Fragment>
	)
}

export default Listings;
