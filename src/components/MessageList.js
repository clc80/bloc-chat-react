import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: ''
    };
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState( {messages: this.state.messages.concat(message)});
    });
  }

  handleMessageChange(e) {
    this.setState({newMessage: e.target.value})
  }

  handleMessageClick(e) {
    e.preventDefault();
    if(!this.state.newMessage) {return}
      const msg = {
          roomId: this.props.activeRoom.key,
          content: this.state.newMessage,
          sentAt: this.getTime(),
          username: this.props.userName.displayName
      }
      this.messagesRef.push(msg);
      this.setState({newMessage: ''})
  }

  doubleDigit(number) {
    return (number < 10) ? "0" + number : number
  }

  getTime() {
    const date = new Date();
    let hours = date.getHours();
    let ampm = hours >= 12 ? "PM" : "AM"
    hours = hours > 12 ? hours - 12 : hours;
    return (hours + ":" + this.doubleDigit(date.getMinutes()) + ampm);
  }

  render() {
    if(!this.props.userName) {
      return <h1> Please sign in to leave a comment! </h1>
    } else {
    if(this.props.activeRoom) {
      return (
      <div className = "messageList">
        <h1>List Messages</h1>
        <div> {this.props.activeRoom.name} </div>

        <div>{this.state.messages.filter(message => message.roomId === this.props.activeRoom.key).map((message, index) =>
          <li key={index}>{message.content} - {message.username}</li>
        )}</div>


        <div className='newMessage'>
          {/*Form for creating a Message*/}
          <form onSubmit={(e) => this.handleMessageClick(e)}>
            <input
              type="text"
              placeholder="New Chat Room Message"
              value={this.state.newMessage}
              onChange={(e) => this.handleMessageChange(e)}
            />
            <input type="submit"/>
          </form>
        </div>

      </div>
    )
  } else {
    return <div></div>
  }
}
  }
}

export default MessageList;
