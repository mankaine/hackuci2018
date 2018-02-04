import React from 'react';
import { ScrollView, Button, StyleSheet, View, Text, TextInput, PanResponder, AsyncStorage, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card } from 'react-native-elements'
import Icon from '@expo/vector-icons/Feather'
import Reminder from './Reminder'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
    }
  }

  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
  }

  async componentWillMount() {
    this.getReminders()
  }

  getReminders = async () => {
    const value = await AsyncStorage.getItem('@checkin:token')
    const res = await fetch('http://34.217.100.80/api/reminder', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${value}`,
      },
    })
    const reminders = await res.json()
    this.setState({ reminders })
  }

  render() {
    console.log(this.state)
    return (
      <ScrollView style={styles.container}>
        <View style={{ margin: 15, marginTop: 20 }}>
          <Text style={{ fontSize: 32, fontWeight: '300' }}>Reminders</Text>
        </View>
        {this.state.reminders.map(reminder => (
          <Reminder key={reminder._id} text={reminder.medicineName}> </Reminder>
        ))}
        {this.state.reminders.length === 0 && (
          <Text style={{padding:20, fontSize: 18}}>No prescriptions listed</Text>
        )}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Drug')}
        >
          <Card containerStyle={{ alignItems: 'center' }}>
            <Icon name="plus" size={35} color='#dddddd' />
            <Text style={{ color: '#dddddd' }}>New</Text>
          </Card>
        </TouchableOpacity>
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
