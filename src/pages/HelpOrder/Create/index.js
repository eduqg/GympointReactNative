import React, { useState } from 'react';
import { Text } from 'react-native';
import Button from '~/components/Button';
// import api from '~/services/api';

import Background from '~/components/Background';

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
  const [question, setQuestion] = useState('');

  function handleCreateHelp() { }
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
