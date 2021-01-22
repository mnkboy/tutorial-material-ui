import React from 'react'
import { withWidth, Typography, Hidden, Button } from '@material-ui/core';

const Oculto = (props) => {
    return (
        <div>
            <Typography variant='h6' color='initial'>
                Ancho: {props.width}
            </Typography>
            <Hidden xsDown mdDown>
                <Button variant="contained" color="primary">
                    xs
                </Button>
            </Hidden>
            <Hidden xsDown smDown>
                <Button variant="contained" color="primary">
                    sm
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button variant="contained" color="primary">
                    md
                </Button>
            </Hidden>
            <Hidden only='lg'>
                <Button variant="contained" color="primary">
                    lg
                </Button>
            </Hidden>
            <Hidden only={['lg', 'md']}>
                <Button variant="contained" color="primary">
                    lg md
                </Button>
            </Hidden>
            <Hidden smDown lgUp>
                <Button variant="contained" color="primary">
                    md secret
                </Button>
            </Hidden>

        </div>
    )
}

export default withWidth()(Oculto)
