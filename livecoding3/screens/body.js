import React, { Component } from 'react';
import { AppRegistry, View, FlatList, StyleSheet, Text } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View>
       <Text>This is bodys</Text>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
