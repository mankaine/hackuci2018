import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


export default class LogoHeader extends React.Component {
  render() {
    return (
      <View style={[style.container, this.props.style]}>
        <Image
          style={style.logo}
          source={require('../Assets/pill.png')}
          resizeMode="contain"
        />
        <Text style={style.text}>
          CheckUp
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0D138',
    paddingBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 40,
    marginBottom: 10
  },
  text: {
    fontSize: 48,
    fontWeight: '300',
  }
})
