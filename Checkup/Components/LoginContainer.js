import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userNum: '', 
            userType: '' 
        }
    }

    recipientButtonPressed = () => {
        console.log("Recipient button pressed")
    }

    caretakerButtonPressed = () => { 
        console.log("Caretaker button pressed")
    }

    render() {
        return (
            <View>
                <Button onClick={this.recipientButtonPressed()} title="Recipient" style={styles.forButton}/>
                <Button onClick={this.caretakerButtonPressed()} title="Caretaker" style={styles.forButton} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    forButton : {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#FF5733"
    }
})