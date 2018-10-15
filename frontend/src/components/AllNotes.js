import React, { Component } from 'react';
import OneNote from './OneNote';

export default class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {

    const style = { border: "1px solid brown", padding: "1rem", margin: "1rem" };
    return(
      <div className="All-notes" style={style}>
        Hello All Notes
        <OneNote />
      </div>
    )
  }
}
