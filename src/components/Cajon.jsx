import React from 'react'

import { makeStyles, Drawer, Toolbar, Divider } from '@material-ui/core';
import Listas from './Listas';

const drawerWidth = 240;
const estilos = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,

    },
    toolbar: theme.mixins.toolbar
}))
const Cajon = () => {
    const clases = estilos()
    return (
        <div>
            <Drawer className={clases.drawer}
                variant="permanent"
                classes={{
                    paper: clases.drawerPaper,
                }}
                anchor='left'
            >
                <div className={clases.toolbar}></div>
                <Divider />
                <Listas />
            </Drawer>
        </div>
    )
}


export default Cajon