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
var ListItem = require('./ListItem'); // Require list item class from ListItem.js

var Main = React.createClass({
  statics: {
    title: '<ListView>',
    description: 'Performant, scrollable list of data.'
  },


  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
      /* how to display a list item */
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
      /*render a list view */
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
