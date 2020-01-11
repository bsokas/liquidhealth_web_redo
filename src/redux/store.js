import { createStore } from 'redux';
import { CHANGE_CLICKSTATE } from './actionTypes'

const actions = (state = [], action) => {
  switch(action.type) {
    case CHANGE_CLICKSTATE:
      const newClickState = !state.clickstate;
      return Object.assign({}, state, { clickstate: newClickState });
    default:
      return state;
  }
}

export default createStore(actions, { clickstate: false });
