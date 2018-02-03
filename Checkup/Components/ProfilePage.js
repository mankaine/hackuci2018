import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileContainer from './ProfileContainer'


export default class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userNum: '', userType: ''}
  }
  render() {
  return (
      <View style = {style.container}>
        <Image style = {style.logo}
          source={require('../Assets/Checkup_Logo.png')} 
        /> 
        <ProfileContainer/>
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
