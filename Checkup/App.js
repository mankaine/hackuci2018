import React, { Component } from 'react';
import { StyleSheet, Text, View, Bucket } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import SetupPage from './Components/SetupPage'
import VerificationPage from './Components/VerificationPage'
import AddDrugPage from './Components/AddDrugPage'


const RootStack = StackNavigator({
  Login: { screen: LoginPage },
  Setup: { screen: SetupPage },
  Verification: { screen: VerificationPage },
  Home: { screen: HomePage }
});


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default StackNavigator({
//  Login: {
//    screen: App,
//  },
//});
