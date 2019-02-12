import React from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchInitialState, filterList } from '../actions/'

import Listings from './Listings';
import Listing from './Listing';
import '../assets/styles/app.scss';

// API endpoint
const dataEndpoint = 'https://www.jsonstore.io/35da602c6c52fa78abdf1617b197ed95d03f1c874966986ca6585ee939620496';

// Main app entry point
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      filteredListings: [],
      filter: '',
      isFetching: true
    };
  }

	componentDidMount() {
	  // Populate the data from a JSON endpoint before component mounts
	 	fetch(dataEndpoint, {
	    headers: { 'Content-type': 'application/json' },
	    method: 'GET'
	  })
	  .then(response => response.json())
	  .then(data => {
	  	// Recieved data from endpoint
	    this.props.dispatch(fetchInitialState(data.result.listings));
	  });
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
	  	<React.Fragment>
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
			  		<a href="https://github.com/seanockert/teachstarter-assessment" title="View the source code for this page on Github" target="_blank">View source on Github</a>
			  	</div>
			  </footer>
		  </React.Fragment>
	  )
	}
}

// For redux store
const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);


