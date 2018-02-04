import React, { Component } from 'react';
import { StyleSheet, Text, View, Bucket } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import SetupPage from './Components/SetupPage'
import VerificationPage from './Components/VerificationPage'
import AddDrugPage from './Components/AddDrugPage'
import LandingPage from './Components/LandingPage'
import ProfilePage from './Components/ProfilePage'

const HomeTab = TabNavigator({
  Home: { screen: HomePage,  },
  Profile: { screen: ProfilePage },
})

const RootStack = StackNavigator({
  Landing: { screen: LandingPage},
  Drug: { screen: AddDrugPage },
  Login: { screen: LoginPage },
  Setup: { screen: SetupPage },
  Verification: { screen: VerificationPage },
  Home: { screen: HomeTab, navigationProps: { header: null } },
})

export default RootStack
