/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';

import { Block, Text, Button } from '../components';
import { theme } from '../constants';

const fisico = [
        {
            id: 1,
            problema: 'Dolor en las muñecas',
            tipo: 'f'
        },
        {
            id: 2,
            problema: 'Dolor en los codos',
            tipo: 'f'
        },
        {
            id: 3,
            problema: 'Dolos en los hombros',
            tipo: 'f'
        },
        {
            id: 4,
            problema: 'Dolor en el cuello',
            tipo: 'f'
        },
        {
            id: 5,
            problema: 'Otro tipo de dolor',
            tipo: 'f'
        }
    ];

const psicologico = [
        {
            id: 6,
            problema: 'Estrés por esceso de trabajo',
            tipo: 'p'
        },
        {
            id: 7,
            problema: 'No me siento cómodo en mi ambiente laboral',
            tipo: 'p'
        },
        {
            id: 8,
            problema: 'Las instrucciones de mi rol no son claras',
            tipo: 'p'
        },
        {
            id: 9,
            problema: 'Otro',
            tipo: 'p'
        }
    ];

export default class FeedbackScreen extends Component {

  state = {
    currentState: 0
  }

    renderSteps() {
      switch (this.state.currentState) {
        case 0:
          return (
            <Block>
              <Block center middle flex={false} style={{ height: 90 }}>
                <Text color={theme.colors.green} size={22}>¿Cómo estuvo tu día?</Text>
              </Block>
              <Block flex={false} pressable onPress={() => this.setState({ currentState: 1 })} middle center style={{ height: 200, backgroundColor: theme.colors.primary, marginBottom: 40 }}>
                <MaterialCommunityIcons name="emoticon-happy-outline" color={theme.colors.green} style={{ fontSize: 100 }} />
              </Block>
              <Block flex={false} pressable onPress={() => this.setState({ currentState: 1 })} middle center style={{ height: 200, backgroundColor: theme.colors.green }}>
                <MaterialCommunityIcons name="emoticon-sad-outline" color={'white'} style={{ fontSize: 100 }} />
              </Block>
            </Block>
          );
        case 1:
          return (
            <Block>
              <Block center middle flex={false} style={{ height: 90 }}>
                <Text color={theme.colors.green} size={22}>¿Algún dolor físico?</Text>
              </Block>
              <Block flex={false} pressable onPress={() => this.setState({ currentState: 3 })} middle center style={{ height: 200, backgroundColor: theme.colors.primary, marginBottom: 40 }}>
                <Text color={theme.colors.green} size={22}>Me siento bien</Text>
              </Block>
              <Block flex={false} pressable onPress={() => this.setState({ currentState: 2 })} middle center style={{ height: 200, backgroundColor: theme.colors.green }}>
                <Text color={'white'} size={22}>Estoy adolorido/a</Text>
              </Block>
            </Block>
          );
        case 2:
          return (
            <Block>
              <Block center middle flex={false} style={{ height: 90 }}>
                <Text color={theme.colors.green} size={22}>¿A que categoría pertenece tu dolor?</Text>
              </Block>
              <Block flex={false}>
                <FlatList
                 data={fisico}
                 showsVerticalScrollIndicator={false}
                 renderItem={({ item }) =>
                  <View style={{ paddingHorizontal: 15, borderBottomColor: theme.colors.green, borderBottomWidth: 1 }}>
                    <Block row space="between" style={{ paddingVertical: 10 }}>
                      <Text color={theme.colors.green} size={17}>{item.problema}</Text>
                      <MaterialCommunityIcons name="check-box-outline" color={theme.colors.green} style={{ fontSize: 20 }} />
                    </Block>
                  </View>
                 }
                 keyExtractor={(i, ix) => ix}
                />
              <Block
                flex={false}
                style={{
                  borderColor: theme.colors.green,
                  borderWidth: 1,
                  borderRadius: 2,
                  marginTop: 10
                }}

              >
                <Input
                  placeholder='Describe los sintomas que estas padeciendo'
                  multiline
                  numberOfLines={3}
                />
              </Block>
                <Button
color={theme.colors.green} onPress={() => this.setState({
                  currentState: this.state.currentState + 1
                })}
                >
                  <Text white bold center>SIGUIENTE</Text>
                </Button>
              </Block>

            </Block>
          );
          case 3:
            return (
              <Block>
                <Block center middle flex={false} style={{ height: 90 }}>
                  <Text color={theme.colors.green} size={22}>¿Algún malestar emocional?</Text>
                </Block>
                <Block flex={false} pressable onPress={() => this.setState({ currentState: 5 })} middle center style={{ height: 200, backgroundColor: theme.colors.primary, marginBottom: 40 }}>
                  <Text color={theme.colors.green} size={22}>Estoy feliz</Text>
                </Block>
                <Block flex={false} pressable onPress={() => this.setState({ currentState: 4 })} middle center style={{ height: 200, backgroundColor: theme.colors.green }}>
                  <Text color={'white'} size={22}>No me siento feliz</Text>
                </Block>
              </Block>
            );
        case 4:
          return (
            <Block>
              <Block center middle flex={false} style={{ height: 90 }}>
                <Text color={theme.colors.green} size={22}>¿A que categoría pertenece tu dolor?</Text>
              </Block>
              <Block flex={false}>
                <FlatList
                 data={psicologico}
                 showsVerticalScrollIndicator={false}
                 renderItem={({ item }) =>
                  <View style={{ paddingHorizontal: 15, borderBottomColor: theme.colors.green, borderBottomWidth: 1 }}>
                    <Block row space="between" style={{ paddingVertical: 10 }}>
                      <Text color={theme.colors.green} size={17}>{item.problema}</Text>
                      <MaterialCommunityIcons name="check-box-outline" color={theme.colors.green} style={{ fontSize: 20 }} />
                    </Block>
                  </View>
                 }
                 keyExtractor={(i, ix) => ix}
                />
              <Block
                flex={false}
                style={{
                  borderColor: theme.colors.green,
                  borderWidth: 1,
                  borderRadius: 2,
                  marginTop: 10
                }}

              >
                <Input
                  placeholder='Describe tu malestar emocional que estas pasando'
                  multiline
                  numberOfLines={3}
                />
              </Block>
                <Button
color={theme.colors.green} onPress={() => this.setState({
                  currentState: this.state.currentState + 1
                })}
                >
                  <Text white bold center>FINALIZAR</Text>
                </Button>
              </Block>

            </Block>
          );
          case 5:
          return (
            <Block style={{ backgroundColor: theme.colors.primary, paddingHorizontal: 30 }} middle center>
              <Text color={theme.colors.green} size={24} bold>¡Gracias!</Text>
              <MaterialCommunityIcons name="emoticon-happy-outline" color={theme.colors.green} style={{ fontSize: 100 }} />
              <Text color={theme.colors.green} size={18}>Tu feedback es importante para conseguir un ambiente de trabajo en el que te sientas seguro y cómodo</Text>
                <Button
                  style={{ width: 300 }}
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
          <Block flex={false} style={{ marginLeft: 105, marginTop: 3 }}>
            <Text center color={theme.colors.green} bold size={24}>Feedback</Text>
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
