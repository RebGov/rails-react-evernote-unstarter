import React, { Component } from 'react';
import SearchBar from './SearchBar'
import '../css/travelJournal.css'
import NoteTitle from './NoteTitle'

export default class NotesLeftSide extends Component {
  // state = {
  //
  // }
  render (){
    const style = { border: "1px solid red", padding: "1rem", margin: "1rem"}
    return(
      <div className="NotesLeftSide" style={style}>
        Hello NotesLeftSide!
        <SearchBar />
        <NoteTitle />
      </div>
    )
  };
};
