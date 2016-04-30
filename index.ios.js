'use strict';
const React = require('react-native');
const {AppRegistry, ListView, StyleSheet, Text,
  View, TouchableHighlight, AlertIOS, Navigator} = React;

const styles = require('./styles.js')
const StatusBar = require('./StatusBar.js');
const ActionButton = require('./ActionButton.js');
const ListItem = require('./ListItem.js');
const timer = require('react-native-timer');
const Firebase = require('firebase');
const FirebaseUrl = 'https://devils-reminder.firebaseio.com/';
const Authenticate = require('./authenticate.js')
const Main = require('./main.js')
const Detail = require('./detail.js')

var ROUTES= {
  authenticate: Authenticate,
  main: Main,
  detail: Detail
}

class myApp extends React.Component {

  renderScene(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style = {styles.container}
        initialRoute = {{name: 'authenticate'}}
        renderScene = {this.renderScene}
        configureScene = {()=> {return Navigator.SceneConfigs.FloatFromRight;}}
      />
    );
  }

}

AppRegistry.registerComponent('myApp', () => myApp);
