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
import CreateNoteForm from './components/CreateNoteForm';
import EditNoteForm from './components/EditNoteForm';
import UserProfile from './Pages/UserProfile';
import Footer from './components/Footer';

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
              userSignedIn: true,
              currentNote: data.notes[0]
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

  createNoteApp = data => {
    this.setState({
      currentNote: data
    })
  }
  editNoteApp = data => {
    this.setState({
      currentNote: data
    })
  }


  handleUpdateCurrentNote = (id, title, location, content) => {
    this.setState({
      currentNote: {id, title, location, content}
    });
  };
  render() {

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
              <Route path='/:user/journal_entries' render={(routerProps)=>{return <UserNotePage userSignedIn={this.state.userSignedIn} currentUser={this.state.currentUser} userNotes={this.state.currentUser.notes} currentNote={this.state.currentNote} handleUpdateCurrentNote={this.handleUpdateCurrentNote} />}}/>
              <Route path='/:user/journal_entries/edit' render={(routeProps)=> {return <EditNoteForm currentUser={this.state.currentUser} currentNote={this.state.currentNote} editNoteApp={this.editNoteApp}/>} } />
              <Route path='/:user/journal_entries/new' render={(routeProps)=> {return <CreateNoteForm currentUser={this.state.currentUser} createNoteApp={this.createNoteApp}/>} }/>
              <Route path='/:user/profile' render={(routerProps)=>{return <UserProfile userSignedIn={this.state.userSignedIn} currentUser={this.state.currentUser}  />}} />
              <Route exact path="/" component={HomePage} />
              <Redirect to={`/${this.state.currentUser.username}/journal_entries`} />
            </React.Fragment>
          ) : (
          <React.Fragment>
            <Route path="/login" render={(routerProps)=>{return <UserSignIn logInApp={this.logInApp} />}}/>
            <Route path="/signup" render={(routerProps)=>{return <UserSignUp signUpApp={this.signUpApp}/>}}/>
            <Route exact path="/" component={HomePage} />
            <Redirect to='/'/>
          </React.Fragment>
          )}
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);
