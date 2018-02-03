import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomepageContainer from './HomepageContainer'


export default class HomepagePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userNum: '', userType: ''}
  }
  render() {
  return (
      <View style = {style.container}>
        <HomepageContainer/>
      </View>
    ); 
  }
}
const style = StyleSheet.create({
  logo: { 
    width: 120, 
    height: 120,
    margin: 40
  },
  container: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'}
  })

//AppRegistry.registerComponent('Checkup', () => LoginPage); 
