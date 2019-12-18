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

HelpOrderResponse.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
