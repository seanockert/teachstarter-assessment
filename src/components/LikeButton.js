
import React from 'react';
import { connect } from 'react-redux';
import { updateLikes } from '../actions';
import { ReactComponent as IconLike } from '../assets/images/icon-like.svg';
import '../assets/styles/like-button.scss';

const LikeButton = props => {
	const { dispatch, id, likes } = props;

  return (
  	<React.Fragment>
	  <button className="ts-like-button" onClick={(e) => { e.preventDefault(); dispatch(updateLikes(id))}} title="Like this item">
	  	<span>{likes}</span>
	  	<IconLike />
	  </button>
	  </React.Fragment>
	)
}

export default connect()(LikeButton);
