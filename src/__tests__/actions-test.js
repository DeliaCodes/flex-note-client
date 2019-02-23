import {
  ADD_NOTE, addNote, UPDATE_NOTE, updateNote, DELETE_NOTE, deleteNote, NAV_LOGIN, loginNav, NAV_LOGOUT, logoutNav
} from "../actions";

describe('Add Note Actions', () => {
  it('Should return an add action', () => {
    const item ={ title: 'Horatio', text: "My left foot"}
    const testAction = addNote(item);
    expect(testAction.type).toEqual(ADD_NOTE);
    expect(testAction.note).toEqual(item);
  })
})

describe('Update Note Actions', () => {
  it('Should return an update action', () => {
    const item ={ id: 3, title: 'Sea Captain', text: "Whales Ahoy"}
    const testAction = updateNote(item);
    expect(testAction.type).toEqual(UPDATE_NOTE);
    expect(testAction.note).toEqual(item);
  });
})


describe('Delete Note Actions', () => {
  it('Should return a delete action', () => {
    const item ={ id: 5, title: 'Romeo', text: "My bloody heart"}
    const testAction = deleteNote(item);
    expect(testAction.type).toEqual(DELETE_NOTE);
    expect(testAction.note).toEqual(item);
  })
})

describe('Log In Nav Action', () => {
  it('Should return a log in action', () => {
    const testAction = loginNav();
    expect(testAction.type).toEqual(NAV_LOGIN);
  });
})

describe('Log Out Nav Action', () => {
  it('Should return a log out action', () => {
    const testAction = logoutNav();
    expect(testAction.type).toEqual(NAV_LOGOUT);
  });
})