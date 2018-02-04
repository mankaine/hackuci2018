import React from 'react';
import { ScrollView, Button, StyleSheet, View, Text, TextInput, PanResponder } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Card} from'react-native-elements'
import Reminder from './Reminder'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNum: ''
        }
    }
    
    
    //<Reminder text="placeholder: take in x mins/hours"> </Reminder>  
    //<Text style={{padding:20, fontSize: 18}}>No perscriptions listed</Text>  
 

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card containerStyle={{alignItems:'center', backgroundColor: '#F0D138'}}>
                    <Button title="Create reminder" onPress={this.props.navigation.navigate('Drug')} 
                    />
                </Card>
                <Reminder text="placeholder: take in x mins/hours"> </Reminder> 

            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        marginTop: 20
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
