import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: 1, borderColor: '#d9d9d9' }}>
      <ListItem>
        <ListItemText primary="Mardi 11 Janvier 2021" secondary={<React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Départ : Rue du Panier Fleuri, Deux-Sèvres<br />
                Arrivée : Chemin du Chaillot, Deux-Sèvres
              </Typography>
            </React.Fragment>} />
      </ListItem>
      <Divider/>
    </List>
  );
}
