import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';

<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>

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
  render() {
    return (
  
    );
  }
}

export default App;
