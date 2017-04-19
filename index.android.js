/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import LoginView from './App/Views/LoginView'
import DashboardView from './App/Views/DashboardView'
import CookieManager from 'react-native-cookies'

export default class FirstProj extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialRoute: {
                title: 'Login',
                component: LoginView
            },
            isCookieLoaded : false
        }
    }

    componentWillMount() {
        CookieManager.getAll((err, res) => {
            if (res.login_cookie) {
                this.setState({
                    initialRoute: {
                        title: 'Dashboard',
                        component: DashboardView
                    },
                    isCookieLoaded: true
                })
            } else {
                this.setState({isCookieLoaded : true})
            }
        })
    }

    render() {
        let initialRoute = {
            title: 'Login',
            component: LoginView
        };
        //  const routes = [
        //      {title: 'Login', index: 0,component: LoginView},
        //     {title: 'Dashboard', index: 1, component: DashboardView},
        // ];
        if(this.state.isCookieLoaded){
            return (
                <Navigator
                    renderScene={(route, navigator) => navigator.push(this.state.initialRoute)}
                    style={styles.container}
                    tintColor='#FF6600'
                    initialRoute={routes[0]}/>

            )
        } else {
            return <View />
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

AppRegistry.registerComponent('FirstProj', () => FirstProj);
