import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Footer } from 'native-base';
import { StyleSheet } from 'react-native';
import LoginScreen from '../components/LoginScreen';
import Registration from '../components/Registration';
import Main from '../components/Main';
import { Router, Scene } from 'react-native-router-flux';
export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledTab: true
    };
  }
  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: '#32c95a', height: 75 }}
        titleStyle={{ color: '#FFF', fontSize: 22 }}
        sceneStyle={{ color: 'FFF' }}>
        <Scene key="root">
          <Scene key="LoginScreen" component={LoginScreen} title="Login" />
          <Scene key="Registration" component={Registration} />
          <Scene key="Main" component={Main} initial={true}/>
        </Scene>
      </Router>
    );
  }
}
