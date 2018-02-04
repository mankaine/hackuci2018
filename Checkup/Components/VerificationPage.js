import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      <KeyboardAwareScrollView extraScrollHeight={100}>
        <LogoHeader />
        <VerificationContainer navigation={this.props.navigation} phoneNumber={this.props.navigation.state.params.phoneNumber} />
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  }
})
