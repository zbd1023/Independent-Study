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
          <Text style = {styles.liText}>
            {this.props.item.title+'\n'}
            {'Due Date: '+this.props.item.date +'\n'}
          </Text>
         
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;
