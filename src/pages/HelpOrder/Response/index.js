import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Background from '~/components/Background';

import {
  Container,
  QuestionCard,
  QuestionHeader,
  QuestionHeaderText,
  QuestionHeaderDate,
  QuestionContentTitle,
  QuestionContentText,
  QuestionText,
} from './styles';
import {
  Bar,
  BarImage,
  BarButton,
  BarText,
  IconLeftButton,
  IconLeft,
} from '~/styles/HeaderStyle';

import headerlogo from '~/assets/halter.png';

export default function HelpOrderResponse({ navigation }) {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    const item = navigation.getParam('item');
    setQuestion(item);
  }, []); // eslint-disable-line

  return (
    <Background>
      <Container>
        <QuestionCard>
          <QuestionHeader>
            <QuestionHeaderText>Pergunta</QuestionHeaderText>
            <QuestionHeaderDate>{question.formated}</QuestionHeaderDate>
          </QuestionHeader>
          <QuestionText>{question.question}</QuestionText>
          <QuestionContentTitle>Resposta</QuestionContentTitle>
          <QuestionContentText>
            {question.answer || 'Sem resposta'}{' '}
          </QuestionContentText>
        </QuestionCard>
      </Container>
    </Background>
  );
}

HelpOrderResponse.navigationOptions = ({ navigation }) => ({
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

HelpOrderResponse.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
