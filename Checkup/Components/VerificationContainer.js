import React from 'react';
import { AsyncStorage, Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NumberDataEntry from './NumberDataEntry'
import TouchButton from './TouchButton'
import PageTitle from './PageTitle'


export default class VerficationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNum: ''
    }
  }


  handlePress = async () => {
    const res = await fetch('http://34.217.100.80/api/auth/verify', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: this.props.phoneNumber,
        verificationCode: parseInt(this.state.userNum)
      })
    })
    const body = await res.json()
    console.log(body)
    try {
      await AsyncStorage.setItem('@checkin:token', body.jwt);
    } catch (error) { }
    this.props.navigation.navigate('Home')
  }


  render() {
    return (
      <View>
        <PageTitle style={styles.forLoginText} text="Enter verification code" />
        <View>
          <NumberDataEntry
            onChange={(text) => this.setState({ userNum: text })}
            style={styles.forNumberInput}
            req="Verification code"
            ph="1234"
          />
        </View>
        <Button
          onPress={this.handlePress}
          title="ADVANCE"
          style={styles.forButton}
        />
      </View>
    )
  }
}

/**
 * <View style={styles.forView}>
 *  <Button
 *      onClick={this.recipientButtonPressed()}
 *      title="Recipient"
 *      style={styles.forButton} />
 * <Button
 *      onClick={this.caretakerButtonPressed()}
 *      title="Caretaker"
 *      style={styles.forButton} />
 * </View>
*/

const styles = StyleSheet.create({
  forSalutation: {
    fontSize: 25, textAlign: "center",
    marginTop: 30,
    marginBottom: 30
  },
  forLoginText: {
    marginTop: 20,
    marginBottom: 20
  },
  forNumberInput: {
    height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20
  },
  forUserCategoryPrompt: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  forView: {
    display: "flex",
    flexDirection: "row",
  },
  forButton: {
    flex: 1,
    backgroundColor: "#FF5733"
  }
})
