import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
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
  render () {
    return (
      <div className='App'>
        <header>
          <h1> Chat </h1>
        </header>
        <main>
          <RoomList firebase={firebase} />
        </main>
      </div>

    )
  }
}

export default App;
