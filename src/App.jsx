import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { Icon, IconButton, Typography } from '@material-ui/core'
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

      <Typography variant="h1" color="initial">
        Hola tarolas como estas ?
      </Typography>

      <Typography variant="body1" color="secondary" align="center" paragraph> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi error molestiae odio nulla! Perspiciatis vitae adipisci, voluptatem nulla eaque tenetur itaque culpa velit natus libero excepturi vero unde beatae?</Typography>
      <Typography variant="body1" color="primary" align="center" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi error molestiae odio nulla! Perspiciatis vitae adipisci, voluptatem nulla eaque tenetur itaque culpa velit natus libero excepturi vero unde beatae?
      </Typography>
      <Typography variant="body1" color="primary" align="center" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi error molestiae odio nulla! Perspiciatis vitae adipisci, voluptatem nulla eaque tenetur itaque culpa velit natus libero excepturi vero unde beatae?
      </Typography>
    </Fragment>

  );
}

export default App;
