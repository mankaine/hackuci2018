import React from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {usernum: ''}
  }
  render() {
    return (
      <View>
        <Image 
          source={require('../Assets/CheckupLogo.svg')} 
        /> 
      </View>
    ); 
  }
}

//AppRegistry.registerComponent('Checkup', () => LoginPage); 
