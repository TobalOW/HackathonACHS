import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import drawerContentComponents from './drawerContentComponents';
import AuthScreen from './screens/AuthScreen';
import SettingsScreen from './screens/SettingsScreen';
import BossScreen from './screens/BossScreen';
import BossScreen2 from './screens/BossScreen2';
import HomeScreen from './screens/HomeScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import DailyScreen from './screens/DailyScreen';
import RestActiveScreen from './screens/RestActiveScreen';

const stackNavigator = createStackNavigator({
  main: { screen: HomeScreen },
  restActive: { screen: RestActiveScreen },
  feedback: { screen: FeedbackScreen },
  daily: { screen: DailyScreen },
  boss: { screen: BossScreen },
  boss2: { screen: BossScreen2 },
},
{
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'main',
});

stackNavigator.navigationOptions = () => {
  const drawerLockMode = 'locked-closed';
  return {
    drawerLockMode,
  };
};

const drawerStack = createDrawerNavigator({
  home: { screen: stackNavigator },
  settings: { screen: SettingsScreen },

}, {
  contentComponent: drawerContentComponents,
}
);

// Navegacion de App completa
export const Main = createSwitchNavigator({
  logIn: { screen: AuthScreen },
  app: { screen: drawerStack },
},
{
  navigationOptions: {
    tabBarVisible: false
  },
  lazyLoad: true
});

export const MainNavigator = createAppContainer(Main);
