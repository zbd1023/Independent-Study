'use strict';
const React = require('react-native');
const {AppRegistry, ListView, StyleSheet, Text,
  View, TouchableHighlight, AlertIOS, Alert, Navigator} = React;
import TimerMixin from 'react-timer-mixin';
const StatusBar = require('./StatusBar.js');
var nav;
const timer = require('react-native-timer');
var d  = new Date();
var timerId = 0;
var reactMixin = require('react-mixin');
var timerMixin = require('react-timer-mixin');




class detail extends React.Component{
  constructor(props) {
    super(props);
     navigator = this.props.navigator;
     this.state = {
      time : 0,
     };
     this.state.time = Date.parse(this.props.route.event.date) - Date.now();
  }

  render(route, navigator){
    return(
      <View>
        <StatusBar title = {this.props.route.event.title} />
        <View style = {styles.descriptions}>
        <Text>Due Date: {this.props.route.event.date+'\n'}</Text>
        <Text>Assignment Description: {this.props.route.event.description}</Text>
        <Text>This is due in: </Text>
        <Text style = {styles2.timer}>{Math.floor((Math.floor(this.state.time/1000)) / 86400)} days {Math.floor(((Math.floor(this.state.time/1000)) % 86400) / 3600)} hours {Math.floor((((Math.floor(this.state.time/1000)) % 86400) % 3600) / 60)} minutes {Math.floor((((Math.floor(this.state.time/1000)) % 86400) % 3600) % 60)} seconds</Text>
        </View>
        <TouchableHighlight
          style = {styles.goBack}
          underlayColor = '#C6E2FF'
          onPress = {this.onBackPress} >
          <Text style = {styles.goBackText}>Go back to list of assignments</Text>
        </TouchableHighlight>
      </View>
    )
  }

  onBackPress(){
    navigator.pop();
  }

  componentWillUnMount(){
    window.clearInterval(timerId);
  }

  mixins: [TimerMixin];

  componentDidMount(){
        this.setInterval(
          () => {this.setState({time: this.state.time-1000});}, 1000);
  }
}

reactMixin(detail.prototype, timerMixin);

module.exports = detail;

var styles = StyleSheet.create({
  goBack: {
    marginLeft: 61,
    marginRight: 50,
    position: 'absolute',
    top: 560,
    padding: 18,
    borderWidth: 5,
    borderColor: '#C6E2FF',
    borderRadius: 30,
  },

  goBackText: {
    textAlign: 'center',
    fontSize: 15,
  },

  descriptions: {
    marginTop: 5,
  }
})
var styles2 = StyleSheet.create({
  nextDue: {
    textAlign: 'center',
    marginTop: 10,
  },

  timer: {
    textAlign: 'center',
    marginBottom: 10,
  }
})
