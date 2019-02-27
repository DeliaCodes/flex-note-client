import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, ADD_TEMPLATE, UPDATE_TEMPLATE, DELETE_TEMPLATE, NAV_LOGIN, NAV_LOGOUT } from "./actions/actions";
import { SET_AUTH_TOKEN, CLEAR_AUTH_TOKEN, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from "./actions/auth";

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

const authInitialState = {
  authToken: null, // NB from notes authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null
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

export const authReducer = (state = authInitialState, action) => {
  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === CLEAR_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    });
  } else if (action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    });
  } else if (action.type === AUTH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  return state
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
