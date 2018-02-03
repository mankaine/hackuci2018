import React from 'react';
import { Button, ScrollView, TextInput, AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SetupContainer from './SetupContainer' 

const styles2 = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20},
  logo: {
    width: 230, height: 230},
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom : 40, 
    alignItems: 'center'},
  title:{
    fontSize: 25, textAlign: "center"},
  label:{
    fontSize: 20, textAlign: "center"},
  button: {
        flex: 1,
        backgroundColor: "#FF5733",
        marginBottom: 40 }
 }
)


export default class SetupPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userName: ''}
  }
  showClick = () => {
        console.log("Advance button pressed")
  }

  render() {
    return (
    <ScrollView>
      <View style = {styles2.container}>
        <Image style = {styles2.logo}
          source={require('../Assets/Checkup_Logo.png')} 
        />
        <Text style={styles2.title}> Personal Information </Text>
        <Text style={styles2.label}> Name: </Text>
      <SetupContainer/>  
    <Button
      onClick={this.showClick()}
      title="ADVANCE"
      style={styles2.button}
     />
    </View>
    </ScrollView>
    );
}} 
