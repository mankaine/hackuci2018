import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

const daysOfWeek = {
    "MONDAY" : 0,
    "TUESDAY" : 1,
    "WEDNESDAY" : 2,
    "THURSDAY" : 3,
    "FRIDAY" : 4,
    "SATURDAY" : 5,
    "SUNDAY" : 6,
    "DAYS_IN_WEEK" : 7
}

export default class WeekdaySelector extends React.Component { 
    constructor(props) {
        super(props)
        this.state = { 
            daysOfWeekToTake: [0, 0, 0, 0, 0, 0, 0]
        }
    }


    render() {
        return (
            <View style={styles.forContainer}>
                <Text style={styles.forCommandText}>Select Days</Text>
                <View style={styles.forDayWrapper}>
                    <Button
                        style={styles.forDayButton} 
                        title="Su"
                    />
                    <Button
                        style={styles.forDayButton} 
                        title="Mo"
                    />
                    <Button
                        style={styles.forDayButton} 
                        title="Tu"
                    />
                    <Button
                        style={styles.forDayButton} 
                        title="We"
                    />
                    <Button
                        style={styles.forDayButton} 
                        title="Th"
                    />
                    <Button
                        style={styles.forDayButton} 
                        title="Fr"
                    />
                    <Button
                        style={styles.forDayButton} 
                        title="Sa"
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
    }
})