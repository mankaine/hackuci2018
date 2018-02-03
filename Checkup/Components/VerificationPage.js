import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import VerificationContainer from './VerificationContainer'


export default class VerificationPage extends React.Component {
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
        <VerificationContainer />
      </View>
    ); 
  }
}
const style = StyleSheet.create({
  logo: { 
    width: 230, height: 230},
  container: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'}
  })

//AppRegistry.registerComponent('Checkup', () => LoginPage); 
