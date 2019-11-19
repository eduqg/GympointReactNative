import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert, Text } from 'react-native';

import api from '~/services/api';

import Button from '~/components/Button';
import Background from '~/components/Background';

import { Container, List } from './styles';

export default function HelpOrders({ navigation }) {
  async function logout() {
    try {
      await AsyncStorage.removeItem('userId');
      navigation.navigate('Sign');
    } catch (exception) {
      Alert.alert('Erro ao sair', 'Não foi possível fazer logout');
    }
  }

  return (
    <Background>
      <Container>
        <Button onPress={() => {}} loading={false}>
          Entrar no sistema
        </Button>

        <List />
        <Text>HelpOrders</Text>
        <Button onPress={logout} loading={false}>
          Sair
        </Button>
      </Container>
    </Background>
  );
}
