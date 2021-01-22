import { ThemeProvider } from '@material-ui/core/styles'
import { Fragment } from 'react';
import theme from './temaConfig'
import Navbar from './components/Navbar';
import { makeStyles, Typography, Button } from '@material-ui/core';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Button variant="contained" color="secondary">
          boton
        </Button>
        <Button variant="contained" color="primary">
          boton
        </Button>
        <Typography variant="h1" color="initial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit explicabo illo distinctio eos sint id aspernatur iusto cupiditate, possimus eveniet. Veniam optio et aperiam ex quae, sequi soluta distinctio.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores nisi voluptatibus quaerat totam. Perferendis rem excepturi, quo corrupti accusantium, consequatur explicabo repellendus cum amet id ab omnis necessitatibus expedita.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos error commodi expedita suscipit, eum dolorem libero, rerum unde, dolor nobis aspernatur porro vel. Voluptates eaque totam adipisci quasi alias ex?
        </Typography>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
