import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const QuestionCard = styled.View`
  background: #fff;
  margin-top: 32;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 5;
  padding-vertical: 20;
  padding-horizontal: 20;
  width: 100%;
  max-width: 300;
`;

export const QuestionHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const QuestionHeaderText = styled.Text`
  text-transform: uppercase;
  color: #333;
  font-weight: bold;
  font-size: 16;
`;
export const QuestionHeaderDate = styled.Text`
  color: rgba(0, 0, 0, 0.4);
`;
export const QuestionText = styled.Text`
  margin-top: 24;
  color: rgba(0, 0, 0, 0.4);
`;

export const QuestionContentTitle = styled.Text`
  text-transform: uppercase;
  color: #333;
  font-weight: bold;
  font-size: 16;
  margin-top: 24;
`;

export const QuestionContentText = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  margin-top: 24;
`;
