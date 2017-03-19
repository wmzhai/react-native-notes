import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbUe5aMYUxaIZ2znynUAjhVViemd7wBvA',
      authDomain: 'authentication-f791a.firebaseapp.com',
      databaseURL: 'https://authentication-f791a.firebaseio.com',
      storageBucket: 'authentication-f791a.appspot.com',
      messagingSenderId: '318811770583'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

