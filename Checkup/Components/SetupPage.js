import React from 'react';
import { Button, ScrollView, TextInput, AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoHeader from './LogoHeader'
import SetupContainer from './SetupContainer'
import PageTitle from './PageTitle'

const styles2 = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 40,
    alignItems: 'center'
  },
  label: {
    fontSize: 20, 
    textAlign: "center",
    marginTop: 30
  },
  button: {
    flex: 1,
    backgroundColor: "#FF5733",
    marginBottom: 40
  }
}
)


export default class SetupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' }
  }
  showClick = () => {
    console.log("Advance button pressed")
  }

  render() {
    return (
      <ScrollView>
        <LogoHeader />
        <PageTitle  text="Personal Information" />
        <Text style={styles2.label}> Name: </Text>
        <SetupContainer />
        <Button
          onClick={this.showClick()}
          title="ADVANCE"
          style={styles2.button}
        />
      </ScrollView>
    );
  }
} 
