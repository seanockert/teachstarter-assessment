
import React from 'react';
import { connect } from 'react-redux';
import { updateLikes } from '../actions';
import { ReactComponent as IconLike } from '../assets/images/icon-like.svg';
import '../assets/styles/like-button.scss';

const LikeButton = ({ dispatch, id, likes }) => {

  return (
	  <button 
	  	className="ts-like-button" 
	  	onClick={(e) => { e.preventDefault(); dispatch(updateLikes(id))} } 
	  	title="Like this item" 
	  	data-tooltip={`${likes} people like this item`}
	  >
	  	<span>{likes}</span>
	  	<IconLike />
	  </button>
	)
}

export default connect()(LikeButton);
