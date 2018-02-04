import React from 'react';
import { Dimensions, ImageBackground, ScrollView, Button, StyleSheet, View, Text, TextInput, PanResponder } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Card} from'react-native-elements'
import Reminder from './Reminder'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNum: ''
        }
        showClick = () => {

        } 
    }
    
    
    //<Reminder text="placeholder: take in x mins/hours"> </Reminder>  
    //<Text style={{padding:20, fontSize: 18}}>No perscriptions listed</Text>  
 
    
    render() {
        var dim = Dimensions.get('window');
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={require("../Assets/background.jpg")} 
                style={{width: dim.width, height: dim.height}}>
                <Card containerStyle={{alignItems:'center', backgroundColor: '#F0D138'}}>
                    <Button title="Create reminder" onPress={this.showClick} 
                    />
                </Card>
                <Reminder text="placeholder: take in x mins/hours"> </Reminder> 
                </ImageBackground>
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    forButton: {
        backgroundColor: "#FF5733",
        fontSize: 25
    },

})
