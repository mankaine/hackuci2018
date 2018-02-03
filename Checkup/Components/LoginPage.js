import React from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userNum: '', userType: ''}
  }
  render() {
    return (
      <View>
        <Image 
          style={{flex: 1, alignItems: 'center', width: 60, height: 60}}
          source={require('../Assets/CheckupLogo.svg')} 
        /> 
      </View>
    ); 
  }
}

//AppRegistry.registerComponent('Checkup', () => LoginPage); 
