import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "./actions";

const initialState ={
  notes: [],
  navUrl: "/login",
  navName: "Login",
  notes: [{
    id: 1,
    title: "Today's Aeneid Reading",
    text: `Tu quoque litoribus nostris, Aeneia nutrix,
aeternam moriens famam, Caieta, dedisti;
et nunc servat honos sedem tuus, ossaque nomen
Hesperia in magna, si qua est ea gloria, signat.`
  }]
}

// test me
const updateObjectInArray = (array, noteToUpdate) => {
  return array.map((item, index) => {
    if (item.id === noteToUpdate.id) {
      return {
        ...item,
      ...noteToUpdate,
      }
    }
    return item
  })
}

function removeItem(array, itemToDelete ) {
  return array.filter((item) => item.id !== itemToDelete.id)
}

export const crudReducer = (state=initialState, action) => {
  if (action.type === ADD_NOTE) {
    console.log('add state', state);
    return Object.assign({}, state, {
notes: [...state.notes, action.note]
    });
  }

  // figure out how to hook out
  else if (action.type === UPDATE_NOTE) {
    return Object.assign({}, state, {
      notes: updateObjectInArray(state.notes, action.note)
    })
  }

  else if (action.type === DELETE_NOTE) {
    return Object.assign({}, state, {
      notes: removeItem(state.notes, action.note)
    })
  }
  return state;
};