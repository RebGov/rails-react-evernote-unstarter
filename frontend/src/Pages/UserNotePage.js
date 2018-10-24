import React from 'react';
import '../App.css';
import{

  withRouter
} from "react-router-dom";
import AllNotes from '../components/AllNotes';
// import FullNote from '../containers/FullNote';
import NotePage from '../components/NotePage';
import SearchBarForm from '../components/SearchBarForm';
// import CreateNoteForm from '../components/CreateNoteForm';
// import EditNoteForm from '../components/EditNoteForm';

class UserNotePage extends React.Component {

  render() {
    // console.log("UserNotePage-currentNote: ", this.props.currentNote)
    return(
      <div className="Note-container" style={ {border: "1px solid blue", padding: "1rem"}}>
        <SearchBarForm handleSearch={this.props.handleSearch} currentUser={this.props.currentUser}/>
        <AllNotes
          userSignedIn={this.props.userSignedIn}
          currentUser={this.props.currentUser}
          userNotes={this.props.userNotes}
          currentNote={this.props.currentNote}
          handleUpdateCurrentNote={this.props.handleUpdateCurrentNote} handleSearch={this.props.handleSearch} displaySearchResults={this.props.displaySearchResults}
          isSearchResults={this.props.isSearchResults}
        />
        <NotePage currentNote={this.props.currentNote} handleUpdateCurrentNote={this.props.handleUpdateCurrentNote} currentUser={this.props.currentUser}  />

      </div>
    )
  }
}
export default withRouter(UserNotePage);
