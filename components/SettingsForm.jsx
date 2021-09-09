import React from 'react';
import SwitchControl from './SwitchControl';
import MinMaxControl from './MinMaxControl';
import SelectControl from './SelectControl';
import ReserveControl from './ReserveControl';
import {settingsItems} from '../constants/settingsItems';
import {formTypes} from '../constants/formTypes';
import {Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as SettingsActions from '../actions/settings';

const formTypeToComponent = {
  [formTypes.SELECT]: SelectControl,
  [formTypes.MINMAX]: MinMaxControl,
  [formTypes.BOOLEAN]: SwitchControl,
  [formTypes.RESERVE]: ReserveControl,
};


const SettingsForm = (props) => {
  const onChange = (payload) => {
    props.actions.changeSetting(payload);
  };

  return (
    <React.Fragment>
      {
        settingsItems.sort((a, b) => a.id > b.id).map((el) => {
          const Component = formTypeToComponent[el.type];
          return (
            <Grid item xs={12}>
              <Component onChange={el.type === formTypes.RESERVE? null: onChange } { ...el} currentValue={el.type === formTypes.RESERVE? null:props.settings[el.id]}/>
            </Grid>
          );
        })
      }
    </React.Fragment>
  )
};


SettingsForm.propTypes = {
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
)(SettingsForm);
