var Firebase = require('firebase');
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
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
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
        
		<Text>
		asldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasdasldkfjsdkajakshsdafhsfhasd
		</Text>



      <TabBarIOS
      tintColor="white"
      barTintColor="darkslateblue">

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

        {this._renderContent('#414A8C', 'Blue Tab')}
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
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>

      </TabBarIOS>
      
    );
  }
});

class myApp extends React.Component {
  render() {
    return (
		<View>
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
		<Text >
		lollollollollollollollollollol
		</Text>
		<TabBarIOS
      tintColor="white"
      barTintColor="darkslateblue">

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

        {this._renderContent('#414A8C', 'Blue Tab')}
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
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>

      </TabBarIOS>
		
		</View>
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
