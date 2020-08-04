import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';

import CustomizedTable from './components/CustomizedTable';
import UserStore from './store';

import { infoTableStyle } from '../../utils/AppMakeStyle';

function InfoTable() {
  const classes = infoTableStyle();

  useEffect(() => {
    UserStore.getUserList();
  });

  return (
    <Paper className={classes.root}>
      <CustomizedTable />
    </Paper >
  );
}

export default InfoTable;
