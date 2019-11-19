import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';
import Button from '~/components/Button';

import { Container, List, CheckBar, CheckNumber, CheckDate } from './styles';
import { BarImage, BarButton, BarText } from '~/styles/HeaderStyle';
import headerlogo from '~/assets/halter.png';

export default function Checkin() {
  const [checks, setChecks] = useState([]);

  function parseData(allChecks) {
    const allNewDates = allChecks.map(item => {
      const formated = formatRelative(parseISO(item.createdAt), new Date(), {
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
      const response = await api.get(`/students/${userId}/checkins`);
      if (response) {
        const parsedData = await parseData(response.data);
        setChecks(parsedData);
      } else {
        Alert.alert(
          'Erro ao carregar checkins',
          'Não foi possível carregar checkins'
        );
      }
    }

    getCheckings();
  }, []); // eslint-disable-line

  function handleCreateChekin() {}

  return (
    <Background>
      <Container>
        <Button onPress={() => handleCreateChekin()} loading={false}>
          Novo check-in
        </Button>
        <List
          data={checks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => (
            <CheckBar>
              <CheckNumber>Check-in #{index}</CheckNumber>
              <CheckDate>{item.formated}</CheckDate>
            </CheckBar>
          )}
        />
      </Container>
    </Background>
  );
}

Checkin.navigationOptions = ({ navigation }) => ({
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
