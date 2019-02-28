import { crudReducer } from "../reducer"
import { addNote, updateNote, deleteNote } from "../actions/actions";

describe('Crud Reducer', () => {

  it('should add a note', () => {
    const item = {
      text: "Here I am"
    }
    let state = {
      notes: [{
        id: 7,
        text: `Vous quoque litoribus nostris, Aeneia nutrix,
      aeternam moriens famam, Caieta, dedisti;`
      }]
    }
    const testingState = crudReducer(state, addNote(item));
    // console.log('testing state', testingState);
    expect(testingState.notes).toContain(item);
  });
  it('should update a note', () => {
    const updatedItem = {
      id: 5,
      title: "Hark Here I come",
      text: "Aeneas et Troiae"
    }
    let state = {
      notes: [{
        id: 7,
        text: `Vous quoque litoribus nostris, Aeneia nutrix,
    aeternam moriens famam, Caieta, dedisti;`
      }, {
        id: 5,
        text: "jingle jingle",
      }

      ]
    }
    const testingState = crudReducer(state, updateNote(updatedItem));
    // console.log('testing state', testingState);
    expect(testingState.notes).not.toContain(state.notes[1])
    expect(testingState.notes).toContainEqual(updatedItem);
  });
  it('should delete a note', () => {
    const itemToDelete = {
      id: 5,
      text: "jingle jingle",
    }
    let state = {
      notes: [{
        id: 7,
        text: `Vous quoque litoribus nostris, Aeneia nutrix,
    aeternam moriens famam, Caieta, dedisti;`
      }, {
        id: 5,
        text: "jingle jingle",
      }

      ]
    }
    const testingState = crudReducer(state, deleteNote(itemToDelete));
    // console.log('testing state', testingState);
    expect(testingState.notes).not.toContain(state.notes[1])
    expect(testingState.notes).toContainEqual(state.notes[0]);
  });
})
