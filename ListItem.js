'use strict';
var React = require('react-native');
const { View, TouchableHighlight, Text ,StyleSheet} = React;

class ListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item}</Text>
          <Text>this.props.item is the dataSource</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  li: {
  backgroundColor: '#fff',
  borderBottomColor: '#eee',
  borderColor: 'transparent',
  borderWidth: 1,
  paddingLeft: 16,
  paddingTop: 14,
  paddingBottom: 16,
},
liText: {
    color: '#333',
    fontSize: 16,
  },
});

module.exports = ListItem;
