import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, loading, theme = 'dark', ...rest }) {
  return (
    <Container {...rest} theme={theme}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
          <View>{children}</View>
        )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  loading: PropTypes.bool,
  theme: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  theme: 'dark',
};
