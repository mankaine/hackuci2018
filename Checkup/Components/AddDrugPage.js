import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import WeekdaySelector from './WeekdaySelector'
import DosageRequirements from './DosageRequirements'
import LogoHeader from './LogoHeader'
import PageTitle from './PageTitle'
import SingleLineDataEntry from './SingleLineDataEntry'
import MultiLineDataEntry from './MultiLineDataEntry'
import NumberDataEntry from './NumberDataEntry'
import StartingTimeContainer from './StartingTimeContainer'
import RadioForm,
{
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';

var radio_props = [
    { label: 'AM', value: 0 },
    { label: 'PM', value: 1 }
]
const daysOfWeek = {
    "Su": 0,
    "Mo": 1,
    "Tu": 2,
    "We": 3,
    "Th": 4,
    "Fr": 5,
    "Sa": 6,
    "DAYS_IN_WEEK": 7
}

const temporalDivision = {
    "AM": 0,
    "PM": 1
}

export default class AddDrugPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medicineName: "",
            instructions: "",
            dosageSize: 0,
            dosageTimeframe: 0,
            notificationTime: 0,
            startingTime: null,
            isAm: null,
            selectedDay: -1,
            days: []
        }
        for (let i = 0; i < daysOfWeek.DAYS_IN_WEEK; ++i) {
            this.state.days.push(this.genItem())
        }
    }

    genItem = () => {
        return {
            dosage: undefined,
            frequency: undefined,
            startingTime: undefined,
            isAM: undefined
        }
    }

    createButtonPressed = () => {
        console.log("Create Button Pressed")
    }

    cancelButtonPressed = () => {
        console.log("Cancel Button Pressed")
    }

    updateMedicineName = (data) => {
        this.setState({ medicineName: data })
    }

    updateInstructions = (data) => {
        this.setState({ instructions: data })
    }

    updateTimeframe = (data) => {
        if (this.state.selectedDay != -1 && data != undefined) {
            this.state.days[this.state.selectedDay].frequency = data

            console.log("TIMEFRAME")
            console.log(data)
            console.log(this.state.days[this.state.selectedDay])
        }
    }

    updateDosage = (data) => {
        if (this.state.selectedDay != -1 && data != undefined) {
            console.log(data)
            console.log(this.state.selectedDay)
            console.log(this.state.days[this.state.selectedDay])

            this.state.days[this.state.selectedDay].dosage = data


            console.log("TIMEFRAME")
            console.log(data)
            console.log(this.state.days[this.state.selectedDay])
        }
    }

    daySelected = (day) => {
        console.log(day)
        this.state.selectedDay = daysOfWeek[day]
        console.log("DAY")
        console.log(this.state.selectedDay)
        console.log(this.state.days)
    }

    updateStartingTime = (data) => {
        if (this.state.selectedDay != -1 && data != undefined) {
            this.state.days[this.state.selectedDay].startingTime = data

            console.log("STARTING TIME")
            console.log(data)
            console.log(this.state.days[this.state.selectedDay])
        }
    }

    updateIsAM = (data) => {
        if (this.state.selectedDay != -1 && data != undefined) {
            this.state.days[this.state.selectedDay].isAM = data

            console.log("IS AM")
            console.log(data)
            console.log(this.state.days[this.state.selectedDay])
        }
    }

    checkForCompletion = () => {
        for (let key in this.state) {
            if (!this.state.key) {
                return false;
            }
            return true;
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                resetScrollToCoords={{ x: 0, y: 0 }}
                keyboardDismissMode={'on-drag'}
            >
                <LogoHeader />
                <PageTitle style={styles.forCommandText} text={"Add a Prescription"} />
                <SingleLineDataEntry onChange={this.updateMedicineName} req={"Name"} />
                <MultiLineDataEntry onChange={this.updateInstructions} req={"Instructions"} />
                <DosageRequirements
                    onTimeframeChange={this.updateTimeframe}
                    onDosageChange={this.updateDosage}
                />
                <NumberDataEntry
                    onChange={this.updateStartingTime}
                    req={"When to start countdown (HHMM)"}
                />
                <View style={styles.forFieldNameContainer}>
                    <Text style={styles.forFieldName}>When to start countdown (AM/PM)</Text>
                </View>
                <View style={styles.forFieldNameContainer}>
                    <RadioForm
                        wrapperStyle={styles.forRadio}
                        style={styles.forRadioInternal}
                        radio_props={radio_props}
                        buttonColor='#015FFF'
                        initial={0}
                        onPress={this.updateIsAM}
                    />
                </View>
                <WeekdaySelector
                    onPress={this.daySelected}
                    currentDay={this.state.selectedDayToEdit}
                />
                <View style={styles.forView}>
                    <Button
                        onPress={this.cancelButtonPressed}
                        title="CANCEL"
                        style={styles.forButton}
                    />
                    <Button
                        onPress={this.createButtonPressed}
                        title="CREATE"
                        style={styles.forButton}
                    />
                </View>
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