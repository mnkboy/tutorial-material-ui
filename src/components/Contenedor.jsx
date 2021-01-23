import React, { useState } from 'react'
import { makeStyles, Hidden } from '@material-ui/core'
import Navbar from './Navbar';
import Cajon from './Cajon';
import Cajita from './Cajita';

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },

}))


const Contenedor = () => {
    const classes = estilos()
    const [abrir, setAbrir] = useState(false)
    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir} />
            <Hidden xsDown>
                <Cajon variant='permanent' open={true} />
            </Hidden>
            <Hidden smUp>
                <Cajon variant='temporary'
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className={classes.content}> {/* <- Aca es donde vamos a poner el contenido */}
                <div className={classes.toolbar}>
                </div> {/* Con este ya no se sobremonta el navbar */}
                <Cajita />
            </div>

        </div >
    )
}

export default Contenedor
