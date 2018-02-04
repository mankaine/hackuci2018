import React from 'react';
import { View,Button, StyleSheet, Text } from 'react-native';
import {Card} from'react-native-elements'
import { StackNavigator } from 'react-navigation';


export default class Reminder extends React.Component {
    constructor(props) {
        super(props)

        this.styles = {
            alignItems: 'center'
        }
        
        if (props.style) {
            this.styles = StyleSheet.flatten([props.style, this.styles])
            console.log(this.styles)
        }
        editHandle = () => {}
        takenHandle = () => {}
        this.text = this.props.text
    }

    render() {
        return (
            <Card
            title={this.text}
            containerStyle={this.styles}
            >
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Button
                title='Edit' onPress={this.editHandle}/>
            <Button title='Taken' onPress={this.takenHandle}/>
            </View>
            </Card>
        )
    }
}
