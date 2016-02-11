/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";
class myApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
        });
      })
      .done();
  }

  render() {

    if (!this.state.movies) {
   return this.renderLoadingView();
 }

 var movie = this.state.movies[0];
 return this.renderMovie(movie);
}

renderLoadingView() {
 return (
   <View style={styles.container}>
     <Text>
       Loading movies...
     </Text>
   </View>
 );
}
renderMovie(movie){
    return (
      <View style={styles.container}>
      <View style={styles.leftContainer}>
      <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        </View>
        <View style= {styles.rightContainer}>
        <Text style = {styles.title}>{movie.title}</Text>
        <Text style = {styles.year}>{movie.year}</Text>
        </View>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001A57',
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
    color: '#FFFFFF',

  },


});

AppRegistry.registerComponent('myApp', () => myApp);
