import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import ReactGA from 'react-ga';
import routes, { renderRoutes } from './router';
import { SnackbarProvider } from 'notistack';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import ScrollToTop from './utils/ScrollToTop';

import { AuthProvider } from './contexts/Auth0Context';

import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@material-ui/core';

const history = createBrowserHistory();


// history.listen((location) => {
//   ReactGA.initialize('UA-194169543-1');
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname);
// });

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarProvider
          maxSnack={6}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Router history={history}>
            <ScrollToTop />
            <CssBaseline />
            <AuthProvider>{renderRoutes(routes)}</AuthProvider>
          </Router>
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
