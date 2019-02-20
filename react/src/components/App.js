import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInitialState, setRouterDirection } from '../actions/';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Listings from './Listings';
import Listing from './Listing';
import '../assets/styles/app.scss';

// Main app entry point
class App extends React.Component {
	componentDidMount() {
		// Populate the data from a JSON endpoint before component mounts
		this.props.dispatch(fetchInitialState());

		// @todo animate view left/right depending on previous route
		this.props.history.listen((location, action) => {
			const toDepth = location.pathname.split('/').length;
			const fromDepth = this.props.location.pathname.split('/').length;
			const direction = toDepth < fromDepth ? 'slide-right' : 'slide-left';
			this.props.dispatch(setRouterDirection(direction));
		});
	}

	// Get a listing by its ID
	getListingById = id => {
		return this.props.app.listings.find(listing => listing.id === id);
	};

	render() {
		const data = this.props.app;

		if (data.filteredListings === undefined) {
			return (
				<section>
					<div className="loading">Loading...</div>
				</section>
			);
		}

		return (
			<>
				<TransitionGroup className="transition-group">
					<CSSTransition
						key={this.props.location.key}
						timeout={{ enter: 300, exit: 300 }}
						classNames={'slide-left'}
						appear={true}
					>
						<div className="route-section">
							<Switch location={this.props.location}>
								<Route
									path="/listing/:id"
									render={props => (
										<Listing
											id={props.match.params.id}
											listing={this.getListingById(props.match.params.id)}
										/>
									)}
								/>
								<Route path="/" exact component={Listings} />
							</Switch>
						</div>
					</CSSTransition>
				</TransitionGroup>
			</>
		);
	}
}

// For redux store
const mapStateToProps = state => ({
	...state
});

export default withRouter(connect(mapStateToProps)(App));
