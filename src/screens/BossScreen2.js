/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';

import { theme } from '../constants';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  render() {
    const icon = require('../assets/boss2.png');

    return (
      <View style={styles.container}>
        <ImageBackground
          source={icon}
          style={{ height: Dimensions.get('window').height - 100, margin: 20 }}

        >
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}
              style={{ padding: 10 }}
            >
              <View style={{ width: 50, height: 50 }} />
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.topBar

  }
});
