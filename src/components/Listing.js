import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import LikeButton from './LikeButton';
import '../assets/styles/listing-item.scss';

class Listing extends React.Component {
  render() {
  	const listing = this.props.listing;

  	// Wait until props been passed before rendering
	  if (listing === undefined) {
	    return <section><div className="loading">Loading...</div></section>;
	  }

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
						<p><NavLink to="/">&larr; Back to listing</NavLink></p>
					</div>
					<LikeButton likes={listing.likes} id={listing.id} />
		  	</div>
		  	
	    </section>
		)
	}
}

export default withRouter(Listing);