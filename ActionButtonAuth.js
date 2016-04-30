'use strict';
const React = require('react-native');
const {StyleSheet, Text, View, TouchableHighlight} = React;

const styles = require('./styles.js');
const constants = styles.constants;

class ActionButtonAuth extends React.Component {
  render() {
    return (
      <View style = {styles.actionAuth}>
        <TouchableHighlight
          underlayColor = {constants.actionColor}
          onPress = {this.props.onPress}>
          <Text style = {styles.actionText}>
            {this.props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButtonAuth;
