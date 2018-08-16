import React, { Component } from 'react';
import {  TouchableOpacity, AppRegistry,Button,TouchableHighlight,View, FlatList, StyleSheet, Text } from 'react-native';

export default class Boards extends Component {

  constructor(props){
    super(props)
    this.state = {
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
    }


  render() {
    let data =  (this.state.player1)
    console.log(data,'data')
    return (
      <View>
        <Text style={styles.scores}>Position: {this.state.player1}</Text>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'black'}}><Text onPress={() => {
             alert({data})}}  style={styles.item}>21</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>22</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>23</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>24</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>25</Text></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}}><Text style={styles.item}>20</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>19</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>18</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>17</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>16</Text></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}}><Text style={styles.item}>11</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>12</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>13</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>14</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>15</Text></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}}><Text style={styles.item}>10</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>9</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>8</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>7</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>6</Text></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'red'}}><Text style={styles.item}>1</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>2</Text></View>
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>3</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}}><Text style={styles.item}>4</Text></View>
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}}><Text style={styles.item}>5</Text></View>
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
