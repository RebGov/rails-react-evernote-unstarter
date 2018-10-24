import React from 'react';
import {withRouter} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';
// import DeleteNote from './components/DeleteNote';

class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      title: "",
      content: "",
      location: "",
      currentUser: this.props.currentUser,
      currentNote: this.props.currentNote
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  editNote = e => {
    e.preventDefault();
    const token = localStorage.token;
    if(token) {
       fetch(`http://localhost:3000/api/v1/notes/${this.props.currentNote.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          location: this.state.location
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(this.props.editNoteApp)
        .then(this.props.history.push('/:user'))
    };
  };
  //want an alert that asks "are you sure"
  deleteNote = e => {
    e.preventDefault();
    const token = localStorage.token;
    if(token){
      fetch(`http://localhost:3000/api/v1/notes/${this.props.currentNote.id}`, {
       method: "DELETE",
       body: JSON.stringify({
         title: this.state.title,
         content: this.state.content,
         location: this.state.location
       }),
       headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`
       }
     })
       .then(resp => resp.json())
       .then(this.props.editNoteApp)
       .then(this.props.history.push('/:user'))

    }

  }
  render() {
    const style = { border: "1px solid purple", padding: "1rem", margin: "1rem" };
    return (
      <div style={style} className="EditUserForm">
        <h2>Edit Entry</h2>
        <Form
          className="form-edit-note"
          onSubmit={this.editNote}
          >
          <FormGroup>
            <Label for="exampleText">Title</Label>
            <Input
              type="text"
              name="title"
              onChange={this.handleChange}
              id="exampleText"
              placeholder={this.props.currentNote.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Location</Label>
            <Input
              type="text"
              name="location"
              id="exampleText"
              onChange={this.handleChange}
              placeholder={this.props.currentNote.location}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Your Travel Story</Label>
            <Input
              style={ {width: "100%", height: "25rem"}}
              type="textarea"
              onChange={this.handleChange}
              name="content"
              id="exampleText"
              placeholder={this.props.currentNote.content}
            />
          </FormGroup>
        <Button color="primary">Update Your Story</Button>
          <Button color="danger" type="submit">Delete this Story</Button>
        </Form>
    </div>
    );
  }
}
export default withRouter(EditNoteForm);
