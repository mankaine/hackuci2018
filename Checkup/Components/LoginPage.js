import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginContainer from './LoginContainer'
import LogoHeader from './LogoHeader'

export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userNum: '', userType: ''}
  }
  render() {
  let pic =  {uri: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'}
    return (
      <View style = {style.container}>
        <LogoHeader/>
        <LoginContainer />
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
