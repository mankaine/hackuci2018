import React from 'react';
import { Button, StyleSheet, View, Text, TextInput, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoHeader from './LogoHeader'

export default class LandingPage extends React.Component {
  static NavigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  }
  handlePress = async () => {
    try {
      const value = await AsyncStorage.getItem('@checkin:token')
      if (value === null) {
        this.props.navigation.navigate('Login')
        return;
      }
      const res = await fetch('http://34.217.100.80/api/auth/check', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${value}`,
        },
      })
      const token = await res.text()
      if(res.ok == false){
        this.props.navigation.navigate('Login')
        return;
      }
      await AsyncStorage.setItem('@checkin:token', token);
      this.props.navigation.navigate('Home')
    } catch (error) {

    }
  }
  render() {
    return (
      <View style = {styles.forPage}>
        <Button
          onPress={this.handlePress}
          title="Welcome"
          style={styles.forButton}
        />
          
      </View>
    );
  }

}
const styles = StyleSheet.create({
  forButton: {
    flex: 1,
    backgroundColor: "#FF5733"
  },
  forPage: {
    backgroundColor: "#F0D138"
  }
})
