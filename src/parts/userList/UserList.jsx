/**
 * Title: User List
 * Description: User List
 * Author: Nasir Ahmed
 * Date: 07-December-2021
 * Modified: 07-December-2021
 * */

import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rows from '../../fake-data/userList';
import classes from './UserList.module.css';

const UserList = function () {
  const [state, setState] = useState(rows);

  const handleDelete = (id) => {
    setState(rows.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'username',
      headerName: 'User name',
      width: 200,
      renderCell: (params) => (
        <div className={classes.userListUser}>
          <img
            className={classes.userListImage}
            src={params.row.avatar}
            alt={params.row.username}
          />
          {params.row.username}
        </div>
      )
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      center: true
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200
    },
    {
      field: 'action',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      renderCell: (param) => (
        <>
          <Link to={`/users/${param.row.id}`}>
            <IconButton aria-label="edit">
              <EditOutlined color="success" />
            </IconButton>
          </Link>

          <IconButton aria-label="delete" onClick={() => handleDelete(param.row.id)}>
            <DeleteOutline color="error" />
          </IconButton>
        </>
      )
    }
  ];
  return (
    <div className={classes.userList}>
      <DataGrid
        autoPageSize
        rows={state}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
