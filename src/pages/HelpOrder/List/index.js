import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Button from '~/components/Button';
import Background from '~/components/Background';

import {
  Container,
  List,
  ButtonCard,
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

  function parseData(allChecks) {
    const allNewDates = allChecks.map(item => {
      const formated = formatRelative(parseISO(item.updatedAt), new Date(), {
        locale: pt,
        addSuffix: true,
        includeSeconds: true,
      });
      return { ...item, formated };
    });
    return allNewDates;
  }

  useEffect(() => {
    async function getCheckings() {
      const userId = await AsyncStorage.getItem('userId');
      const response = await api.get(`/students/${userId}/help-orders`);
      const newList = await parseData(response.data);
      setHelps(newList);
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
          Novo pedido de auxílio
        </Button>

        <List
          data={helps}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ButtonCard
              onPress={() => navigation.navigate('HelpOrderResponse', { item })}
            >
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
                  <CardHeaderDate>{item.formated}</CardHeaderDate>
                </CardHeader>
                <CardContent>{item.question}</CardContent>
              </Card>
            </ButtonCard>
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
