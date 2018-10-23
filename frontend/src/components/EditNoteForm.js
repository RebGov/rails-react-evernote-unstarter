import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';
// import DeleteNote from './components/DeleteNote';

export default class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      currentNote: this.props.currentNote,
    }
  }
  render() {
    const style = { border: "1px solid purple", padding: "1rem", margin: "1rem" };
    return (
      <div style={style} className="CreateUserForm">
        <h2>Edit Entry</h2>
        <Form >
          <FormGroup>
            <Label for="exampleText">Title</Label>
            <Input type="text" name="title" id="exampleText" placeholder={this.props.title} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Location</Label>
            <Input type="text" name="location" id="exampleText" placeholder={this.props.location} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Your Travel Story</Label>
            <Input style={ {width: "100%", height: "25rem"}} type="textarea" name="content" id="exampleText" placeholder={this.props.content}/>
          </FormGroup>
        <Button color="primary">Update Your Story</Button>
          <Button color="danger" type="submit">Delete this Story</Button>
        </Form>
    </div>
    );
  }
}
