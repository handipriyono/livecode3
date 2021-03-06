import React, { Component } from 'react';
import { AppRegistry, View, FlatList,   TouchableOpacity,StyleSheet, Text, Button } from 'react-native';

export default class Welcome extends Component {
  constructor(props){
    super(props)
  }

  playing(){
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>Game Over</Text>
         <TouchableOpacity
          style={styles.button}
          onPress={this.playing.bind(this)} >
          <Text>PLAY Again</Text>
        </TouchableOpacity>
       </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent:'center',
   alignItems:'center',
   paddingTop: 22
  },
  button: {
   alignItems: 'center',
   backgroundColor: '#DDDDDD',
   padding: 10
 },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
