import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DosageRequirements extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dosageSize: 0,
            dosageTimeframe: 0,
            notificationTime: 0,
            startingTime: null,
        }
    }


    render() {
        return (
            <View>
            </View>
        )
    }
}