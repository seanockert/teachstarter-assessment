import React from 'react';
import { connect } from 'react-redux';
import { updateLikes } from '../actions';
import { ReactComponent as IconLike } from '../assets/images/icon-like.svg';
import '../assets/styles/like-button.scss';

//const LikeButton = ({ dispatch, id, likes }) => {
class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasFeedback: false };
		this.updateLikes = this.updateLikes.bind(this);
	}

	updateLikes(e) {
		e.preventDefault();
		this.props.dispatch(updateLikes(this.props.id));

		// Apply a temporary class to the button to trigger CSS animation
		this.setState(() => ({ hasFeedback: true }));
		var self = this;
		setTimeout(function() {
			self.setState(() => ({ hasFeedback: false }));
		}, 500);
	}

	render() {
		const likes = this.props.likes;

		return (
			<button
				className={'ts-like-button ' + (this.state.hasFeedback ? 'active' : '')}
				onClick={this.updateLikes}
				title="Like this item"
				data-tooltip={`${likes} people like this item`}
			>
				<span>{likes}</span>
				<IconLike />
			</button>
		);
	}
}

export default connect()(LikeButton);
