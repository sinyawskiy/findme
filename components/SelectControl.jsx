import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    fontSize: '20px',
    padding: '30px 0 0px'
  },
  selectItem: {
    fontSize: '15px'
  },
  help: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '15px',
  }
}));

export default function SelectControl({label, disabled=false, values, helpText, onChange, currentValue=0, id}) {
  const classes = useStyles();

  return (
    <div style={{width: '100%'}}>
      <Typography className={classes.label}>{ id }. { label }</Typography>
    <FormControl className={classes.formControl}>
      <Select
        fullWidth
        labelId="label"
        id="select"
        value={currentValue}
        onChange={(e)=>onChange({ id, value: e.target.value })}
        disabled={disabled}
      >
        {
          values.map((el) => (
            <MenuItem value={el[0]} className={classes.selectItem} disabled={typeof el[3] !== 'undefined' ? el[3] : false }>{el[1]}</MenuItem>
          ))
        }
      </Select>
      { !!helpText && (
          <FormHelperText className={classes.help}>{ helpText }</FormHelperText>
        )
      }
    </FormControl>
    </div>
  )
}
