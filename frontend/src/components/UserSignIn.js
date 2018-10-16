import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

export default class UserSignIn extends Component {
  state = {
      username: "",
      password: "",
      currentUser: {},
      signedIn: false
    };

  // componentDidMount() {
  //   const token = localStorage.token;
  //   fetch("http://localhost:3000/api/v1/profile", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       if (!data.error) {
  //         this.setState({
  //           currentUser: data,
  //           signedIn: true
  //         });
  //       }
  //     });
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logIn = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(this.props.logInApp)
  };

  getUserNotes() {
    if (this.state.signedIn === true) {
      console.log(this.state.currentUser.notes)
    }
    console.log("sign in")
  }

  render () {

    const style = { border: "1px solid green", padding: "1rem", margin: "1rem" };
    return (
      <div style={style}>
      {/* <div style={style}>
        <form onSubmit={this.logIn}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="username"
            name="username"
          />
          <input
            type="password"
            onChange={this.handleChange}
            placeholder="password"
            name="password"
          />
          <input type="submit" />
        </form>
      </div> */}
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
