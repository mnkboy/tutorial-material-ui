import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button'

function App() {
  return (
    <Fragment>
      <Button color="secondary">
        Color
      </Button>
      <Button
        color="primary"
        variant="contained"
      >
        Color
      </Button>
      <Button
        color="primary"
        variant="contained"
        href="https://google.com.mx"
      >
        Color
      </Button>
      <Button
        color="primary"
        variant="contained"
        fullWidth
      >
        Color
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="small"
      >
        Color
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="large"
      >
        Color
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="medium"
      >
        Color
      </Button>
    </Fragment>

  );
}

export default App;
