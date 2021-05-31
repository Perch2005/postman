import React from 'react';
import ReactDOM from 'react-dom';
import App from './componenets/app';
import reportWebVitals from './reportWebVitals';
import AppService from './service/appService'
import {Provider} from 'react-redux'
import store from './store'
import ErrorBoundry from './componenets/error-boundry'
import {AppProvider} from './componenets/app-service-context'
const appService = new AppService()

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorBoundry>
        <AppProvider value = {appService}>
    <App />
    </AppProvider>
    </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
