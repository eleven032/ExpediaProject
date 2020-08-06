import React from 'react';
import CustomizedTable from './components/CustomizedTable';
import { Paper } from '@material-ui/core';

import { infoTableStyle } from '../../utils/AppMakeStyle';

function InfoTable() {
  const classes = infoTableStyle();

  return (
    <Paper className={classes.root}>
      <CustomizedTable />
    </Paper >
  );
}

export default InfoTable;
