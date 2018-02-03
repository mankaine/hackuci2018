import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


export default class LogoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userNum: '', userType: '' }
    }
    render() {
        return (
            <View style={style.container}>
                <Image style={style.logo}
                    source={require('../Assets/Checkup_Logo.png')}
                />
            </View>
        );
    }
}
const style = StyleSheet.create({
    logo: {
        width: 120,
        height: 120,
        margin: 40
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
  })