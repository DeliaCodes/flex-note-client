import {ADD_NOTE } from "./actions";

const initialState ={
  notes: []
}

export const crudReducer = (state=initialState, action) => {
  if (action.type === ADD_NOTE) {
    return Object.assign({}, state, {
notes: [...state.notes, action.note]
    });
  }
  return state;
};