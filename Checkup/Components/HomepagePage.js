import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomepageContainer from './HomepageContainer'
import LogoHeader from './LogoHeader'

export default class HomepagePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userNum: '', userType: ''}
  }
  render() {
  return (
      <View style = {style.container}>
        <LogoHeader />
        <HomepageContainer/>
      </View>
    ); 
  }
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'}
  })

//AppRegistry.registerComponent('Checkup', () => LoginPage); 
