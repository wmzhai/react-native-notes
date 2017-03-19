import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginFrom from './src/components/login_form';

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbUe5aMYUxaIZ2znynUAjhVViemd7wBvA',
      authDomain: 'authentication-f791a.firebaseapp.com',
      databaseURL: 'https://authentication-f791a.firebaseio.com',
      storageBucket: 'authentication-f791a.appspot.com',
      messagingSenderId: '318811770583'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
      case false:
        return <LoginFrom />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
