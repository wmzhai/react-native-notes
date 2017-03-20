import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/login_form';

export default class App extends React.Component {
  componentWillMount() {
    const config =  {
      apiKey: 'AIzaSyCi1SOm-ugYIa9R5hYEg4yPpqRXNrbQZhA',
      authDomain: 'manager-6ca59.firebaseapp.com',
      databaseURL: 'https://manager-6ca59.firebaseio.com',
      storageBucket: 'manager-6ca59.appspot.com',
      messagingSenderId: '1079646321243'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>  
        <LoginForm />     
      </Provider>
    );
  }
}

