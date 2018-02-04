import React from 'react';
import { ScrollView, Button, StyleSheet, View, Text, TextInput, PanResponder } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TouchButton from './TouchButton'
import Reminder from './Reminder'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNum: ''
        }
        
    }
    
    
        
    showClick = () => {
        console.log("Advance button pressed")
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchButton style={{padding:20}} text="Create Reminder"/>
                <Reminder text="placeholder: take in x mins/hours"> </Reminder>
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    forUserNameText: {
        fontSize: 20, 
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30
    },
    forRecipient: {
        height: 40,
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 50,
        flex: 0.8
    },
    forCaretaker: {
        height: 40,
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 50,

    },
    forRecipientText: {
        height: 40,
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        flex: 0.8
    },
    forCaretakerText: {
        height: 40,
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 20
    },
    forReminder:{
        margin: 40
    },
    forView: {
        display: "flex",
        flexDirection: "row",
    },
    forButton: {
        backgroundColor: "#FF5733",
        fontSize: 25
    }
})
