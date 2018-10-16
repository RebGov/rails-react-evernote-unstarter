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
    const style = { border: "1px solid orange", padding: "1rem", margin: "1rem" };
    return (
      <div style={style}>
        <Container className="UserSignIn">
          <h2>Sign Up</h2>
          <Form className="form-signUP">
            <Col>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="firstName"
                  id="exampleFirstName"
                  placeholder="First Name"
                />
                <Label>Last Name</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="lastName"
                  id="exampleLastName"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="username"
                  id="exampleUsernameUp"
                  placeholder="username"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                  id="exampleEmail"
                  placeholder="yourEmail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePasswordUp">Password</Label>
                <Input
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                  id="examplePasswordUp"
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
