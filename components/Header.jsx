import React, {Component, useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import {Button, TextField, Toolbar, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import * as SettingsActions from '../actions/settings';
import {initialState as settingsInitialState} from '../reducers/settings';

const replaceAt = function(source, index, replacement) {
  if (index >= source.length) {
    return source.valueOf();
  }

  return source.substring(0, index) + replacement + source.substring(index + 1);
}


const defaultStyle = {
  marginLeft: 20
};

const useStyles = makeStyles(()=>({
  settingsInput: {
    fontSize: '20px',
    color: 'white',
    width: '300px',
    '&::before': {
      borderBottom: '1px solid rgba(255, 255, 255, 0.42)',
    },
    '&:hover::before': {
      borderBottom: '1px solid white !important',
    }
  },
  settingsField: {
    marginLeft: '20px',
  },
  settingsString: {
    fontSize: '20px',
    color: 'white',
    marginLeft: '20px',
  }
}));

const Header = (props) => {
  const settingsString = Object.keys(props.settings).sort((a, b) => Number(a) > Number(b)).map(el => props.settings[el]).join('');
  const classes = useStyles();
  const [customValue, setCustomValue] = useState('');
  const onChangeHandler = (e) => {
    let value = `${e.target.value}`;
    if(value.length > 6){
      value = replaceAt(value, 6, `${settingsInitialState[7]}`);
    }
    if(value.length > 11){
      value = replaceAt(value, 11, `${settingsInitialState[12]}`);
    }
    if(value.length > 22){
      value = replaceAt(value, 22, `${settingsInitialState[23]}`);
    }
    if(e.target.value.length > 23){
      value = replaceAt(value, 23, `${settingsInitialState[24]}`);
    }
    if(e.target.value.length > 24){
      value = replaceAt(value, 24, `${settingsInitialState[25]}`);
    }
    setCustomValue(value);
    if(value.length === 25){
      const dictValue = {};
      for(let i=1; i<=25; i++){
        dictValue[i]=value[i-1];
      }
      props.actions.changeSettings({ value: dictValue });
      setCustomValue('');
    }
  };

  const reset = (e) => {
    props.actions.resetSettings();
    setCustomValue('');
  }

  return (
    <header className="header">
        <AppBar position="fixed" square >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            style={defaultStyle}
          >
            FindMe настройки
          </Typography>
          <Typography className={classes.settingsString}>{settingsString}</Typography>
          <TextField
            className={classes.settingsField}
            InputProps = {{
              className: classes.settingsInput
            }}
            value={customValue}
            onChange={onChangeHandler}
            placeholder={"Введите свое значение"}
          />
          <Button onClick={reset} color="inherit" className={classes.settingsField}>Сброс параметров</Button>
        </Toolbar>
        </AppBar>
    </header>
  );
}

Header.propTypes = {
    settings: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    return {
      settings: state.settings
    };
  }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SettingsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
