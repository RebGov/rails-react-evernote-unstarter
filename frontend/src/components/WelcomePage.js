import React, { Component } from 'react';

export default class WelcomePage extends Component {
  render (){
    const style = { border: "1px solid purple", padding: "1rem", margin: "1rem"}
    return(
      <div className="WelcomePage" style={style}>Hello WelcomePage</div>
    )
  };
};
