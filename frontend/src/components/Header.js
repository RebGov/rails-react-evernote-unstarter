import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../App.css'
import Logo from '../images/Logo.png';
import UserSignOut from './UserSignOut'
//header always shows (with buttons for sign-in/sign-up options)

// export default class Header extends Component {
//   render () {
//     const style = { border: "1px solid blue", padding: "1rem" };
//     return (
//       <div className="App-header" style={style}>
//         <h1>Hello Header!</h1>
//       </div>
//     )
//   }
// }

//!userSignedIn === true ? sign in : userName
export default class Header extends Component {
  constructor(props, history) {
    super(props, history);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleClickLogOut = e => {
    e.preventDefault()
    localStorage.clear()
    //needs to go to welcome page when done
    console.log("clicked loggout")


    // this.props.history.push("/")
    //set state or use router :: hide what want to hide; display what want to display
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <img src={Logo} className="App-logo" alt="logo" />
          <NavbarBrand href="/">Travel Writing Journal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                {this.props.userSignedIn ? ( <p>{this.props.username}</p> ) : <p>Sign In</p>}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  {this.props.userSignedIn ? (<p>Welcome {this.props.username}</p>) : ( <Link to="/login">Sign In</Link> )}
                  </DropdownItem>
                  <DropdownItem>
                    {this.props.userSignedIn ? null : ( <Link to="/signup">Sign Up</Link> )}
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/about">About Travel Writing</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/contact">Contact</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    {this.props.userSignedIn ? ( <p>Profile</p> ) : null}
                  </DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleClickLogOut}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
