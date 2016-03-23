'use strict';
import React, {
  AppRegistry, Component, StyleSheet, Text,
  View, ListView, AlertIOS,
} from 'react-native';

const styles = require('./styles.js');
const StatusBar = require('./StatusBar.js');
const ActionButton = require('./ActionButton.js');
const ListItem = require('./ListItem.js');

const Firebase = require('firebase');
const FirebaseUrl = 'https://devils-reminder.firebaseio.com/';

class myApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return new Firebase(FirebaseUrl);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      //get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key(),
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style = {styles.container}>
        <StatusBar title = "Devil's Reminder" />
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this._renderItem.bind(this)}
          style = {styles.listview} />
        <ActionButton title = "Add" onPress = {this._addItem.bind(this)} />
      </View>
    );
  }

  _addItem() {
    AlertIOS.alert(
      'Add New Item',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {
    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ],
        'default'
      );
    };
    return (
      <ListItem item={item} onPress={onPress} />
    );
  }
}

AppRegistry.registerComponent('myApp', () => myApp);
