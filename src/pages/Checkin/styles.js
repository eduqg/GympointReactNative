import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0, marginTop: 16 },
})``;

export const CheckBar = styled.View`
  background: #fff;
  flex-direction: row;
  width: ${Dimensions.get('window').width * 0.9};
  min-width: 240;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 12;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 4;
  padding-vertical: 12;
  padding-horizontal: 8;
`;

export const CheckNumber = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const CheckDate = styled.Text`
  color: rgba(0, 0, 0, 0.4);
`;

export const NumberCheckins = styled.Text`
  margin-top: 10;
  color: rgba(0, 0, 0, 0.3);
  font-size: 14;
`;

export const NumberBold = styled.Text`
  color: #f84e62;
  font-size: 16;
  font-weight: bold;
`;

export const LoadingCheckings = styled.Text`
  margin-top: 10;
  margin-bottom: 10;
  color: rgba(0, 0, 0, 0.3);
  font-size: 14;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
