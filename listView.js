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

var Main = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  },

  render: function() {
    return (
      <ListView contentContainerStyle = {styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
      />
      //comment
    );
  },
});

var styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});

module.exports = Main;
