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
const Firebase = require('firebase');
const FirebaseUrl = 'https://devils-reminder.firebaseio.com/';
var ListItem = require('./ListItem'); // Require list item class from ListItem.js

var Main = React.createClass({

  statics: {
    title: '<ListView>',
    description: 'Performant, scrollable list of data.'
  },

  getInitialState () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('Classes');
  },

  getRef() {
    return new Firebase(FirebaseUrl);
  },

  listenForItems(itemsRef) {
    itemsRef.on('value', snap => {

      // get children as an array
      var items = [];
      snapshot.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key()
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  },


  componentDidMount() {
    this.listenForItems(this.itemsRef);
  },

  render(){
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow={this._renderItem}
        style={styles.listview}/>
      /*render a list view */
    );
  },

  _renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
      /* how to display a list item */
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
