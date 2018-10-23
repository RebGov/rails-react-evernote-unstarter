import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../App.css'
import Logo from '../images/Logo.png';


//!userSignedIn === true ? sign in : userName
class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      error: null
    }
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
    this.props.history.push("/")
    this.props.userLogOut()
  }
  render() {
    // console.log("Header-currentNote: ", this.props.currentNote)
    return (
      <div>
        <Navbar color="light" light expand="md">
          <img src={Logo} className="App-logo" alt="logo" />
          <NavbarBrand href="/">Travel Writing Journal</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                {this.props.userSignedIn ? ( <div><h3> Welcome {this.props.username}</h3><hr></hr><p>Menu</p></div> ) : (<div><h3>Welcome</h3> <hr></hr> <p>Menu & Login</p></div>)}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {this.props.userSignedIn ? (<p>Welcome {this.props.username}</p>) : ( <Link to="/login" >Login</Link>)}
                  </DropdownItem>
                  <DropdownItem>
                    {this.props.userSignedIn ? null : ( <Link to="/signup">Create Account</Link> )}
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/about">About Travel Writing</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/contact">Contact</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    {this.props.userSignedIn ? ( <Link to="/:user/profile">Profile</Link> ) : null}
                  </DropdownItem>
                  <DropdownItem>
                    {this.props.userSignedIn ? ( <Link to="/:user/journal_entries">Your Writings</Link> ) : null}
                  </DropdownItem>
                  {/* <DropdownItem>
                    {this.props.userSignedIn ? ( <Link to="/:user/notes/new">New Travel Writing Story</Link> ) : null}
                  </DropdownItem> */}
                  {/* <DropdownItem>
                    {this.props.userSignedIn ? ( <Link to="/:user/profile/edit">Profile</Link> ) : null}
                  </DropdownItem> */}
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
export default withRouter(Header);
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
