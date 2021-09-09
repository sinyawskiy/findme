import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


// {
//   id: 10,
//     label: 'Параметр 10 (разряд батарей)',
//   type: formTypes.BOOLEAN,
//   values: [
//   [false, 0, 'нет уведомления'],
//   [true, 1, 'есть уведомление']
// ],
//   helpText: 'наличие SMS-уведомления о разряде батареи'
// },

const useStyles = makeStyles(()=>({
  formGroup: {
    padding: '0 10px',
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

export default function SwitchControl({id, label, falseValue, trueValue, helpText, currentValue=0, disabled, onChange}) {
  const handleChange = (event) => {
    onChange({
      id, value: trueValue[0] === Number(currentValue) ? falseValue[0]: trueValue[0]
    })
  };

  const classes = useStyles();

  return (
    <React.Fragment>
    <Typography className={classes.label}>{ id }. { label }</Typography>
    <FormControl component="fieldset">
      <FormGroup className={classes.formGroup}>
        <FormControlLabel
          control={
            <React.Fragment><Typography variant={'body1'} className={classes.selectItem}>{ falseValue[1] }</Typography><Switch checked={trueValue[0] === Number(currentValue)} onChange={handleChange} name="gilad" /></React.Fragment>
          }
          label={
            <span className={classes.selectItem}>{trueValue[1]}</span>
          }
          disabled={disabled}
        />
      </FormGroup>
      <FormHelperText className={classes.help}>{helpText}</FormHelperText>
    </FormControl>
    </React.Fragment>
  )
}
