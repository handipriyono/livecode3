/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Bodys from './screens/body'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
     this.state = {
         timePassed: false,
         counts:0
     }

  }

   componentDidMount() {
     data = 0;

    setTimeout( () => {
      data = data + 1
     this.setState({
          counts:data
        })

        this.setTimePassed();
    },5000)
}
setTimePassed() {
    this.setState({timePassed: true});
}


  render() {
   //  if (!this.state.timePassed) {
        return (
   //       <View>
   //
   //           <Text style={styles.welcome}>Welcome to our App</Text>
   //           <Image
   //             style={styles.backgroundImage}
   //         source={require('./loadings.gif')} />
   //
   //       </View>
   //     )
   // } else {
   //     return (
   //       <View>
   //         <Bodys/>
   //        </View>
   //
   //     )
   // }

<View style={styles.container}><Text>INI TEST</Text></View>


)

  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    margin:10,
    flex: 3,
  marginBottom:100,
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    backgroundColor: '#F5FCFF',
  },
  circles:{
      borderRadius:100,
      width:100,
      height:100,
      backgroundColor: 'powderblue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop:100,
    margin: 10,
  },
  backgroundImage: {
  alignSelf: 'center',
   height: 300,
   width: 300,
   borderWidth: 1,
   borderRadius: 75,
 },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
