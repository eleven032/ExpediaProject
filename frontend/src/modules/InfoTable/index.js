import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

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
      <CustomizedTable data={toJS(UserStore.userList)} />
    </Paper >
  );
}

export default observer(InfoTable);
