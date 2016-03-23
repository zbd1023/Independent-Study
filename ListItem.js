'use strict';
const React = require('react-native');
const {View, TouchableHighlight, Text} = React;

const styles = require('./styles.js');

class ListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress = {this.props.onPress}>
        <View style = {styles.li}>
          <Text style = {styles.liText}>
            {this.props.item.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;
