import { ThemeProvider } from '@material-ui/core/styles'
import { Fragment } from 'react';
import theme from './temaConfig'
import Navbar from './components/Navbar';
import Listas from './components/Listas';
import Oculto from './components/Oculto';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Listas />
        <Oculto />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
