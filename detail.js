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
    marginTop: 500,
    marginLeft: 50,
    marginRight: 50,
    padding: 20,
    borderWidth: 5,
    borderColor: '#C6E2FF',
    borderRadius: 30,
  },

  goBackText: {
    textAlign: 'center',
    fontSize: 15,
  }
})
