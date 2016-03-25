'use strict';
const React = require('react-native');
const {StyleSheet, Text, View} = React;

const styles = require('./styles.js');

class StatusBar extends React.Component {
  render() {
    return (
      <View>
        <View style = {styles.statusbar}/>
        <View style = {styles.navbar}>
          <Text style = {styles.navbarTitle}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}


module.exports = StatusBar;
