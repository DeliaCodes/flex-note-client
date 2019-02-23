import {
  ADD_NOTE, addNote, UPDATE_NOTE, updateNote, DELETE_NOTE, deleteNote,
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