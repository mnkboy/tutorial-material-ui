import React, { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
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
