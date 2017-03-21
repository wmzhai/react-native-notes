import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/router';

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
    const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>  
        <Router />     
      </Provider>
    );
  }
}

