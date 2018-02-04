import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Feather'
import ProfileContainer from './ProfileContainer'
import LogoHeader from './LogoHeader'

export default class ProfilePage extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => <Icon name="user" size={25} color={tintColor} />,
  }
  render() {
  return (
      <View style = {style.container}>
        <LogoHeader style={{ width: '100%' }} />
        <ProfileContainer/>
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
