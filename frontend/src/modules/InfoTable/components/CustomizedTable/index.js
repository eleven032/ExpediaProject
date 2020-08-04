import React from 'react';

import MaterialTable from 'material-table';
import tableIcons from '../../../../utils/TableIcons';

function CustomizedTable({ data }) {
  return <MaterialTable
    title="Example"
    icons={tableIcons}
    columns={[
      { title: 'Ttile', field: 'title' },
      { title: 'Name', field: 'name' },
      { title: 'Age', field: 'age' },
      { title: 'Favorite Flag', field: 'favoriteFlag' },
      { title: 'Contact Detail', field: 'contactDetail' },
    ]}
    data={[
      { title: 'Mrs', name: 'Baran', age: 20, favoriteFlag: 2, contactDetail: 3 }
    ]}
    options={{
      search: true
    }}
  />
}

export default CustomizedTable;
