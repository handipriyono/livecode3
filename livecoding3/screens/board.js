import React, { Component } from 'react';
import {  TouchableOpacity, AppRegistry,Button,TouchableHighlight,View, FlatList, StyleSheet, Text } from 'react-native';

export default class Boards extends Component {

  constructor(props){
    super(props)
    this.state = {
      satu:1,
      dua:2,
      tiga:3,
      empat:4,
      lima:5,
      enam:6,
      tujuh:7,
      delapan:8,
      sembilan:9,
      sepuluh:10,
      sebelas:11,
      duabelas:12,
      tigabelas:13,
      empatbelas:14,
      limabelas:15,
      enambelas:16,
      tujuhbelas:17,
      delapanbelas:18,
      sembilanbelas:19,
      duapuluh:20,
      duasatu:21,
      duadua:22,
      duatiga:23,
      duaempat:24,
      dualima:25,
      counts:[],
      player1:0
    }

  }

  componentDidMount() {
    let datas = []
    for(let i=1; i <= 25; i++){
      datas.push(i)
    }
    this.setState({
      counts:datas
    })
  }

  plays(){

    console.log(this.state.player1)


    if(this.state.player1 >= 25){
      this.setState({
        player1: 25
      })
      alert('YOU WIN')
    } else {
    this.setState({
      player1: Number(this.state.player1 + Math.floor(Math.random() * 6 + 1))
    })
      }
      //
      // if(this.state.player1 ==)
    }


  render() {
    let data =  (this.state.player1)
    console.log(data,'data')
    return (
      <View>
        <Text style={styles.scores}>Position: {this.state.player1}</Text>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'black'}}><Text style={styles.item}>{this.state.dualima}</Text></View>
           <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.duaempat}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.duatiga}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.duadua}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.duasatu}</Text></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}}><Text style={styles.item}>{this.state.duapuluh}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.sembilanbelas}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.delapanbelas}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.tujuhbelas}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.enambelas}</Text></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}}><Text style={styles.item}>{this.state.sebelas}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.duabelas}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.tigabelas}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.empatbelas}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.limabelas}</Text></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}}><Text style={styles.item}>{this.state.sepuluh}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.sembilan}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.delapan}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.tujuh}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.enam}</Text></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'red'}}><Text style={styles.item}>{this.state.satu}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.dua}</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.tiga}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>{this.state.empat}</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>{this.state.lima}</Text></View>
        </View>

        <TouchableOpacity
         style={styles.button}
         onPress={this.plays.bind(this)} >
         <Text>Playing : {this.state.player1} </Text>
       </TouchableOpacity>

      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
  },
  button: {
  marginTop:20,
   alignItems: 'center',
   backgroundColor: '#DDDDDD',
   padding: 20,
   width:200,
   color:'white',
   borderColor:'black'
 },
 scores: {
 marginTop:20,
 width:100,
  alignItems: 'center',
  backgroundColor: '#000',
  padding: 10,
  color:'white'
},
  item: {
  marginTop:'auto',
  marginLeft:'auto',
  marginRight:'auto',
  marginBottom:'auto',
  color:'white'
  },
})
