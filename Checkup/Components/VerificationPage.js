import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LogoHeader from './LogoHeader'
import VerificationContainer from './VerificationContainer'

export default class VerificationPage extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView extraScrollHeight={100}>
        <LogoHeader />
        <VerificationContainer navigation={this.props.navigation} phoneNumber={this.props.navigation.state.params.phoneNumber} />
      </KeyboardAwareScrollView>
    )
  }
}
