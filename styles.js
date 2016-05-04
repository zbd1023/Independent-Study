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
    backgroundColor: '#c5f8ff',
  },
  containerAuth: {
    flex: 1,
    backgroundColor: '#c5f8ff',
    justifyContent: 'center',
  },
  listview: {
    flex: 1,
  },
  liContainer: {
    flex: 2,
  },
  li: {
    backgroundColor: '#00bd71',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 20,
    marginBottom: 2,
    marginTop: 2,
  },
  liTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Helvetica',
    marginBottom: 5,
  },
  liDue: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Helvetica',
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#005ca7',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    justifyContent: 'center',
    height: 60,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Helvetica',
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
    fontSize: 20,
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 14,
    paddingBottom: 16,
    marginLeft: 40,
    marginRight: 40,
  },
  actionAuth: {
    backgroundColor: constants.actionAuthColor,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 14,
    paddingBottom: 16,
    marginLeft: 40,
    marginRight: 40,
  },
})

module.exports = styles;
module.exports.constants = constants;
