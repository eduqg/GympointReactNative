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
              defaultNavigationOptions: {
                headerTransparent: false,
                headerTintColor: '#f84e62',
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
              },
            }
          ),
          navigationOptions: {
            tabBarVisible: true,
            tabBarLabel: '',
            tabBarLabelTintColor: '#f84e62',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="offline-pin" size={20} color={tintColor} />
            ),
          },
        },
        NewHelp: {
          screen: createStackNavigator(
            {
              HelpOrderList,
              HelpOrderCreate,
              HelpOrderResponse,
            },
            {
              defaultNavigationOptions: {
                headerTransparent: false,
                headerTintColor: '#f84e62',
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
              },
            }
          ),
          navigationOptions: {
            tabBarVisible: true,
            tabBarLabel: 'Pedir Ajuda',
            tabBarLabelTintColor: '#f84e62',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="help" size={20} color={tintColor} />
            ),
          },
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
