import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { createCheckinRequest } from '~/store/modules/checkin/actions';

import Background from '~/components/Background';
import Button from '~/components/Button';

import {
  Container,
  List,
  CheckBar,
  CheckNumber,
  CheckDate,
  NumberCheckins,
  NumberBold,
} from './styles';
import { BarImage, BarButton, BarText } from '~/styles/HeaderStyle';
import headerlogo from '~/assets/halter.png';

export default function Checkin() {
  const dispatch = useDispatch();
  const [checks, setChecks] = useState([]);
  const numberCheckins = useSelector(state => state.checkin.numberCheckins);

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

  async function handleCreateCheckin() {
    const userId = await AsyncStorage.getItem('userId');
    dispatch(createCheckinRequest(userId));
  }

  return (
    <Background>
      <Container>
        <Button onPress={() => handleCreateCheckin()} loading={false}>
          Novo check-in
        </Button>
        <NumberCheckins>
          Checkins nos últimos 7 dias:{' '}
          <NumberBold>{numberCheckins + 1} de 5.</NumberBold>
        </NumberCheckins>
        <List
          data={checks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => (
            <CheckBar>
              <CheckNumber>Check-in #{index + 1}</CheckNumber>
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
