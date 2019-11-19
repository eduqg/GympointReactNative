import React from 'react';
import { View, Text } from 'react-native';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Checkin() {
  return (
    <Background>
      <Text>Checkin</Text>
    </Background>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Checkin',
};
