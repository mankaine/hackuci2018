import React from 'react';
import { AppRegistry, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Input extends React.Component {
  constructor(props){
     super(props);
     this.state = {name: '', text: ''}
  }
  
  


export default class SetupPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {userName: '', caretakers: {}}
  }
  render() {
    let pic =  {uri: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'}
    return (
      <View style = {style.container}>
        <Image style = {style.logo}

          source = {pic}
          //source={require('../Assets/CheckupLogo.svg')} 
        />
      <Text>Personal Information </Text>
      
      </View>
    );


} 
