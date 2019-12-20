import React from 'react';
import { render } from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mockedCheckins from '../../__mocks__/checkin/list';

import Checkin from '~/pages/Checkin';

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

const store = mockStore({
  checkin: {
    allCheckins: mockedCheckins,
    numberCheckins: 4,
    loading: false,
    error: '',
  },
});

const navigation = {
  navigate: jest.fn(),
  getParam: userId => {
    return 138;
  },
};

describe('Checkin', () => {
  it('should render Checkin page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Checkin navigation={navigation} />
      </Provider>
    );

    expect(getByText('Novo check-in')).toBeTruthy();
  });

  it('should load checkins', () => {
    const { getByText, findByText } = render(
      <Provider store={store}>
        <Checkin navigation={navigation} />
      </Provider>
    );

    expect(getByText('Check-in #3')).toBeTruthy();
    expect(findByText('na última quarta-feira às 13:06')).toBeTruthy();
  });
});
