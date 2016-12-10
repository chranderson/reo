import * as types from './action-types';

export function getTime() {
  const today = new Date();
  return {
    type: types.GET_TIME,
    currentTime: today.toLocaleTimeString()
  };
}
