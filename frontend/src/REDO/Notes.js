// import React, { Component } from 'react';
// import Note from './Note.js';
// import '../css/travelJournal.css'

export default class Notes extends Component {
  render(){
    const style = { border: "1px solid orange", padding: "1rem", margin: "1rem" };
    const generateNote = result => {
     return <Note note={result} handleUpdateNote={this.props.handleUpdateNote}/>
    }
    const noteComponents = this.props.searchResults.map(generateNote);
    return(
      <div style={style} className="sideBar">
        <h1>Hello Notes</h1>
        {noteComponents}
      </div>
    )
  }
}
