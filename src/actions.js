export const ADD_TEMPLATE = "ADD_TEMPLATE";
export const addTemplate = template => ({
  type: ADD_TEMPLATE,
  template
})

export const UPDATE_TEMPLATE = "UPDATE_TEMPLATE";
export const updateTemplate = template => ({
  type: UPDATE_TEMPLATE,
  template
})

export const DELETE_TEMPLATE = "DELETE_TEMPLATE";
export const deleteTemplate = template => ({
  type: UPDATE_TEMPLATE,
  template
})

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
