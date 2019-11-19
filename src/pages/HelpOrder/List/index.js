import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Button from '~/components/Button';
import Background from '~/components/Background';

import {
  Container,
  List,
  Card,
  CardHeader,
  CardHeaderLeft,
  CardHeaderDate,
  CardHeaderResponse,
  CardContent,
} from './styles';
import { BarImage, BarButton, BarText } from '~/styles/HeaderStyle';

import headerlogo from '~/assets/halter.png';

export default function HelpOrderList({ navigation }) {
  const [helps, setHelps] = useState([]);

  useEffect(() => {
    async function getCheckings() {
      const userId = await AsyncStorage.getItem('userId');
      const response = await api.get(`/students/${userId}/help-orders`);
      console.tron.log(response.data);
      setHelps(response.data);
    }

    getCheckings();
  }, []); // eslint-disable-line

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
        <Button
          onPress={() => navigation.navigate('HelpOrderCreate')}
          loading={false}
        >
          Entrar no sistema
        </Button>

        <List
          data={helps}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Card>
              <CardHeader>
                <CardHeaderLeft>
                  <Icon
                    name="check-circle"
                    size={20}
                    color={item.answer ? 'green' : 'rgba(0, 0, 0, 0.4)'}
                  />
                  <CardHeaderResponse answered={item.answer}>
                    {item.answer ? 'Respondido' : 'Sem resposta'}
                  </CardHeaderResponse>
                </CardHeaderLeft>
                <CardHeaderDate>Hoje às 14h</CardHeaderDate>
              </CardHeader>
              <CardContent>{item.question}</CardContent>
            </Card>
          )}
        />
        <Button onPress={logout} loading={false}>
          Sair
        </Button>
      </Container>
    </Background>
  );
}

HelpOrderList.navigationOptions = () => ({
  header: (
    <BarButton onPress={() => {}}>
      <BarImage source={headerlogo} />
      <BarText>Gympoint</BarText>
    </BarButton>
  ),
  headerStyle: {
    backgroundColor: '#e3e3e3',
  },
  headerTintColor: '#606070',
});

HelpOrderList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
