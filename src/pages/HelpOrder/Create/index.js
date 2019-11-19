import React from 'react';
import { Text } from 'react-native';

// import api from '~/services/api';

import Background from '~/components/Background';

import { Container } from './styles';

export default function HelpOrderCreate() {
  return (
    <Background>
      <Container>
        <Text>Criar Pergunta</Text>
      </Container>
    </Background>
  );
}
