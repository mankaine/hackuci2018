import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SingleLineDataEntry from './SingleLineDataEntry'
import { Permissions, Notifications } from 'expo';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    flex: 1,
    backgroundColor: "#FF5733"
  },
  container: {
    marginBottom: 40
  }
})


async function getPushToken() {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    return;
  }
  let token = await Notifications.getExpoPushTokenAsync();
  return token
}

export default class SetupContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { caretakers: [] }
  }

  renderCaretaker = (caretaker, index) => {
    return (
      <View key={index}>
        <SingleLineDataEntry req="Caretaker's Phone Number"
          onChange={(text) => {
            caretakers = this.state.caretakers.slice();
            caretakers[index] = text;
            this.setState({ caretakers });
          }}
          style={styles.input}
          placeholder="Caretaker's Phone Number"
        />
      </View>
    )
  }

  addCaretaker = () => {
    caretakers = this.state.caretakers.slice()
    caretakers.push('')
    this.setState({ caretakers, index: this.state.index + 1 })
  }


  handlePress = async () => {
    const expoPushToken = await getPushToken()
    console.log(expoPushToken, this.state.caretakers)
    const res = await fetch('http://34.217.100.80/api/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: this.props.phoneNumber, 
        caretakers: this.state.caretakers,
        name: this.props.name,
        expoPushToken,
      }),
    })
    const body = await res.json()
    console.log(body)
    this.props.navigation.navigate('Verification', { phoneNumber: body.phoneNumber })
  }


  render() {
    return (
      <View style={styles.container}>
        {this.state.caretakers.map(this.renderCaretaker)}
        <Button
          onPress={this.addCaretaker}
          title="Add a caretaker"
          style={styles.forButton}
        />
        <Button
          onPress={this.handlePress}
          title="ADVANCE"
          style={styles.button}
        />
      </View>
    )

  }
}
