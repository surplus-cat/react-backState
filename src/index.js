import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Page from './Page';
import store from './redux'
import ZHCH from 'antd/es/locale-provider/zh_CN'
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from 'antd';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={ZHCH}>
      <Page />
    </LocaleProvider>
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
