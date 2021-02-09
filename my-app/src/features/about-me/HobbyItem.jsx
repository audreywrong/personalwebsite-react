import React from 'react';
import './AboutMe.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const HobbyItem = props => (
  <Grid item xs={12} sm={6} className="hobby">
    <Paper>
      <Grid container>
        <Grid item xs={3}>
          <img src={props.imgSource} alt={props.imgAltText} className="hobby-image" />
        </Grid>
        <Grid item xs={9}>
          <p>{props.hobbyText}</p>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);

export default HobbyItem;
