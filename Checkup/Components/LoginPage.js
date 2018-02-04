import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LogoHeader from './LogoHeader'
import LoginContainer from './LoginContainer'

export default class LoginPage extends React.Component {
  static navigationOptions = {
    header: null,
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
