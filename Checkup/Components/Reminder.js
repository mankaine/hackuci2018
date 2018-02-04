import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';


export default class Reminder extends React.Component {
  handleEdit = () => {
  }

  handleTaken = () => {
  }

  render() {
    return (
      <Card
        title={this.props.text}
        containerStyle={[
          { alignItems: 'center' },
          this.props.style,
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button title='Edit' onPress={this.handleEdit} />
          <Button title='Taken' onPress={this.handleTaken} />
        </View>
      </Card>
    )
  }
}
