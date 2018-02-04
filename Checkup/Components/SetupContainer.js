import React from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SingleLineDataEntry from './SingleLineDataEntry'

const styles = StyleSheet.create({
  input: { height: 40,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20},
  button: {
        flex: 1,
        backgroundColor: "#FF5733"},
  container: {
    marginBottom: 40}
})



export default class SetupContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {caretakers: []} 
  }

  renderCaretaker = (caretaker, index) => {
    return(
      <View key={index}>
        <SingleLineDataEntry req="Caretaker's Phone Number" 
          onChangeText={(text) => { 
            caretakers = this.state.caretakers.slice();
            caretakers[index] = text;
            this.setState({caretakers});
          }}
          style={styles.input}
          placeholder="Caretaker's Phone Number"
        />
      </View>
    )
  }

  addCaretaker = () => {
    caretakers = this.state.caretakers.slice()
    caretakers.push('')
    this.setState({caretakers, index: this.state.index + 1})
  }
 

  render() {
    return (
      <View style = {styles.container}>
        {this.state.caretakers.map(this.renderCaretaker)}
        <Button
          onPress={this.addCaretaker}
          title="Add a caretaker"
          style={styles.forButton}
        />
      </View>
    )

  }
}
