import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2), /* <--- Punto de quiebre */
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {    /* <--- Punto de quiebre */
            width: `calc(100% - ${drawerWidth}px)`,
            margiLeft: drawerWidth
        }

    }

}))
const Navbar = (props) => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar}>
            <Toolbar >
                <IconButton
                    className={classes.menuButton}
                    color='inherit'
                    onClick={() => props.accionAbrir()}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    MDC Software
                </Typography>
                <Button color='inherit'>Login</Button>
                <Button color='inherit'>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
