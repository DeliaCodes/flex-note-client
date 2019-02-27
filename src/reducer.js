import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, ADD_TEMPLATE, UPDATE_TEMPLATE, DELETE_TEMPLATE, NAV_LOGIN, NAV_LOGOUT } from "./actions";

const initialState = {
  navUrl: "/login",
  navName: "Login",
  notes: [{
    id: 1,
    text: `Tu quoque litoribus nostris, Aeneia nutrix,
aeternam moriens famam, Caieta, dedisti;
et nunc servat honos sedem tuus, ossaque nomen
Hesperia in magna, si qua est ea gloria, signat.`,
    saveState: {}
  }],
  templates: [{
    templateState: {},
    name: ""
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

function removeItem(array, itemToDelete) {
  return array.filter((item) => item.id !== itemToDelete.id)
}
export const navReducer = (state = initialState, action) => {
  if (action.type === NAV_LOGIN) {
    return Object.assign({}, state, {
      navUrl: "/login",
      navName: "Login",
    })
  }

  else if (action.type === NAV_LOGOUT) {
    return Object.assign({}, state, {
      navUrl: "/",
      navName: "Logout",
    })
  }
  return state
}
export const crudReducer = (state = initialState, action) => {
  if (action.type === ADD_NOTE) {
    // console.log('add state', state);
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

  else if (action.type === ADD_TEMPLATE) {
    // console.log('add template', state);
    return Object.assign({}, state, {
      templates: [...state.templates, action.template]
    });
  }

  else if (action.type === UPDATE_TEMPLATE) {
    return Object.assign({}, state, {
      notes: updateObjectInArray(state.templates, action.template)
    })
  }

  else if (action.type === DELETE_TEMPLATE) {
    return Object.assign({}, state, {
      templates: removeItem(state.templates, action.template)
    })
  }
  return state;
};
