import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ProfilePage from './Components/ProfilePage'  



export default class App extends Component {
  constructor(props){
    super(props); 
  }
  render() {
    return (
      <View>
        
        <ProfilePage/> 
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
