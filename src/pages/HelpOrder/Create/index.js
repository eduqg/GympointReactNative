import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import Button from '~/components/Button';
import api from '~/services/api';

import Background from '~/components/Background';
import { loadHelpordersRequest } from '~/store/modules/helporder/actions';

import { Container, InputText } from './styles';
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
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');

  function handleCreateHelp() {
    // Fazer a criação de um help
    let userId = null;
    async function createHelp() {
      userId = await AsyncStorage.getItem('userId');
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
    }
    createHelp();
    dispatch(loadHelpordersRequest(userId));
  }

  return (
    <Background>
      <Container>
        <InputText
          placeholder="Inclua seu pedido de auxílio"
          value={question}
          onChangeText={setQuestion}
          numberOfLines={4}
          multiline
        />
        <Button onPress={() => handleCreateHelp()} loading={false}>
          Enviar Pedido
        </Button>
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
