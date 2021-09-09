import * as types from '../constants/ActionTypes';

export function changeSetting(payload) {
  return { type: types.CHANGE_SETTING, payload };
}

export function changeSettings(payload) {
  return { type: types.CHANGE_SETTINGS, payload };
}

export function resetSettings() {
  return { type: types.RESET_SETTINGS };
}
