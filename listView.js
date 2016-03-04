'use strict';

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

var Main = React.createClass({
  statics: {
    title: '<ListView>',
    description: 'Performant, scrollable list of data.'
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6']),
    };
  },

  render: function() {
    return (
      <ListView contentContainerStyle = {styles.list}
        dataSource = {this.state.dataSource}
        renderRow = {(rowData) => <Text style = {styles.item}>{rowData}</Text>}
      />
      //comment
    );
  },
});

var styles = StyleSheet.create({
    list: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    item: {
      backgroundColor: '#CCC',
      margin: 10, 
      width: 300,
      height: 75,
    },
});

module.exports = Main;
