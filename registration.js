'use strict';

const React = require('react-native');
const Firebase = require('firebase');
const StatusBar = require('./StatusBar');
const StatusBarAuth = require('./StatusBarAuth');
const ActionButtonAuth = require('./ActionButtonAuth');
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
  TextInput,
  Alert,
  Navigator
} = React;

const FirebaseUrl = 'https://devils-reminder.firebaseio.com/';

var ref = new Firebase(FirebaseUrl);

export class registration extends React.Component {

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
      <View style={styles.containerAuth}>
      <StatusBarAuth title="Register Here" />

   <TextInput
    placeholder = "Email"
    style = {styles2.email}
    onChangeText={id => this.setState({id})}
    value={this.state.id}
    autoCapitalize = 'none'
    />

    <TextInput
    placeholder = "Password"
    style= {styles2.password}
    onChangeText={(pass) => this.setState({pass})}
    value={this.state.pass}
    autoCapitalize = 'none'
    secureTextEntry = {true}
    />

    <View style = {styles2.register}>
      <ActionButtonAuth
        onPress={this._register.bind(this)} title="Register" />
    </View>

    <View style = {styles2.yesAcc}>
      <ActionButton
        onPress={this._login.bind(this)} title="Already have an account?" />
    </View>

    </View>
    )
  }

  _login(){
    navigator.pop();
  }


  _addItem() {
    Alert.alert(
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
         navigator.pop();
      }
    });
  }

  _renderItem(item) {

    const onPress = () => {
      Alert.alert(
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
module.exports = registration;

var styles2 = StyleSheet.create({
  email: {
    height: 60,
    fontSize: 20,
    fontFamily: 'Helvetica',
    borderColor: '#dddddd',
    backgroundColor: '#f4f4f4',
    borderWidth: 3,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 5,
    marginTop: 10,
    padding: 8,
  },

  password: {
    height: 60,
    fontSize: 20,
    fontFamily: 'Helvetica',
    borderColor: '#dddddd',
    backgroundColor: '#f4f4f4',
    borderWidth: 3,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    padding: 8,
  },

  register: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  yesAcc: {
    marginLeft: 10,
    marginRight: 10,
  },
})
