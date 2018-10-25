import React, { Component } from "react";

class SearchBarForm extends Component {
  state = {
    searchTerm: ""
  };

  handleInputChange = e => {
    console.log(e.target.value)
    // this.setState({
    //   searchTerm: e.target.value
    // });
    this.props.handleSearch(e.target.value)
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.handleSearch(this.state.searchTerm);
  // };

  render() {

    const style = { border: "1px solid DARKCYAN", padding: "1rem", margin: "1rem" };

    return (
      <div className="Note-search" style={style}>
      {/* <form onSubmit={this.handleSubmit}> */}
        <p>Search Your Travel Writing Stories: </p>
        <input onChange={this.handleInputChange} placeholder="Search term" />
        {/* <input type="submit" value="Search" />
      </form> */}
      {/* <button>Draft</button>
      <button>Public</button>
      <button>Private</button> */}
    </div>
    );
  }
}

export default SearchBarForm;
