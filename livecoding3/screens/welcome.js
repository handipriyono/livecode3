import React, { Component } from 'react';
import { AppRegistry, View, FlatList, TouchableOpacity,StyleSheet, Text, Button } from 'react-native';

export default class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
  }

  playing(){
    console.log(this.props.navigation.navigate('Board'),'klk')
    this.props.navigation.navigate('Mains')
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>WELCOME TO GAME</Text>
         <TouchableOpacity
          style={styles.button}
          onPress={this.playing.bind(this)} >
          <Text>PLAY </Text>
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
   padding: 10,
   borderColor:'black'
 },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
