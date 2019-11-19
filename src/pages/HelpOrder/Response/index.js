import React from 'react';
import { Text } from 'react-native';

// import api from '~/services/api';

import Background from '~/components/Background';

import { Container } from './styles';
import { BarImage, BarButton, BarText } from '~/styles/HeaderStyle';

import headerlogo from '~/assets/halter.png';

export default function HelpOrderResponse() {
  return (
    <Background>
      <Container>
        <Text>Response</Text>
      </Container>
    </Background>
  );
}

HelpOrderResponse.navigationOptions = ({ navigation }) => ({
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
