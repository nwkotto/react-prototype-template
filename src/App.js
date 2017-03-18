import React from 'react';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './routes/reducer';

let store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;