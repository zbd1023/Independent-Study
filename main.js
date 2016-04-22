'use strict';
const React = require('react-native');
const {AppRegistry, ListView, StyleSheet, Text,
  View, TouchableHighlight, AlertIOS, Navigator} = React;

const styles = require('./styles.js')
const StatusBar = require('./StatusBar.js');
const ActionButton = require('./ActionButton.js');
const ListItem = require('./ListItem.js');
const timer = require('react-native-timer');
const Firebase = require('firebase');
const FirebaseUrl = 'https://devils-reminder.firebaseio.com/';
var navigator;
var route;

export class mains extends React.Component{
  constructor(props) {
    super(props);
     route = this.props.route;
     navigator = this.props.navigator;

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      count : Date.parse('Sat, 30 Apr 2016 00:00:00'),
      a: 0

    };
    this.itemsRef = this.getRef().child('items');
    console.log("lollol");
    var d = new Date();
    this.state.a = this.state.count - d.getTime();
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
  componentWillMount() {
    timer.setInterval('foo', () => this.setState({a: this.state.a-1000}), 1000);
  }

  render() {
    return (
      <View style = {styles.container}>
        <StatusBar title = "Devil's Reminder" />
        <Text>Till the next assignment is due </Text>
        <Text>{Math.floor((Math.floor(this.state.a/1000)) / 86400)} days {Math.floor(((Math.floor(this.state.a/1000)) % 86400) / 3600)} hours {Math.floor((((Math.floor(this.state.a/1000)) % 86400) % 3600) / 60)} minutes {Math.floor((((Math.floor(this.state.a/1000)) % 86400) % 3600) % 60)} seconds</Text>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this._renderItem.bind(this)}
          style = {styles.listview} />
        <ActionButton title = "Add" onPress = {this._addItem.bind(this)} />
      </View>
    );
  }

  computeDays(secs){
    return


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

onDetailPress(){

  navigator.push({name: 'detail'});
}

  _renderItem(item) {
    const onPress = () => {
      navigator.push({name: 'detail', event: item});
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }
}
module.exports = mains;