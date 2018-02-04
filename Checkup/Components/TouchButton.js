import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class TouchButton extends React.Component {
    constructor(props) {
        super(props)

        this.styles = {
            alignItems: 'center',
            backgroundColor: '#DDDDDD'
        }

        if (props.style) {
            this.styles = StyleSheet.flatten([props.style, this.styles])
            console.log(this.styles)
        }
        
        this.text = this.props.text
    }

    onpress = (event) => {
        console.log(event)
        if (this.props.onPress) {
            this.props.onPress(event)
            console.log(event)
        }
        else {
            console.log("No onPress")
        }
    }
    

    render() {
        return (
            <TouchableHighlight
                style={this.styles}
                onPress={this.onpress}
                activeOpacity={0.1}
                underlayColor={'#A9A9A9'}
            >
                <Text style={{fontSize: 18}}>{this.text}</Text>
            </TouchableHighlight>
        )
    }
}
