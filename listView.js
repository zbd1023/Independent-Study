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
var ListItem = require('./ListItem');

var Main = React.createClass({
  statics: {
    title: '<ListView>',
    description: 'Performant, scrollable list of data.'
  },


  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['Class 1', 'Class 2']),
    };
  },

  render: function() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow={this._renderItem}
      style={styles.listview}/>
      //comment
    );
  },
});

var styles = StyleSheet.create({
    listview: {
      flex: 1,
    },
    item: {
      backgroundColor: '#CCC',
      margin: 10,
      width: 300,
      height: 25,
    },
});

module.exports = Main;
