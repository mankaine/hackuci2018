import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class PageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={styles.s}>{props.data}</Text>
        )
    }
}

const styles = StyleSheet.create({
    s : {
        fontSize: 20, textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    }
})