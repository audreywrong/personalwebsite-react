import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './AboutMe.css';

const HobbyItem = props => (
  <Grid item xs={12} sm={6} className="hobby">
    <Paper>
      <Box m={2} p={2}>
        <Grid container>
          <Grid item xs={3}>
            <img src={props.imgSource} alt={props.imgAltText} className="hobby-image" />
          </Grid>
          <Grid item xs={9}>
            <p style={{marginLeft: '1.5rem'}}>{props.hobbyText}</p>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  </Grid>
);

export default HobbyItem;
