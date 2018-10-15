import React, { Component } from 'react';


export default class SearchBar extends Component {
  state = {
    searchTerm: ""
  }
  handleInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
  }

  render (){
    const style = { border: "1px solid brown", padding: "1rem", margin: "1rem"}
    return(
      <div className="SearchBar" style={style}>
        <form  onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} placeholder="Search term" />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  };
};
