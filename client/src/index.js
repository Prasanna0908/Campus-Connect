import './style.css';
import './config/moment';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './components/App/Container';
import { ChakraProvider } from '@chakra-ui/react'
import * as serviceWorker from './serviceWorker';





ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
    <AppContainer />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
