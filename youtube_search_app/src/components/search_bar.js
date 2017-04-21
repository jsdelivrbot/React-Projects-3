import React, { Component } from 'react';


class SearchBar extends Component {
  constructor (props) {
    super(props);
    // This is the only way to set state inside of a constructor
    this.state = { term: '' };
  }
  render () {
      // This is the only way to set the class state outside of a constructor
      return (
        <div className="search-bar">
          <input
              value={this.state.term}
             onChange={event => this.onInputChange(event.target.value)} />
        </div>
      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
