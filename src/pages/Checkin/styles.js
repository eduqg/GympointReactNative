import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const CheckBar = styled.View`
  background: #fff;
  flex-direction: row;
  width: 100%;
  min-width: 240;
  justify-content: space-between;
  text-align: center;
  margin-top: 12;
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
