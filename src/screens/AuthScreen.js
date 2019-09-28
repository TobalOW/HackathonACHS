/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  AsyncStorage,
  Image
} from 'react-native';

import { Button, Input, Block, Text } from '../components';
import { theme } from '../constants';
import { services } from '../services';

export default class AuthScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: 'jefe@mail.com',
    password: '123',
    errors: [],
    loading: false,
  }

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    this.setState({
      loading: true,
      errors: []
    });
    services.loginAccount({ email, password })
      .then(async(res) => {
        if (res.data.rol) {
          await AsyncStorage.setItem('@localStorage:rol', res.data.rol);
          this.setState({
            loading: false
          });
          navigation.navigate('main', { rol: res.data.rol });
        } else {
          this.setState({
            loading: false,
            errors: ['password']
          });
        }
      });
  }
  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;

    // Comprobacion de algun error en el login
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block center middle flex={false} style={{ marginTop: 100 }}>
            <Image
              style={{ height: 80, width: 80 }}
              source={require('../assets/logo.png')}
            />
          </Block>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
          <Button color={theme.colors.green} onPress={() => this.handleLogin()}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> :
                <Text bold white center>Ingresar</Text>
              }
            </Button>

            <Button onPress={() => navigation.navigate('Forgot')} style={{ backgroundColor: theme.colors.primary }}>
              <Text color={theme.colors.green} caption center style={{ textDecorationLine: 'underline' }}>
                Olvidaste Contraseña?
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.green,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  }
});
