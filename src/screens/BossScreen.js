/* @flow */

import React, {Component} from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Block, Text } from '../components';
import { theme } from '../constants';

const people = [
  { id: 1, name: 'Diego Lufi Padilla', percent: 15 },
  { id: 2, name: 'Cristóbal Miranda Ureta', percent: 50 },
  { id: 3, name: 'Nicolás Pascua Ossa', percent: 90 },
];

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
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
          <Block flex={false} style={{ marginLeft: 70, marginTop: 3 }}>
            <Text center color={theme.colors.green} bold size={24}>Equipo de Trabajo</Text>
          </Block>
        </Block>
        <Block center middle>
          <Block flex={false}>
            <Image
              style={{ height: 150, width: 95, marginVertical: 20 }}
              source={require('../assets/momo.png')}
            />
          </Block>
          <FlatList
           data={people}
           showsVerticalScrollIndicator={false}
           renderItem={({ item }) =>
            <View style={{ width: 330, marginTop: 20, marginHorizontal: 15, backgroundColor: theme.colors.primary, height: 50, borderRadius: 20 }}>
              <Block row space="between" center pressable onPress={() => this.props.navigation.navigate('boss2')}>
                <Text style={{ marginLeft: 10 }} color={theme.colors.green} size={17}>{item.name}</Text>
                <Block row flex={false} style={{ marginRight: 10 }}>
                  <Text bold color={theme.colors.green} size={17}>{item.percent}%</Text>
                    <MaterialIcons
                      name="chevron-right"
                      style={{ fontSize: 20, color: theme.colors.green }}
                    />
                </Block>
              </Block>
            </View>
           }
           keyExtractor={(i, ix) => ix}
          />
        <Block center middle flex={false} style={{ backgroundColor: theme.colors.primary, height: 50, width: 50, borderRadius: 25, marginBottom: 100 }} >
          <MaterialCommunityIcons
            name="plus"
            style={{ fontSize: 20, color: theme.colors.green }}
            onPress={() => this.props.navigation.goBack()}
          />
        </Block>

        </Block>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
