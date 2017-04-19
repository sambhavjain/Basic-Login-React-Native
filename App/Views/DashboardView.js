/**
 * Created by sambhav on 4/19/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import LoginView from './LoginView'
import CookieManager from 'react-native-cookies'

export default class DashboardView extends Component {
    handleLogout() {
        CookieManager.clearAll((err, res) => {
            console.log('cookies cleared!');
        });
        this.props.navigator.push({
            title: 'Login',
            component: LoginView
        })
    }
    render() {

        return (
            <View style={styles.container}>
              <TouchableHighlight onPress={this.handleLogout.bind(this)} style={styles.button}>
                <Text>Logout</Text>
              </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    }
});