import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link,
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

import AllNotes from './containers/AllNotes'
import NotePage from './components/NotePage';
import CreateNoteForm from './components/CreateNoteForm'
import EditNoteForm from './components/EditNoteForm'

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
      })
    }
  }

  userLogOut = () => {
    this.setState({
      currentUser: {},
      userSignedIn: false
    })
  }
  render() {
    // console.log("appPage get userNotes", this.getUserNotes())
     console.log("AppPage - Signed in: ", this.state.userSignedIn, this.state.currentUser.notes)
    const style = { border: "1px solid red", padding: "1rem", margin: "1rem" };
    return (
      <div className="App" style={style}>
        <Header
          userSignedIn={this.state.userSignedIn}
          username={this.state.currentUser.username}
          userLogOut={this.userLogOut}

        />

        {/* <UserSignIn logInApp={this.logInApp}/>
        <UserSignUp signUpApp={this.signUpApp}/>
        <CreateNoteForm />
        <EditNoteForm /> */}
        {/* <div className="Note-container" style={ {border: "1px solid blue", padding: "1rem"}}>
          <AllNotes
            userSignedIn={this.state.userSignedIn}
            currentUser={this.state.currentUser}
            userNotes={this.state.currentUser.notes}
          />
          <NotePage />

          <EditNoteForm />
        </div> */}
        {/* <div>
          {this.state.userSignedIn ? (
            <h1>Hello {this.state.currentUser.username}!</h1>
          ) : null}
        </div> */}
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />

          { this.state.userSignedIn ? (
            <React.Fragment>
              <Route path='/:user/notes' render={(routerProps)=>{return <AllNotes userSignedIn={this.state.userSignedIn}
              currentUser={this.state.currentUser}
              userNotes={this.state.currentUser.notes} /> }}/>
              <Route path='/:user/notes/edit' component={<EditNoteForm />} />
              <Route path='/:user/notes/new' component={<CreateNoteForm />}/>
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

          {/* <Route path="/login" render={(routerProps)=>{return <UserSignIn logInApp={this.logInApp} />}}/>
          <Route path="/signup" render={(routerProps)=>{return <UserSignUp signUpApp={this.signUpApp}/>}}/> */}
          {/* <Route exact path="/" component={HomePage} /> */}

        </Switch>
{/* first view: homepage route: / */}
{/* sign in: /logIn */}
{/* sign up: /signUp */}
{/* User page: /{username} (dynamic)*/}
{/* user create note: /username/notes/new */}
{/* user edit note: /username/notes/edit */}
{/*  user delete note: /username/notes/delete -need confirmation*/}
{/* About page: /about */}
{/* Contact page: /contact */}


      </div>
    );
  }
}
export default withRouter(App);
