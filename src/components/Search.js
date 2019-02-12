import React from 'react';
import { connect } from 'react-redux';
import { filterList } from '../actions';
import { ReactComponent as IconSearch } from '../assets/images/icon-search.svg';
import '../assets/styles/search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }

  handleChange = (e) => {
    this.props.dispatch(filterList(e.target.value));
    this.setState({
      filter: e.target.value
    });
  }

  render() {
	  return (
		  <header className="ts-search">
	      <div>
			  	<label htmlFor="filter">Filter list ({this.props.count} item{this.props.count !== 1 ? 's' : ''})</label>
			  	<div>
				    <input type="text" id="filter" value={this.props.filter} onChange={this.handleChange} />
				    <IconSearch className="ts-search-icon" />
			    </div>
	      </div>
		  </header>
		)  	
  }
}

export default connect()(Search);