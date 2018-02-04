import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CheckBox } from 'react-native-elements'

import WeekdaySelector from './WeekdaySelector'
import DosageRequirements from './DosageRequirements'
import LogoHeader from './LogoHeader'
import PageTitle from './PageTitle'
import SingleLineDataEntry from './SingleLineDataEntry'
import MultiLineDataEntry from './MultiLineDataEntry'
import NumberDataEntry from './NumberDataEntry'
import StartingTimeContainer from './StartingTimeContainer'
import DateTimePicker from 'react-native-modal-datetime-picker'

const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default class AddDrugPage extends React.Component {
  state = {
    medicineName: "",
    instructions: '',
    dosageSize: '',
    notifyBefore: '5',
    notificationTimes: [],
    daysOfWeekToTake: [false, false, false, false, false, false, false],

    showPicker: false,
  }

  handleCreate = async () => {
    const daysOfWeekToTake = this.state.daysOfWeekToTake.reduce(
      (prev, curr, index) => curr ? [...prev, index] : prev,
      []
    )

    const rawBody = {
      ...this.state,
      daysOfWeekToTake,
      notificationTimes: this.state.notificationTimes.map(time => time.getTime()),
      notifyBefore: parseInt(this.state.notifyBefore)
    }

    delete rawBody.showPicker

    const token = await AsyncStorage.getItem('@checkin:token')

    const res = await fetch('http://34.217.100.80/api/reminder', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawBody)
    })

    const body = await res.json()
    console.log(body)

    this.props.navigation.goBack()
  }

  handleTimePick = (time) => {
    const notificationTimes = this.state.notificationTimes.slice()
    notificationTimes.push(time)
    this.setState({ notificationTimes, showPicker: false })
  }

  handleDeleteTime = (index) => {
    const notificationTimes = [
      ...this.state.notificationTimes.slice(0, index),
      ...this.state.notificationTimes.slice(index + 1),
    ]
    console.log(this.state.notificationTimes, index, notificationTimes)
    this.setState({ notificationTimes })
  }

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        keyboardDismissMode={'on-drag'}
      >
        <LogoHeader style={{ width: '100%' }} />
        <PageTitle
          text="Add a Prescription"
          style={styles.forCommandText}
        />
        <SingleLineDataEntry
          req="Name"
          onChange={medicineName => this.setState({ medicineName })}
        />
        <MultiLineDataEntry
          req="Instructions"
          onChange={instructions => this.setState({ instructions })}
        />
        <SingleLineDataEntry
          req="Dosage"
          onChange={dosageSize => this.setState({ dosageSize })}
        />
        <NumberDataEntry
          req="Notify ahead (minutes)"
          onChange={notifyBefore => this.setState({ notifyBefore })}
        />
        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
          {[0, 1, 2, 3, 4, 5, 6].map(day => (
            <TouchableOpacity
              key={day}
              onPress={() => {
                const daysOfWeekToTake = this.state.daysOfWeekToTake.slice()
                daysOfWeekToTake[day] = !daysOfWeekToTake[day]
                this.setState({ daysOfWeekToTake })
              }}
            >
              <View
                style={{
                  backgroundColor: this.state.daysOfWeekToTake[day] ? 'lightgrey' : 'white',
                  padding: 20,
                }}
              >
                <Text>{labels[day]}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ width: '100%', margin: 10 }}>
          {this.state.notificationTimes.map((time, index) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 0.8, borderWidth: 1, borderColor: 'gray' }} key={index}>
              <Text>{time.getHours()}:{time.getMinutes()}</Text>
              <Button title="Delete" onPress={() => this.handleDeleteTime(index)} />
            </View>
          ))}
        </View>
        <Button title="Add time" onPress={() => this.setState({ showPicker: true })} />
        <View style={styles.forView}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Cancel"
            style={styles.forButton}
          />
          <Button
            onPress={this.handleCreate}
            title="Create"
            style={styles.forButton}
          />
        </View>

        <DateTimePicker
          isVisible={this.state.showPicker}
          onConfirm={this.handleTimePick}
          onCancel={() => this.setState({ showPicker: false })}
          mode="time"
        />
      </KeyboardAwareScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forCommandText: {
    marginTop: 20,
    marginBottom: 20
  },
  forDataEntryPrompt: {
    height: 40,
    borderBottomWidth: 2,
    flex: 0.8
  },
  forFieldNameContainer: {
    flexDirection: "row",
    width: '90%'
  },
  forFieldName: {
    marginTop: 10,
    flex: 0.8
  },
  forDataEntryContainer: {
    flexDirection: 'row'
  },
  forRadio: {
    width: '100%',
  },
  forRadioInternal: {
    marginTop: 20
  },
  forUserCategoryPrompt: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  forView: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 100
  },
  forButton: {
    flex: 1,
    backgroundColor: "#FF5733"
  }
})
