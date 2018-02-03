import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginPage from './Components/LoginPage'  
import SetupPage from './Components/SetupPage'
import HomepagePage from './Components/HomepagePage'  



export default class App extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    return (
      <View>
        
        <HomepagePage/> 
      </View>
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
