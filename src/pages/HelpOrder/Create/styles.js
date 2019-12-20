import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 16;
`;

export const InputText = styled(Input)`
  align-items: flex-start;

  background: #fff;
  height: 250;
  width: ${Dimensions.get('window').width * 0.9};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
