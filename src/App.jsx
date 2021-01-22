import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import { Fragment } from 'react';
import theme from './temaConfig'
import Contenedor from './components/Contenedor';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Contenedor />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
