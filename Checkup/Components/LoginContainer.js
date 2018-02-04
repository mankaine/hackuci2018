import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PageTitle from './PageTitle'
import NumberDataEntry from './NumberDataEntry'

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


    handlePress = async () => {
        const res = await fetch('http://34.217.100.80/api/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: this.state.userNum,
            })
        })
        const body = await res.json()
        console.log(body)
        if (body.registered) {
            this.props.navigation.navigate('Verification', { 'phoneNumber': this.state.userNum })
        }
        else {
            this.props.navigation.navigate('Setup', { 'phoneNumber': this.state.userNum })
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.forLoginText}>Login</Text>
                <View>
                    <NumberDataEntry
                        onChange={(text) => this.setState({ userNum: text })}
                        style={styles.forPhoneNumberInput}
                        req="Phone number"
                        ph="1234567890"
                    />
                </View>
                <Button
                    onPress={this.handlePress}
                    title="Continue"
                    style={styles.ForButton}
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

