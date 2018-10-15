import React, { Component } from 'react';

export default class OneNotes extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {

    const style = { border: "1px solid cyan", padding: "1rem", margin: "1rem" };
    return(
      <div style={style}>
        Hello One Note!
      </div>
    )
  }
}
