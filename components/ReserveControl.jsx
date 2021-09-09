import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(()=>({
  formGroup: {
    padding: '0 10px',
  },
  label: {
    fontSize: '20px',
    padding: '30px 0 0px'
  },
}));

export default function ReserveControl({ id }) {
  const classes = useStyles();
  return (
    <Typography className={classes.label}>{ id }. Параметр зарезервирован</Typography>
  )
}
