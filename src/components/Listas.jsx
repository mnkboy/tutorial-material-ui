import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import DeckIcon from '@material-ui/icons/Deck';

const Listas = () => {
    return (
        <List component="nav">
            <ListItem button>
                <ListItemIcon>
                    <CloudQueueIcon />
                    <ListItemText primary='Cloud Computing' />
                </ListItemIcon>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DeckIcon />
                    <ListItemText primary='Sit and rest' />
                </ListItemIcon>
            </ListItem>
        </List>
    );
}

export default Listas