import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import WelcomeScreen from './screens/welcome';
import Boards from './screens/board'

const RootStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Mains: { screen: Boards }

  },

  {
    initialRouteName: "Welcome"

  }
);

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
