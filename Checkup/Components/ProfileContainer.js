import React from 'react';
import { Button, AsyncStorage, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Feather'

export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNum: ''
    }
  }

  showClick = () => {
    console.log("Advance button pressed")
  }

  logout = async () => {
    await AsyncStorage.setItem('@checkin:token', '')
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.forUserNameText}>Placeholder Name</Text>
        <View style={styles.forLabelContainer}>
          <Text style={styles.forRecipient}>Recipients:</Text>
          <Text style={styles.forCaretaker}>Caretakers:</Text>
        </View>
        <View style={styles.forTextContainer}>
          <Text style={styles.forRecipientText}>Placeholder Recipient</Text>
          <Text style={styles.forCaretakerText}>Placeholder Caretaker</Text>
        </View>
        <TouchableOpacity onPress={this.logout}>
          <Icon name="log-out" size={30} color="#AAAAAA" style={{ marginBottom: 10 }} />
          <Text style={{ color: '#AAAAAA' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  forUserNameText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30
  },
  forRecipient: {
    height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    flex: 0.8
  },
  forCaretaker: {
    height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 50
  },
  forRecipientText: {
    height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    flex: 0.8
  },
  forCaretakerText: {
    height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,

  },
  forLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  forTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  forView: {
    display: "flex",
    flexDirection: "row",
  },
  forButton: {
    backgroundColor: "#FF5733"
  }
})
