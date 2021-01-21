import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Fragment } from 'react';
import theme from './temaConfig'
function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Boton
        </Button>
        <Button variant="contained" color="secondary">
          Boton
        </Button>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
