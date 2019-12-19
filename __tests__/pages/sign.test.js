import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import mockStore from 'redux-mock-store';

import Sign from '~/pages/Sign';

describe('Sign', () => {
  it('should render page', () => {
    const store = mockStore({
      rehydrated: false,
    });
    const navigation = { navigate: jest.fn() };

    const { getByText, getAllByTestId } = render(
      <Sign navigation={navigation} />
    );

    expect(getByText('Entrar no sistema')).toBeTruthy();
  });
});
