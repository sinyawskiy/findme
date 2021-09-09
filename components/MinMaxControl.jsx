import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  margin: {
    height: theme.spacing(3),
  },
  label: {
    fontSize: '20px',
    padding: '30px 0 0px'
  },
  sliderRoot: {
    margin: '0 15px',
  },
  help: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '15px',
  }
}));

function valuetext(value) {
  return `${value}`;
}

// {
//   id: 5,
//     label: 'Параметр 5 (время аудиоконтроля (в минутах))',
//   type: formTypes.MINMAX,
//   min: 0,
//   max: 9,
//   helpText: 'максимальное время аудиоконтроля. При установке параметра в 0 время аудиоконтроля не ограничено'
// },

export default function MinMaxControl({ onChange, disabled=false, id, label, min, max, helpText, currentValue=0 }) {
  const classes = useStyles();
  const marks =  [];
  for(let i=min;i<=max;i++){
    marks.push({
      value: i,
      label: `${i}`,
    })
  }
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom className={classes.label}>
        { id }. { label }
      </Typography>
      <div className={classes.sliderRoot}>
      <Slider
        disabled={disabled}
        // defaultValue={currentValue}
        value={currentValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={marks}
        valueLabelDisplay="off"
        min={min}
        max={max}
        onChange={(e, value)=>onChange({id, value})}
      />
      </div>
      {
        !!helpText && (
        <Typography className={classes.help}>
          {helpText}
        </Typography>
        )
      }
    </div>
  );
}
