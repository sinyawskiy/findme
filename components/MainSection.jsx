import React, { Component } from 'react';
import SettingsForm from './SettingsForm';
import {Grid} from '@material-ui/core';

const defaultStyle = {
  // width: 300,
  marginLeft: '20px',
  marginRight: '20px',
  paddingTop: '80px',
  paddingBottom: '30px',
};


const MainSection = (props) => {
    return (
      <section className="main" style={defaultStyle}>
        <Grid container>
          <SettingsForm />
        </Grid>
      </section>
    );
}

export default MainSection;
