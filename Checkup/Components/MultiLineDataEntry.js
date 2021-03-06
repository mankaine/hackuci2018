import React from 'react';
import { Button, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class SingeLineDataEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      req: props.req,
      text: '',
    }
  }

  handleChange = (text) => {
    this.setState({ text })
    this.props.onChange(text)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.forFieldNameContainer}>
          <Text style={styles.forFieldName}>{this.props.req}</Text>
        </View>
        <View style={styles.forDataEntryContainer}>
          <TextInput
            placeholder={this.props.ph || "Type answer here"}
            onChangeText={this.handleChange}
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
    alignItems: 'center',
    flex: 1
  },
  forDataEntryPrompt: {
    height: 40,
    borderBottomWidth: 2,
    marginBottom: 20,
    flex: 0.9
  },
  forFieldNameContainer: {
    flexDirection: "row"
  },
  forFieldName: {
    marginTop: 10,
    flex: 0.9
  },
  forDataEntryContainer: {
    flexDirection: 'row'
  },

})
