
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  NavigatorIOS,
  TabBarIOS,
  View,
} from 'react-native';

var List = require('./listView');

var Main = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  getInitialState: function() {
    return {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  },

  _renderContent: function(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  },

  render() {
    return (
      <TabBarIOS
      tintColor="black"
      barTintColor="silver">

      <TabBarIOS.Item
      title="Settings"
      icon={require('./settings.png')}
      //icon={{uri: base64Icon, scale: 3}}
      selected={this.state.selectedTab === 'blueTab'}
      onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
            }}>
        <View>
        <List    />
				</View>
      </TabBarIOS.Item>
      <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
		<View style = {styles.second}>
			  <Text>
		asldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafh
		</Text>
		</View>
		</TabBarIOS.Item>

      </TabBarIOS>

    );
  }
});

class myApp extends React.Component {
  render() {
    return (

      <NavigatorIOS
        style={styles.nav}
        initialRoute= {{
          title:'Some App Name',
          component: Main,
          //leftButtonIcon:
          //leftButtonIcon: {uri: base64Icon, scale: 3},
          //leftButtonTitle:"lll"
          //icon={require('./flux.png')}
        }}

      />

      // <View style={styles.container}>
      //   <View style={styles.top}>
      //     <Text style={styles.appName}>
      //       Some App Name
      //     </Text>
      //   </View>
      // </View>

    );
}
}
var styles = StyleSheet.create({
	second:{
		paddingTop: 65,
	},
  nav:{
    flex:1,
    backgroundColor: '#111111',
  },
  top:{
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  appName:{
    color: '#FFFFFF',
    textAlign: 'center',
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  leftContainer:{
    marginLeft:10,
  },
  thumbnail:{
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title:{
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    color: '#FFFFFF',

  },
  year:{
    textAlign: 'center',
    color: '#AFFFFF',

  },


});

AppRegistry.registerComponent('myApp', () => myApp);
