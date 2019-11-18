import React from 'react';
// import './config/ReactotronConfig';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

// import { store, persistor } from './store';
import App from './App';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ff0000" />
      <App />
    </>
  );
}
