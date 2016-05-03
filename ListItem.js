'use strict';
const React = require('react-native');
const {AppRegistry, ListView, StyleSheet, Text,
  View, TouchableHighlight, AlertIOS, Navigator} = React;

const styles = require('./styles.js');

class ListItem extends React.Component {
  render(route, navigator) {
    return (
      <TouchableHighlight onPress = {this.props.onPress} >
        <View style = {styles.li}>
          <Text style = {styles.liTitle}>
            {this.props.item.title}
          </Text>
          <Text style = {styles.liDue}>
            {'Due Date: ' + this.props.item.date}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;
