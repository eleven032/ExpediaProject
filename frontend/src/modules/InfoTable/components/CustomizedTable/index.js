import React, { useEffect, useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import { TablePagination } from '@material-ui/core';
import MaterialTable from 'material-table';
import tableIcons from '../../../../utils/TableIcons';

import UserStore from '../../store';

function CustomizedTable() {
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    UserStore.getUserList(pageNumber, rowsPerPage);
  }, [pageNumber, rowsPerPage]);

  return <MaterialTable
    title="Contact List"
    icons={tableIcons}
    columns={[
      { title: 'ID', field: 'id' },
      { title: 'Ttile', field: 'title' },
      { title: 'Name', field: 'name' },
      { title: 'Age', field: 'age' },
      { title: 'Favorite Flag', field: 'favoriteFlag' },
      { title: 'Contact Detail', field: 'contactDetail' },
    ]}
    data={toJS(UserStore.userList)}
    options={{
      search: true,
      paging: true,
      pageSize: rowsPerPage,
    }}
    onChangeRowsPerPage={(pageSize) => {
      setRowsPerPage(pageSize);
    }}
    components={{
      Pagination: () => (
        <TablePagination
          count={100}
          page={pageNumber}
          onChangePage={(event, value) => {
            setPageNumber(value);
          }}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={(event) => {
            setRowsPerPage(parseInt(event.target.value, rowsPerPage));
            setPageNumber(0);
          }}
        />
      )
    }}
  />
}

export default observer(CustomizedTable);
