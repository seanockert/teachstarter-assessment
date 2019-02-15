import React from 'react';
import { Link } from "react-router-dom";
import LikeButton from './LikeButton';
import '../assets/styles/listing-item.scss';

const ListingItem = ({ listing }) => {

  return (
	  <li>
	  	<Link to={`/listing/${listing.id}`} title="View details">
		  	<figure>
		    	<img src={`/images/listings/${listing.img}`} alt="" />
	    	</figure>
	    	<div>
		    	<h3>{listing.title}</h3>
		    	<p>{listing.summary}</p>
		    </div>
		    <LikeButton likes={listing.likes} id={listing.id} />
	    </Link>
    </li>
	)
}

export default ListingItem;
