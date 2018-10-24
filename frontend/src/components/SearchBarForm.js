import React, { Component } from "react";

class SearchBarForm extends Component {
  state = {
    searchTerm: ""
  };

  handleInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
  };

  render() {
    const style = { border: "1px solid DARKCYAN", padding: "1rem", margin: "1rem" };

    return (
      <div className="Note-search" style={style}>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInputChange} placeholder="Search term" />
        <input type="submit" value="Search" />
      </form>
      {/* <button>Draft</button>
      <button>Public</button>
      <button>Private</button> */}
    </div>
    );
  }
}

export default SearchBarForm;

// handleSearch = searchTerm => {
//   // make the request
//   //    then ... this.setState w/ results
//   const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
//     keys.API_KEY
//   }&q=${searchTerm}&type=video`;
//
//   fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//       const videos = data.items;
//       this.setState({
//         searchResults: videos
//       });
//     });
//
//   // using fat arrow binds `this` in THIS function to the component
// }; app.js Youtuber --- this is only for seeing how it works
