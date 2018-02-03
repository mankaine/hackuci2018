import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class HomepageContainer extends React.Component {
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
            <View style = {styles.container}>

                
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
    container: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'},
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


    forTextContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    forView: {
        display: "flex",
        flexDirection: "row",
    },
    forButton: {
        backgroundColor: "#FF5733"
    }
})