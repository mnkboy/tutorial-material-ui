import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { Icon, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
//Estilo personalizado
const useStyle = makeStyles({
  superstylo: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255,105,135,.3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
})
function App() {
  const clases = useStyle();
  return (
    <Fragment>
      <Button className={clases.superstylo} fullWidth>
        Color
      </Button>
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
