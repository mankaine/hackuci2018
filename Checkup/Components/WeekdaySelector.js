import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TouchButton from "./TouchButton";


export default class WeekdaySelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            daysOfWeekToTake: [0, 0, 0, 0, 0, 0, 0]
        }
    }


    submitSunday = () => {
        this.props.onPress("Su")
    }

    submitMonday = () => {
        this.props.onPress("Mo")
    }

    submitTuesday = () => {
        this.props.onPress("Tu")
    }

    submitWed = () => {
        this.props.onPress("We")
    }

    submitThur = () => {
        this.props.onPress("Th")
    }

    submitFri = () => {
        this.props.onPress("Fr")
    }

    submitSat = () => {
        this.props.onPress("Sa")
    }


    render() {
        return (
            <View style={styles.forContainer}>
                <Text style={styles.forCommandText}>
                    Select Day {this.props.currentDay > 0 ? " - currently " + this.props.currentDay : ""}
                </Text>
                <View style={styles.forDayWrapper}>
                    <View style={styles.forSpacer}></View>
                    <Button
                        style={styles.forDayButton}
                        title="Su"
                        color="#000"
                        onPress={this.submitSunday}
                    />
                    <Button
                        style={styles.forDayButton}
                        title="Mo"
                        color="#000"
                        onPress={this.submitMonday}
                    />
                    <Button
                        style={styles.forDayButton}
                        title="Tu"
                        color="#000"
                        onPress={this.submitTuesday}
                    />
                    <Button
                        style={styles.forDayButton}
                        title="We"
                        color="#000"
                        onPress={this.submitWed}
                    />
                    <Button
                        style={styles.forDayButton}
                        title="Th"
                        color="#000"
                        onPress={this.submitThur}
                    />
                    <Button
                        style={styles.forDayButton}
                        title="Fr"
                        color="#000"
                        onPress={this.submitFri}
                    />
                    <Button
                        style={styles.forDayButton}
                        title="Sa"
                        color="#000"
                        onPress={this.submitSat}
                    />
                    <View style={styles.forSpacer}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    forContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"

    },
    forSpacer : { 
        margin: 5 
    },
    forCommandText: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
    forDayWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
    },
    forDayButton: {
        flexGrow: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    }
})