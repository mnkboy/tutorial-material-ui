import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { Icon, IconButton } from '@material-ui/core'
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

      <DeleteIcon color="primary" />

      <Icon>
        room
      </Icon>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Icon >room</Icon>}
      >
        Delete
      </Button>
      <IconButton
        aria-label="delete"
      >
        <DeleteIcon
          color="primary"
        />

      </IconButton>
    </Fragment>

  );
}

export default App;
