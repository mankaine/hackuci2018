import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PageTitle from './PageTitle'

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
      const res = await fetch('http://34.217.100.80/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
  },
	body: JSON.stringify({
	  firstParam: this.state.userNum,
	}),
      })
      const body = await res.json
      console.log(body)
      this.props.navigation.navigate('Setup')} 


    render() {
        return (
            <View>
                <PageTitle style={styles.forSalutation} text={"Welcome to PreSCRIPTion!"} />
                <Text style={styles.forLoginText}>Please Login</Text>
                <View> 
                    <TextInput
                        onChangeText={(text) => this.setState({userNum: text})}
                        style={styles.forPhoneNumberInput}
                        placeholder="Enter phone number" 
                    />
                </View>
                 <Button 
                   onPress={this.handlePress} 
                   title="ADVANCE"
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

