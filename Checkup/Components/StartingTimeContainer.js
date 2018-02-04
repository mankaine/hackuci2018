import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NumberDataEntry from './NumberDataEntry'
import SingleLineDataEntry from './SingleLineDataEntry'


export default class DosageRequirements extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAM: null,
            startingTime: 0
        }


    }

    updateIsAM = (data) => {
        this.props.onIsAMChange(data)
    }

    render() {
        return (<View></View>
        )
    }
}

const styles = StyleSheet.create({
    forView: {
        flexDirection: 'row',
        width: "100%",
        flex: 1
    }
})