import React, { Component } from 'react';
import { Route } from "react-router-dom";
class AboutPage extends Component {
  render(){
    return (

      <div>
        <Route exact path="/about/:searchterm" render={(...args) => {
          console.log("Aboutpage: ", args)
            return <div>Hello!</div>
          }
        } />
        <h1>Hello About Page</h1>
        </div>
    )
  }
}
export default AboutPage;
