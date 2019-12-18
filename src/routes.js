import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Sign from '~/pages/Sign';

import Checkin from '~/pages/Checkin';

import HelpOrderList from '~/pages/HelpOrder/List';
import HelpOrderCreate from '~/pages/HelpOrder/Create';
import HelpOrderResponse from '~/pages/HelpOrder/Response';
import {
  Bar,
  BarImage,
  BarButton,
  BarText,
  IconLeftButton,
  IconLeft,
} from '~/styles/HeaderStyle';

import headerlogo from '~/assets/halter.png';

const defaultOptions = (title, icon) => {
  return {
    tabBarVisible: true,
    tabBarLabel: title,
    tabBarLabelTintColor: '#f84e62',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={icon} size={20} color={tintColor} />
    ),
    headerTransparent: false,
    headerTintColor: '#f84e62',
    headerLeftContainerStyle: {
      marginLeft: 20,
    },
    headerStyle: {
      backgroundColor: '#e3e3e3',
    },
  };
};

const navigationOptions = navigation => {
  return {
    header: (
      <BarButton onPress={() => navigation.navigate('HelpOrderList')}>
        <BarImage source={headerlogo} />
        <BarText>Gympoint</BarText>
      </BarButton>
    ),
  };
};

const navigationOptionsBack = navigation => {
  return {
    header: (
      <Bar>
        <IconLeftButton onPress={() => navigation.navigate('HelpOrderList')}>
          <IconLeft name="chevron-left" size={30} />
        </IconLeftButton>
        <BarButton onPress={() => navigation.navigate('HelpOrderList')}>
          <BarImage source={headerlogo} />
          <BarText>Gympoint</BarText>
        </BarButton>
      </Bar>
    ),
  };
};

// Switch navigator = apenas carrega uma página por vez
export default createAppContainer(
  createSwitchNavigator({
    Sign,
    App: createBottomTabNavigator(
      {
        'Check-ins': {
          screen: createStackNavigator(
            {
              Checkin,
            },
            {
              defaultNavigationOptions: ({ navigation }) =>
                navigationOptions(navigation),
            }
          ),
          navigationOptions: defaultOptions('Check-ins', 'offline-pin'),
        },
        NewHelp: {
          screen: createStackNavigator({
            HelpOrderList: {
              screen: HelpOrderList,
              navigationOptions: ({ navigation }) =>
                navigationOptions(navigation),
            },
            HelpOrderCreate: {
              screen: HelpOrderCreate,
              navigationOptions: ({ navigation }) =>
                navigationOptionsBack(navigation),
            },
            HelpOrderResponse: {
              screen: HelpOrderResponse,
              navigationOptions: ({ navigation }) =>
                navigationOptionsBack(navigation),
            },
          }),
          navigationOptions: defaultOptions('Pedir Ajuda', 'help'),
        },
      },
      {
        resetOnBlur: true,
        tabBarOptions: {
          // Para que o teclado fique em cima na bottom bar
          keyboardHidesTabBar: true,
          activeTintColor: '#f84e62',
          inactiveTintColor: '#aaa',
          // fundo da tab bar
          style: {
            backgroundColor: '#fff',
            borderTopColor: '#eee',
            borderBottomColor: '#fff',
            paddingTop: 20,
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            height: 80,
          },
        },
      }
    ),
  })
);
