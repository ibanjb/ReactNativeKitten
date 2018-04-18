import React from 'react';
import {View, Text} from "react-native";

export default class App extends React.Component {
  render() {    
    return (
      <View style={{flex: 1}}>
        <Text> Let's begin  </Text>
      </View>
    );
  }
}

Expo.registerRootComponent(App);
