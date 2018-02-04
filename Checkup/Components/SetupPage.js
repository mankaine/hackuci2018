import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LogoHeader from './LogoHeader'
import PageTitle from './PageTitle'
import SetupContainer from './SetupContainer'
import TouchButton from './TouchButton'

export default class SetupPage extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <KeyboardAwareScrollView extraScrollHeight={100}>
        <LogoHeader />
        <PageTitle text="Personal Information" style={styles.forTitle} />
        <SetupContainer navigation={this.props.navigation} phoneNumber={this.props.navigation.state.params.phoneNumber} />
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  forTitle: {
    marginBottom: 20
  }
})
