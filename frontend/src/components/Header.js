import React, { Component } from 'react';
import UserSignInUp from './UserSignInUp'

export default class Header extends Component {
  render (){
    const style = { border: "1px solid orange", padding: "1rem", margin: "1rem"}
    return(
      <div className="Header" style={style}>
        Hello Header!
        <UserSignInUp />
      </div>
    )
  };
};
