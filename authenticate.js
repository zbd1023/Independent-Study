/**
 * Sample React Native App
 * https://github.com/davideast/firebase-react-native-sample
 */
'use strict';

const React = require('react-native');
const Firebase = require('firebase');
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
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
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={id => this.setState({id})}
    value={this.state.id}/>

    <TextInput
    placeholder = "Password"
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(pass) => this.setState({pass})}
    value={this.state.pass}/>
        

        <ActionButton onPress={this._register.bind(this)} title="Register" />

        <ActionButton onPress={this._login.bind(this)} title="Log-In" />

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
        Alert.alert("Error creating user:", id, pass,"ugh");
      } else {
         Alert.alert("Successfully created user account with uid:", userData.uid);
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