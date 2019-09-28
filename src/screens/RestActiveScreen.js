/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Block, Text, Button } from '../components';
import { theme } from '../constants';

export default class RestActiveScreen extends Component {
  state = {
    currentState: 0,
    timer: 30
  }

  renderSteps() {
    switch (this.state.currentState) {
      case 0:
        return (
          <Block center middle>
            <Block center style={{ marginTop: 40 }}>
              <Text color={theme.colors.green} size={20}>Realiza los siguientes ejercicios</Text>
              <Image
                style={{ height: 150, width: 150, overflow: 'hidden', marginTop: 30 }}
                source={require('../assets/p1.png')}
              />
            <Text color={theme.colors.green} bold style={{ marginTop: 40 }}>Respiración: Inspiración profunda, exhalación hundiendo ombligo (10 veces).</Text>
            </Block>
            <Block style={{ marginTop: 80 }}>
              <Button
                color={theme.colors.green}
                style={{ width: 300, marginTop: 150 }}
                onPress={() => {
                  this.setState({
                    currentState: this.state.currentState + 1
                  });
                  this.interval = setInterval(
    () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
    1000
  )}
}
              >
                <Text white bold center>SIGUIENTE</Text>
              </Button>
            </Block>
          </Block>
        );
      case 1:
        return (
          <Block center middle>
            <Block center style={{ marginTop: 40 }}>
              <Text color={theme.colors.green} size={20}>Realiza los siguientes ejercicios</Text>
              <Image
                style={{ height: 150, width: 150, overflow: 'hidden', marginTop: 30 }}
                source={require('../assets/p2.png')}
              />
            <Text color={theme.colors.green} bold style={{ marginTop: 40 }}>Respiración: Inspiración profunda, exhalación hundiendo ombligo (10 veces).</Text>
            <Text color={theme.colors.green} bold style={{ marginTop: 80 }} size={20}>00:{this.state.timer}</Text>
            </Block>
            <Block style={{ marginTop: 80 }}>
              <Button
                color={theme.colors.green}
                style={{ width: 300, marginTop: 150 }}
                onPress={() => {
                  this.setState({
                    currentState: this.state.currentState + 1,
                    timer: 30
                  });
                  this.interval = setInterval(
                    () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
                    1000
                  )}
                  }
              >
                <Text white bold center>SIGUIENTE</Text>
              </Button>
            </Block>
          </Block>
        );
      case 2:
        return (
          <Block center middle>
            <Block center style={{ marginTop: 40 }}>
              <Text color={theme.colors.green} size={20}>Realiza los siguientes ejercicios</Text>
              <Image
                style={{ height: 150, width: 150, overflow: 'hidden', marginTop: 30 }}
                source={require('../assets/p3.png')}
              />
            <Text color={theme.colors.green} bold style={{ marginTop: 40 }}>Respiración: Inspiración profunda, exhalación hundiendo ombligo (10 veces).</Text>
            <Text color={theme.colors.green} bold style={{ marginTop: 80 }} size={20}>00:{this.state.timer}</Text>
            </Block>
            <Block style={{ marginTop: 80 }}>
              <Button
                color={theme.colors.green}
                style={{ width: 300, marginTop: 150 }}
                onPress={() => {
                    this.setState({
                      currentState: this.state.currentState + 1,
                      timer: 30
                    });
                    }
                  }
              >
                <Text white bold center>FINALIZAR</Text>
              </Button>
            </Block>
          </Block>
        );
      case 3:
      return (
        <Block style={{ backgroundColor: theme.colors.primary, paddingHorizontal: 30 }} middle center>
          <Text color={theme.colors.green} size={24} bold>¡Gracias!</Text>
          <MaterialCommunityIcons name="emoticon-happy-outline" color={theme.colors.green} style={{ fontSize: 100 }} />
          <Text center color={theme.colors.green} size={18}>Una pausa activa te ayuda a: {"\n"}Disminuir el estrés. {"\n"}Mejora tu desempeño Reducir la fatiga mental y física. {"\n"}Promueve la relajación muscular
            {"\n"}¡Sigue así!</Text>
            <Button
              style={{ width: 300, marginTop: 70 }}
color={theme.colors.green} onPress={() => this.props.navigation.goBack()}
            >
              <Text white bold center>FINALIZAR</Text>
            </Button>
      </Block>
      );
      default:

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Block row flex={false} padding={10} style={{ marginTop: theme.topBar }}>
          <Block middle flex={false}>
            <MaterialIcons
              name="arrow-back"
              style={{ fontSize: 20, color: theme.colors.green }}
              onPress={() => this.props.navigation.goBack()}
            />
          </Block>
          <Block flex={false} style={{ marginLeft: 90, marginTop: 3 }}>
            <Text center color={theme.colors.green} bold size={24}>Pausa Activa</Text>
          </Block>
        </Block>
        {this.renderSteps()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
