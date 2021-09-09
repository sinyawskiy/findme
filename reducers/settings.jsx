import {CHANGE_SETTING, CHANGE_SETTINGS, RESET_SETTINGS} from '../constants/ActionTypes';

export const initialState = {
  1:0,
  2:0,
  3:2,
  4:5,
  5:5,
  6:6,
  7:0,
  8:0,
  9:3,
  10:1,
  11:4,
  12:1,
  13:1,
  14:1,
  15:1,
  16:5,
  17:0,
  18:0,
  19:1,
  20:0,
  21:0,
  22:1,
  23:0, // reserved
  24:0, // reserved
  25:0 // reserved
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SETTING:
      return {...state,
        [Number(action.payload.id)]: Number(action.payload.value),
      };
    case CHANGE_SETTINGS:
      return {...action.payload.value };
    case RESET_SETTINGS:
      return {...initialState};
    default:
      return state;
    }
}
