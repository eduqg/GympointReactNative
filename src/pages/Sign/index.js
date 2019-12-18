import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import api from '~/services/api';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

import logo from '~/assets/gympoint.png';

import { Container, ImageSign, ButtonText } from './styles';

export default function Sign({ navigation }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    try {
      AsyncStorage.getItem('userId').then(userId => {
        if (userId) {
          navigation.navigate('HelpOrderList', { userId });
        }
      });
    } catch (error) {
      Alert.alert('Falha ao obter usuário', 'Usuário não encontrado');
    }
  }, []); // eslint-disable-line

  async function handleLogin() {
    try {
      const response = await api.post('/students/sign', { name: user });

      const { id } = response.data;

      await AsyncStorage.setItem('userId', String(id));

      setUser('');

      navigation.navigate('HelpOrderList', { user: id });
    } catch (error) {
      Alert.alert('Falha ao entrar', 'Usuário não encontrado');
    }
  }

  return (
    <Background>
      <Container>
        <ImageSign source={logo} />
        <Input
          placeholder="Informe seu ID de cadastro"
          autoCapitalize="none"
          autoCorrect={false}
          value={user}
          onChangeText={setUser}
        />
        <Button onPress={handleLogin} loading={false}>
          <ButtonText>Entrar no sistema</ButtonText>
        </Button>
      </Container>
    </Background>
  );
}

Sign.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
