import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import theme from '../temaConfig';
import { IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
}))
const Navbar = () => {
    const classes = useStyles()
    return (
        <div>

            <AppBar color="primary">
                <Toolbar >
                    <IconButton className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        MDC Software
                    </Typography>
                    <Button >Login</Button>
                    <Button >Logout</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar
