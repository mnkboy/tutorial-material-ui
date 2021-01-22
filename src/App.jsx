import { ThemeProvider } from '@material-ui/core/styles'
import { Fragment } from 'react';
import theme from './temaConfig'
import Navbar from './components/Navbar';
import Listas from './components/Listas';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Listas />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
