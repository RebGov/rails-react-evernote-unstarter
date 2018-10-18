//post fetch : post '/notes', to: 'notes#create'
//check that token match then post note attaches to user id
//
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateNoteForm extends React.Component {
  render() {
    const style = { border: "1px solid brown", padding: "1rem", margin: "1rem" };
    return (
      <div style={style} className="CreateUserForm">
        <h2>Journal Entry</h2>
      <Form >

        {/* <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup> */}
        {/* <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        {/* <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        <FormGroup>
          <Label for="exampleText">Title</Label>
          <Input type="text" name="text" id="exampleText" placeholder="Journal Title" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Location</Label>
          <Input type="text" name="text" id="exampleText" placeholder="City, State" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Start Writing..."/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Set Journal Entry to Private
            </Label>
          </FormGroup>
          {/* <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Journal Entry is Private
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup> */}
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
    );
  }
}
