import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert, ScrollView } from 'react-native';

import Button from '~/components/Button';
import api from '~/services/api';

import Background from '~/components/Background';
import { loadHelpordersRequest } from '~/store/modules/helporder/actions';

import { Container, InputText, ButtonText } from './styles';

export default function HelpOrderCreate() {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');

  function handleCreateHelp() {
    // Fazer a criação de um help
    async function createHelp() {
      const userId = await AsyncStorage.getItem('userId');
      const response = await api.post(`/students/${userId}/help-orders`, {
        question,
      });
      if (response) {
        setQuestion('');
        Alert.alert(
          'Pergunta cadastrada com sucesso',
          'Sua pergunta foi realizada, em breve retornaremos com uma resposta.'
        );
      } else {
        Alert.alert(
          'Pergunta falhou',
          'Não foi possível realizar pergunta, tente novamente mais tarde.'
        );
      }
      dispatch(loadHelpordersRequest(userId));
    }
    createHelp();
  }

  return (
    <Background>
      <Container>
        <ScrollView>
          <InputText
            placeholder="Inclua seu pedido de auxílio"
            value={question}
            onChangeText={setQuestion}
            numberOfLines={10}
            returnKeyType="send"
            textAlignVertical="top"
            multiline
          />
          <Button onPress={() => handleCreateHelp()} loading={false}>
            <ButtonText>Enviar Pedido</ButtonText>
          </Button>
        </ScrollView>
      </Container>
    </Background>
  );
}
