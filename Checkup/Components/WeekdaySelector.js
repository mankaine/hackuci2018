import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TouchButton from "./TouchButton";

const daysOfWeek = {
    "Su" : 0,
    "Mo" : 1,
    "Tu" : 2,
    "We" : 3,
    "Th" : 4,
    "Fr" : 5,
    "Sa" : 6,
    "DAYS_IN_WEEK" : 7
}

export default class WeekdaySelector extends React.Component { 
    constructor(props) {
        super(props)
        this.state = { 
            daysOfWeekToTake: [0, 0, 0, 0, 0, 0, 0]
        }
    }

    
    shareSelection = (event) => {
        console.log(event)
    }


    render() {
        return (
            <View style={styles.forContainer}>
                <Text style={styles.forCommandText}>Select Days</Text>
                <View style={styles.forDayWrapper}>
                    <TouchButton
                        style={styles.forDayButton} 
                        text="Su"
                    />
                    <TouchButton
                        style={styles.forDayButton} 
                        text="Mo"
                    />
                    <TouchButton
                        style={styles.forDayButton} 
                        text="Tu"
                    />
                    <TouchButton
                        style={styles.forDayButton} 
                        text="We"
                    />
                    <TouchButton
                        style={styles.forDayButton} 
                        text="Th"
                    />
                    <TouchButton
                        style={styles.forDayButton} 
                        text="Fr"
                    />
                    <TouchButton
                        style={styles.forDayButton} 
                        text="Sa"
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
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
    forDayWrapper : { 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

    },
    forDayButton: {
        flexGrow: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
})