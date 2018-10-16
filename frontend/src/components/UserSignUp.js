import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
//user sign up page - create user form

//edit this form for sign up  this is the log in form.
export default class UserSignUP extends Component {
  state = {
      username: "",
      password: "",
      currentUser: {},
      signedIn: false
    };
  render() {
    return (
      <div>
        <Container className="UserSignIn">
          <h2>Sign In</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>UserName</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="username"
                  id="exampleUsername"
                  placeholder="username"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>

      </div>
    )
  }
}
