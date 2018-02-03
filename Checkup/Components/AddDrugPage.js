import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WeekdaySelector from './WeekdaySelector'
import DosageRequirements from './DosageRequirements'
import LogoHeader from './LogoHeader'
import PageTitle from './PageTitle'


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


    render() {
        return (
            <View style={styles.container}>
                <LogoHeader />
                <PageTitle style={styles.forCommandText} text={"Add a Prescription"} />
                <View style={styles.forFieldNameContainer}>
                    <Text style={styles.forFieldName}>Enter name</Text>
                </View>
                <View style={styles.forDataEntryContainer}> 
                    <TextInput
                        onChangeText={(text) => this.setState({medicineName: text})}
                        style={styles.forDataEntryPrompt}
                        value={this.state.medicineName}
                    />
                </View>
                <View style={styles.forFieldNameContainer}>
                    <Text style={styles.forFieldName}>Enter instructions</Text>
                </View>
                <View style={styles.forDataEntryContainer}> 
                    <TextInput
                        onChangeText={(text) => this.setState({instructions: text})}
                        style={styles.forDataEntryPrompt}
                        multiline={true}
                        numberOfLines={5}
                        value={this.state.text}
                    />
                </View>
                <WeekdaySelector />
                <DosageRequirements />
                <View style={styles.forView}>
                    <Button
                        onClick={this.cancelButtonPressed}
                        title="CANCEL"
                        style={styles.forButton} 
                    />
                    <Button
                        onClick={this.createButtonPressed}
                        title="CREATE"
                        style={styles.forButton} 
                    />
                </View>
            </View>
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