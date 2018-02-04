import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TouchButton from './TouchButton'
import PageTitle from './PageTitle'


export default class VerficationContainer extends React.Component {
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
            <View>
                <PageTitle style={styles.forLoginText} text="Enter verfication code"/>
                <View> 
                    <TextInput
                        onChangeText={(text) => this.setState({userNum: text})}
                        style={styles.forNumberInput}
                        placeholder="Verification code" 
                    />
                </View>
                <TouchButton 
                    onClick={this.showClick()} 
                    text="ADVANCE"
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
        marginTop: 20,
        marginBottom: 20
    },
    forNumberInput: {
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