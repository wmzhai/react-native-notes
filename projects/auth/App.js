import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginFrom from './src/components/login_form';

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
        <LoginFrom />
      </View>
    );
  }
}

