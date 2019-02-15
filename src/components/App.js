import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInitialState, filterList } from '../actions/';

import Listings from './Listings';
import Listing from './Listing';
import '../assets/styles/app.scss';

// Main app entry point
class App extends React.Component {

	componentDidMount() {
		// Populate the data from a JSON endpoint before component mounts
		this.props.dispatch(fetchInitialState());
	}

  // Clear the search by passing an empty filter query
  clearSearch = () => {
  	this.props.dispatch(filterList(''));
  }

	// Get a listing by its ID
  getListingById = (id) => {
  	return this.props.listings.listings.find(listing => listing.id === id);
  }	 

  render() {
  	if (this.props.listings.filteredListings === undefined) {
	    return <section><div className="loading">Loading...</div></section>;
	  }

  	return (
	  	<>
				<Switch>
			    <Route 
			    	path='/listing/:id'
			    	render={(props)=><Listing id={props.match.params.id} listing={this.getListingById(props.match.params.id)} />}
			    />
			    <Route 
			    	path="/" 
			    	exact 
			    	render={()=><Listings filteredListings={this.props.listings.filteredListings} clearSearch={this.clearSearch} filter={this.props.listings.filter} />}
			    />
			  </Switch>

			  <footer>
			  	<div>
			  		<a href="https://github.com/seanockert/teachstarter-assessment" title="View the source code for this page on Github" target="_blank" rel="noopener noreferrer">View source on Github</a>
			  	</div>
			  </footer>
		  </>
	  )
	}
}

// For redux store
const mapStateToProps = state => ({
  ...state
});

export default withRouter(connect(mapStateToProps)(App));


