import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';
import Notebook from 'components/Notebook';
import './App.scss';
import NotFound from 'components/NotFound';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img
            height="100"
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/b/b2/Death_Note_Logo.svg/1280px-Death_Note_Logo.svg.png"
            alt="logo"
          />
        </header>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Notebook} />
            <Route exact path="/book" component={Notebook} />
            <Route default component={NotFound} />
            <Redirect to="/book" />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
