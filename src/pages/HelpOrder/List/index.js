import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { loadHelpordersRequest } from '~/store/modules/helporder/actions';

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
  ButtonText,
} from './styles';

export default function HelpOrderList({ navigation }) {
  const dispatch = useDispatch();

  function parseData(allHelporders) {
    const allNewDates = allHelporders.map(item => {
      const formated = formatRelative(parseISO(item.updatedAt), new Date(), {
        locale: pt,
        addSuffix: true,
        includeSeconds: true,
      });
      return { ...item, formated };
    });
    return allNewDates;
  }

  const helps = useSelector(state => parseData(state.helporder.allHelporders));

  useEffect(() => {
    async function getHelporders() {
      await AsyncStorage.getItem('userId').then(userId => {
        if (userId) {
          dispatch(loadHelpordersRequest(userId));
        }
      });
    }
    getHelporders();
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
          <ButtonText>Novo pedido de auxílio</ButtonText>
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

        <Button onPress={logout} loading={false} theme="outline" width={60}>
          <Icon name="exit-to-app" size={24} color="#c7c7c7" />
        </Button>
      </Container>
    </Background>
  );
}

HelpOrderList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
