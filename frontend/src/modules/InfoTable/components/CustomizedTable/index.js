import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../../../../utils/TableIcons';

function CustomizedTable({ data }) {
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
    data={data}
    options={{
      search: true
    }}
  />
}

export default CustomizedTable;
