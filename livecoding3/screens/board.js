import React, { Component } from 'react';
import { AppRegistry, View, FlatList, StyleSheet, Text } from 'react-native';

export default class Boards extends Component {
  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}} />
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}} />
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}} />
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}} />
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}} />
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}} />
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:70}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}} />
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}} />
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}} />
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row',padding:10,
        justifyContent: 'space-between',marginBottom:60}}>
          <View style={{width: 70, height: 70, backgroundColor: 'powderblue'}} />
          <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}} />
          <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
            <View style={{width: 70, height: 70, backgroundColor: 'skyblue'}} />
            <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
        </View>

      </View>
      // Try setting `flexDirection` to `column`.

    );
  }
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
  },
  item: {
    width:50,
    height:50,
    borderColor:'brown',
    backgroundColor: 'steelblue'
  },
})
