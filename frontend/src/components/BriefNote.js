import React, { Component } from 'react';

export default class BriefNote extends Component {

  handleClickOneNote = e => {
    e.preventDefault()
    // this.setState={
    //   currentNote: {}
    // }
    console.log(this.props.note.id)
  }
  render() {

    const style = { border: "1px solid cyan", padding: "1rem", margin: "1rem" };
    return(
      <div style={style} key={this.props.note.id} onClick={this.handleClickOneNote}>
        <h2>{this.props.note.title}</h2>
        <h4>{this.props.note.location}</h4>
        <p>{this.props.note.content.substring(0, 15) + '...' }</p>
        <hr></hr>

    </div>
    )
  }
}


//  function truncate(string){
//    if (string.length > 5)
//       return string.substring(0,5)+'...';
//    else
//       return string;
// };
