import React from 'react';
import { Button, ScrollView, TextInput, AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoHeader from './LogoHeader'
import SetupContainer from './SetupContainer'
import PageTitle from './PageTitle'
import SingleLineDataEntry from './SingleLineDataEntry'
import TouchButton from './TouchButton'

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


  updateUserName = (data) => {
    this.setState({userName: data})
  }


  render() {
    return (
      <ScrollView>
        <LogoHeader />
        <PageTitle text="Personal Information" style={styles.forTitle} />
        <SingleLineDataEntry req="Enter name" onChange={this.updateUserName}/>
        <SetupContainer navigation={this.props.navigation} name={this.state.userName} phoneNumber={this.props.navigation.state.params.phoneNumber}/>
      </ScrollView>
    );
  }
} 


const styles = {
  forTitle : {
    marginBottom: 20
  }
}
