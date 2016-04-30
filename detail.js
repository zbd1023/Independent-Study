'use strict';
const React = require('react-native');
const {AppRegistry, ListView, StyleSheet, Text,
  View, TouchableHighlight, AlertIOS, Navigator} = React;

const StatusBar = require('./StatusBar.js');
var navigator;

export class detail extends React.Component{
  constructor(props) {
    super(props);
     navigator = this.props.navigator;
  }

  render(){
    return(
      <View>
        <StatusBar title = {this.props.route.event.title} />
        <View style = {styles.description}>
        <Text >Due Date: </Text>
        <Text>Assignment Description: </Text>
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
}

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

  description: {
    marginTop: 5,
  }
})
