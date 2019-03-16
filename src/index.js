import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import rootSaga from './redux/sagas';
import store from './redux/store';

store.runSaga(rootSaga);
ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);