import React from 'react';
import { View } from 'react-native';
import { MainNavigator } from './src/navigator';


console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
      );
  }
}
