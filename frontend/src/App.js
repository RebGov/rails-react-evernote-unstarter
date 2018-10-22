import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import UserNotePage from './Pages/UserNotePage';
// import AllNotes from './components/AllNotes';
// import FullNote from './components/FullNote';
// import NotePage from './components/NotePage';
import CreateNoteForm from './components/CreateNoteForm';
import EditNoteForm from './components/EditNoteForm';
import UserProfile from './Pages/UserProfile'

class App extends Component {
  state = {
    currentUser: {
      notes: []
    },
    userSignedIn: false,
    currentNote: {}
  }

  componentDidMount() {
    this.getUser()
  }

  getUser(){
    const token = localStorage.token;
    if(token){
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (!data.error) {
            this.setState({
              currentUser: data,
              userSignedIn: true
            });
          }
        });

    }
  }

  logInApp = data => {
    if (!data.error) {
      localStorage.token = data.token;
      this.getUser()
    } else {
      this.setState({
        loginError: data.error
      });
    }
  };

  signUpApp = data => {
    if (!data.error){
      localStorage.token = data.token;
      this.getUser()
    } else {
      this.setState({
        loginError: data.error
      });
    };
  };

  userLogOut = () => {
    this.setState({
      currentUser: {},
      userSignedIn: false
    });
  };
  handleUpdateCurrentNote = (id, title, location, content) => {
    this.setState({
      currentNote: {id, title, location, content}
    });
  };
  render() {
    // console.log("appPage get userNotes", this.getUserNotes())
     // console.log("AppPage - Signed in: ", this.state.userSignedIn, this.state.currentUser.notes)
     // console.log("AppPage-currentNote: ", this.state.currentNote)
    const style = { border: "1px solid red", padding: "1rem", margin: "1rem" };
    return (
      <div className="App" style={style}>
        <Header
          userSignedIn={this.state.userSignedIn}
          username={this.state.currentUser.username}
          userLogOut={this.userLogOut}
          currentNote={this.state.currentNote}
        />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          { this.state.userSignedIn ? (
            <React.Fragment>
              <Route path='/:user/notes' render={(routerProps)=>{return <UserNotePage userSignedIn={this.state.userSignedIn} currentUser={this.state.currentUser} userNotes={this.state.currentUser.notes} currentNote={this.state.currentNote} handleUpdateCurrentNote={this.handleUpdateCurrentNote} />}}/>
              <Route path='/:user/notes/edit' component={<EditNoteForm />} />
              <Route path='/:user/notes/new' component={<CreateNoteForm />}/>
              <Route path='/:user/profile' render={(routerProps)=>{return <UserProfile userSignedIn={this.state.userSignedIn} currentUser={this.state.currentUser}  />}} />
              <Route exact path="/" component={HomePage} />
              <Redirect to={`/${this.state.currentUser.username}/notes`} />
            </React.Fragment>
          ) : (
          <React.Fragment>
            Not logged in.
            <Route path="/login" render={(routerProps)=>{return <UserSignIn logInApp={this.logInApp} />}}/>
            <Route path="/signup" render={(routerProps)=>{return <UserSignUp signUpApp={this.signUpApp}/>}}/>
            <Route exact path="/" component={HomePage} />
            <Redirect to='/'/>
          </React.Fragment>
          )}
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
