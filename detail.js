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
    var days = Math.floor((Math.floor(this.state.time/1000)) / 86400);
    var hours = Math.floor(((Math.floor(this.state.time/1000)) % 86400) / 3600);
    var minutes = Math.floor((((Math.floor(this.state.time/1000)) % 86400) % 3600) / 60);
    var seconds = Math.floor((((Math.floor(this.state.time/1000)) % 86400) % 3600) % 60);
    return(
      <View>
        <StatusBar title = {this.props.route.event.title} />
        <View style = {styles.descriptions}>
          <Text style = {styles2.description}>Assignment Description: {this.props.route.event.description}</Text>
          <Text style = {styles2.dueDate}>Due Date: {this.props.route.event.date}</Text>
          <Text style = {styles2.dueIn}>This is due in:     {days} days </Text>
          <Text style = {styles2.timer}>
            {hours} hours
          </Text>
          <Text style = {styles2.timer}>
            {minutes} minutes
          </Text>
          <Text style = {styles2.timer}>
            {seconds} seconds
          </Text>
        </View>

        <TouchableHighlight
          style = {styles.goBack}
          underlayColor = 'e2f1ff'
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
    borderColor: 'e2f1ff',
    backgroundColor: 'e2f1ff',
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
  description: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  dueDate: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  dueIn: {
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 14,
  },
  timer: {
    marginLeft: 118,
    marginBottom: 2,
    fontSize: 14,
  }
})
