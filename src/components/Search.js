import React from 'react';
import { connect } from 'react-redux';
import { filterList } from '../actions';
import { ReactComponent as IconSearch } from '../assets/images/icon-search.svg';
import '../assets/styles/search.scss';

const Search = ({ dispatch, count, filter }) => {
  return (
    <header className="ts-search">
      <div>
        <label htmlFor="filter">
          Filter list ({count} item{count !== 1 ? 's' : ''})
        </label>
        <div>
          <input
            type="text"
            id="filter"
            value={filter}
            placeholder="eg. boom"
            onChange={e => dispatch(filterList(e.target.value))}
          />
          <IconSearch className="ts-search-icon" />
        </div>
      </div>
    </header>
  );
};

export default connect()(Search);
