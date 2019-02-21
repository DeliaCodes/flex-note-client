import {createStore, combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import {crudReducer} from "./reducer"


export default createStore(
    combineReducers({
        form: formReducer,
        crud: crudReducer,
    })
);


