import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NumberDataEntry from './NumberDataEntry'
import SingleLineDataEntry from './SingleLineDataEntry'

export default class DosageRequirements extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dosageSize: 0,
            dosageTimeframe: 0,
        }
    }

    updateTimeframe = (data) => {
        this.props.onTimeframeChange(data)
    }

    updateDosage = (data) => {
        this.props.onDosageChange(data)
    }

    render() {
        return (
            <View style={styles.forView}>
                <NumberDataEntry
                    ph={"e.g. 2 pills"}
                    onChange={this.updateDosage}
                    req={"Dosage"} />
                <SingleLineDataEntry
                    ph={"e.g. per every four hours"}
                    onChange={this.updateTimeframe}
                    req={"Frequency"} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    forView: {
        flexDirection: 'row',
        width: "95%",
        flex: 1 
    }


})