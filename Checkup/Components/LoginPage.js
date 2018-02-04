import React from 'react';
import { Button, AppRegistry, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginContainer from './LoginContainer'
import LogoHeader from './LogoHeader'


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userNum: '', userType: '' }
  }
  render() {
    return (
      <KeyboardAwareScrollView extraScrollHeight={100}>
        <LogoHeader />
        <LoginContainer navigation={this.props.navigation} />
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
})
