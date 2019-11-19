import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import { BarImage, BarButton, BarText } from '~/styles/HeaderStyle';

import headerlogo from '~/assets/halter.png';

// import { Container } from './styles';

export default function Checkin() {
  return (
    <Background>
      <Text>Checkin</Text>
    </Background>
  );
}

Checkin.navigationOptions = ({ navigation }) => ({
  header: (
    <BarButton onPress={() => navigation.navigate('HelpOrderList')}>
      <BarImage source={headerlogo} />
      <BarText>Gympoint</BarText>
    </BarButton>
  ),
  headerStyle: {
    backgroundColor: '#e3e3e3',
  },
  headerTintColor: '#606070',
});
