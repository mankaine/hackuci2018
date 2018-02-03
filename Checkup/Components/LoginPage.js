import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userNum: '', userType: ''}
  }
  render() {
  let pic =  {uri: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'}
    return (
      <View style = {style.container}>
        <Text> </Text>
        <Image style = {style.logo}
          
          source = {pic}
          //source={require('../Assets/CheckupLogo.svg')} 
        /> 
      </View>
    ); 
  }
}
const style = StyleSheet.create({
  logo: { 
    width: 130, height: 130},
  container: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'}
  })

//AppRegistry.registerComponent('Checkup', () => LoginPage); 
