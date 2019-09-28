/* @flow */

import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const psicologico = [
    {
        id: 1,
        descripcion: 'Realizar 30 minutos de actividad fisica'
    },
    {
        id: 2,
        descripcion: 'Consumir 2 porciones de frutas o verduras en variedad de tipos y colores'
    },
    {
        id: 3,
        descripcion: 'Tomar al menos 2 litros de agua'
    },
    {
        id: 4,
        descripcion: 'Dormir 8 horas '
    },
    {
        id: 5,
        descripcion: 'Alimentarse al menos 4 veces'
    },
    {
        id: 6,
        descripcion: 'Comer en un tiempo minimo de 20 minutos'
    }
];

export default class DailyScreen extends Component {
  render() {
    return (
      <Block>
        <Block row flex={false} padding={10} style={{ marginTop: theme.topBar }}>
          <Block middle flex={false}>
            <MaterialIcons
              name="arrow-back"
              style={{ fontSize: 20, color: theme.colors.green }}
              onPress={() => this.props.navigation.goBack()}
            />
          </Block>
          <Block flex={false} style={{ marginLeft: 90, marginTop: 3 }}>
            <Text center color={theme.colors.green} bold size={24}>Tareas diarias</Text>
          </Block>
        </Block>

        <Block flex={false}>
          <FlatList
           data={psicologico}
           showsVerticalScrollIndicator={false}
           renderItem={({ item }) =>
            <View style={{ paddingHorizontal: 15, borderBottomColor: theme.colors.green, borderBottomWidth: 1 }}>
              <Block row space="between" style={{ paddingVertical: 10 }}>
                <Text color={theme.colors.green} size={17}>{item.descripcion}</Text>
                <MaterialCommunityIcons name="check-box-outline" color={theme.colors.green} style={{ fontSize: 20 }} />
              </Block>
            </View>
           }
           keyExtractor={(i, ix) => ix}
          />
        <Block
          flex={false}
          style={{
            marginTop: 10
          }}
          middle center
        >
      <MaterialCommunityIcons name="check" color={theme.colors.green} style={{ fontSize: 100 }} />
        <Text color={theme.colors.green} size={20} bold>¡Todas las tareas realizadas!</Text>

      </Block>
      </Block>

      </Block>
    );
  }
}
