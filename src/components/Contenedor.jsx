import React, { Fragment } from 'react'
import { makeStyles, Toolbar } from '@material-ui/core';
import Navbar from './Navbar';
import Cajon from './Cajon';

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}))
const Contenedor = () => {
    const clases = estilos()
    return (
        <Fragment>
            <div className={clases.root}>
                <Navbar />
                <div className={clases.content}>
                    <div className={clases.toolbar}></div>{/* //Este es para que pueda hacer espacio y el navbar no monte el contenido abajo */}
                    <h1>Contenedor</h1>
                </div>
                <Cajon />
            </div>

        </Fragment >
    )
}

export default Contenedor
