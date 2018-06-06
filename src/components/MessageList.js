import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <div className = "messageList">
        <h1>List Messages</h1>
        {console.log(this.props.activeRoom)}
        <li> {this.props.activeRoom} </li>
      </div>
    )
  }
}

export default MessageList;
