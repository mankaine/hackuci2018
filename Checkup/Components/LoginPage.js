import React from 'react';
import { Button, AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
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
        <Button 
          onPress={() => this.props.navigation.navigate('Setup')} 
          title="ADVANCE"
          style={style.button}
        />
      </View>
    ); 
  }
}
const style = StyleSheet.create({

  container: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'},
  button: {
    flex: 1,
    backgroundColor: "#FF5733"}
  })

//AppRegistry.registerComponent('Checkup', () => LoginPage); 
