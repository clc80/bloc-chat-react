import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import './App.css';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzRbjpS9k7xVKSRftsSSvF4lr9AW3Yr8k",
    authDomain: "bloc-chat-react-1391b.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-1391b.firebaseio.com",
    projectId: "bloc-chat-react-1391b",
    storageBucket: "bloc-chat-react-1391b.appspot.com",
    messagingSenderId: "1071245285869"
  };
  firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '',
      user: null
    };
    this.selectActiveRoom = this.selectActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  selectActiveRoom(room) {
    this.setState({ activeRoom: room })
  }
  setUser(user) {
    this.setState({ user: user });
  }

  render () {
    return (
      <div className='App'>
        <header>
          <h1> Chat </h1>
        </header>
        <main>
          <User
            firebase={firebase}
            setUser={this.setUser}
          />
          <RoomList
            firebase={firebase}
            activeRoom = {this.state.activeRoom}
            selectActiveRoom = {this.selectActiveRoom}
          />
          <MessageList
            firebase={firebase}
            activeRoom = {this.state.activeRoom}
          />

        </main>
      </div>

    )
  }
}

export default App;
