import React from 'react';
import { Link } from "react-router-dom";
import LikeButton from './LikeButton';
import '../assets/styles/listing-item.scss';

const ListingItem = props => {
	const { listing } = props;

  return (
	  <li>
	  	<figure>
	    	<Link to={`/listing/${listing.id}`} title="View details">
	    		<img src={`/images/listings/${listing.img}`} alt="" />
	    	</Link>
    	</figure>
    	<div>
	    	<h3><Link to={`/listing/${listing.id}`} title="View details">{listing.title}</Link></h3>
	    	<p>{listing.summary}</p>
	    </div>
	    <LikeButton likes={listing.likes} id={listing.id} />
    </li>
	)

}

export default ListingItem;
