import React, { Component } from 'react';
import { Button, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames'
import { withRouter } from 'react-router-dom';
import FullNote from '../containers/FullNote';
import CreateNoteForm from '../components/CreateNoteForm';
import EditNoteForm from '../components/EditNoteForm';
import '../App.css'
//Goal: have some user notes public and some private/drafts. Private/drafts only show when user logged in. (would need to update backend first)
class NotePage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleClickEdit = e => {
    return this.setState({
      activeTab: '3'
    })
  }
  render() {
    // console.log(this.props.currentNote)
    return (
      <div className="Note-page">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Current Entry
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              New Entry
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Edit Entry
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {this.props.currentNote === null ? (<h3>Please click a Journal Entry to Read</h3>) : (<FullNote currentNote={this.props.currentNote} currentUser={this.props.currentUser} />) }
                <Button onClick={this.handleClickEdit} color="primary">Edit Story</Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <CreateNoteForm currentUser={this.props.currentUser}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <EditNoteForm currentNote={this.props.currentNote} editNoteApp={this.props.editNoteForm}/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default withRouter(NotePage);
