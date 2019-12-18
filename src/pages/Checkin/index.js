import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  loadCheckingsRequest,
  createCheckinRequest,
} from '~/store/modules/checkin/actions';

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
  LoadingCheckings,
} from './styles';

export default function Checkin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.checkin.loading);
  const numberCheckins = useSelector(state => state.checkin.numberCheckins);

  function parseData(allChecks) {
    if (allChecks) {
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
    return [];
  }

  const allCheckins = useSelector(state =>
    parseData(state.checkin.allCheckins)
  );

  useEffect(() => {
    async function getCheckings() {
      const userId = await AsyncStorage.getItem('userId');
      dispatch(loadCheckingsRequest(userId));
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
        {loading ? <LoadingCheckings>Carregando...</LoadingCheckings> : null}
        <Button onPress={() => handleCreateCheckin()} loading={false}>
          Novo check-in
        </Button>
        <NumberCheckins>
          Checkins nos últimos 7 dias:{' '}
          <NumberBold>{numberCheckins} de 5.</NumberBold>
        </NumberCheckins>
        <List
          data={allCheckins}
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
