import React from 'react';
import { ScrollView, Button, StyleSheet, View, Text, TextInput, PanResponder, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card } from 'react-native-elements'
import Icon from '@expo/vector-icons/Feather'
import Reminder from './Reminder'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { reminders: [] }
  }
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
  }

  getReminders = async () => {
    const value = await AsyncStorage.getItem('@checkin:token')
    const res = await fetch('http://34.217.100.80/api/reminder', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${value}`}
    })
  }
  //<Reminder text="placeholder: take in x mins/hours"> </Reminder>
  //<Text style={{padding:20, fontSize: 18}}>No perscriptions listed</Text>

  render() {
    this.getReminders()
    return (
      <ScrollView style={styles.container}>
        <Card containerStyle={{ alignItems: 'center', backgroundColor: '#F0D138' }}>
          <Button
            title="Create reminder"
            onPress={() => this.props.navigation.navigate('Drug')}
          />
        </Card>
        <Reminder text="placeholder: take in x mins/hours"> </Reminder>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  forView: {
    display: "flex",
    flexDirection: "row",
  },
  forButton: {
    backgroundColor: "#FF5733",
    fontSize: 25
  }
})
