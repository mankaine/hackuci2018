import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class PageTitle extends React.Component {
    constructor(props) {
        super(props)

        this.styles = {
            fontSize: 25,
            textAlign: 'center'
        }

        if (props.style) {
            this.styles = StyleSheet.flatten([props.style, this.styles])
            console.log(this.styles)
        }

        this.text = this.props.text
    }


    render() {
        return (
            <Text style={this.styles}>{this.text}</Text>
        )
    }
}
