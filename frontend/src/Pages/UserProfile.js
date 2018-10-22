import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import '../App.css'

class UserProfile extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){

    return (

      <div>
        <h1>Hello {this.props.currentUser.username}'s Profile!</h1>
      </div>
    )
  }
}
export default UserProfile;
