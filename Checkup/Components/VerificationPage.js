import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import VerificationContainer from './VerificationContainer'
import LogoHeader from './LogoHeader'

export default class VerificationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userNum: '', userType: '' }
  }
  render() {
    return (
      <View style={style.container}>
        <LogoHeader />
        <VerificationContainer navigation={this.props.navigation} phoneNumber={this.props.navigation.state.params.phoneNumber} />
      </View>
    );
  }
}
const style = StyleSheet.create({

  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

//AppRegistry.registerComponent('Checkup', () => LoginPage); 
