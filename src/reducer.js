import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "./actions";

const initialState ={
  notes: [],
  navUrl: "/login",
  navName: "Login",
  posts: {
    id: 1,
    title: "Today's Aeneid Reading",
    text: `Tu quoque litoribus nostris, Aeneia nutrix,
aeternam moriens famam, Caieta, dedisti;
et nunc servat honos sedem tuus, ossaque nomen
Hesperia in magna, si qua est ea gloria, signat.

At pius exsequiis Aeneas rite solutis,               
aggere composito tumuli, postquam alta quierunt
aequora, tendit iter velis portumque relinquit.
aspirant aurae in noctem nec candida cursus
luna negat, splendet tremulo sub lumine pontus.
proxima Circaeae raduntur litora terrae,   
dives inaccessos ubi Solis filia lucos
adsiduo resonat cantu, tectisque superbis
urit odoratam nocturna in lumina cedrum
arguto tenuis percurrens pectine telas.
hinc exaudiri gemitus iraeque leonum
vincla recusantum et sera sub nocte rudentum,
saetigerique sues atque in praesepibus ursi
saevire ac formae magnorum ululare luporum,
quos hominum ex facie dea saeva potentibus herbis
induerat Circe in vultus ac terga ferarum.
quae ne monstra pii paterentur talia Troes
delati in portus neu litora dira subirent,
Neptunus ventis implevit vela secundis,
atque fugam dedit et praeter vada fervida vexit.`
  }
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