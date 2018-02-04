import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class SingeLineDataEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            req: props.req
        }
    }

    handleChange = (event) => {
        this.props.onChange(event)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.forFieldNameContainer}>
                    <Text style={styles.forFieldName}>{this.props.req}</Text>
                </View>
                <View style={styles.forDataEntryContainer}>
                    <TextInput
                        onChangeText={(text) => this.setState({instructions: text})}
                        style={styles.forDataEntryPrompt}
                        multiline={true}
                        numberOfLines={5}
                        value={this.state.text}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    forDataEntryPrompt: {
        height: 40,
        borderBottomWidth: 2,
        marginBottom: 20,
        flex: 0.8
    },
    forFieldNameContainer: {
        flexDirection: "row"
    },
    forFieldName: {
        marginTop: 10,
        flex: 0.8
    },
    forDataEntryContainer: {
        flexDirection: 'row'
    },

})