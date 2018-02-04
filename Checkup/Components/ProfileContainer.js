import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNum: ''
        }
    }

    showClick = () => {
        console.log("Advance button pressed")
    }

/*
<Button 
                    onClick={this.showClick()} 
                    title="X"
                    style={styles.forButton}
                />
                */
    render() {
        return (
            <View style = {styles.container}>
                
                <Text style={styles.forUserNameText}>Placeholder Name</Text>
                <View style={styles.forLabelContainer}>
                    <Text style={styles.forRecipient}>Recipients:</Text>
                    <Text style={styles.forCaretaker}>Caretakers:</Text>
                </View>
                <View style={styles.forTextContainer}>
                    <Text style={styles.forRecipientText}>Placeholder Recipient</Text>
                    <Text style={styles.forCaretakerText}>Placeholder Caretaker</Text>
                </View>
            </View>
        )
    }
}


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
        marginRight: 50
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
        marginRight: 20,

    },
    forLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
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