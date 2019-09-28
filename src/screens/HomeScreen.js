/* @flow */

import React, { Component } from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import FA from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CircularProgress } from 'react-native-circular-progress';

import { Block, Text } from '../components';
import { theme } from '../constants';


const TOP_VIEW = theme.window.height * 0.3;

export default class HomeScreen extends Component {
  state = {
    loading: true,
    rol: null,
    entries: [
      { id: 1, title: 'Tareas Diarias', content: 'Terminar tus actividades te asegura una vida sana' },
      { id: 2, title: 'Feedback', content: '¡Aún no realizas tu feedback diario!' },
      { id: 3, title: 'Pausa Activa', content: 'Toma al menos 4 pausas activas al día' },

    ]
  }
  componentWillMount() {
    this.setState({
      loading: true
    });
    AsyncStorage.getItem('@localStorage:rol')
      .then((res) => {
        this.setState({
          loading: false,
          rol: res
        });
      }
    );
  }

  renderTopView() {
    if (this.state.loading) {
      return (
        <ActivityIndicator color={theme.colors.secondary} size={'large'} />
      );
    }
    if (this.state.rol === 'jefe') {
      return (
        <Block row flex={false} middle center style={{ paddingLeft: 90 }}>
          <Block flex={false}>
            <CircularProgress
              size={110}
              fill={49}
              rotation={360}
              lineCap="round"
              width={8}
              tintColor={theme.colors.green2}
              backgroundColor={theme.colors.green3}
              backgroundWidth={5}
            >
              {() => (
                <Block center middle>
                  <Image
                    style={{ height: 90, width: 90, overflow: 'hidden', borderRadius: 45 }}
                    source={require('../assets/smile.jpg')}
                  />
                </Block>
              )}
            </CircularProgress>
            <Text style={{ paddingLeft: 35 }} color={theme.colors.tertiary} size={22} bold>49%</Text>
          </Block>
          <Block flex={false} style={{ paddingLeft: 30 }}>
            <CircularProgress
              size={70}
              fill={15}
              rotation={360}
              lineCap="round"
              width={5}
              tintColor={theme.colors.green2}
              backgroundColor={theme.colors.green3}
              backgroundWidth={3}
            >
              {() => (
                <Block center middle>
                  <Block center middle style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: theme.colors.green }}>
                    <FA name="users" color={'white'} style={{ fontSize: 20 }} />
                  </Block>
                </Block>
              )}
            </CircularProgress>
            <Block
              pressable
              onPress={() => this.props.navigation.navigate('boss')}
              flex={false}
              style={{ backgroundColor: theme.colors.green }}
            >
              <Text white center><Text bold white>24</Text>%</Text>
              <Text white center size={12}>Ver detalle</Text>
            </Block>
          </Block>
        </Block>
      );
    }
    return (
      <Block flex={false} middle center style={{ paddingLeft: 90 }}>
        <CircularProgress
          size={110}
          fill={65}
          rotation={360}
          lineCap="round"
          width={8}
          tintColor={theme.colors.green2}
          backgroundColor={theme.colors.green3}
          backgroundWidth={5}
        >
          {() => (
            <Block center middle>
              <Image
                style={{ height: 90, width: 90, overflow: 'hidden', borderRadius: 45 }}
                source={require('../assets/smile.jpg')}
              />
            </Block>
          )}
        </CircularProgress>
        <Text style={{ paddingLeft: 20 }} color={theme.colors.tertiary} size={22} bold>65%</Text>
      </Block>
    );
  }

  renderCarousel() {
    return (
      <Carousel
        style={{ height: 244 }}
         data={this.state.entries}
         renderItem={this.renderItem}
         itemWidth={230}
         containerWidth={theme.window.width}
         separatorWidth={0}
         ref={(c) => {
             this._carousel = c;
         }}
         initialIndex={1}
      />
    );
  }

  renderItem = ({ item, index }) => {
    let content;
    let fn;
    if (item.id === 2) {
      content = <MaterialCommunityIcons name="emoticon-sad-outline" color={'white'} style={{ fontSize: 60 }} />;
      fn = 'feedback';
    } else if (item.id === 1) {
      content = <Text white size={36} bold>7/10</Text>;
      fn = 'daily';
    } else if (item.id === 3) {
      content = <FA name="activity" color={'white'} style={{ fontSize: 60 }} />;
      fn = 'restActive';
    }
        return (
            <Block
              bigShadow
              flex={false}
              pressable
              style={styles.item}
              onPress={() => {
                  this._carousel.scrollToIndex(index);
                  this.props.navigation.navigate(fn);
              }}
            >
              <Block flex={false} style={{ height: 180, padding: 10 }}>
                <Text white size={18} bold center>{item.title}</Text>
                <Block middle center>
                  {content}
                </Block>
              </Block>
              <Block flex={false} style={{ paddingBottom: 10, borderTopWidth: 1, borderColor: 'white', alignItems: 'center', paddingTop: 10 }}>
                <Text white size={14} center>
                  {item.content}
                </Text>
              </Block>
            </Block>
      )
    };

  render() {
    return (
      <Block>
        <Block bigShadow flex={false} height={TOP_VIEW} style={{ backgroundColor: theme.colors.primary, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingTop: theme.topBar }}>
          <Block row flex={1} padding={10}>
            <Block flex={false} pressable onPress={() => this.props.navigation.actions.openDrawer()}>
              <MaterialIcons name="menu" style={{ fontSize: 30, color: theme.colors.green }} />
            </Block>
            <Block flex={false} space='between' row >
              {this.renderTopView()}
            </Block>
          </Block>
        </Block>
        <Block>
          {this.renderCarousel()}
        </Block>
        <Block center bottom flex={false} style={{ marginBottom: 10 }}>
          <Image
            style={{ height: 64, width: 64 }}
            source={require('../assets/logo.png')}
          />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 244,
    borderRadius: 20,
    backgroundColor: theme.colors.green
  },
});
