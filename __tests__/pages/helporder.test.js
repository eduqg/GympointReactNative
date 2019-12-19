import React from 'react';
import { render } from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { allHelps, userHelps } from '../../__mocks__/helporder/list';
import HelpOrderList from '~/pages/HelpOrder/List';

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

const store = mockStore({
  helporder: {
    allHelporders: userHelps,
    loading: false,
    error: '',
  },
});

describe('HelpOrder', () => {
  it('should render Help Order List', () => {
    const navigation = { navigate: jest.fn() };

    const { getByText } = render(
      <Provider store={store}>
        <HelpOrderList navigation={navigation} />
      </Provider>
    );

    expect(getByText('Olá como faço para ficar grandão?')).toBeTruthy();
    expect(getByText('Olá, eu já estou giga?')).toBeTruthy();
  });
});
