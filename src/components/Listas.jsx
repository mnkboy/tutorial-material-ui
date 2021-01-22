import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import DeckIcon from '@material-ui/icons/Deck';

const Listas = () => {
    return (
        <List component="nav">
            <ListItem button>
                <ListItemIcon>
                    <CloudQueueIcon />
                </ListItemIcon>
                <ListItemText primary='Cloud Computing' />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DeckIcon />
                </ListItemIcon>
                <ListItemText primary='Sit and rest' />
            </ListItem>
            <Divider />
        </List>
    );
}

export default Listas