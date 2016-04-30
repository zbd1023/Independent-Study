'use strict';

const React = require('react-native');
const Firebase = require('firebase');
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButtonAuth');
const ListItem = require('./ListItem');
const styles = require('./styles.js')
var navigator;
var route;

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  TextInput,
  Alert,
  Navigator
} = React;

const FirebaseUrl = 'https://devils-reminder.firebaseio.com/';

  var ref = new Firebase(FirebaseUrl);

export class authenticate extends React.Component {

  constructor(props) {
    super(props);
    route = this.props.route;
    navigator = this.props.navigator;
    this.state = {
      id: '',
      pass: ''
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return new Firebase(FirebaseUrl);
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar title="Log into Devil's Reminder" />

   <TextInput
    placeholder = "Email"
    style = {styles2.email}
    onChangeText={id => this.setState({id})}
    value={this.state.id}/>

    <TextInput
    placeholder = "Password"
    style= {styles2.password}
    onChangeText={(pass) => this.setState({pass})}
    value={this.state.pass}/>

    <View style = {styles2.register}>
      <ActionButton
        onPress={this._register.bind(this)} title="Register" />
    </View>

    <View style = {styles2.login}>
      <ActionButton style = {styles2.login}
        onPress={this._login.bind(this)} title="Log-In" />
    </View>

    </View>
    )
  }

  _login(){
    ref.authWithPassword({
      email    : this.state.id,
      password : this.state.pass
    },
 function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    navigator.push({name: 'main'});
  }
});
  }


  _addItem() {
    AlertIOS.alert(
      'Add New Item',
      null,
      [
        {
          //text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _register(){
    Alert.alert(
      'Register?!',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.getRegister()},
      ],
    );
  }

  getRegister(){
    ref.createUser({
      email    : this.state.id,
      password : this.state.pass
    }, function(error, userData) {
      if (error) {
        Alert.alert("Please check all fields before creating user.");
      } else {
         Alert.alert("Successfully Registered!");
      }
    });
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
module.exports = authenticate;

var styles2 = StyleSheet.create({
  email: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 5,
    marginTop: 10,
  },

  password: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
  },

  register: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },

  login: {
    marginLeft: 10,
    marginRight: 10,
  },
})
