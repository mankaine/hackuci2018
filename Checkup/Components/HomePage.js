import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeContainer from './HomeContainer'
import LogoHeader from './LogoHeader'

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userNum: '', userType: ''}
  }
  render() {
  return (
        <HomeContainer navigation={this.props.navigation} />
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
