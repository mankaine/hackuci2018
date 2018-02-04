import React from 'react';
import { Button, StyleSheet, Image, ScrollView, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WeekdaySelector from './WeekdaySelector'
import DosageRequirements from './DosageRequirements'
import LogoHeader from './LogoHeader'
import PageTitle from './PageTitle'
import SingleLineDataEntry from './SingleLineDataEntry'
import MultiLineDataEntry from './MultiLineDataEntry'
import NumberDataEntry from './NumberDataEntry'


export default class AddDrugPage extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            medicineName : "",
            instructions: "",
            daysOfWeekToTake: [],
            dosageSize: 0,
            dosageTimeframe: 0, 
            notificationTime: 0,
            startingTime: null
        }
    }

    createButtonPressed = () => {
        console.log("Create Button Pressed")
    }

    cancelButtonPressed = () => {
        console.log("Cancel Button Pressed")
    }

    updateMedicineName = (data) => {
        this.setState({medicineName: data})
    }

    updateInstructions = (data) => {
        this.setState({instructions: data})
    }

    updateRate = (data) => {
        this.setState({dosageSize: data})
    }

    isValidDosage = (dosageToCheck) => {

    }

    checkForCompletion = () => {}

    render() {
        return (
            <ScrollView 
            contentContainerStyle={styles.container}
            keyboardDismissMode={'on-drag'}
            >
                <LogoHeader />
                <PageTitle style={styles.forCommandText} text={"Add a Prescription"} />
                <SingleLineDataEntry onChange={this.updateMedicineName} req={"Enter name"}/>
                <MultiLineDataEntry onChange={this.updateInstructions} req={"Enter instructions"} />
                <WeekdaySelector />
                <DosageRequirements />
                <NumberDataEntry onChange={this.updateRate} req={"Enter dosage"}/>
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
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    forCommandText: { 
        marginTop: 20,
        marginBottom: 20
    },
    forDataEntryPrompt : {
        height: 40,
        borderBottomWidth: 2,
        marginBottom: 20,
        flex: 0.8
    },
    forFieldNameContainer : { 
        flexDirection: "row"
    },
    forFieldName: { 
        marginTop: 10, 
        flex: 0.8
    },
    forDataEntryContainer: {
        flexDirection: 'row'
    },
    forUserCategoryPrompt: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    forView: {
        display: "flex",
        flexDirection: "row",
    },
    forButton: {
        flex: 1,
        backgroundColor: "#FF5733"
    }
})