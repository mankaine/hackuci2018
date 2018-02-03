import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
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

    showClick = () => {
        console.log("Advance button pressed")
    }


    render() {
        return (
            <View>
                <Text style={styles.forSalutation}>Welcome to PreSCRIPTion!</Text> 
                <Text style={styles.forLoginText}>Please Login</Text>
                <View> 
                    <TextInput
                        onChangeText={(text) => this.setState({userNum: text})}
                        style={styles.forPhoneNumberInput}
                        placeholder="Enter phone number" 
                    />
                </View>
                <Button 
                    onClick={this.showClick()} 
                    title="ADVANCE"
                    style={styles.forButton}
                />
            </View>
        )
    }
}

/**                
 * <View style={styles.forView}>
 *  <Button
 *      onClick={this.recipientButtonPressed()}
 *      title="Recipient"
 *      style={styles.forButton} />
 * <Button
 *      onClick={this.caretakerButtonPressed()}
 *      title="Caretaker"
 *      style={styles.forButton} />
 * </View>
*/

const styles = StyleSheet.create({
    forSalutation: {
        fontSize: 25, textAlign: "center",
        marginTop: 30,
        marginBottom: 30 
    },
    forLoginText: {
        fontSize: 20, textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
    forPhoneNumberInput: {
        height: 40,
        borderBottomWidth: 2,
        marginTop: 20,
        marginBottom: 20
    },
    forUserCategoryPrompt: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    forView: {
        display: "flex",
        flexDirection: "row",
    },
    forButton: {
        flex: 1,
        backgroundColor: "#FF5733"
    }
})