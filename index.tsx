import App from './App';
import ReactDOM from 'react-dom';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { HelmetProvider } from 'react-helmet-async';
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";

import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';
import { Provider } from 'react-redux';
import store from 'src/store';

const renderApp = () => ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root')
);


UserService.initKeycloak(renderApp);
HttpService.configure();

//serviceWorkerRegistration.register();
