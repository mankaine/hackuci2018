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
        
        this.text = this.props.text
    }
    onpress = () => {
        console.log('pressed')
    }

    render() {
        return (
            <Card
            title={this.text}
            containerStyle={this.styles}
            >
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Button
                title='edit'/>
            <Button title='taken'/>
            </View>
            </Card>
        )
    }
}
