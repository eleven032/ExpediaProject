import React from 'react';
import {
  Grid,
  CssBaseline,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';

import { homePageStyle } from '../../utils/AppMakeStyle';

function Home({ history }) {
  const classes = homePageStyle();

  return <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Administration System
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          style={{ marginTop: 30 }}
          onClick={() => { history.push("/infoTable") }}
        >
          Log In
        </Button>
      </div>
    </Grid>
  </Grid>;
}

export default Home;
