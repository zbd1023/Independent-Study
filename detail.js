'use strict';
const React = require('react-native');
const {AppRegistry, ListView, StyleSheet, Text,
  View, TouchableHighlight, AlertIOS, Navigator} = React;
  const styles = require('./styles.js')
  var navigator;
export class detail extends React.Component{
  constructor(props) {
    super(props);
     navigator = this.props.navigator;
  }
  render(){
    return(
    <View style = {styles.container}>
      <Text>{this.props.route.event.title}</Text>
      <TouchableHighlight onPress = {this.onBackPress} >
        <Text>Go back to list of assignments</Text>
      </TouchableHighlight>
    </View>
  )
  }
  onBackPress(){
    navigator.pop();
  }
}
module.exports = detail;
