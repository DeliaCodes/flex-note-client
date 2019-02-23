import {
  ADD_NOTE, addNote
} from "../actions";

describe('Add Note Actions', () => {
  it('Should return an add action', () => {
    const item ={ title: 'Horatio', text: "My left foot"}
    const testAction = addNote(item);
    expect(testAction.type).toEqual(ADD_NOTE);
    expect(testAction.note).toEqual(item);
  })
})