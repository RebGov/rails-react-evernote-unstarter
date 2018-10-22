import React from 'react';
import NoteContainer from './components/NoteContainer';

class NoteContainer extends React.component {
  render(){
    return(
      <div className="Note-container" style={ {border: "1px solid blue", padding: "1rem"}}>
        Hello  Note Container
      </div>
    )
  }
}
export default NoteContainer;
