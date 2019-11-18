// Para que ref funcione, vou utilizar o forwardRef
import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

// Este componente recebera props de styles
// E todas as outras propriedades que não são style, vou passar para TInput como ...rest
// eslint-disable-next-line react/prop-types
function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

// Com forwardRef, se uma ref for passada como parâmetro, automaticamente será
// Recebido como Input({styles, ...rest}, ref)
export default forwardRef(Input);
