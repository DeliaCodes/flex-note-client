export const ADD_NOTE = "ADD_NOTE";
export const addNote = note => ({
  type: ADD_NOTE,
  note
})

export const UPDATE_NOTE = "UPDATE_NOTE";
export const updateNote = note => ({
  type: UPDATE_NOTE,
  note
})

export const DELETE_NOTE = "DELETE_NOTE";
export const deleteNote = note => ({
  type: DELETE_NOTE,
  note
})

export const NAV_LOGIN = "NAV_LOGIN";
export const loginNav = () => ({
  type: NAV_LOGIN
})

export const NAV_LOGOUT = "NAV_LOGOUT";
export const logoutNav = () => ({
  type: NAV_LOGOUT
})