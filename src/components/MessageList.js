import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <div className = "messageList">
        <h1>{this.props.activeRoom}</h1>
      </div>
    )
  }
}

export default MessageList;
