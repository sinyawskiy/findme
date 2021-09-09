import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as SettingsActions from '../actions/settings';
// import {MuiThemeProvider} from '@material-ui/core';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import theme from '../src/material_ui_raw_theme_file'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    paddingTop: '150px',
  }

}));

const App = (props) => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Header />
        <MainSection />
      </div>
  );
}

export default App;
