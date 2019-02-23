import {crudReducer} from "../reducer"
import {addNote } from "../actions";

describe('Crud Reducer', () => {

  it('should add a note', () => {
    const item = {
        text: "Here I am"
      }
      let state = {
        notes: [{
          id: 7,
          title: "Your Testing Aeneid ",
          text: `Vous quoque litoribus nostris, Aeneia nutrix,
      aeternam moriens famam, Caieta, dedisti;`
        }]
      }
const testingState = crudReducer(state, addNote(item));
console.log('testing state', testingState);
expect(testingState.notes).toContain(item);
});
})