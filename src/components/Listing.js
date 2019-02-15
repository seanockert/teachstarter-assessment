import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import LikeButton from './LikeButton';
import '../assets/styles/listing-item.scss';

const Listing = ({ listing }) => {

  // Consider replacing dangerouslySetInnerHTML with html-react-parser
  return (
	  <section>
	  	<div className="ts-listing">
	  		<figure>
	    		<img src={`/images/listings/${listing.img}`} alt="" />
	    	</figure>
				<div>
					<h2>{listing.title}</h2>
					<div dangerouslySetInnerHTML={ { __html: listing.content } }></div>	
				</div>
				<LikeButton likes={listing.likes} id={listing.id} />
	  	</div>
	  	<div>
	  		<NavLink to="/">&larr; Back to listing</NavLink>
	  	</div>
    </section>
	)
}

export default withRouter(Listing);