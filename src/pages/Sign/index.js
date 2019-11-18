import React from 'react';
import { View, Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

import logo from '~/assets/gympoint.png';

import { Container, ImageSign } from './styles';

export default function Sign() {
  return (
    <Background>
      <Container>
        <ImageSign source={logo} />
        <Input placeholder="Informe seu ID de cadastro" />
        <Button loading={false}>Entrar no sistema</Button>
      </Container>
    </Background>
  );
}
