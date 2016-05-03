const React = require('react-native');
const {StyleSheet} = React;

const constants = {
  actionAuthColor: '#24CE84',
  actionColor: '#ea6b5d'
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'f2f2f2'
  },
  listview: {
    flex: 1,
  },
  liContainer: {
    flex: 2,
  },
  li: {
    backgroundColor: 'e2f1ff',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 20,
    marginBottom: 2,
    marginTop: 2,
  },
  liTitle: {
    color: '#333',
    fontSize: 16,
    marginBottom: 5,
  },
  liDue: {
    color: '#333',
    fontSize: 14,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#005ca7',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 14,
    paddingBottom: 16,
    marginLeft: 60,
    marginRight: 60,
  },
  actionAuth: {
    backgroundColor: constants.actionAuthColor,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 14,
    paddingBottom: 16,
    marginLeft: 60,
    marginRight: 60,
  },
})

module.exports = styles;
module.exports.constants = constants;
