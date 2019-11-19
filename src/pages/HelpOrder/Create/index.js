import React from 'react';
import { Text } from 'react-native';

// import api from '~/services/api';

import Background from '~/components/Background';

import { Container } from './styles';
import {
  Bar,
  BarImage,
  BarButton,
  BarText,
  IconLeftButton,
  IconLeft,
} from '~/styles/HeaderStyle';

import headerlogo from '~/assets/halter.png';

export default function HelpOrderCreate() {
  return (
    <Background>
      <Container>
        <Text>Criar Pergunta</Text>
      </Container>
    </Background>
  );
}

HelpOrderCreate.navigationOptions = ({ navigation }) => ({
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
  headerStyle: {
    backgroundColor: '#e3e3e3',
  },
  headerTintColor: '#606070',
});
