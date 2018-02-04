import React from 'react';
import { Button, StyleSheet, View, Text, TextInput, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogoHeader from './LogoHeader'

export default class LandingPage extends React.Component {
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
            'Authorization': `Bearer ${value}`
          }
         })
    } catch (error) { }
    try {
      await AsyncStorage.setItem('@checkin:token', res);
    } catch (error) { }
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View>
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
  }
})
