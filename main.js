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
var minimum = Number.MAX_VALUE;
var d =new Date();
var due = "";
var timerId = 0;
var index = 0;
var reactMixin = require('react-mixin');
var timerMixin = require('react-timer-mixin');

export class mains extends React.Component{
  constructor(props) {
    super(props);
     route = this.props.route;
     navigator = this.props.navigator;

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      a: 0
    };
    this.itemsRef = this.getRef().child('items');
    this.state.a  = 0;
  }

  getRef() {
    return new Firebase(FirebaseUrl);
  }

  listenForItems(itemsRef) {
    var items = [];
    itemsRef.on('value', (snap) => {
      //get children as an array
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          //figure out how to get time.
          date: child.val().date,
          description: child.val().description,
          _key: child.key(),
        });
      });

      for(var a = 0; a<items.length; a++){
        if(minimum > Date.parse(items[a].date)){
          minimum = Date.parse(items[a].date);
          due = items[a].title;
        }
      }
      this.state.a = minimum - Date.now();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
      });
    });
  }
 mixins: [TimerMixin];
  componentDidMount() {
    this.listenForItems(this.itemsRef);
        this.setInterval(
          () => {this.setState({a: this.state.a-1000});}, 1000);
  }
  componentDidUnMount(){
    clearInterval(timerId);
  }

  render() {
    return (
      <View style = {styles.container}>
        <StatusBar title = "Devil's Reminder" />
        <Text style = {styles2.nextDue}>Time until "{due}" is due:</Text>
        <Text style = {styles2.timer}>{Math.floor((Math.floor(this.state.a/1000)) / 86400)} days {Math.floor(((Math.floor(this.state.a/1000)) % 86400) / 3600)} hours {Math.floor((((Math.floor(this.state.a/1000)) % 86400) % 3600) / 60)} minutes {Math.floor((((Math.floor(this.state.a/1000)) % 86400) % 3600) % 60)} seconds</Text>
     <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this._renderItem.bind(this)}
          style = {styles.listview}/>
        <ActionButton title = "Add" onPress = {this._addItem.bind(this)} />
      </View>
    );
  }

  computeDays(secs){
    return


  }
  _addItem() {
    AlertIOS.alert(
      'Add New Assignment',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({title: text })
          }
        },
        {
          text: 'Cancel',
          onPress: (text) => {}
        },
      ],
      'plain-text'
    );
  }

onDetailPress(){

  navigator.push({name: 'detail', event :item});
}

  _renderItem(item) {
    const onPress = () => {
      navigator.push({name: 'detail', event: item
        });
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }
}
reactMixin(mains.prototype, timerMixin);

module.exports = mains;

var styles2 = StyleSheet.create({
  nextDue: {
    textAlign: 'center',
    marginTop: 10,
  },

  timer: {
    textAlign: 'center',
    marginBottom: 10,
  }
})


