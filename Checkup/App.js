<<<<<<< HEAD
import React, { Component } from 'react';
import { StyleSheet, Text, View, Bucket } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomePage from './Components/HomePage'  
import LoginPage from './Components/LoginPage'
import SetupPage from './Components/SetupPage'
import VerificationPage from './Components/VerificationPage'
import AddDrugPage from './Components/AddDrugPage'
import LandingPage from './Components/LandingPage'



const RootStack = StackNavigator( {
  Landing: {
    screen: LandingPage}, 
  Login: {
    screen: LoginPage }, 
  Setup: {
    screen: SetupPage },
  Verification: {
    screen: VerificationPage },
  Home: {
    screen: HomePage}
} ); 


export default class App extends Component {
  constructor(props){
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
=======
import React, { Component } from 'react';
import { StyleSheet, Text, View, Bucket } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import SetupPage from './Components/SetupPage'
import VerificationPage from './Components/VerificationPage'
import AddDrugPage from './Components/AddDrugPage'

<<<<<<< HEAD
/*
const RootStack = StackNavigator( {
  Login: {
    screen: LoginPage }, 
  Setup: {
    screen: SetupPage },
  Verification: {
    screen: VerificationPage },
  Home: {
    screen: HomePage}
} ); 
<RootStack />
*/
=======

const RootStack = StackNavigator({
  Login: { screen: LoginPage },
  Setup: { screen: SetupPage },
  Verification: { screen: VerificationPage },
  Home: { screen: HomePage }
});


>>>>>>> 50617593dc5c6da31a1a97fb861489b0870fc0b6
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HomePage />
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
>>>>>>> 2e5b5fec4e09facb1fabe42fa999696158b1e6bc
